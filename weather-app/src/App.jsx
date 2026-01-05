import WheatherCard from "./components/WheatherCard";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className='app'>
      <h1>🌦️ Weather App</h1>
      <SearchBar />
      <WheatherCard />
    </div>
  );
}

export default App;
