import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { log } from "console";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useUserSignUpMutation } from "@/CustomHooks/auth.query.hooks";
// import { userRegisterResponse } from "@/Api/Functions/register.api";
import { useRouter } from "next/router";
import { userRegisterResponse } from "@/TypeScript/interface/auth.interface";
// import { useUserSignUpMutation } from "@/CustomHooks/auth.query.hook";
// import { registerMutation } from "@/CustomHooks/auth.query.hooks";
// interface IFormInput {
//   first_name: string;
//   last_name: string;
//   email: string;
//   password: string;
// }

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: any) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useUserSignUpMutation();
  const [img, setImg] = useState<File | null>(null);
  const router = useRouter();
  interface FormData {
    name: string;
    email: string;
    mobile?: number;
    password: string;
    photo?: File;
  }
  const onSubmitt = (formData: userRegisterResponse) => {
    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("email", formData.email);
    formdata.append("mobile", formData.mobile);
    formdata.append("password", formData.password);
    if (img) {
      formdata.append("photo", img);
    }
    mutate(formdata, {
      onSuccess: () => {
        router.push("/auth/login");
      },
    });

    console.log(formData);
  };

  // console.log(isPending, "isPending");
  return (
    <Container style={{ height: "100vh", paddingTop: "3vh" }}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              Create a New Account :
            </Typography>
            <form onSubmit={handleSubmit(onSubmitt)}>
              <TextField
                {...register("name", {
                  required: "Please enter your name",
                })}
                label="Name: "
                type="text"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.name}
                // helperText={errors.name?.message}
              />
              <TextField
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email format",
                  },
                })}
                label="Your Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                // helperText={errors.email && errors.email.message}
              />
              <TextField
                {...register("mobile")}
                label="Mobile Number"
                type="number"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.mobile}
                // helperText={errors.last_name?.message}
              />
              <TextField
                {...register("password", {
                  required: "Password is required",
                })}
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        className="icon"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                variant="outlined"
                error={!!errors.password}
                // helperText={errors.password && errors.password.message}
              />
              <input
                accept="image/*"
                id="upload-button"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setImg(e.target.files[0])}
              />
              <label htmlFor="upload-button">
                <Button
                  variant="contained"
                  component="span"
                  color="primary"
                  sx={{
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "red",
                      color: "blue",
                    },
                  }}
                >
                  Upload
                </Button>
              </label>
              {img ? (
                <Box mt={2}>
                  <img
                    style={{ height: "180px" }}
                    src={URL.createObjectURL(img)}
                    alt=""
                    className="upload-img"
                  />
                </Box>
              ) : (
                <Box mt={2}>
                  <p>Drag or drop content here</p>
                </Box>
              )}

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                sx={{
                  marginTop: 2,
                  fontSize: "18px",
                  fontWeight: "bold",
                  backgroundColor: "#E6B9A6",
                  "&:hover": {
                    backgroundColor: "#EEEDEB",
                    color: "#E6B9A6",
                  },
                }}
              >
                {isPending ? "Loading..." : "Create Account"}
              </Button>
              <p
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                }}
              >
                Already have an Account?
                <a
                  href="/auth/login"
                  style={{
                    color: "#E6B9A6",
                    cursor: "pointer",
                  }}
                >
                  <b> Sign In</b>
                </a>
              </p>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
