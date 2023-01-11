import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Container, useMediaQuery } from "@mui/material";
import { StyledButton } from "../common/styled/StyledComponents";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function MuiCustomizedCarousel() {
  // Setting Size of Carousel

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

  const isMobileOrTablet = useMediaQuery("(max-width:999px)");
  let images2 = [];
  let temp = [];
  const SIZE = isMobileOrTablet ? 1 : 3;
  for (let i = 0; i < images.length; i++) {
    temp.push(images[i]);
    if ((i + 1) % SIZE == 0) {
      images2.push(temp);
      temp = [];
    }
  }

  // If last group doesn't have enough
  // elements then add 0 to it
  if (temp.length != 0) {
    let a = temp.length;
    while (a != SIZE) {
      // temp.push(0);
      a++;
    }
    images2.push(temp);
  }

  /////////////////////////////
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images2.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "left", mb: 4 }}>
        <Typography variant="paragraph">
          MUI does not give Carousel which support multi items per page.So here
          is MUI Stepper Component fully customized.
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "100%",
          flexGrow: 1,
          bgcolor: "#FFFFFF !important",
          px: isMobileOrTablet ? 2 : 12,
          py: isMobileOrTablet ? 2 : 4,
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images2.map((step, index) => (
            <div>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: 2,
                  }}
                >
                  {step?.map((img, ind) => (
                    <Box
                      component="img"
                      sx={{
                        height: 355,
                        maxWidth: `calc(100%/${SIZE})`,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={img.imgPath}
                      // alt={step.label}
                    />
                  ))}
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        className="pagination"
        activeStep={activeStep}
        nextButton={
          <StyledButton
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ mt: isMobileOrTablet ? "unset" : "-28rem" }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </StyledButton>
        }
        backButton={
          <StyledButton
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ mt: isMobileOrTablet ? "unset" : "-28rem" }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </StyledButton>
        }
        sx={{
          background: "#FFFFFF !important",
        }}
      />
    </Container>
  );
}

export default MuiCustomizedCarousel;
