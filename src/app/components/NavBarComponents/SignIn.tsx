"use client";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const SignIn = () => {
  const router = useRouter();
  return (
    <Box display="flex" alignItems="center" gap="20px">
      <Button
        variant="outlined"
        onClick={() => {
          router.push("/registration");
        }}
        color="secondary"
      >
        Create Account
      </Button>
      <Button
        variant="outlined"
        onClick={() => router.push("/login")}
        color="primary"
      >
        Log In
      </Button>
    </Box>
  );
};

export default SignIn;
