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

export default function TableSkeleton({ COLUMNS }) {
  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const isMobile = useMediaQuery("(max-width:600px)");
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
            >
              {COLUMNS.map(() => (
                <>
                  <Typography
                    variant="h5"
                    sx={{
                      width: `calc(100% / ${COLUMNS.length})`,
                    }}
                  >
                    <Skeleton animation="wave" sx={{ width: "95%" }} />
                  </Typography>
                </>
              ))}
            </Stack>
          ))}
        </>
      </Box>
    </Box>
  );
}
