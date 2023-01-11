import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "../snack.service";
import { useAddFAQMutation, useGetSubAdminsQuery } from "./faqsService";
import LoadingButton from "@mui/lab/LoadingButton";
import BasicTable from "./Table";
import { useEffect } from "react";
import { useState } from "react";
import TablePagination from "../components/pagination/TablePagination";
import { LOADER } from "./loader/Loading";
import Table2 from "./Table2";
import MyTable from "./MyTable";
import { useGetToDosQuery } from "../redux/services/todos.service";

const Add = () => {
  const [page, setpage] = useState(1);
  const [start, setStart] = useState(0);
  const auth = useSelector((state) => console.log("state", state));
  const [addFAQ, { isLoading }] = useAddFAQMutation();
  const {
    isLoading: fetchLoading,
    isFetching,
    data = {},
  } = useGetToDosQuery(start);
  console.log("todos", data);
  const isMobile = useMediaQuery("(max-width:600px)");

  // const {
  //   isLoading: fetchLoading,
  //   isFetching,
  //   data = {},
  // } = useGetSubAdminsQuery(page);
  console.log("page", page);
  // const { addfaqs = {} } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addFaq = async () => {
    // debugger;
    const resp = await addFAQ({
      email: "mooner3@gmail.com",
      password: "12345678",
      roles: "Sub_Admin",
      username: "test user",
      group_ids: [14],
    });
    console.log("res", resp);
    if (resp?.data?.status) {
      dispatch(
        setSnackbar({ message: resp?.data?.Response, severity: "success" })
      );
    } else {
      const error = resp?.data?.Response || resp?.error?.data?.detail;
      dispatch(setSnackbar({ message: error, severity: "error" }));
    }
  };
  return (
    <Box sx={{ overflowX: isMobile ? "auto" : "unset" }}>
      {/* <Box sx={{ textAlign: "right" }}>
          <LoadingButton
            loading={isLoading}
            variant="contained"
            onClick={addFaq}
          >
            Create Sub Admin
          </LoadingButton>
        </Box> */}
      <>
        <MyTable DATA={data} isFetching={isFetching} />
      </>

      <Box
        paddingTop={"20px"}
        sx={{
          float: { sm: "right" },
          justifyContent: "center",
          display: "flex",
        }}
      >
        <TablePagination
          page={page}
          setpage={setpage}
          setStart={setStart}
          count={20}
        />
      </Box>
    </Box>
  );
};

export default Add;
