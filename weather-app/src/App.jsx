import { useState } from "react";
import { fetchWeather } from "./services/weatherApi";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      const data = await fetchWeather(city);
      setWeather(data);
      console.log("Weather Data:", data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="app">
      <h1>🌦️ Weather App</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />

      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
