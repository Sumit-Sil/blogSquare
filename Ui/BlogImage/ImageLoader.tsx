import { profile_pic } from '@/Api/Axios/Axios';
import { blogimagesQuery } from '@/CustomHooks/cms.query.hooks';
import React from 'react';

export const ImageLoader = ({ blogid }: { blogid: string }) => {
    const { data: imageUrl, isLoading, error } = blogimagesQuery(blogid); // Check the naming of loading state
console.log(blogid,"blogid")
    console.log(imageUrl, "Fetched Image Data");

    if (isLoading) {
        return <p>Image is Loading...</p>;
    }

    if (error) {
        return <p>Unable to load image: {error.message}</p>;
    }

    // Ensure imagedata has the expected structure
    // const imageUrl = imagedata ? profile_pic(imagedata.media) : '';

    return (
        <div>
        {imageUrl ? (
            <img src={imageUrl} style={{ height: "50%", width: "50%" }} alt={`Image for blog ${blogid}`} />
        ) : (
            <p>No image available</p>
        )}
    </div>
    );
};

export default ImageLoader;
