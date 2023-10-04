"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LeftSideRegister = () => {
  const router = useRouter();
  return (
    <Box
      bgcolor="#E7473C"
      height="100vh"
      display="flex"
      pt="80px"
      position="relative"
    >
      <Image
        src="/images/LogoFooter.png"
        alt="logo-footer"
        width={550}
        height={420}
        style={{ position: "absolute", left: "0", bottom: "0" }}
      />
      <Box display="flex" flexDirection="column" alignItems="start" ml="60px">
        <Image
          src="/images/grerza-white.png"
          alt="grerza"
          width={316}
          height={58}
          style={{ marginBottom: "100px", cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
        <Box display="flex" flexDirection="column" gap="37px" width="80%">
          <Typography variant="h2" color="#F5F5F5" sx={{ fontWeight: "900" }}>
            WELCOME!
          </Typography>
          <Typography
            color="#F5F5F5"
            fontWeight={400}
            textAlign="start"
            width="80%"
          >
            We are happy to have you here. If you have problems to sign up,
            please let us know!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              color: "white",
              width: "30%",
              height: "50px",
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSideRegister;
