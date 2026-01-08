function WeatherCard({ weather }) {
    if (!weather) {
        return <p>NO WEATHER DATA YET. SEARCH FOR A CITY</p>
    }

    return (
        <div>
            <h2>{weather.name}</h2>
            <p>🌡️ Temperature: {weather.main?.temp} °C</p>
            <p>💧 Humidity: {weather.main?.humidity}%</p>
            <p>🌬️ Wind: {weather.wind?.speed} m/s</p>
            <p>☁️ Condition: {weather.weather?.[0]?.description}</p>
        </div>
    );
}
export default WeatherCard;