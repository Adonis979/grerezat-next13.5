import ChooseType from "@/app/components/ChooseType";
import LeftSideRegister from "@/app/components/LeftSideRegister";
import { Grid } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={5}>
        {/* LeftSide Image */}
        <LeftSideRegister />
      </Grid>
      <Grid item xs={12} md={7}>
        {/* Choose Account Type */}
        <ChooseType />
      </Grid>
    </Grid>
  );
};

export default Register;
