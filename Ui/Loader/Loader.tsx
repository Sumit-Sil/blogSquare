import React from "react";
import { Skeleton, Box } from "@mui/material";

const SkeletonLoader: React.FC = () => (
  <Box sx={{height:"100vh"}}>
    <Skeleton variant="rectangular" width="100%" height={200} />
    <Box mt={2}>
      <Skeleton variant="text" width="60%" height={30} />
      <Skeleton variant="text" width="40%" height={30} />
      <Skeleton variant="text" width="80%" height={30} />
      <Skeleton variant="rectangular" width="50%" height={30} />
    </Box>
  </Box>
);

export default SkeletonLoader;
