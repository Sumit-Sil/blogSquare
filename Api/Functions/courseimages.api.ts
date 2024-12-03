import { baseURL } from "../Axios/Axios";
import { endpoints } from "../Endpoints/Endpoints"

export const courseimagesFn=async(cId:string)=>{
    const res=await fetch(`${baseURL}/course/photo/${cId}`)
    const courseImg=await res.blob();
    return URL.createObjectURL(courseImg)
}