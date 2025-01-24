"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Typography, Alert, Button, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { useTheme } from "@emotion/react";

/*
	Login/Signup Component
*/
const AccountAccess = () => {
  return (
    <Box
      display="flex"
      gap={2}
      justifyContent="center"
      sx={{ float: ["center", "right"] }}
    >
      <Button variant="contained" sx={{ fontWeight: 600 }}>
        Login
      </Button>
      <Button variant="outlined" color="secondary" sx={{ fontWeight: 600 }}>
        Sign Up
      </Button>
    </Box>
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
    <Box
      component="header"
      pt={2}
      position="sticky"
      top={0}
      bgcolor="background.primary"
      zIndex={1000}
      borderBottom={1}
      borderColor="background.primaryInsetBorderLight"
      sx={{
        filter: `drop-shadow(2px 4px 6px ${theme.palette.background.primaryInsetDark})`,
      }}
    >
      <Container maxWidth={false} sx={{ pb: 2 }}>
        <AccountAccess />
        <Box
          mt={[2, 0]}
          sx={{
            "&:hover": {
              filter: "drop-shadow(2px 0px 6px black) grayscale(1);",
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

      <PageAlert severity="info" variant="filled">
        Welcome to{" "}
        <Typography variant="span" fontWeight={700}>
          ReadyUp
        </Typography>
        . This app is currently in very early stages of development. Thank you
        for your patience as we sort things out.
      </PageAlert>
      <PageAlert severity="error" variant="filled">
        Failed to connect to database
      </PageAlert>
    </Box>
  );
};

export default Header;
