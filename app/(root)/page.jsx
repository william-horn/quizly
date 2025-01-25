import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box minHeight="100vh">
      <Container maxWidth="sm">
        <Stack spacing={5} display="flex" alignItems="center">
          <Stack
            border={1}
            borderColor="borderInset.first"
            spacing={2}
            display="flex"
            alignItems="center"
            p={2}
            borderRadius={2}
            sx={{
              bgcolor: "backgroundInset.first",
            }}
          >
            <Typography textAlign="center">
              This app is not quite ready to use yet. In the meantime, please
              enjoy this stock image of a cute bear waving at you.
            </Typography>
            <Typography>Thank you.</Typography>
            <Typography fontWeight={600}>- Will</Typography>
          </Stack>
          <Box
            width={300}
            height={450}
            position="relative"
            borderRadius={2}
            border={1}
            sx={{ clipPath: "border-box" }}
          >
            <Image
              src="/images/cute-bear.webp"
              fill
              alt="Cute bear"
              priority
              style={{ borderRadius: 8 }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
