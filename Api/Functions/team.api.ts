import { IteamProps, teamProps } from "@/TypeScript/interface/cms.interface";
import axiosInstance from "../Axios/Axios";
import { endpoints } from "../Endpoints/Endpoints";



export const teamFn=async():Promise<teamProps>=>{
    const res=await axiosInstance.get<IteamProps>(endpoints.content.team);
    console.log(res,"teammmmmm")
    return res?.data?.TeamMember
}