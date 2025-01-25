"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Alert,
  Button,
  Fade,
  Stack,
  Divider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { useTheme } from "@emotion/react";

const AccountAccess = () => {
  return (
    <Box
      display="flex"
      gap={2}
      justifyContent="center"
      height="fit-content"
      ml="auto"
      mr={["auto", "initial"]}
      className="header-account-access"
    >
      <Link href="/login">
        <Button variant="contained" sx={{ fontWeight: 600 }}>
          Login
        </Button>
      </Link>

      <Button variant="outlined" color="secondary" sx={{ fontWeight: 600 }}>
        Sign Up
      </Button>
    </Box>
  );
};

const NavButton = ({ children, href }) => {
  return (
    <Link href={href}>
      <Button
        color="navButton"
        sx={{ "&:hover": { textDecoration: "underline" } }}
      >
        {children}
      </Button>
    </Link>
  );
};

const Nav = () => {
  return (
    <Stack
      direction="row"
      sx={{ mx: ["auto", "initial"] }}
      flexWrap="wrap"
      gap={2}
      justifyContent="center"
      className="header-nav"
    >
      <NavButton href="/home">Home</NavButton>
      <NavButton href="/about">About</NavButton>
      <NavButton href="/explore">Explore</NavButton>
      <NavButton href="/account">Account</NavButton>
    </Stack>
  );
};

const PageAlert = ({ children, severity, variant }) => {
  const fadeOutTime = 0.5 * 1000; // Time it takes to fade out the alert when clicked (disabled)
  const hideDuration = 60 * 1000; // Time until the alert appears again after close

  // Last timestamp of user hiding the alert
  const [getCloseTime, setCloseTime] = useLocalStorageState(
    "alertCloseTime",
    0
  );

  // Determines whether the alert is rendered or not rendered
  const [rendered, setRendered] = useState(false);

  // Determines whether the alert is shown or hidden
  useEffect(() => {
    setRendered(Date.now() - getCloseTime() > hideDuration);
  }, [getCloseTime()]);

  const ConditionallyRenderAlert = () => {
    return rendered ? (
      <Alert
        onClick={() => setCloseTime(Date.now())}
        severity={severity}
        variant={variant}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {children}
      </Alert>
    ) : (
      <></>
    );
  };

  return (
    // <Fade in={rendered} timeout={fadeOutTime}>
    //   <div style={{ opacity: rendered ? 1 : 0 }}>
    //     <ConditionallyRenderAlert />
    //   </div>
    // </Fade>
    <ConditionallyRenderAlert />
  );
};

const Header = () => {
  const theme = useTheme();

  return (
    // HEADER BACKGROUND
    <Box
      component="header"
      position="sticky"
      top={0}
      bgcolor="background.first"
      zIndex={1000}
      borderBottom={1}
      borderColor="borderInset.first"
      sx={{
        filter: `drop-shadow(2px 4px 6px ${theme.palette.background.primaryInsetDark})`,
      }}
    >
      {/* HEADER STACK BACKGROUND */}
      <Box position="relative" className="header-stack-background">
        {/* <Box
          width="100%"
          height="100%"
          position="absolute"
          className="header-images"
        >
          <Box position="absolute" width={60} height={60}>
            <Image
              src="/images/gear.png"
              fill
              alt=""
              style={{ objectFit: "cover", zIndex: -1, opacity: 0.4 }}
            />
          </Box>
        </Box> */}

        {/* <Box position="absolute" width="50vw" height="100%">
          <Image
            src="/images/header-bg-2.png"
            fill
            alt=""
            style={{ objectFit: "cover", zIndex: -1, opacity: 0.4 }}
          />
        </Box> */}
        {/* HEADER STACK */}
        <Stack spacing={2} py={2} className="header-stack">
          {/* MAIN HEADER CONTENT (LOGO, NAV, ACCOUNT ACCESS) */}
          <Container maxWidth={false}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap={2}
            >
              {/* LOGO */}
              <Box
                className="header-logo"
                mx={["auto", "initial"]}
                sx={{
                  "&:hover": {
                    filter: "drop-shadow(2px 0px 6px black) grayscale(1);",
                  },
                  filter: "drop-shadow(2px 4px 6px black) grayscale(0);",
                  width: "fit-content",
                  transition: "all 0.2s",
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
                    <Image src="/images/logo.png" fill alt="Logo" />
                  </Typography>
                </Link>
              </Box>

              {/* NAV */}
              <Nav />

              {/* ACCOUNT ACCESS (LOGIN/SIGNUP) */}
              <AccountAccess />
            </Box>
          </Container>
        </Stack>
      </Box>

      {/* PAGE ALERTS */}
      <Stack className="page-alerts">
        <PageAlert severity="info" variant="filled">
          Welcome to{" "}
          <Typography variant="span" fontWeight={700}>
            ReadyUp
          </Typography>
          . This app is currently in very early stages of development. Thank you
          for your patience as we sort things out.
        </PageAlert>
      </Stack>
    </Box>
  );
};

export default Header;
