import { Button, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState("");
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div
      style={{ marginTop: "20vh", display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "40vw",
          height: isMobile ? "30vh" : "40vh",
          border: "1px solid black",
        }}
      >
        <Button
          variant="link"
          component="label"
          fullWidth
          sx={{
            height: "100%",
            padding: "0px",
            color: "orange",
            fontSize: "24px",
          }}
        >
          {file == "" && "Upload File"}
          <input
            type="file"
            hidden
            width={"100%"}
            height="100%"
            onChange={handleChange}
          />
          {file !== "" && <img src={file} width="100%" height={"100%"} />}
        </Button>
      </Box>
    </div>
  );
};

export default ImageUpload;
