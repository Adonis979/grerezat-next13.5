import React, { useState } from "react";

const usePassword = () => {
  let passwordRegex = /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]\w{7,14}$/;
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({
    error: false,
    helperText: "",
  });
  const handleChangePassword = (event: any) => {
    setPasswordError({ error: false, helperText: "" });
    setPassword(event.target.value);
  };

  const validatePassword = () => {
    if (passwordRegex.test(password)) {
      setPasswordError({ error: false, helperText: "" });
      return true;
    }
    setPasswordError({
      error: true,
      helperText: "Password must contain at least 7-16 characters",
    });
    return false;
  };
  return {
    password,
    passwordError,
    setPasswordError,
    handleChangePassword,
    validatePassword,
  };
};

export default usePassword;
