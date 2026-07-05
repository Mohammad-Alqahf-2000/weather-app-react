// Material UI
import Container from "@mui/material/Container";

// React
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Other

// Custom imports/*
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../features/weather/weatherSlice";
// Componests
import WeatherCard from "./WeatherCard";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

export default function WeatherDisplayer() {
  const [locale, setLocale] = useState("ar");
  const {
    data: weather,
    loading,
    error,
  } = useSelector((state) => {
    return state.weather;
  });
  const dispatch = useDispatch();
  const i18n = useTranslation().i18n;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
  useEffect(() => {
    dispatch(fetchWeather({ lat: 33.5104, lon: 36.2783 }));
  }, [dispatch]);

  // Helper
  function toggleLanguage(lang) {
    setLocale(() => {
      return lang;
    });
  }
  return (
    <>
      <Container maxWidth="sm" style={{}}>
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && weather && (
          <WeatherCard
            locale={locale}
            data={weather}
            toggleLanguage={toggleLanguage}
          />
        )}
      </Container>
    </>
  );
}
