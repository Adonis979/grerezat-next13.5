import { Box, Button } from "@mui/material";
import NavBarLogo from "./NavBarComponents/NavBarLogo";
import NavBarSearch from "./NavBarComponents/NavBarSearch";
import NavBarInfo from "./NavBarComponents/NavBarInfo";
import NavBarDrawer from "./NavBarComponents/NavBarDrawer";
import { cookies } from "next/headers";
import SignIn from "./NavBarComponents/SignIn";

const NavBar = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const data = cookieStore.get("user");
  let user;
  if (data) {
    user = JSON.parse(data.value);
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py="15px"
      px="30px"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
      bgcolor="#ffff"
    >
      <Box display="flex" alignItems="center" gap="20px">
        {/* Drawer */}
        <NavBarDrawer />
        {/* Logo */}
        <NavBarLogo />
      </Box>
      {/* Search */}
      <NavBarSearch />
      {/* Info */}
      {user ? <NavBarInfo user={user} /> : <SignIn />}
    </Box>
  );
};

export default NavBar;
