// components/CarouselBanner.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Button, Typography } from "@mui/material";

const carouselData = [
  {
    image: "https://tse1.mm.bing.net/th?id=OIP.chRPJBszkdcT5lQQq8bjGgHaEU&pid=Api",
    title: "Welcome to My Blog",
    subtitle: "Discover Amazing Articles",
  },
  {
    image: "https://tse1.mm.bing.net/th?id=OIP.jKV5NwXL6slY-jlMaF0uuQHaEG&pid=Api&P=0&h=180",
    title: "Stay Updated",
    subtitle: "Read, Learn, and Grow",
  },
  {
    image: "https://i1.wp.com/www.newmediaandmarketing.com/wp-content/uploads/2019/02/blog-reading.jpg?fit=850%2C753&ssl=1",
    title: "Join Our Community",
    subtitle: "Register and Share Your Thoughts",
  },
];

const CarouselBanner: React.FC = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={4000}
    >
      {carouselData.map((item, index) => (
        <Box
          key={index}
          sx={{
            height: "500px",
            background: `url(${item.image}) no-repeat center center`,
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "#fff",
            position: "relative",
          }}
        >
          <Typography color="red" variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
            {item.title}
          </Typography>
          <Typography color="yellow" variant="h5" sx={{ mb: 4 }}>
            {item.subtitle}
          </Typography>
          <Box>
            <Button href="/auth/login" variant="contained" color="primary" sx={{ mr: 2, px: 4 }}>
              Login
            </Button>
            <Button href="/auth/register" variant="outlined" color="secondary" sx={{ px: 4 }}>
              Register
            </Button>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselBanner;
