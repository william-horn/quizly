import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" borderTop={1} borderColor="borderInset.first">
      <Box py={2}>
        <Typography textAlign="center" fontWeight={900}>
          ReadyUp © 2025
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
