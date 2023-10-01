"use client";
import { Backdrop, CircularProgress } from "@mui/material";

interface Props {
  openLoader: boolean;
  closeLoader: () => void;
}

const BackDropLoader = ({ openLoader, closeLoader }: Props) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openLoader}
      onClick={closeLoader}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackDropLoader;
