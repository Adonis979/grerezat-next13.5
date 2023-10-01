"use client";
import { Box, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import illustration from "../../../public/images/store-illustration.jpg";

interface Props {
  image?: string;
}

const LeftSideImage = ({ image }: Props) => {
  const router = useRouter();
  return (
    <Box width="100%" height="100vh">
      <Box height="100%" width="100%" position="relative">
        <Image
          loading="eager"
          style={{ objectFit: "cover", position: "absolute" }}
          alt="grerza"
          src={image ? image : "/images/layout-2.png"}
          layout="fill"
        />
      </Box>
      <Image
        onClick={() => router.push("/")}
        width={200}
        height={35}
        style={{
          position: "absolute",
          top: "66px",
          left: "38px",
          cursor: "pointer",
        }}
        alt="grerzat"
        src="/images/grerza-white.png"
      />
    </Box>
  );
};

export default LeftSideImage;
