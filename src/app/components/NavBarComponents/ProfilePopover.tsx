import { ExpandLess, ExpandMore } from "@material-ui/icons";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ReceiptIcon from "@mui/icons-material/Receipt";
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Popover,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const ProfilePopover = ({ id, open, anchorEl, handleClose, user }: any) => {
  const [openCollapse, setOpenCollapse] = useState([
    { name: "profile", state: false },
    { name: "settings", state: false },
  ]);
  const [cookie, setCookie, removeCookie] = useCookies(["token", "user"]);
  const router = useRouter();

  const handleClick = (data: string) => {
    const newState = openCollapse.map((collapse) => {
      if (collapse.name === data) {
        return { ...collapse, state: !collapse.state };
      }

      return collapse;
    });
    setOpenCollapse(newState);
  };

  const handleLogout = () => {
    removeCookie("token");
    removeCookie("user");
    router.push("/login");
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      PaperProps={{
        style: {
          borderRadius: "20px", // Set the border-radius to 20px
        },
      }}
    >
      <Box p="20px" width="400px">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="10px"
        >
          <Image
            src={user.profilePicture}
            height={100}
            width={100}
            alt="user-picture"
            style={{ borderRadius: "50%" }}
          />
          <Typography variant="h5">Hi {user.username}!</Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{ textAlign: "center" }}
              >
                Manage Your Account
              </ListSubheader>
            }
          >
            <ListItemButton onClick={() => handleClick("profile")}>
              <ListItemText primary="Profile" />
              {openCollapse.find((collapse) => collapse.name === "profile")
                ?.state ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </ListItemButton>
            <Collapse
              in={
                openCollapse.find((collapse) => collapse.name === "profile")
                  ?.state
              }
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile managment" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <LocalMallIcon />
                  </ListItemIcon>
                  <ListItemText primary="Manage your listings" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={() => handleClick("settings")}>
              <ListItemText primary="Settings" />
              {openCollapse.find((collapse) => collapse.name === "settings")
                ?.state ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </ListItemButton>
            <Collapse
              in={
                openCollapse.find((collapse) => collapse.name === "settings")
                  ?.state
              }
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SubscriptionsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Manage Subscriptions" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ReceiptIcon />
                  </ListItemIcon>
                  <ListItemText primary="Transaction History" />
                </ListItemButton>
              </List>
            </Collapse>
            <Divider />
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Sign out from your account" />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </Popover>
  );
};

export default ProfilePopover;
