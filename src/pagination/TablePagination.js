import { Pagination } from "@mui/material";
import React from "react";

const TablePagination = ({ setpage, count }) => {
  const handlePagination = (e, page) => {
    console.log("page", page);
    setpage(page);
  };
  return (
    <div>
      <Pagination
        onChange={(e, page) => handlePagination(e, page)}
        count={count}
        color="primary"
      />
    </div>
  );
};

export default TablePagination;
