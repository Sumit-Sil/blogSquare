import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useUpdatePassword } from "@/CustomHooks/auth.query.hooks";
import { logout } from "@/Toolkit/authSlice";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";
import { UpdatePasswordProps } from "@/TypeScript/interface/auth.interface";

const UpdatePasswordForm = () => {
  const cookie = new Cookies();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<UpdatePasswordProps>();
  const { mutate, isPending } = useUpdatePassword();
  const userId = cookie.get("userId");

  const onSubmit = (data: UpdatePasswordProps) => {

    if (!userId) {
      console.error("User ID not found");
      return;
    }

    // Create JSON payload
    const payload = {
      user_id: userId, // Ensure this matches the expected key in the API
     
      password: data.password,
    };

   
    console.log("Payload being sent to API:", payload);

  


   
    mutate(payload, {
      onSuccess: () => {
        reset();
     
 
        // cookie.remove("token")
        // cookie.remove("userId")
        // cookie.remove("first_name")
        // cookie.remove("photo")
        router.push("/auth/login");
      },
      onError: (error) => {
        console.error("Error updating password:", error);
        if (error.response) {
          console.error("API Response Error:", error.response.data);
        }
      },
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}
    >
      <Typography variant="h5" gutterBottom>
        Update Password
      </Typography>
      
      {/* <TextField
        label="Old Password"
        type="password"
        fullWidth
        margin="normal"
        {...register("oldPassword", { required: "Old Password is required" })}
        error={!!errors.oldPassword}
        helperText={errors.oldPassword && "Old Password is required"}
      /> */}
      
      <TextField
        label="New Password"
        type="password"
        fullWidth
        margin="normal"
        {...register("password", { required: "password is required" })}
        error={!!errors.password}
        helperText={errors.password && "password is required"}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isPending}
        fullWidth
        sx={{ mt: 2 }}
      >
        {isPending ? "Updating..." : "Update Password"}
      </Button>
    </Box>
  );
};

export default UpdatePasswordForm;
