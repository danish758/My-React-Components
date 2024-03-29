import { Pagination, PaginationItem } from "@mui/material";
import React from "react";

const TablePagination = ({ setpage, count, page, setStart }) => {
  const handlePagination = (e, page) => {
    const p = (page - 1) * 10;
    setStart(p);
    setpage(page);
  };
  return (
    <div>
      <Pagination
        page={page}
        onChange={(e, page) => handlePagination(e, page)}
        count={count}
        color="primary"
        variant="outlined"
        // renderItem={(item) => console.log("item", item)}
      />
    </div>
  );
};

export default TablePagination;
