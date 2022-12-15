import { Box, Button } from "@mui/material";
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

const Add = () => {
  const auth = useSelector((state) => console.log("state", state));
  const [addFAQ, { isLoading }] = useAddFAQMutation();

  const [page, setpage] = useState(1);
  const {
    isLoading: fetchLoading,
    isFetching,
    data = {},
  } = useGetSubAdminsQuery(page);
  console.log("page", page);
  const { count, results = [], previous, next } = data;
  const { addfaqs = {} } = useSelector((state) => state);
  console.log("isFetching", isFetching);
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <Box sx={{ textAlign: "right" }}>
          <LoadingButton
            loading={isLoading}
            variant="contained"
            onClick={addFaq}
          >
            Create Sub Admin
          </LoadingButton>
        </Box>
        <Box>
          {!fetchLoading ? (
            <>
              <BasicTable DATA={results} isFetching={isFetching} />
            </>
          ) : (
            <Box sx={{ mt: 2 }}>
              <LOADER />
            </Box>
          )}
        </Box>
        <Box paddingTop={"20px"} sx={{ float: "right" }}>
          <TablePagination
            page={page}
            setpage={setpage}
            count={Math.ceil(count / 10)}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Add;
