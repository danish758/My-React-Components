import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../snack.service";
import { useAddFAQMutation } from "./faqsService";
import LoadingButton from "@mui/lab/LoadingButton";

const Add = () => {
  const [addFAQ, { isLoading }] = useAddFAQMutation();
  const dispatch = useDispatch();
  const addFaq = async () => {
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
    <div style={{ marginTop: "50px" }}>
      <LoadingButton loading={isLoading} variant="contained" onClick={addFaq}>
        Create Sub Admin
      </LoadingButton>
    </div>
  );
};

export default Add;
