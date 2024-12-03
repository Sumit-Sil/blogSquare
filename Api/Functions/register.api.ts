import axiosInstance from "@/Api/Axios/Axios";
import { endpoints } from "@/Api/Endpoints/Endpoints";
import { userRegisterResponse } from "@/TypeScript/interface/auth.interface";
import { MutateFunction } from "@tanstack/react-query";



export const Reg:MutateFunction<userRegisterResponse> = async (userPayload) => {
 
  const res = await axiosInstance.post<userRegisterResponse>(
    endpoints.auth.register,
    userPayload
  );

  return res.data;
};
