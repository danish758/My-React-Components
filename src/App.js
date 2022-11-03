import logo from "./logo.svg";
import "./App.css";
import Test from "./pdf renderer/MyDocument";
import Renderer from "./pdf renderer/Renderer";
import JsPdf from "./pdf renderer/JsPdf";
import ExcelDownload from "./excel/ExcelDownload";
import DesktopNotifications from "./desktop notifications/DesktopNotifications";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ImageUpload from "./image upload/ImageUpload";
import Home from "./image upload/Home";
import Login from "./login/Login";
import SnackBar from "./Snackbar";
import Add from "./faqs/Add";
import { Button, ThemeProvider } from "@mui/material";
import Header from "./faqs/Header";
import { theme } from "./theme";
import MultiImageUpload from "./image upload/FilesUpload";
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
          <Header />
          <SnackBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/add" element={<Add />} />
            <Route path="/single_image" element={<ImageUpload />} />
            <Route
              path="/files_upload"
              element={
                <MultiImageUpload
                  maxSize={2}
                  accept="image/png"
                  defaultImages={[]}
                  maxFiles={3}
                  onChange={checkFiles}
                />
              }
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
