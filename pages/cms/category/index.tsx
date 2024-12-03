import axiosInstance from "@/Api/Axios/Axios";
import { allcategoryQuery } from "@/CustomHooks/cms.query.hooks";
import SkeletonLoader from "@/Ui/Loader/Loader";
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Sidebar from "@/Ui/sidebar/sidebar";

const Allcategory = () => {
  const { data } = allcategoryQuery();
  const allcat = data?.data; // Categories fetched from your API
  const [selectedId, setSelectedId] = useState("");
  const [categoryData, setCategoryData] = useState(null);

  const fetchCategoryData = async (id: string) => {
    try {
      const response = await axiosInstance.get(
        `http://89.116.32.22:7702/api/category/post/${id}`
      );
      setCategoryData(response?.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  const cateDatas = categoryData?.data;

  useEffect(() => {
    if (selectedId) {
      fetchCategoryData(selectedId);
    }
  }, [selectedId]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Sidebar
        selectedCategory={selectedId} // Pass the currently selected category
        handleSelectCategory={(categoryId) => setSelectedId(categoryId)} // Handle sidebar category click
        categories={allcat} // Pass fetched categories
      />

      {/* Main content area */}
      <Box sx={{ flexGrow: 1, padding: 3, marginLeft: { md: '250px' }, textAlign: 'center' }}>
        {cateDatas ? (
          <>
            {Array.isArray(cateDatas) && cateDatas.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {cateDatas.map((cateData) => (
                  <div key={cateData._id}>
                    <Typography variant="h4" gutterBottom>{cateData.title}</Typography>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: cateData.postText.slice(0, 200),
                      }}
                    />
                    <Typography variant="body1" color="primary">Like: {cateData.likes}</Typography>
                    <Typography variant="body1" color="error">Unlikes: {cateData.unlikes}</Typography>
                  </div>
                ))}
              </div>
            ) : (
              <Typography variant="h5">No data found</Typography>
            )}
          </>
        ) : (
          <Typography variant="h6" style={{ fontSize: "20px" }}>Select a category to see details.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Allcategory;
