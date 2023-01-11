import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Pagination,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import TableSkeleton from "../common/TableSkeleton";

export default function MyTable({ DATA, isFetching }) {
  console.log("DATA", DATA);
  console.log("isFetching", isFetching);

  const isMobile = useMediaQuery("(max-width:600px)");
  const COLUMNS_COUNT = 3;
  return (
    <Box
      sx={{
        overflowX: isMobile ? "auto" : "unset",
        background: "transparent",
      }}
    >
      <Box
        aria-label="simple table"
        sx={{ minWidth: isMobile ? "400px" : "700px" }}
      >
        <>
          <Stack
            direction={"row"}
            sx={{ width: "100%", justifyContent: "space-between", px: 2 }}
          >
            <Typography variant="h6">ID</Typography>
            <Typography variant="h6">Title</Typography>
            <Typography variant="h6">Status</Typography>
          </Stack>
        </>
        {!isFetching ? (
          <>
            {DATA.map((row) => (
              <Stack
                direction={"row"}
                sx={{
                  width: "100%",
                  //   justifyContent: "space-between",
                  alignItems: "center",
                  my: 2,
                  px: 2,
                  py: 1,
                  background: "#fff",
                  borderRadius: "24px",
                }}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <>
                  <Typography
                    variant="h5"
                    sx={{
                      width: `calc(100% / ${COLUMNS_COUNT})`,
                      wordBreak: "break-all",
                      textAlign: "start",
                    }}
                  >
                    {row.id}
                  </Typography>
                </>

                <>
                  <Typography
                    sx={{
                      width: `calc(100% / ${COLUMNS_COUNT})`,
                      wordBreak: "break-all",
                      textAlign: "center",
                    }}
                    variant="h5"
                  >
                    {row.title.substring(0, 25)}
                  </Typography>
                </>

                <>
                  <Typography
                    sx={{
                      width: `calc(100% / ${COLUMNS_COUNT})`,
                      wordBreak: "break-all",
                      display: "flex",
                      justifyContent: "end",
                    }}
                    variant="h5"
                  >
                    <Typography
                      sx={{
                        width: `60px`,
                        background: !isFetching
                          ? row?.completed
                            ? "#a5d6a7"
                            : "#e57373"
                          : "",
                        borderRadius: "24px",
                      }}
                      variant="h5"
                    >
                      {row?.completed ? "Done" : "Pending"}
                    </Typography>
                  </Typography>
                </>
              </Stack>
            ))}
          </>
        ) : (
          <TableSkeleton COLUMNS_COUNT={3} />
        )}
      </Box>
    </Box>
  );
}
