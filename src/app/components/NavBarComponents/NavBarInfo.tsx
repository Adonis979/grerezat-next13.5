"use client";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import ProfilePopover from "./ProfilePopover";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const NavBarInfo = ({ user }: any) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box display="flex" alignItems="center" gap="20px">
      <ProfilePopover
        user={user}
        id={id}
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
      />
      <IconButton>
        <Badge badgeContent={4} color="error">
          <ChatBubbleOutlineIcon fontSize="large" color="action" />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge badgeContent={4} color="error">
          <FavoriteBorderIcon fontSize="large" color="action" />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon fontSize="large" color="action" />
        </Badge>
      </IconButton>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src={user.profilePicture} />
        </StyledBadge>
      </IconButton>
    </Box>
  );
};

export default NavBarInfo;
