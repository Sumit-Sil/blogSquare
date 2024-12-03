import { UpdatePasswordProps } from "@/TypeScript/interface/auth.interface";
import axiosInstance from "../Axios/Axios";
import { endpoints } from "../Endpoints/Endpoints";



export const updatePasswordFn = async (payload: UpdatePasswordProps) => {
  const response = await axiosInstance.post(endpoints.auth.update, payload);
  console.log(response,"passwordchor")
  return response.data;
};
