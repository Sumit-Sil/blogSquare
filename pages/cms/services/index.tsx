import { serviceQuery } from "@/CustomHooks/cms.query.hooks";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";
import SkeletonLoader from "@/Ui/Loader/Loader";
const service = () => {
  const { data } = serviceQuery();

  console.log(data, "gfghk");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      width: "100%",
      p: 2,
    }}
  >
    <Grid container spacing={3} justifyContent="center" alignItems="center" >
      {Array.isArray(data) &&
        data.map((item) => (
          <Grid item key={item._id} xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center">
            <Card
            key={item._id}
              sx={{
                width: 335,
                height: 400,
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center",color:"Highlight" }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {item.details.slice(0, 550)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  </Box>
  );
};

export default service;
