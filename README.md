# Weather App

A bilingual (Arabic / English) weather dashboard built with React. It fetches live weather data for Damascus from the [OpenWeatherMap API](https://openweathermap.org/) and displays temperature, conditions, and min/max values with RTL/LTR layout support.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Material UI](https://img.shields.io/badge/MUI-9-007FFF?logo=mui&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?logo=redux&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-26-26A69A?logo=i18next&logoColor=white)

## Live Demo

https://weather-app-react-mq.netlify.app

## Features

- Real-time weather data from OpenWeatherMap
- Arabic and English language toggle with `i18next`
- RTL / LTR layout switching for Arabic and English
- Global state management with **Redux Toolkit** and `createAsyncThunk`
- Separated API layer (`weatherService`) from state logic (`weatherSlice`)
- Loading spinner and error state UI
- Material UI components with a custom glass-style card design
- IBM Plex Sans Arabic custom font support

## Tech Stack

| Category | Tools |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| State management | Redux Toolkit, React-Redux |
| UI | Material UI (MUI) |
| HTTP client | Axios |
| Internationalization | i18next, react-i18next |
| Date formatting | Moment.js |
| API | OpenWeatherMap |

## Architecture

Data flows through three layers:

```
Component  →  dispatch(fetchWeather)  →  weatherSlice (createAsyncThunk)
                                                    ↓
                                          weatherService (Axios)
                                                    ↓
                                          OpenWeatherMap API
```

| Layer | Responsibility |
|---|---|
| `components/` | UI rendering, user interactions |
| `features/weather/` | Redux state, async thunks, reducers |
| `services/` | HTTP requests to external APIs |

## Project Structure

```
src/
├── app/
│   └── store.js               # Redux store configuration
├── features/
│   └── weather/
│       └── weatherSlice.js    # Weather state, fetchWeather thunk, reducers
├── components/
│   ├── WeatherDisplayer.jsx   # Main container — dispatches fetch, handles locale
│   ├── WeatherCard.jsx        # Weather UI card
│   ├── Loader.jsx             # Loading spinner
│   └── ErrorMessage.jsx       # Error display
├── services/
│   └── weatherService.js      # OpenWeatherMap API calls (Axios)
├── utils/
│   └── formatDate.js          # Localized date formatting
├── i18n.js                    # i18next configuration
├── App.jsx
└── main.jsx                   # Redux Provider setup

public/
└── locales/
    ├── ar/translation.json
    └── en/translation.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- An [OpenWeatherMap API key](https://openweathermap.org/api) (free tier works)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/weather-project.git
cd weather-project
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root (or copy from `.env.example`):

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

5. Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy to Netlify

### Option 1 — Connect GitHub (recommended)

1. Push this project to a GitHub repository.
2. Go to [Netlify](https://www.netlify.com/) and sign in.
3. Click **Add new site → Import an existing project**.
4. Choose **GitHub** and select your repository.
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Under **Site settings → Environment variables**, add:
   - Key: `VITE_WEATHER_API_KEY`
   - Value: your OpenWeatherMap API key
7. Click **Deploy site**.

### Option 2 — Manual deploy

```bash
npm run build
```

Drag and drop the `dist` folder into the Netlify dashboard.

> **Important:** Environment variables must be set in Netlify before building. Vite injects `VITE_*` variables at build time — they are not read from a `.env` file on the server.

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `VITE_WEATHER_API_KEY` | Your OpenWeatherMap API key | Yes |

Never commit your `.env` file. The `.gitignore` already excludes it.

## What I Learned

- Global state management with Redux Toolkit and `createAsyncThunk`
- Feature-based folder structure (`app/`, `features/`, `services/`)
- Separating API calls (service layer) from state logic (slice)
- Fetching data from a REST API with Axios
- Managing loading, success, and error UI states
- Internationalization (i18n) with Arabic RTL support
- Component-based architecture and separation of concerns
- Styling with Material UI and custom themes

## Author

**Mohammad Alqahf**

- GitHub: [@Mohammad-Alqahf-2000](https://github.com/Mohammad-Alqahf-2000)
- LinkedIn: [mohammad alqahf](https://www.linkedin.com/in/mohammad-alqahf-204046212/)
