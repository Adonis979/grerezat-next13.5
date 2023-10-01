import Subscriptions from "@/app/components/Subscriptions";
import { getSubscriptions } from "@/app/lib/api-requests/subscriptions";
import { Box, Typography } from "@mui/material";

const freeSubscription = {
  _id: "0",
  name: "Free",
  description: "1 Month Free Trial",
  price: 0,
  currency: "EUR",
  quantity: 1,
  __v: 0,
};
const Register = async () => {
  const data = await getSubscriptions();
  const subscriptions: [] = data.concat(freeSubscription);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="#FFF6F6"
      height="100vh"
      gap="50px"
    >
      <Box
        color="rgb(14, 47, 86)"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h3" fontWeight={600}>
          WELCOME TO GRERZAT
        </Typography>
        <Typography variant="body1" color="rgb(14, 47, 86)" fontWeight={500}>
          BELOW YOU CAN CHOOSE ONE OF OUR PLANS FOR YOUR BUSINESS
        </Typography>
      </Box>
      <Box display="flex" gap="40px" alignItems="center">
        {subscriptions.map((subscription: any, index: any) => (
          <Subscriptions
            key={index}
            index={index}
            subscription={subscription}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Register;
