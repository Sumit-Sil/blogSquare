import { loginFn} from "@/Api/Functions/login.api"
import { useMutation, UseMutationResult } from "@tanstack/react-query"
import { useGlobalHooks } from "./GlobalHokks"
import { Cookies } from "react-cookie"
import { toast } from "react-toastify"
import { Reg } from "@/Api/Functions/register.api"
import { updatePasswordFn} from "@/Api/Functions/updatePassword.api"
import { logout } from "@/Toolkit/authSlice"
import { loginProps, UpdatePasswordProps, userRegisterResponse } from "@/TypeScript/interface/auth.interface"
// import { registerFn, registerProps } from "@/Api/Functions/register.api"

export const LoginMutation=():UseMutationResult<loginProps,unknown>=>{
    const {queryClient}=useGlobalHooks()
    const cookie= new Cookies()
    return useMutation<loginProps,void,unknown>({
        mutationFn:loginFn,
onSuccess:(res)=>{
    const { token, status, message } = res || {};
  
    console.log(res,"res")
    if (status === 200 && token) {
      cookie.set("token", token, { path: "/", secure: true });
      cookie.set("photo",res.user.photo,{path:"/"})
      cookie.set("first_name",res.user.name,{path:"/"})
      cookie.set("userId",res.user._id)
      // cookie.set("password",res.user.password)
      toast(message)
    //   router.push("/cms/list")
    }
    else{
      console.log("error")
      toast(message)
    }
    queryClient.invalidateQueries({queryKey:["USERS"]})
},
onError:(res)=>{
  toast.error("Error occured")
}
    })
}

export const useUserSignUpMutation = ():UseMutationResult<userRegisterResponse,unknown> => {
  const { queryClient } = useGlobalHooks();

  return useMutation<userRegisterResponse,void,unknown>({
    mutationFn: Reg,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["REG"] });
      toast.success("Registration Successfull");
    },
  });
};




export const useUpdatePassword = () => {
  const cookie= new Cookies()
  return useMutation({
    mutationFn: (payload: UpdatePasswordProps) => updatePasswordFn(payload),
    onSuccess: () => {
      toast.success("Password updated successfully!");
      cookie.remove("token", { path: "/" });
      cookie.remove("first_name",{path:"/"});
      cookie.remove("photo",{path:"/"});
      cookie.remove("userId",{path:"/"});
    },
    onError: (error: any) => {
      toast.error("Error updating password.");
      console.error(error);
    },
  });
};