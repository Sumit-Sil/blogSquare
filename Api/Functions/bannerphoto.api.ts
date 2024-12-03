export const bannerimagesFn=async(id:string)=>{
    const url=`https://swarupapp.in/api/banner/photo/${id}`
    console.log(url,"urlll")
 const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Handle the response as a blob if it's an image
        const imageBlob = await response.blob(); // Use .blob() to get the binary data

        // Create a URL for the image blob
        return URL.createObjectURL(imageBlob);

}