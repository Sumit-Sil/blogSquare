import { Ishowcommentprops } from "@/TypeScript/interface/cms.interface";
import axiosInstance from "../Axios/Axios"
import { endpoints } from "../Endpoints/Endpoints"

export const showCommentFn=async(id:string)=>{
    const res=await axiosInstance.get<Ishowcommentprops>(`${endpoints.blogs.showcomment}/${id}`)
console.log(res,"commentres");
return res.data
}