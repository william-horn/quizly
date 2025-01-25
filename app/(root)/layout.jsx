import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";
import Wireframe from "@/components/Wireframe";
import theme from "@/themes/main";
import Header from "./Header";
import Footer from "./Footer";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Wireframe />
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body className={`antialiased`}>
            <Box
              width="100vw"
              height="100vh"
              position="fixed"
              bgcolor="background.first"
              overflow="auto"
            >
              <Header />

              <Box component="main" mt={5}>
                {children}
              </Box>

              <Footer />
            </Box>
            <SpeedInsights />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
