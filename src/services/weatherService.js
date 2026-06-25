import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

const getWeatherByCoord = async (coord, signal) => {
  const response = await weatherApi.get("/weather", {
    params: {
      lat: coord.lat || 33.5104,
      lon: coord.lon || 36.2783,
      units: "metric",
      appid: API_KEY,
    },
    signal,
  });
  return response.data;
};
export { getWeatherByCoord };
