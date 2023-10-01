"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useEmail from "../hooks/useEmail";
import usePassword from "../hooks/usePassword";
import { login } from "../lib/api-requests/auth";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import BackDropLoader from "./BackDropLoader";
import { usersData } from "../lib/api-requests/user";

const LoginForm = () => {
  const router = useRouter();
  const { email, emailError, handleChangeEmail, validateEmail } = useEmail();
  const [loader, setLoader] = useState(false);
  const [cookie, setCookie] = useCookies(["token", "user"]);
  const {
    password,
    passwordError,
    setPasswordError,
    handleChangePassword,
    validatePassword,
  } = usePassword();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((show: boolean) => !show);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoader(true);
    const validEmail = validateEmail();
    const validPassword = validatePassword();
    if (validEmail && validPassword) {
      try {
        const { token } = await login(email, password);
        const { user } = await usersData(token);
        setCookie("token", token,{path:"/"});
        setCookie("user", user,{path:"/"});
        router.push("/");
      } catch (error: any) {
        setPasswordError({ error: true, helperText: error.message });
      }
    }
    setLoader(false);
  };
  return (
    <>
      <BackDropLoader
        openLoader={loader}
        closeLoader={() => setLoader(false)}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: { xs: "40px", sm: "none" },
          width: { xs: "80%", md: "60%" },
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "#0E2F56",
            }}
          >
            WELCOME BACK
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#272727",
              marginLeft: "10px",
            }}
          >
            We are happy that you are here again
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          gap="20px"
          mt="20px"
        >
          <TextField
            error={emailError.error}
            helperText={emailError.helperText}
            value={email}
            placeholder="Email Address"
            fullWidth
            onChange={handleChangeEmail}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={passwordError.error}
            helperText={passwordError.helperText}
            value={password}
            placeholder="Password"
            fullWidth
            onChange={handleChangePassword}
          />
          <Typography
            textAlign="end"
            variant="subtitle1"
            sx={{
              cursor: "pointer",
              color: "#0E2F56",
            }}
          >
            Forgot password?
          </Typography>
          <Button
            fullWidth
            type="submit"
            sx={{
              height: "56px",
              backgroundColor: "#0E2F56",
            }}
            variant="contained"
          >
            Login
          </Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <hr
              style={{
                width: "45%",
                border: "none",
                height: "1px",
                margin: "20px 0",
                backgroundColor: "#C7C7C7",
              }}
            ></hr>
            <p
              style={{
                width: "10%",
                textAlign: "center",
                color: "#C7C7C7",
              }}
            >
              or
            </p>
            <hr
              style={{
                width: "45%",
                border: "none",
                height: "1px",
                backgroundColor: "#C7C7C7",
                margin: "20px 0",
              }}
            ></hr>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <Button
              // onClick={handleLoginGoogle}
              sx={{ width: "100%", height: "57px" }}
              variant="outlined"
            >
              <Image
                alt="google"
                width={28}
                height={28}
                style={{
                  marginRight: "10px",
                }}
                src="/images/google.png"
              ></Image>
              Google
            </Button>
            <Button
              // onClick={handleLoginFacebook}
              sx={{ width: "100%", height: "57px" }}
              variant="outlined"
            >
              <Image
                alt="google"
                width={28}
                height={28}
                style={{
                  marginRight: "10px",
                }}
                src="/images/facebook.png"
              ></Image>
              Facebook
            </Button>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              marginBottom: { xs: "50px", md: "0px" },
            }}
          >
            <Typography variant="subtitle1">
              Dont have an account?{" "}
              <Link style={{ fontStyle: "italic" }} href="/register">
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
