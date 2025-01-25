import { Box, Stack, Typography, Paper } from "@mui/material";

const Title = ({ children }) => {
  return (
    <Typography textAlign="center" fontSize="1.3rem" fontWeight={600}>
      {children}
    </Typography>
  );
};

const Body = ({ children }) => {
  return <Stack spacing={2}>{children}</Stack>;
};

const CenterContent = ({ children }) => {
  return (
    <Paper
      // bgcolor="#16181a"
      elevation={6}
      sx={{
        p: 3,
        width: [300, 450],
        // bgcolor: "#16181a",
        bgcolor: "backgroundInset.first",
        borderRadius: 2,
        height: "fit-content",
        mt: "10vh",
        borderColor: "borderInset.first",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      <Stack spacing={[3, 5]} direction="column">
        {children}
      </Stack>
    </Paper>
  );
};

CenterContent.Title = Title;
CenterContent.Body = Body;

export default CenterContent;
