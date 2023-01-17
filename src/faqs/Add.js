import { Box, Button, Typography, useMediaQuery } from "@mui/material";
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
import axios from "axios";

const Add = () => {
  const [page, setpage] = useState(1);
  const [start, setStart] = useState(0);
  // useEffect(() => {
  //   postLambda();
  // }, []);

  // const postLambda = async () => {
  //   try {
  //     const res = await axios.post(
  //       "https://auma7xdjs25hp7rjzgwrrnqloa0krref.lambda-url.us-east-1.on.aws/",
  //       {
  //         key: "Warranty_Deed.pdf",

  //         title: "Paul Toofan",

  //         address: "16822 Eagle Bluff Court, Chesterfield",
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [addFAQ, { isLoading }] = useAddFAQMutation();
  const {
    isLoading: fetchLoading,
    isFetching,
    data = {},
  } = useGetToDosQuery(start);
  const isMobile = useMediaQuery("(max-width:600px)");
  const COLUMNS = [
    {
      title: "ID",
      dataKey: "id",
    },
    {
      title: "Title",
      dataKey: "title",
    },

    {
      title: "Status",
      dataKey: "completed",
      renderItem: true,
    },
  ];

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
    <Box sx={{ overflowX: isMobile ? "auto" : "unset", maxWidth: "md" }}>
      {/* <Box sx={{ textAlign: "right" }}>
          <LoadingButton
            loading={isLoading}
            variant="contained"
            onClick={addFaq}
          >
            Create Sub Admin
          </LoadingButton>
        </Box> */}
      <Box sx={{ textAlign: "left", mb: 3, mx: 2 }}>
        <Typography variant="h5">
          This table and Skeleton is designed from scratch.Data is fetched from
          mock api with help of{" "}
          <span style={{ fontWeight: "bold", fontSize: "15px" }}>
            <a
              href="https://redux-toolkit.js.org/tutorials/rtk-query"
              target="_blank"
              style={{ textDecoration: "none", color: "green" }}
            >
              Redux Toolkit Query
            </a>
          </span>
          .Once data is fetched ,it will be cached for 1 minute.No doubt this
          cache time can be increased.
        </Typography>
      </Box>
      <>
        <MyTable DATA={data} COLUMNS={COLUMNS} isFetching={isFetching} />
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
