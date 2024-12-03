import { IserviceProps } from "@/TypeScript/interface/cms.interface";
import axiosInstance from "../Axios/Axios"
import { endpoints } from "../Endpoints/Endpoints"


export const serviceFn=async():Promise<IserviceProps 
>=>{
const res=await axiosInstance.get<IserviceProps>(endpoints.content.service);
console.log(res,"services")
return res.data.data
}