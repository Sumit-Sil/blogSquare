// pages/index.tsx
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import CarouselBanner from '@/Ui/Carousel/CarouselBanner';
import BlogCard from '@/Ui/Cards/Cards';


const blogPosts = [
  {
    image: 'https://tse1.mm.bing.net/th?id=OIP.T9Y8u-4S5csWV8wOjaO2qwHaDt&pid=Api&P=0&h=180',
    title: 'How to Learn React Quickly',
    description: 'React is one of the most popular JavaScript libraries...',
  },
  {
    image: 'https://tse3.mm.bing.net/th?id=OIP.7cwsgCBxqiMI9hKRj7emwAHaEK&pid=Api&P=0&h=180',
    title: 'Understanding TypeScript',
    description: 'TypeScript adds static typing to JavaScript...',
  },
  {
    image: 'https://tse4.mm.bing.net/th?id=OIP.htQ__m0E2P0XuxSSQelBcQHaDZ&pid=Api&P=0&h=180',
    title: 'Next.js for Beginners',
    description: 'Next.js is a React framework that enables server-side rendering...',
  },
];

const HomePage = () => {
  return (
    <Box>
      {/* Carousel Section */}
      <CarouselBanner />

      {/* Blog Cards Section */}
      <Container sx={{ my: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 4 }}>
          Latest Blog Posts
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {blogPosts.map((post, index) => (
            <Grid item key={index}>
              <BlogCard {...post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
