"use client";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import newStyled from "@emotion/styled";

const LoginForm = () => {
  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField
          variant="outlined"
          fullWidth
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          placeholder="Email"
          helperText="Enter your registered email above"
        />
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Password"
          helperText="Enter your password above"
        />
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: [3, 5],
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Typography>Or</Typography>
        <Button variant="outlined" color="secondary" sx={{ fontWeight: 600 }}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
