import { useState } from "react";
import WheatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    console.log("Searching weather for :", city)
  };
  return (
    <div className='app'>
      <h1>🌦️ Weather App</h1>
      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />
      <WheatherCard />
    </div>
  );
}

export default App;
