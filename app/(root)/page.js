import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box minHeight="100vh">
      <Container maxWidth="sm">
        <Stack spacing={2} display="flex" alignItems="center">
          <Stack
            border={1}
            borderColor="background.primaryInsetBorder"
            spacing={2}
            display="flex"
            alignItems="center"
            p={2}
            borderRadius={2}
            sx={{ bgcolor: "background.primaryInset" }}
          >
            <Typography textAlign="center" fontWeight={600}>
              This app is not quite ready to use yet. In the meantime, please
              enjoy this stock image of a cute bear waving at you.
            </Typography>
            <Typography fontWeight={600}>Thank you.</Typography>
            <Typography fontWeight={600}>- Will</Typography>
          </Stack>
          <Box width={300} height={450} position="relative">
            <Image src="/images/cute-bear.webp" fill alt="Cute bear" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
