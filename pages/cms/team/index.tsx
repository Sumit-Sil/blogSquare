import { teamQuery } from '@/CustomHooks/cms.query.hooks';
import TeamImage from '@/Ui/TeamImage/TeamImage';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import SkeletonLoader from '@/Ui/Loader/Loader';

const Team = () => {
  const { data, isLoading, isError } = teamQuery();

  if (isLoading) return <Typography variant="h6" textAlign={"center"}>Loading...</Typography>;
  if (isError) return <Typography variant="h6" color="error">Error loading data</Typography>;
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate data fetching delay
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Adjust delay as needed

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <SkeletonLoader />;
  return (

    <Grid container justifyContent="center" height={"90vh"}>
      {Array.isArray(data) &&
        data.map((item) => (
          <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                maxWidth: 345,
                margin: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                '&:hover': {
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <CardMedia
                sx={{
                  height: 200,
                }}
              >
                <TeamImage teamId={item._id} /> {/* Render team image */}
              </CardMedia>
              <CardContent
                sx={{
                  textAlign: 'center',
                }}
              >
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.possession}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Team;
