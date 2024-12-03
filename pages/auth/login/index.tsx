import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
interface logg {
  email: string;
  password: string;
}
import { LoginMutation } from "@/CustomHooks/auth.query.hooks";
import { useRouter } from "next/router";
const login = () => {
    const router=useRouter()
  const { mutate, isPending } = LoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<logg>();

  const onSubmit = async (formData: FieldValues) => {
    const { email, password } = formData as { email: string; password: string };
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    mutate(formData,{
      onSuccess:()=>{
        router.push("/cms/allblogs")
      }
    });
    console.log(formData);
    
    // router.push("/cms/list");
  };

  // const onSubmit = (e: { email: string; password: string }) => {
  //   const formData = new FormData();
  //   formData.append("email", e.email);
  //   formData.append("password", e.password);
  //   mutate(formData);
  // };
  return <div>


<Grid container spacing={2} style={{height:"100vh"}}>
            <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}  style={{marginTop:"100px"}}>
              <Paper elevation={3} sx={{ padding: 2 }} style={{height:"370px"}} >
                <Typography variant="h5" gutterBottom>
                  Login Form
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} >
                  <TextField
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Invalid email format",
                      },
                    })}
                    label="Your Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email && errors.email.message}
                  />
                  <TextField
                    {...register("password", {
                      required: "Password is required",
                    })}
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!errors.password}
                    helperText={errors.password && errors.password.message}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    sx={{ marginTop: 2 }}
                  >
                    
                    {isPending ? "Loading...." : "Login"}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    sx={{ marginTop: 2 }}
                    onClick={() => {
                      router.push("/auth/register");
                    }}
                  >
                    Register
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>


  </div>;
};

export default login;
