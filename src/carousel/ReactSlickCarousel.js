import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/system";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import useResponsive from "../common/useResponsive";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <KeyboardArrowLeft
      className={className}
      style={{ ...style, display: "block", color: "gray", fontSize: "30px" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <KeyboardArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "gray",
        fontSize: "30px",
      }}
      onClick={onClick}
    />
  );
}

export default function ReactSlickCarousel() {
  const [activePage, setactivePage] = useState(1);
  const isMobile = useResponsive("down", "sm");
  const isTab = useResponsive("down", "md");
  const isLaptop = useResponsive("up", "lg");
  console.log("isLaptop", isLaptop);
  const slider = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1673212411859-651329b9e43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1673269595891-b92b2fa6edd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1673284691623-bf860a6c8f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1673334786107-8c967df4663c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      label: "Sleeping Cat",
      imgPath:
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      label: "High Rise Building",
      imgPath:
        "https://images.unsplash.com/photo-1562021157-76c3d9120c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=419&q=80",
    },
    {
      label: "white volkswagen beetle coupe scale model",
      imgPath:
        "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      label: "White and black high rise building",
      imgPath:
        "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      label: "white boat across beige metal tower",
      imgPath:
        "https://images.unsplash.com/photo-1566865204669-c7b93be298bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ];
  var settings = {
    beforeChange: (oldIndex, newIndex) => {
      setactivePage(newIndex + 1);
    },
    dots: isMobile ? false : true,
    infinite: true,
    slidesToShow: isMobile ? 1 : isTab ? 2 : 3,
    // autoplay: true,
    speed: 300,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1,
    arrows: isMobile ? false : true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  console.log("activePage", activePage);
  return (
    <Container
      fixed
      sx={{
        background: "#fff",
        py: isMobile ? 2 : 8,
        maxWidth: {
          xs: "100vw",
          sm: "sm",
          md: "md",
          xl: "xl",
        },
      }}
    >
      <Box
        sx={{
          background: "#fff",
          px: isMobile ? 0 : 2,
        }}
      >
        <Slider {...settings} ref={(c) => (slider.current = c)}>
          {images.map((img, ind) => (
            <Box>
              <Box
                component="img"
                sx={{
                  height: 355,
                  overflow: "hidden",
                  width: "100%",
                  px: { sm: 2 },
                }}
                src={img.imgPath}
                // alt={step.label}
              />
            </Box>
          ))}
        </Slider>
        {isMobile && (
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <IconButton onClick={previous}>
              <KeyboardArrowLeft />
            </IconButton>
            <Typography variant="h6">{`${activePage}/${images.length}`}</Typography>
            <IconButton onClick={next}>
              <KeyboardArrowRight />
            </IconButton>
          </Stack>
        )}
      </Box>
    </Container>
  );
}
