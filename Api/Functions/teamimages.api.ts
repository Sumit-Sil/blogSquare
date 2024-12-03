import { baseURL } from "../Axios/Axios"

export const teamImgFn=async(teamId:string)=>{
const response=await fetch(`${baseURL}/team/photo/${teamId}`)
const teamImg=await response.blob();

return URL.createObjectURL(teamImg)
}