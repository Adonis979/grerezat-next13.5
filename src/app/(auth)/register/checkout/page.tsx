import { Grid } from "@mui/material";
import ChoosePayment from "@/app/components/ChoosePayment";
import LeftSideImage from "@/app/components/LeftSideImage";

const Checkout = () => {
  return (
    <Grid container sx={{ position: "relative" }}>
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
        <ChoosePayment />
      </Grid>
    </Grid>
  );
};

export default Checkout;
