import { ItestiProps, testiProps } from "@/TypeScript/interface/cms.interface";
import axiosInstance from "../Axios/Axios";
import { endpoints } from "../Endpoints/Endpoints";


export const testiFn=async():Promise<testiProps>=>{
    const res=await axiosInstance.get<ItestiProps>(endpoints.content.testimonial);
    console.log(res,"testi")
    return res?.data?.testimonials
}