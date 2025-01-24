import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      borderTop={1}
      borderColor="background.primaryInsetBorderLight"
    >
      <Box py={2}>
        <Typography textAlign="center" fontWeight={900}>
          © 2025
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
