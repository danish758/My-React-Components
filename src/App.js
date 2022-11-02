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
import FilesUpload from "./components/MultiImageUpload";
import Login from "./login/Login";
import Snackbar from "./Snackbar";
import SnackBar from "./Snackbar";
import Add from "./faqs/Add";
import { Button } from "@mui/material";
import Header from "./faqs/Header";
function App() {
  const defaultImages = [
    // "https://mooner-staging-media.s3.amazonaws.com/banners_image/profile5.png",
    // "https://mooner-staging-media.s3.amazonaws.com/banners_image/PictureNft.png",
  ];
  const onChange = (fileList) => {
    console.log("appjs", fileList);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SnackBar />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/add" element={<Add />} />

          <Route path="/single_image" element={<ImageUpload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
