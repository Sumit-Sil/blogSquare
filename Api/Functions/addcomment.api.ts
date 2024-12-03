import { MutationFunction } from "@tanstack/react-query"
import axiosInstance, { baseURL } from "../Axios/Axios"
import { endpoints } from "../Endpoints/Endpoints"

export interface addCommentprops{
    name:string,
    email:string,
    comment:string
}
export interface IaddCommentProps extends addCommentprops{
    data:addCommentprops
}
export const addcommentfn=async(id:string,payload:addCommentprops)=>{
    const res=await axiosInstance.post(`/blog/${id}/comment/create`,payload)
    console.log(res.data,"addcomm")
    return res.data
}