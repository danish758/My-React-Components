import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {
  Container,
  IconButton,
  paginationClasses,
  Slide,
  useMediaQuery,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import "./carousel.css";
import { green } from "@mui/material/colors";
const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function CustomCarousel() {
  // Sub Arrays
  const isMobile = useMediaQuery("(max-width:600px)");
  const size = !isMobile ? 1 : 1;
  const [ImagesArray, setImagesArray] = useState([images.slice(0, size)]);
  const [direction, setdirection] = useState("left");

  const chunk = (begin) => {
    const chunkedArray = [];
    for (
      let i = begin, iteration = 0;
      iteration < size && i < images.length;
      i++, iteration++
    ) {
      console.log("innnnn", begin, iteration, i, images[i]);
      chunkedArray.push(images[i]);
    }
    console.log("chunkedArray", chunkedArray);

    setImagesArray(chunkedArray);
    // return chunkedArray;
  };
  console.log("ImagesArray", ImagesArray);
  //Pagination
  //   const [pagination,set]
  const pagination = [];
  for (let i = 0; i < images?.length - size + 1; i++) {
    pagination.push(i);
  }
  /////
  console.log("pagination", pagination);

  useEffect(() => {
    chunk(counter);
  }, []);

  //////
  const [counter, setCounter] = React.useState(0);
  const theme = useTheme();
  const containerRef = React.useRef(null);
  const handleNext = (counter) => {
    // if (counter < pagination.length - 1) {
    setdirection("left");
    setCounter((prevCount) => prevCount + 1);
    chunk(counter + 1);
    // }
  };
  const handleBack = (counter) => {
    setdirection("right");
    setCounter((prevCount) => prevCount - 1);
    chunk(counter - 1);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }} ref={containerRef}>
      <div>
        <Box sx={{ display: "flex", overflow: "hidden" }}>
          {images?.map((image, index) => (
            <Slide
              direction={direction}
              in={
                ImagesArray.find((img) => img.imgPath == image.imgPath)
                  ? true
                  : false
              }
              timeout={1000}
              container={containerRef.current}
              unmountOnExit
              mountOnEnter
            >
              <Box
                component="img"
                sx={{
                  // pl: 2,
                  height: isMobile ? 300 : 500,
                  display: ImagesArray.find(
                    (img) => img.imgPath == image.imgPath
                  )
                    ? "block"
                    : "none",
                  // maxWidth: 400,
                  overflow: "hidden",
                  width: `${100 / size}%`,
                }}
                src={image?.imgPath}
                alt={image?.label}
              />
            </Slide>
          ))}
        </Box>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          size="small"
          onClick={() => handleBack(counter)}
          disabled={counter === 0}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <div
          style={{ display: "flex", justifyContent: "space-between", gap: 1 }}
        >
          {pagination.map((item, index) =>
            index === counter ? (
              <h3
                key={index}
                style={{
                  marginLeft: "20px",
                  width: !isMobile ? "35px" : "15px",
                  border: "1px solid gray",
                  //   background: "green",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                {index + 1}
              </h3>
            ) : (
              <h5
                key={index}
                style={{
                  marginLeft: "10px",
                  width: !isMobile ? "35px" : "15px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCounter(index);
                  chunk(index);
                }}
              >
                {index + 1}
              </h5>
            )
          )}
        </div>
        <IconButton
          size="small"
          onClick={() => handleNext(counter)}
          disabled={counter === pagination.length - 1}
        >
          <KeyboardArrowRight />
        </IconButton>
      </div>
    </Container>
  );
}

export default CustomCarousel;
