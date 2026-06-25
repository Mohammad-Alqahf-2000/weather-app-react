// Import Material UI Compontents
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// React imports
import { useMemo } from "react";
// Other Imports
import { useTranslation } from "react-i18next";
import { formatDate } from "../utils/formatDate";

const MyDivider = styled(Divider)(() => ({
  borderBottomWidth: 2,
  background: "#fff",
  marginBlock: "4px 0px",
}));

export default function WeatherCard({ locale, data, toggleLanguage }) {
  const t = useTranslation().t;
  const weather = useMemo(() => {
    return {
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      min: Math.round(data.main.temp_min),
      max: Math.round(data.main.temp_max),
      icon: data.weather[0].icon,
    };
  }, [data]);
  const date = formatDate;
  // Handlers
  function handleChangeLanguageClick() {
    if (locale == "ar") {
      toggleLanguage("en");
    } else if (locale == "en") {
      toggleLanguage("ar");
    }
  }
  return (
    <Stack>
      <Stack
        sx={{
          background: "#42424244",
          color: "#fff",
          padding: "0px 5px",
          borderRadius: "8px",
          boxShadow: "0px 0px 12px 1px rgba(0,0,0,0.4)",
        }}
      >
        {/* Header Section */}
        <Stack
          dir={locale == "ar" ? "rtl" : "ltr"}
          direction="row"
          sx={{
            padding: "5px 10px",
            alignItems: "end",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "58px",
              margin: "0px 15px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {t("damascus")}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "20px",
              margin: "0px 15px",
              color: "#f7f7f789",
            }}
          >
            {/* {formattedDate} */}
            {date(locale)}
          </Typography>
        </Stack>
        {/* END Header Section */}

        <MyDivider />
        {/* Body Section */}
        <Grid
          dir={locale == "ar" ? "rtl" : "ltr"}
          container
          spacing={2}
          sx={{ padding: "8px" }}
        >
          {/* Info Section */}
          <Grid size={6}>
            <Stack sx={{ justifyContent: "space-around", height: "100%" }}>
              {/* Degree Section */}
              <Stack
                direction="row"
                sx={{ justifyContent: "center", gap: "10px" }}
              >
                <Typography
                  variant="h1"
                  sx={{ fontSize: "82px", fontWeight: "500" }}
                >
                  {weather.temperature}
                  <sup style={{ fontSize: "28px" }}>&deg;</sup>
                </Typography>
              </Stack>
              {/* END Degree Section */}
              {/* Weather State */}
              <Typography variant="h6" sx={{ color: "#fbfbfb91" }}>
                {t(weather.description)}
              </Typography>
              {/* END Weather State */}
              {/* MAX MIN Degree Section */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  textWrap: "no-wrap",
                }}
              >
                <Typography variant="h7">
                  {t("max")} : {weather.max}
                </Typography>
                <Typography variant="h7" sx={{ margin: "0px 10px" }}>
                  |
                </Typography>
                <Typography variant="h7">
                  {t("min")} : {weather.min}
                </Typography>
              </Stack>
              {/* END MAX MIN Degree Section */}
            </Stack>
          </Grid>
          {/* END Info Section */}
          {/* Icon Section */}
          <Grid size={6}>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
              alt={weather.description || "Weather icon"}
              style={{
                width: "200px",
                height: "200px",
                imageRendering: "pixelated",
              }}
            />
            {/* <CloudIcon sx={{ fontSize: "200px" }} /> */}
          </Grid>
          {/* END Icon Section */}
        </Grid>
        {/* END Body Section */}
      </Stack>

      {/* Locale Button Section */}
      <Stack direction="row" sx={{ margin: "5px 0px 0px 0px" }}>
        <Button
          variant="text"
          sx={{ color: "#eee", fontSize: "14px" }}
          onClick={handleChangeLanguageClick}
        >
          {t("language")}
        </Button>
      </Stack>
      {/* END Locale Button Section  */}
    </Stack>
  );
}
