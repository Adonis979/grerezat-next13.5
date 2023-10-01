"use client";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListSubheader,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import InfoIcon from "@mui/icons-material/Info";

const NavBarDrawer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer open={open} onClose={handleClose}>
        <Box width="400px" display="flex" flexDirection="column">
          <Box display="flex" alignItems="center" justifyContent="center">
            <Image
              src="/images/GrerezatLogo.jpg"
              width={280}
              height={90}
              alt="logo"
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                px: "20px",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Navigate
                </ListSubheader>
              }
            >
              <IconButton
                sx={{
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "20px",
                }}
              >
                <HomeIcon fontSize="large" />
                <Typography variant="h6" fontWeight={600}>
                  Home
                </Typography>
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "20px",
                }}
              >
                <StoreIcon fontSize="large" />
                <Typography variant="h6" fontWeight={600}>
                  Businesses
                </Typography>
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "20px",
                }}
              >
                <InfoIcon fontSize="large" />
                <Typography variant="h6" fontWeight={600}>
                  About Us
                </Typography>
              </IconButton>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBarDrawer;
