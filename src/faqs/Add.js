import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "../snack.service";
import { useAddFAQMutation, useGetSubAdminsMutation } from "./faqsService";
import LoadingButton from "@mui/lab/LoadingButton";
import BasicTable from "./Table";
import { useEffect } from "react";
import { useState } from "react";
import TablePagination from "../pagination/TablePagination";
import { LOADER } from "./loader/Loading";

const Add = () => {
  const [addFAQ, { isLoading }] = useAddFAQMutation();
  const [getSubAdmins, { isSuccess, data = {} }] = useGetSubAdminsMutation();
  const { count, results = [], previous, next } = data;
  const [page, setpage] = useState(1);
  const { addfaqs = {} } = useSelector((state) => state);
  console.log("addfaqs", isSuccess, data);
  useEffect(() => {
    getSubAdmins(page);
  }, [page]);

  const dispatch = useDispatch();
  const addFaq = async () => {
    // debugger;
    const resp = await addFAQ({
      email: "valid@gmail.com",
      password: "12345678",
      roles: "Sub_Admin",
      username: "valid@gmail.com",
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
    <div
      style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
    >
      <Box>
        <LoadingButton loading={isLoading} variant="contained" onClick={addFaq}>
          Create Sub Admin
        </LoadingButton>
        <Box>
          {isSuccess ? (
            <BasicTable DATA={results} isSuccess={isSuccess} />
          ) : (
            <LOADER />
          )}
          <Box paddingTop={"20px"} sx={{ float: "right" }}>
            <TablePagination setpage={setpage} count={Math.ceil(count / 10)} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Add;
