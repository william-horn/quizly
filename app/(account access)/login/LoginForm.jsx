"use client";
import { Box, Stack, TextField, Button } from "@mui/material";

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
          placeholder="Username"
          helperText="Enter your username above"
        />
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Password"
          helperText="Enter your username above"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "fit-content", mx: "auto" }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
