"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const AccType = [
  {
    name: "Private Account",
    type: "normal",
    description:
      "This account is for regular users who are interested in purchasing.",
    logo: "/images/Person.png",
  },
  {
    name: "Business Account",
    type: "business",
    description:
      "This account is intended for business users who have an interest in selling.",
    logo: "/images/Market.png",
  },
];

const ChooseType = () => {
  const [type, setType] = useState("");
  const router = useRouter();
  const handleClick = (accType: string) => {
    if (accType === type) {
      setType("");
    } else setType(accType);
  };

  const handleContinue = () => {
    if (type === "business") {
      router.push("/register/subscription-plans");
    } else router.push("/register/registration");
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      bgcolor="#F5F5F5"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Image
        src="/images/LogoFooter2.png"
        width={400}
        height={380}
        alt="logo-2"
        style={{ position: "absolute", top: "0", right: "0" }}
      />
      <Box display="flex" flexDirection="column" gap="70px">
        <Box display="flex" flexDirection="column" gap="33px" color="#343434">
          <Typography variant="h2" fontWeight={900} sx={{ display: "flex" }}>
            SIGN UP!
          </Typography>
          <Typography variant="body1" fontWeight={400} sx={{ display: "flex" }}>
            Please select the account form in which you need to sign up!
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="70px">
          <Box display="flex" gap="22px">
            {AccType.map((data) => (
              <motion.div
                key={data.name}
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
                  width="315px"
                  height="287px"
                  bgcolor={type === data.type ? "red" : "#E0DCC1"}
                  borderRadius="20px"
                  boxShadow="-4px 6px 16px 0px #D9D9D9"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  gap="15px"
                  color="white"
                  padding="20px"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleClick(data.type)}
                >
                  <Image
                    src={data.logo}
                    alt={data.type}
                    width={75}
                    height={75}
                  />
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Typography fontSize={"26px"} fontWeight={600}>
                      {data.name.toUpperCase()}
                    </Typography>
                    <Typography variant="subtitle2" textAlign="center">
                      {data.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Box display="flex" width="600px" gap="50px">
            <Typography fontWeight={500} variant="body1" color="#343434">
              Once you have made your choice, we will be pleased to proceed with
              the registration.
            </Typography>
            <Button
              onClick={handleContinue}
              variant="contained"
              color="error"
              sx={{ width: "150px", height: "50px" }}
              disabled={!type}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChooseType;
