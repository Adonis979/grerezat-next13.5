import React from "react";
import { Grid } from "@mui/material";
import LeftSideImage from "../../components/LeftSideImage";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <Grid container sx={{ position: "relative" }}>
      <Grid item xs={12} md={6}>
        {/* Left side Image */}
        <LeftSideImage />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="#FFF6F6"
      >
        {/* Right side LoginForm */}
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;
