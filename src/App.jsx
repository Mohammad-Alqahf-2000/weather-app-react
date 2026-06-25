import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WeatherDisplayer from "./components/WeatherDisplayer";

const theme = createTheme({
  // palette: {
  //   primary: {},
  // },
  typography: {
    fontFamily: ["IBM"],
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div id="app" className="app">
          <WeatherDisplayer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
