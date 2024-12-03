// components/BlogCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px',height:"300px" }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button size="small" sx={{ ml: 2, mb: 2 }}>
        Read More
      </Button>
    </Card>
  );
};

export default BlogCard;
