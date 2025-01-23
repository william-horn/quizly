"use client";
const { Box, Button } = require("@mui/material");

const AccountAccess = ({ children }) => {
  const onClick = () => {
    console.log("Clicked!");
  };

  return (
    <Box
      display="flex"
      gap={2}
      justifyContent="center"
      sx={{ float: ["center", "right"] }}
    >
      <Button variant="contained" onClick={onClick} sx={{ fontWeight: 600 }}>
        Login
      </Button>
      <Button
        variant="outlined"
        onClick={onClick}
        color="secondary"
        sx={{ fontWeight: 600 }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default AccountAccess;
