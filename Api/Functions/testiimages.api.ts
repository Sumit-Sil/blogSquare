export const testiimageFN=async(id:string)=>{
     const url=`https://swarupapp.in/api/testimonials/photo/${id}`
     
const res=await fetch(url)
console.log(res,"vicccky")
const imgBlob=await res.blob()
return URL.createObjectURL(imgBlob)
}