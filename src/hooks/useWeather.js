import { useState, useRef, useEffect } from "react";
import { getWeatherByCoord } from "../services/weatherService";

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const controller = useRef(null);

  const fetchWeather = async (coord) => {
    if (controller.current) {
      controller.current.abort();
    }
    controller.current = new AbortController();
    try {
      setLoading(true);
      setError(null);

      const data = await getWeatherByCoord(coord, controller.current.signal);
      setWeather(data);
    } catch (e) {
      if (e.name === "AbortError" || e.code === "ERR_CANCELED") return;
      setError(
        e.response?.data?.message ||
          e.message ||
          "Something went wrong. Try again later.",
      );
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    return () => {
      if (controller.current) {
        controller.current.abort();
      }
    };
  }, []);

  return { weather, loading, error, fetchWeather };
}
