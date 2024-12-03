import { Iallcatagoryprops } from "@/TypeScript/interface/cms.interface"
import axiosInstance from "../Axios/Axios"
import { endpoints } from "../Endpoints/Endpoints"

export const allcatagoryFn=async()=>{
    const res=await axiosInstance.get<Iallcatagoryprops>(endpoints.blogs.showAllCategory)
    return res.data
}