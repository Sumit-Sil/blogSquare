import { IletestPost } from "@/TypeScript/interface/cms.interface";
import axiosInstance from "../Axios/Axios";
import { endpoints } from "../Endpoints/Endpoints";

export const latestPostFn = async () => {
    const res =await axiosInstance.get<IletestPost>(endpoints.blogs.letestPost)
    console.log('latestPost resjhjkhkh', res);
    return res.data
}
