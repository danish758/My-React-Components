import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  return (
    <div>
      {loc?.pathname === "/add" ? (
        <Button onClick={() => navigate("/")}>Login</Button>
      ) : (
        <Button onClick={() => navigate("/add")}>Create User</Button>
      )}
      <Button onClick={() => navigate("/single_image")}>Files Upload</Button>
      <Button onClick={() => navigate("/custom")}>Customization</Button>
      <Button onClick={() => navigate("/carousel")}>Carousel</Button>
    </div>
  );
};

export default Header;
