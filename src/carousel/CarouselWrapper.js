import { Stack } from "@mui/system";
import React from "react";
import MuiCustomizedCarousel from "./MuiCustomizedCarousel";
import ReactSlickCarousel from "./ReactSlickCarousel";

const CarouselWrapper = () => {
  return (
    <Stack>
      {/* <MuiCustomizedCarousel /> */}
      <ReactSlickCarousel />
    </Stack>
  );
};

export default CarouselWrapper;
