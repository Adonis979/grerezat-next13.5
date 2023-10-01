"use client";
import { Box, Button, Radio, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { checkout } from "../lib/api-requests/checkout";
import { useCookies } from "react-cookie";
import BackDropLoader from "./BackDropLoader";

const payments = [
  { name: "PayPal", image: "/images/PayPal.png", id: "0" },
  { name: "Mastercard", image: "/images/mastercard.png", id: "1" },
  { name: "Visa", image: "/images/visa.png", id: "2" },
];

const ChoosePayment = () => {
  const router = useRouter();
  const envoirment = process.env.NODE_ENV;
  const [cookie, setCookie] = useCookies(["subscription", "token"]);
  const [selectedPayment, setSelectedPayment] = useState("0");
  const [urlRedirect, setUrlRedirect] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (envoirment === "production") {
      setUrlRedirect("https://grerezat.vercel.app");
    } else setUrlRedirect("http://localhost:3000");
  }, []);

  const handleChange = (event: any, value?: string) => {
    if (value) {
      setSelectedPayment(value);
    } else setSelectedPayment(event.target.value);
  };

  const handleCheckout = async () => {
    setLoader(true);
    const data = {
      success_url: `${urlRedirect}/payment/success`,
      cancel_url: `${urlRedirect}/payment/cancel`,
      item_id: cookie.subscription,
    };
    try {
      const result = await checkout(cookie.token, data, selectedPayment);
      router.push(result.redirect_url);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
  return (
    <>
      <BackDropLoader
        openLoader={loader}
        closeLoader={() => setLoader(false)}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: { xs: "40px", sm: "none" },
          width: { xs: "80%", md: "60%" },
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "#0E2F56",
            }}
          >
            CHOOSE PAYMENT
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#272727",
              marginLeft: "10px",
            }}
          >
            Choose one of the payment methods below
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap="10px">
          {payments.map((payment) => (
            <motion.div
              key={payment.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Box
                bgcolor={payment.id === selectedPayment ? "#e8f5fa" : "white"}
                padding="20px"
                display="flex"
                alignItems="center"
                gap="20px"
                border={
                  payment.id === selectedPayment
                    ? "1px solid blue"
                    : "1px solid grey"
                }
                borderRadius="20px"
                sx={{
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onClick={() => handleChange("", payment.id)}
              >
                <Radio
                  value={payment.id}
                  onChange={(event) => handleChange(event)}
                  checked={selectedPayment === payment.id}
                />
                <Image
                  width={
                    payment.id === "1" ? 80 : payment.id === "0" ? 150 : 120
                  }
                  height={40}
                  src={payment.image}
                  alt={payment.name}
                />
              </Box>
            </motion.div>
          ))}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            gap="20px"
            mt="20px"
          >
            <Button
              variant="outlined"
              color="error"
              onClick={() => router.back()}
            >
              Go back
            </Button>
            <Button variant="outlined" color="success" onClick={handleCheckout}>
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChoosePayment;
