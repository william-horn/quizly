import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ReadyUpLogo = () => {
  return (
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
  );
};

export default ReadyUpLogo;
