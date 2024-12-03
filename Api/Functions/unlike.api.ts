import axiosInstance from "../Axios/Axios";
import { endpoints } from "../Endpoints/Endpoints";

export const unlikePostAPICall = async (id:string):Promise<void> => {
    const res = await axiosInstance
    .put<void>(`${endpoints.blogs.unlike}/${id}`)
    console.log('likePostAPICall res', res);
    return res.data
}