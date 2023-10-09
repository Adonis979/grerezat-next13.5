import RegistrationForm from "@/app/components/RegistrationForm";
import RightSideImage from "@/app/components/RightSideImage";
import { Grid } from "@mui/material";

const BusinessRegistration = ({ searchParams }: any) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={7}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="#F5F5F5"
      >
        <RegistrationForm type={searchParams.type} />
      </Grid>
      <Grid item xs={12} md={5}>
        <RightSideImage />
      </Grid>
    </Grid>
  );
};

export default BusinessRegistration;
