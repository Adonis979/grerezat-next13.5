import LeftSideImage from "@/app/components/LeftSideImage";
import RegistrationForm from "@/app/components/RegistrationForm";
import { Grid } from "@mui/material";

const BusinessRegistration = ({ searchParams }: any) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <LeftSideImage image={"/images/store-illustration.jpg"} />
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
        <RegistrationForm type={searchParams.type} />
      </Grid>
    </Grid>
  );
};

export default BusinessRegistration;
