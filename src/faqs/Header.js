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
    </div>
  );
};

export default Header;
