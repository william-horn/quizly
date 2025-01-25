import { Box, Typography, Container } from "@mui/material";
import CenterContent from "../CenterContent";
import { TextField } from "@mui/material";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <Box height="100vh" sx={{ justifyContent: "center", display: "flex" }}>
      <CenterContent>
        <CenterContent.Title>Sign In</CenterContent.Title>
        <CenterContent.Body>
          <LoginForm />
        </CenterContent.Body>
      </CenterContent>
    </Box>
  );
};

export default LoginPage;
