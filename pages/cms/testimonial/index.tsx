import { testiQuery } from "@/CustomHooks/cms.query.hooks";
import TestiImage from "@/Ui/TestiImage/TestiImage";
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";
import SkeletonLoader from "@/Ui/Loader/Loader";

const Testimonial = () => {
  const { data,isLoading } = testiQuery();
  const [loading, setLoading] = useState(true);

 

  if (isLoading) return <SkeletonLoader />;

  return (
    <div style={{ marginTop: "20px", padding: "0 20px" }}>
      <Grid 
        container 
        spacing={2} 
        alignContent="center" 
        justifyContent="center"
        sx={{ height: { xs: "auto", md: "90vh" } }}  // Adjust height responsively
      >
        {Array.isArray(data) &&
          data.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={item._id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: { xs: 1, md: 2 },
                  borderRadius: 2,
                  boxShadow: 3,
                  maxHeight: "100%",  // Allowing card to resize based on content
                  width: "100%",  // Full-width responsive card
                  maxWidth: "350px",  // Prevents card from growing too large
                }}
              >
                <CardMedia>
                  <TestiImage id={item._id} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {item.position}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    {item.talk.slice(0, 200)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Testimonial;
