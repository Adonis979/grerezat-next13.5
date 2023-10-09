"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
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
import Image from "next/image";
import { motion } from "framer-motion";

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
  const [showConfirmPassword, setShowConfirmPassowrd] = useState(false);
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [confirmPasswordError, setConfirmPassowrdError] = useState({
    error: false,
    helperTexT: "",
  });
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const handleSubmit = async (event: any) => {
    event?.preventDefault();
    if (confirmPassword !== password) {
      setConfirmPassowrdError({
        error: true,
        helperTexT: "Password should match",
      });
      return;
    }
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
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="flex-start"
      gap="20px"
    >
      <BackDropLoader
        openLoader={loader}
        closeLoader={() => setLoader(false)}
      />

      <Box mt="10px">
        <Image
          src="/images/Person-Red.png"
          alt="person"
          width={69}
          height={76}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: { xs: "80%", md: "60%" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#E7473C",
          }}
          fontWeight={900}
        >
          SIGN UP!
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#E7473C",
            marginLeft: "5px",
            width: "42%",
          }}
        >
          We are glad that you picked the kind of account you want. Now, please
          fill in the empty spaces !
        </Typography>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 300,
              restDelta: 0.001,
            },
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap="30px"
            mt="20px"
          >
            <TextField
              required
              placeholder="Full Name"
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
            <TextField
              required
              type={showConfirmPassword ? "text" : "password"}
              error={confirmPasswordError.error}
              helperText={confirmPasswordError.helperTexT}
              onChange={(event) => {
                setConfirmPassowrd(event.target.value);
                setConfirmPassowrdError({ error: false, helperTexT: "" });
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowConfirmPassowrd(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder="Verify Password"
              fullWidth
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap="20px"
            >
              <TextField
                required
                placeholder="City"
                value={city}
                fullWidth
                onChange={(event) => setCity(event?.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  onChange={(event) =>
                    setCountry(event?.target.value as string)
                  }
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Country"
                >
                  <MenuItem value={10}>Albania</MenuItem>
                  <MenuItem value={20}>Kosovo</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              gap="20px"
            >
              <Button
                variant="contained"
                sx={{ color: "white", bgcolor: "#E0DCC1", height: "50px" }}
                color="secondary"
                onClick={() => router.push("/register")}
              >
                Go Back
              </Button>
              <Button
                variant="contained"
                color="error"
                type="submit"
                sx={{ height: "50px" }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default RegistrationFormBusiness;
