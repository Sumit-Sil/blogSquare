import { IallBlogsProps } from "@/TypeScript/interface/cms.interface";
import axiosInstance from "../Axios/Axios";
import { endpoints } from "../Endpoints/Endpoints";


export const allBlogsAPICall = async () => {
    const res = await axiosInstance.get<IallBlogsProps>(endpoints.blogs.allBlogs)
    console.log('allBlogsAPICall res', res);
    return res.data
}
