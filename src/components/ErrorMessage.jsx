import { Stack, Typography } from "@mui/material";

export default function ErrorMessage({ message }) {
  return (
    <>
      <Stack>
        <Typography variant="h6" color="error">
        {message}
        </Typography>
      </Stack>
    </>
  );
}
