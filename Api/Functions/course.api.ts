import { courseProps, IcourseProps } from "@/TypeScript/interface/cms.interface"
import axiosInstance from "../Axios/Axios"
import { endpoints } from "../Endpoints/Endpoints"



export const courseFn=async():Promise<courseProps>=>{
const response=await axiosInstance.get<IcourseProps>(endpoints.course.course)
return response.data.Courses
}