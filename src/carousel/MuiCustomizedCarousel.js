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
import { Container } from "@mui/material";
import { StyledButton } from "../common/styled/StyledComponents";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

let images2 = [];
let temp = [];
const SIZE = 3;
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
console.log("images", images2);

// const images2 = [
//   [
//     {
//       label: "San Francisco – Oakland Bay Bridge, United States",
//       imgPath:
//         "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
//     },
//     {
//       label: "Bird",
//       imgPath:
//         "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
//     },
//   ],
//   [
//     {
//       label: "Bali, Indonesia",
//       imgPath:
//         "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//     },
//     {
//       label: "Goč, Serbia",
//       imgPath:
//         "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
//     },
//   ],
// ];

function MuiCustomizedCarousel() {
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
      <Box
        sx={{
          maxWidth: "100%",
          flexGrow: 1,
          bgcolor: "#FFFFFF !important",
          px: 12,
          py: 4,
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
            sx={{ mt: "-28rem" }}
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
            sx={{ mt: "-28rem" }}
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
