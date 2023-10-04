import { Box } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

interface Props {
  data: {
    name: string;
    type: string;
    description: string;
    logo: string;
  };
}

const Type = ({ data }: Props) => {
  const [type, setType] = useState("");
  const handleClick = (type: string) => {
    setType(type);
  };

  return (
   
  );
};

export default Type;
