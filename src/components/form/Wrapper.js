import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import styled from "@emotion/styled";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import { Form, Formik } from "formik";
import * as Yup from "yup";

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
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("This field is required"),
  password: Yup.string().required("This field is required"),
});

export default function FormWrapper() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [inputs, setInputs] = useState([{ name: "" }]);

  const addNewField = () => {
    setInputs([...inputs, { name: "" }]);
  };
  const RemoveField = (index) => {
    const fields = [...inputs];
    fields.splice(index, 1);
    setInputs(fields);
  };
  console.log("inputs", inputs);
  const HandleChange = (e, i) => {
    let formValues = [...inputs];
    formValues[i][e.target.name] = e.target.value;
    setInputs(formValues);
  };

  const handleSubmit = async (values) => {};

  return (
    <Stack spacing={2}>
      <Formik
        initialValues={{
          name: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            {inputs.map((input, index) => (
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
                      name={`name`}
                      value={input.name}
                      borderRadius="3px"
                      // background="#bdbdbd"
                      borderColor="#9e9e9e"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      placeholder="Enter text here.."
                      onFocus={() => console.log("first")}
                      onChange={(e) => HandleChange(e, index)}
                    />
                  </Box>
                </Box>
                {index !== 0 && (
                  <Box sx={{ height: "100%" }}>
                    <Button
                      variant="outlined"
                      startIcon={<RemoveIcon />}
                      sx={{ height: "100%" }}
                      onClick={() => RemoveField(index)}
                    >
                      Rem
                    </Button>
                  </Box>
                )}
              </Box>
            ))}
          </Form>
        )}
      </Formik>

      <Box
        sx={{ display: "flex", alignItems: "center", gap: 2, height: "50px" }}
      >
        <Box sx={{ height: "100%" }}>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{ height: "100%", width: "300px" }}
            onClick={addNewField}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
