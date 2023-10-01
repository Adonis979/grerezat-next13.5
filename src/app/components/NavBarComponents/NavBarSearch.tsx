"use client";
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";

const NavBarSearch = () => {
  return (
    <Box>
      <Autocomplete
        freeSolo
        sx={{ width: "400px" }}
        options={[]}
        renderInput={(params) => (
          <TextField {...params} label="Search your favorite business " />
        )}
      />
    </Box>
  );
};

export default NavBarSearch;
