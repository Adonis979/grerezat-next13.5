"use client";
import { Box, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  image?: string;
}

const RightSideImage = ({ image }: Props) => {
  const router = useRouter();
  return (
    <Box
      width="100%"
      height="100vh"
      bgcolor="#E7473C"
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      position="relative"
    >
      <Image
        src="/images/RightSideRegistration.png"
        width={652}
        height={687}
        alt="logo-2"
        style={{ position: "absolute", top: "0", right: "0" }}
      />
      <Image
        src="/images/grerza-white.png"
        alt="grerza"
        width={316}
        height={58}
        style={{ marginBottom: "100px", cursor: "pointer" }}
        onClick={() => router.push("/")}
      />
    </Box>
  );
};

export default RightSideImage;
