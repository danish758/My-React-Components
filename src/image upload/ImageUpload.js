import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div
      style={{ marginTop: "20vh", display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ width: "40vw", height: "40vh", border: "1px solid black" }}>
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
