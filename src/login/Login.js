import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  createTheme,
  Grid,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useLoginMutation } from "./service";
import { useAddFAQMutation } from "../faqs/faqsService";
import { setToken } from "./authSlice";
import { useDispatch } from "react-redux";
import { closeSnackbar, setSnackbar } from "../snack.service";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { theme } from "../theme";
import {
  StyledButton,
  StyledLoadingButton,
} from "../common/styled/StyledComponents";
import LoGin from "../assets/bg-profile.jpg";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("This field is required"),
  password: Yup.string().required("This field is required"),
});
const header = "70px",
  footer = "100px";
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
      navigate("/app");
    } else {
      dispatch(
        setSnackbar({ message: resp?.data?.Response, severity: "error" })
      );
    }
  };
  return (
    <>
      <Grid container sx={{ height: `calc(100vh - 170px)` }}>
        <Grid item xs={0} md={6}>
          <Box
            sx={{
              backgroundImage: `url(${LoGin})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: `100%`,
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: { md: "center" },
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "80%" }}>
            <h1>Login</h1>
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
                      placeholder="Enter Email"
                      value={values?.email}
                      onChange={handleChange}
                      fullWidth
                    />
                    {errors.email && touched.email ? (
                      <div style={{ color: "red" }}>{errors.email}</div>
                    ) : null}
                    <TextField
                      name="password"
                      placeholder="Enter Password"
                      value={values?.password}
                      onChange={handleChange}
                      sx={{ marginTop: "20px" }}
                      fullWidth
                    />
                    {errors.password && touched.password ? (
                      <div style={{ color: "red" }}>{errors.password}</div>
                    ) : null}

                    <StyledLoadingButton
                      type="submit"
                      variant="contained"
                      sx={{ marginTop: "20px", p: 2 }}
                      loading={isLoading}
                      fullWidth
                    >
                      Submit
                    </StyledLoadingButton>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;
