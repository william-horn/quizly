import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Typography, Box, Container, CssBaseline, Alert } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import AccountAccess from "./AccountAccess";
import "../globals.css";
import Wireframe from "@/components/Wireframe";
import theme from "@/themes/main";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "ReadyUp",
  description: "A learning tool for students",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "900"],
  style: ["italic", "normal"],
});

const Header = () => {
  return (
    <Box
      component="header"
      mt={2}
      position="sticky"
      top={0}
      bgcolor="background.primary"
    >
      <Container maxWidth={false} sx={{ pb: 2 }}>
        <AccountAccess />
        <Box
          mt={[2, 0]}
          sx={{
            "&:hover": {
              filter: "drop-shadow(2px 0px 6px #ed6c02) grayscale(1);",
            },
            filter: "drop-shadow(2px 4px 6px black) grayscale(0);",
            width: "fit-content",
            transition: "all 0.2s",
            marginInline: ["auto", "initial"],
          }}
        >
          <Link href="/">
            <Typography
              variant="h1"
              position="relative"
              width={150}
              height={47}
              sx={{
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              <Image src="/images/logo.png" fill alt="Logo" priority />
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Wireframe />
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body className={`antialiased`}>
            <Box
              width="100vw"
              height="100vh"
              position="fixed"
              bgcolor="background.primary"
              overflow="auto"
            >
              <CssBaseline />
              <Header />

              <Alert
                severity="warning"
                variant="filled"
                sx={{ justifyContent: "center", position: "sticky", top: 60 }}
              >
                Welcome to{" "}
                <Typography variant="span" fontWeight={700}>
                  ReadyUp
                </Typography>
                . This app is currently in very early stages of development.
                Thank you for your patience as we sort things out.
              </Alert>

              <Box component="main" mt={5}>
                {children}
              </Box>
            </Box>
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
