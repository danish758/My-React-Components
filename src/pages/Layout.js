import { Box, Stack } from "@mui/system";
import React from "react";
import Login from "../login/Login";
import { Footer } from "../secondaryComponents/Footer";
import Header from "../secondaryComponents/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Stack sx={{ minHeight: "100vh" }}>
        <Box>
          <Header />
        </Box>
        <Box>{children}</Box>

        <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
          <Footer />
        </Box>
      </Stack>
    </>
  );
};

export default Layout;
