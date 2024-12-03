import { courseQuery } from "@/CustomHooks/cms.query.hooks";
import CourseImage from "@/Ui/CourseImage/CourseImage";
import SkeletonLoader from "@/Ui/Loader/Loader";
import { CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const course = () => {
  const { data,isLoading } = courseQuery();
  console.log("course data", data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <SkeletonLoader />;
  return (
    <div>
      {Array.isArray(data) &&
        data?.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                height:'100vh'
              }}
            >
              <CardContent>
                <CardMedia>
                  <CourseImage cId={item._id} />
                </CardMedia>
                <Typography variant="h5" component="div">
                 {item.name}
                </Typography>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  {item.requirement}
                </Typography>
               
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  {item.duration}
                </Typography>
                <Typography variant="body2">
                  {item.fees}
                  <br />
                </Typography>
              </CardContent>

              <p></p>
              <p></p>
            </div>
          );
        })}
    </div>
  );
};

export default course;
