import { MutationFunction } from "@tanstack/react-query"
import { endpoints } from "../Endpoints/Endpoints"
import  axiosInstance  from "../Axios/Axios"
import { loginProps } from "@/TypeScript/interface/auth.interface"

export const loginFn:MutationFunction<loginProps>=async(payload)=>{
    const res=await axiosInstance.post<loginProps>(endpoints.auth.login,payload)
    console.log(res,"loginres")
    return res.data
}