import React, { useState } from "react";

const useEmail = () => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({
    error: false,
    helperText: "",
  });
  const handleChangeEmail = (event: any) => {
    setEmailError({ error: false, helperText: "" });
    setEmail(event?.target.value);
  };

  const validateEmail = () => {
    if (emailRegex.test(email)) {
      setEmailError({ error: false, helperText: "" });
      return true;
    }
    setEmailError({ error: true, helperText: "Please provide a valid email" });
    return false;
  };
  return {
    email,
    emailError,
    setEmailError,
    handleChangeEmail,
    validateEmail,
  };
};

export default useEmail;
