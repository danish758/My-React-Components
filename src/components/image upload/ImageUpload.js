import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useRef } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState("");
  const isMobile = useMediaQuery("(max-width:600px)");
  const ref = useRef();
  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleClick = (e) => {
    ref.current.click();
  };
  return (
    <div
      style={{ marginTop: "20vh", display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "40vw",
          height: isMobile ? "30vh" : "40vh",
          border: "1px dashed gray",
          borderRadius: "4px",
        }}
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
          {file == "" ? (
            <Stack alignItems={"center"} spacing={1}>
              <Typography variant="h4"> Upload File</Typography>
              <UploadFileIcon sx={{ fontSize: 100 }} />
            </Stack>
          ) : (
            <img src={file} width="100%" height={"100%"} />
          )}
        </Box>
        <input
          type="file"
          ref={ref}
          hidden
          width={"100%"}
          height="100%"
          onChange={handleChange}
        />
      </Box>
    </div>
  );
};

export default ImageUpload;
