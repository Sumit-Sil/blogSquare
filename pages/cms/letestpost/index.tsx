import { letestQuery } from "@/CustomHooks/cms.query.hooks";
import React, { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Box,
} from "@mui/material";
import SkeletonLoader from "@/Ui/Loader/Loader";
const Letestpost = () => {
  const { data, isPending } = letestQuery();
  console.log(data, isPending, "bhbhjbhvdsdv");
  const datas = data?.data;
  console.log(datas, "blogdatatatatataata");
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
    <>
   <h1 style={{textAlign:"center",color:"primary"}}>Latest Blogs</h1>
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
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {Array.isArray(datas) &&
            datas.map((item) => (
              <Grid
                item
                key={item._id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                display="flex"
                justifyContent="center"
              >
                <Card
                  sx={{
                    width: "305px",
                    height: "350px",
                    borderRadius: 2,
                    boxShadow: 3,
                    margin:"20px",
                    // marginBottom:"100px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", color: "Highlight",height:"80%" }}>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      dangerouslySetInnerHTML={{
                        __html: item.postText?.slice(0, 400),
                      }}
                    />
                  
                  </CardContent>
                  <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",color:"Highlight"}}>
                      <Typography>Likes:{item.likes}</Typography>
                      <Typography>Unlikes:{item.unlikes}</Typography>
                    </div>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Letestpost;
