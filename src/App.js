import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./login/Login";
import SnackBar from "./Snackbar";
import Add from "./faqs/Add";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import Router from "./routes";
import ScrollToTop from "./common/ScrollToTop";
function App() {
  const defaultImages = [
    // "https://mooner-staging-media.s3.amazonaws.com/banners_image/profile5.png",
    // "https://mooner-staging-media.s3.amazonaws.com/banners_image/PictureNft.png",
  ];
  const checkFiles = (fileList) => {
    console.log("appjs", fileList);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackBar />
          <ScrollToTop />
          <Router />
          {/* <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/add" element={<Add />} />
            <Route path="/single_image" element={<ImageTabs />} />
            <Route path="/custom" element={<Customization />} />
            <Route path="/search" element={<Search />} />
           
          </Routes> */}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
