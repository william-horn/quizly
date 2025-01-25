import ReadyUpLogo from "@/components/Images/ReadyUpLogo";
import { Box } from "@mui/material";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <Box component="header">
      <Container maxWidth={false} sx={{ py: 2 }}>
        <ReadyUpLogo />
      </Container>
    </Box>
  );
};

export default Header;
