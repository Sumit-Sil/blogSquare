import axiosInstance from "../Axios/Axios";
import { endpoints } from "../Endpoints/Endpoints";

export const blogDetailsAPICall = async (id:string):Promise<void> => {
    const res = await axiosInstance.get<void>(`${endpoints.blogs.blogDetails}/${id}`)
    console.log('blogDetailsAPICall res', res);
    return res.data
}