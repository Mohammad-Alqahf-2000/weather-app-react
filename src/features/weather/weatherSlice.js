import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherByCoord } from "../../services/weatherService";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (coord, { signal, rejectWithValue }) => {
    try {
      const data = await getWeatherByCoord(coord, signal);
      return data;
    } catch (e) {
      if (e.name === "AbortError" || e.code === "ERR_CANCELED") {
        return rejectWithValue(null);
      }
      return rejectWithValue(
        e.response?.data?.message ||
          e.message ||
          "Something went wrong. Try again later.",
      );
    }
  },
);

const initialState = {
  loading: false,
  error: null,
  data: null,
};
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
          state.data = null;
        }
      });
  },
});

export const { clearError } = weatherSlice.actions;
export default weatherSlice.reducer;
