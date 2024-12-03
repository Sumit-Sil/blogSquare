import { testiimagesQuery, testiQuery } from "@/CustomHooks/cms.query.hooks";
import React from "react";

const TestiImage = ({ id }: { id: string }) => {
  const { data: testiImg, isLoading, error } = testiimagesQuery(id);
  console.log(id, "testiiiiId");
  console.log(testiImg, "Fetched Image Data");

  if (isLoading) {
    return <p>Image is Loading...</p>;
  }

  if (error) {
    return <p>Unable to load image: {error.message}</p>;
  }
console.log(testiImg,"finalUrl")
  return (
    <div>
      {testiImg ? (
        <img
          src={testiImg}
          style={{ height: 100, width: 100 }}
          alt={`Image for blog ${id}`}
        />
      ) : (
        <p>Image not availible</p>
      )}
    </div>
  );
};

export default TestiImage;
