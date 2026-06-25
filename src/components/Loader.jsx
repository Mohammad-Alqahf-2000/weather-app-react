import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Stack
          sx={{
            background: "#42424244",
            color: "#fff",
            padding: "0px 5px",
            borderRadius: "8px",
            boxShadow: "0px 0px 12px 1px rgba(0,0,0,0.4)",
            height: "16rem",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={200} color="#b5b5b5" />
        </Stack>
      </Stack>
    </>
  );
}
