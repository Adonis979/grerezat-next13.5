"use client";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useEmail from "../hooks/useEmail";
import usePassword from "../hooks/usePassword";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useRouter } from "next/navigation";
import { register } from "../lib/api-requests/user";
import BackDropLoader from "./BackDropLoader";
import { useCookies } from "react-cookie";

const RegistrationFormBusiness = ({ type }: any) => {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["token"]);
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const { email, emailError, setEmailError, handleChangeEmail, validateEmail } =
    useEmail();
  const { password, passwordError, handleChangePassword, validatePassword } =
    usePassword();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (event: any) => {
    event?.preventDefault();
    const emailError = validateEmail();
    const passwordError = validatePassword();
    if (emailError && passwordError) {
      const data = {
        username: name,
        email,
        password,
        type: type,
      };
      setLoader(true);
      try {
        const result = await register(data);
        setCookie("token", result.token, { path: "/" });
        router.push("/register/checkout");
      } catch (error: any) {
        const errorMessage = JSON.parse(error.message);
        if (error.cause === 418) {
          setCookie("token", errorMessage.token, { path: "/" });
          router.push("/register/checkout");
        }
        setEmailError({
          error: true,
          helperText: errorMessage.message || errorMessage,
        });
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
            EXPLORE WITH US
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#272727",
              marginLeft: "10px",
            }}
          >
            Inform us more about your business
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap="20px"
            mt="20px"
          >
            <TextField
              required
              placeholder="Company Name"
              fullWidth
              onChange={(event) => setName(event?.target.value)}
            />
            <TextField
              required
              placeholder="Email Address"
              fullWidth
              onChange={handleChangeEmail}
              error={emailError.error}
              helperText={emailError.helperText}
            />
            <TextField
              required
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder="Password"
              fullWidth
              onChange={handleChangePassword}
              error={passwordError.error}
              helperText={passwordError.helperText}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              gap="20px"
            >
              <Button
                variant="outlined"
                color="error"
                onClick={() => router.push("/register")}
              >
                Go Back
              </Button>
              <Button variant="outlined" color="success" type="submit">
                Register
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RegistrationFormBusiness;
