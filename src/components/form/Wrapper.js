import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import styled from "@emotion/styled";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import ModalForValues from "./ModalForValues";

const StyledTextField = styled(TextField)(
  ({ theme, background, borderColor, borderRadius }) => ({
    background: background,
    borderRadius: borderRadius,
    border: `1px solid ${borderColor}`,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& .MuiInput-root": {
      marginLeft: "10px",
    },
  })
);
const StyledButton = styled(Button)(
  ({ theme, background, borderColor, borderRadius }) => ({
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#512da8",
      boxShadow: "none",
    },
  })
);
const validationSchema = Yup.object().shape({
  // email: Yup.string().email("Invalid email").required("This field is required"),
  friends: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name required"),
    })
  ),
});

export default function FormWrapper() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [reRender, setReRender] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useState([]);

  const handleSubmit = async (values) => {
    setReRender(!reRender);
    console.log("values", values);
    setOpenModal(true);
    setFormValues(values);
    // alert(JSON.stringify(values));
  };

  return (
    <Stack spacing={2}>
      <Formik
        initialValues={{
          friends: [
            {
              name: "",
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <FieldArray name="friends">
              {({ insert, remove, push }) => (
                <div>
                  {values.friends.length > 0 &&
                    values.friends.map((friend, index) => (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            height: "50px",
                            width: !isMobile ? "400px" : "300px",
                            mt: 2,
                          }}
                        >
                          <Box sx={{ width: "300px", height: "100%" }}>
                            <Box sx={{ height: "100%", width: "100%" }}>
                              <StyledTextField
                                key={index}
                                id="filled-basic"
                                variant="standard"
                                name={`friends.${index}.name`}
                                value={values.friends[index]?.name}
                                onChange={handleChange}
                                borderRadius="3px"
                                borderColor={
                                  touched.friends &&
                                  touched.friends[index]?.name &&
                                  errors.friends &&
                                  errors.friends[index]?.name
                                    ? "red"
                                    : "#9e9e9e"
                                }
                                InputProps={{
                                  disableUnderline: true,
                                }}
                                placeholder="Enter text here.."
                                onBlur={handleBlur}
                              />
                            </Box>
                          </Box>

                          <Box sx={{ height: "100%" }}>
                            <Button
                              variant="outlined"
                              startIcon={<RemoveIcon />}
                              sx={{ height: "100%" }}
                              onClick={() => remove(index)}
                            >
                              Rem
                            </Button>
                          </Box>
                        </Box>
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          style={{ textAlign: "justify", color: "red" }}
                        />
                      </>
                    ))}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      height: "50px",
                      my: 1,
                    }}
                  >
                    <Box sx={{ height: "100%" }}>
                      <Button
                        variant="outlined"
                        startIcon={<AddIcon />}
                        sx={{ height: "100%", width: "300px" }}
                        onClick={() => push({ name: "" })}
                      >
                        Add
                      </Button>
                    </Box>
                  </Box>
                </div>
              )}
            </FieldArray>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                height: "50px",
              }}
            >
              <Box sx={{ height: "100%" }}>
                <StyledButton
                  type="submit"
                  variant="contained"
                  sx={{ height: "100%", width: "300px" }}
                >
                  Submit
                </StyledButton>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
      <ModalForValues
        openModal={openModal}
        setOpenModal={setOpenModal}
        formValues={formValues}
      />
    </Stack>
  );
}
