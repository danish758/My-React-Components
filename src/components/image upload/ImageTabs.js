import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ImageUpload from "./ImageUpload";
import MultiImageUpload from "./FilesUpload";
import { Container, Typography, useMediaQuery } from "@mui/material";

export default function ImageTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isMobile = useMediaQuery("(max-width:600px)");

  const defaultImages = [
    // "https://mooner-staging-media.s3.amazonaws.com/banners_image/profile5.png",
    // "https://mooner-staging-media.s3.amazonaws.com/banners_image/PictureNft.png",
  ];
  const checkFiles = (fileList) => {
    console.log("appjs", fileList);
  };

  return (
    <Container
    // sx={{ display: "flex", justifyContent: "center", mt: 8 }}
    >
      <Box>
        <Typography sx={{ textAlign: "left" }}>
          Both these components created from scratch without any library. That's
          why we can customize it easily according to our design.
        </Typography>
        <TabContext value={value}>
          <Box
            sx={{
              typography: "body1",
              display: "flex",
              justifyContent: "center",
              mt: 8,
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Single" value="1" />
              <Tab label="Multiple" value="2" />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{ padding: 0, width: isMobile ? "90vw" : "100%" }}
          >
            <ImageUpload />
          </TabPanel>
          <TabPanel
            value="2"
            sx={{ padding: 0, width: isMobile ? "90vw" : "100%" }}
          >
            <MultiImageUpload
              maxSize={2}
              accept={["image/jpeg", "image/jpg", "image/png"]}
              defaultImages={defaultImages}
              maxFiles={100}
              onChange={checkFiles}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}
