import { IbannerProps } from "@/TypeScript/interface/cms.interface"
import axiosInstance from "../Axios/Axios"
import { endpoints } from "../Endpoints/Endpoints"



export const bannerFn=async():Promise<IbannerProps>=>{
const res=await axiosInstance.get<IbannerProps>(endpoints.content.banner)
return res.data
}