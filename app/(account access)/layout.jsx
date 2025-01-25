import { Box, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material";
import Wireframe from "@/components/Wireframe";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat } from "next/font/google";
import theme from "@/themes/main";
import Image from "next/image";
import "../globals.css";
import Header from "./Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ReadyUp Login",
  description: "A learning tool for students",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "900"],
  style: ["italic", "normal"],
});

const AccountAccessLayout = ({ children }) => {
  return (
    <html lang="en">
      <Wireframe />
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <Box
              width="100vw"
              height="100vh"
              position="fixed"
              bgcolor="background.first"
              overflow="auto"
            >
              {/* BACKGROUND IMAGE */}
              {/* <Box
                position="absolute"
                width="100%"
                height="100%"
                zIndex={-1}
                sx={{ pointerEvents: "none", userSelect: "none" }}
              >
                <Image
                  src="/images/account-bg.png"
                  fill
                  alt=""
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box> */}
              <Header />
              <Box component="main">{children}</Box>
              <Footer />
            </Box>
            <SpeedInsights />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
};

export default AccountAccessLayout;
