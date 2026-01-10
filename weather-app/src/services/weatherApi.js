const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


console.log("API KEY:", import.meta.env.VITE_WEATHER_API_KEY);

export async function fetchWeatherByCity(city) {
    const response = await fetch(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weather");
    }

    return data;
}


export async function fetchWeatherByCoords(lat, lon) {
    const response = await fetch(
        `${BASE_URL}?lat =${lat}&lon =${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weather by coordinates");
    }
    return data;
}
