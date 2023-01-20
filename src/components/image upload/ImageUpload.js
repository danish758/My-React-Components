import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useRef } from "react";
import cross from "../../assets/cross.png";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";

const validationSchema = Yup.object().shape({
  profile_pic: Yup.mixed().required("This field is required"),
});

const ImageUpload = () => {
  const [fileURL, setFileURL] = useState("");
  const [file, setFile] = useState();
  const isMobile = useMediaQuery("(max-width:600px)");
  const ref = useRef();

  const handleChange = (e) => {
    setFileURL(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    // console.log("e", e.target.files[0]);
  };
  const handleClick = (e) => {
    ref.current.click();
    console.log("handleclick");
  };
  const clearFile = () => {
    setFile();
    setFileURL("");
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy"; // Show "copy" cursor
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const fileURL = URL.createObjectURL(event.dataTransfer.files[0]);
    console.log("fileURL", event.dataTransfer.files[0]);
    setFileURL(fileURL);
    setFile(event.dataTransfer.files[0]);

    // Do something with the files, such as uploading them to a server
    // ...
  };
  const handleSubmit = async (values) => {
    console.log("values", values);
  };
  return (
    <div
      style={{ marginTop: "20vh", display: "flex", justifyContent: "center" }}
    >
      <Formik
        initialValues={{
          profile_pic: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form style={{ width: "100%" }}>
            <Box
              sx={{
                width: isMobile ? "100%" : "40vw",
                height: isMobile ? "30vh" : "40vh",
                border: "1px dashed gray",
                borderRadius: "4px",
              }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <Box
                // component="label"
                fullWidth
                sx={{
                  height: "100%",
                  width: "100%",
                  padding: "0px",
                  color: "orange",
                  fontSize: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={handleClick}
              >
                {fileURL == "" ? (
                  <Stack alignItems={"center"} spacing={1}>
                    <Stack direction={"row"} spacing={0.5}>
                      <Typography variant="h6"> Chose a File </Typography>
                      <Typography variant="h5"> or Drag it here</Typography>
                    </Stack>
                    <UploadFileIcon sx={{ fontSize: 100 }} />
                  </Stack>
                ) : file.type !== "application/pdf" ? (
                  <img src={fileURL} width="100%" height={"100%"} />
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src={fileURL}
                    type="application/pdf"
                  >
                    {" "}
                  </iframe>
                )}
              </Box>
              <input
                type="file"
                // accept=".pdf"
                name="profile_pic"
                // value={values.profile_pic}
                ref={ref}
                hidden
                width={"100%"}
                height="100%"
                onChange={(e) => {
                  handleChange(e);
                  setFieldValue("profile_pic", e.target.files[0]);
                }}
              />
              <ErrorMessage
                name="profile_pic"
                component="div"
                style={{
                  textAlign: "center",
                  color: "red",
                  marginTop: "20px",
                }}
              />
              <Button variant="contained" type="submit" sx={{ my: 3 }}>
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      {fileURL && file.type === "application/pdf" && (
        <img
          src={cross}
          width="20px"
          height="20px"
          style={{
            // position: "absolute",
            marginLeft: "-13px",
            marginTop: "-10px",
            cursor: "pointer",
          }}
          onClick={clearFile}
        />
      )}
    </div>
  );
};

export default ImageUpload;
