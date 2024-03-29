import * as React from "react";

import {
  Pagination,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import TableSkeleton from "../common/TableSkeleton";
import Modal from "../components/form/Modal";
import { useState } from "react";

export default function MyTable({ DATA, COLUMNS, isFetching }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const isMobile = useMediaQuery("(max-width:600px)");
  // const COLUMNS_COUNT = COLUMNS.length;
  const showRecord = (record) => {
    setModalData(record);
    setOpenModal(true);
  };
  return (
    <Box
      sx={{
        overflowX: isMobile ? "auto" : "unset",
        // display: "flex",
        // justifyContent: "center",
        py: 1,
        borderRadius: "10px",
        background: "antiquewhite",
        mx: 2,
      }}
    >
      <Box
        aria-label="simple table"
        sx={{
          overflowX: isMobile ? "auto" : "unset",
          minWidth: { xs: "500px", md: "700px" },
          // width: isMobile && "100%",
          mx: 1,
          maxHeight: { xs: "375px", sm: "100%" },
        }}
      >
        {/* //* Header */}
        <>
          <Stack
            direction={"row"}
            sx={{
              width: "100%",
              justifyContent: "space-between",
              px: 2,
            }}
          >
            {COLUMNS.map((column) => {
              return <Typography variant="h6">{column.title}</Typography>;
            })}
          </Stack>
        </>
        {/* //* Content */}
        {!isFetching ? (
          <>
            {DATA.map((row) => (
              <Stack
                direction={"row"}
                sx={{
                  width: "100%",
                  justifyContent: "space-between",
                  // alignItems: "center",
                  my: 2,
                  px: 2,
                  py: 1,
                  background: "#fff",
                  borderRadius: "24px",
                  cursor: "pointer",
                }}
                onClick={() => showRecord(row)}
              >
                {COLUMNS.map((col) => {
                  return (
                    <>
                      {!col.renderItem ? (
                        <Typography
                          variant="h5"
                          sx={{
                            // width: `calc(100% / ${COLUMNS_COUNT})`,
                            wordBreak: "break-all",
                          }}
                        >
                          {col.dataKey == "title"
                            ? row[col.dataKey].substring(0, 10)
                            : row[col.dataKey]}
                        </Typography>
                      ) : (
                        <Typography
                          variant="h5"
                          sx={{
                            bgcolor: row[col.dataKey] ? "#66bb6a" : "#e57373",
                            borderRadius: "10px",
                            // p: "2px",
                            minWidth: "80px",
                          }}
                        >
                          {row[col.dataKey] ? "Done" : "Pending"}
                        </Typography>
                      )}
                    </>
                  );
                })}
              </Stack>
            ))}
          </>
        ) : (
          <TableSkeleton COLUMNS={COLUMNS} />
        )}
      </Box>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalData={modalData}
        ModalHeading={"Selected Record"}
      />
    </Box>
  );
}
