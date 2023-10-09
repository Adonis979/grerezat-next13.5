"use client";
import { Box, Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { motion } from "framer-motion";

const Subscriptions = ({ index, subscription }: any) => {
  const [cookie, setCookie] = useCookies(["subscription"]);
  const router = useRouter();
  const handleContinue = (id: string) => {
    if (id === "0") {
      router.push("/register/registration?type=nomral");
    } else {
      setCookie("subscription", id, { path: "/" });
      router.push(`/register/registration?type=business`);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Box
        key="index"
        bgcolor="white"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        display="flex"
        flexDirection="column"
        border="1px solid grey"
        height={index === 1 ? "500px" : "450px"}
        width={index === 1 ? "450px" : "350px"}
        alignItems="center"
      >
        <Box
          bgcolor={
            subscription.name === "One Month"
              ? "#CD7F32"
              : subscription.name === "Three Month"
              ? "#FFD700"
              : "silver"
          }
          height="20px"
          width="100%"
        ></Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="20px"
          padding="20px"
        >
          <Typography variant="h5">
            {subscription.name.toUpperCase()}
          </Typography>
          <Image width={100} height={100} src="/images/icon.png" alt="coin" />
          <Typography variant="body1" color="blue" fontWeight={600}>
            {subscription.price} {subscription.currency}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            gap="5px"
            alignItems="center"
          >
            <Typography display="flex" alignItems="center" gap="10px">
              {subscription.name !== "1 Month Free Trial" ? (
                <CheckIcon color="success" />
              ) : (
                <ClearIcon color="error" />
              )}{" "}
              Verified seller
            </Typography>
            <Typography display="flex" alignItems="center" gap="10px">
              {subscription.name !== "1 Month Free Trial" ? (
                <CheckIcon color="success" />
              ) : (
                <ClearIcon color="error" />
              )}
              Unlimited listings per day
            </Typography>
            <Typography display="flex" alignItems="center" gap="10px">
              {subscription.name !== "1 Month Free Trial" ? (
                <CheckIcon color="success" />
              ) : (
                <ClearIcon color="error" />
              )}{" "}
              Prioritized listing
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{ width: "50%" }}
          color="success"
          onClick={() => handleContinue(subscription._id)}
        >
          Get Started
        </Button>
      </Box>
    </motion.div>
  );
};

export default Subscriptions;
