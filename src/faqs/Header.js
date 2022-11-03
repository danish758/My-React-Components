import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  console.log("navigate", loc);
  return (
    <div>
      {loc?.pathname === "/add" ? (
        <Button onClick={() => navigate("/")}>Login</Button>
      ) : (
        <Button onClick={() => navigate("/add")}>Create User</Button>
      )}
      <Button onClick={() => navigate("/single_image")}>Single Image</Button>
      <Button onClick={() => navigate("/files_upload")}>Multi Images</Button>
    </div>
  );
};

export default Header;
