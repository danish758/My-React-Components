import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, createTheme, TextField, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import { useLoginMutation } from "./service";
import { useAddFAQMutation } from "../faqs/faqsService";
import { setToken } from "./authSlice";
import { useDispatch } from "react-redux";
import { closeSnackbar, setSnackbar } from "../snack.service";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { theme } from "../theme";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("This field is required"),
  password: Yup.string().required("This field is required"),
});

const Theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log("values", values);
    const resp = await login(values);
    console.log("resp", resp);
    if (resp?.data?.status) {
      dispatch(setToken(resp?.data?.data?.access));
      dispatch(
        setSnackbar({ message: resp?.data?.Response, severity: "success" })
      );
      navigate("/add");
    } else {
      dispatch(
        setSnackbar({ message: resp?.data?.Response, severity: "error" })
      );
    }
  };
  return (
    <div>
      <h1>Login</h1>
      {/* <ThemeProvider theme={theme}> */}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <Stack
              direction={"column"}
              justifyContent="center"
              alignItems={"center"}
              // spacing={2}
            >
              <TextField
                name="email"
                value={values?.email}
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <div style={{ color: "red" }}>{errors.email}</div>
              ) : null}
              <TextField
                name="password"
                value={values?.password}
                onChange={handleChange}
                sx={{ marginTop: "20px" }}
              />
              {errors.password && touched.password ? (
                <div style={{ color: "red" }}>{errors.password}</div>
              ) : null}

              <LoadingButton
                type="submit"
                variant="contained"
                sx={{ marginTop: "20px" }}
                loading={isLoading}
              >
                Submit
              </LoadingButton>
            </Stack>
          </Form>
        )}
      </Formik>
      {/* </ThemeProvider> */}
    </div>
  );
};
export default Login;
