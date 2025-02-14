import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
const cookie = new Cookies();
export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    logout() {
      cookie.remove("token", { path: "/" });
      cookie.remove("first_name",{path:"/"});
      cookie.remove("photo",{path:"/"});
      cookie.remove("userId",{path:"/"});
      // cookie.remove("password",{path:"/"});
      toast.success("Logout Successfull")
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
