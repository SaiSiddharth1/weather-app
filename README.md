# 🌦️ Weather App (React)

A fully functional **Weather web application** built with **React (JSX)** that allows users to search weather by city, auto-detect their location, display real-time weather data, and handle loading/error states gracefully.  

This project was built incrementally with **daily GitHub commits** to simulate real-world product development.

---

## 🚀 Features

* 🔍 **City-based Weather Search**  
* 🌍 **Auto-detect User Location** (browser Geolocation API)  
* 🌡️ **Real-time Weather Data**: Temperature, Humidity, Wind Speed, Condition  
* ⏳ **Loading State** while fetching data  
* ⚠️ **Error Handling** for invalid cities or API failures  
* 🧩 **Clean Component Architecture** with service layer for API calls  
* 🔄 **Branch-based Git Workflow** for feature development

---

## 🛠 Tech Stack

* **Frontend:** React (JSX)  
* **Language:** JavaScript (ES6+)  
* **State Management:** React Hooks (`useState`, `useEffect`)  
* **API Integration:** OpenWeatherMap API  
* **Styling:** CSS (modular and responsive)  
* **Version Control:** Git & GitHub (branch workflow)

---

## 📂 Project Structure

```
src/
│── components/
│   ├── SearchBar.jsx       # Input and search button
│   └── WeatherCard.jsx     # Displays weather information
│
│── services/
│   └── weatherApi.js       # Handles API calls (city & geolocation)
│
│── utils/
│   └── constants.js        # Optional helpers
│
│── App.jsx                  # Main component & state management
│── main.jsx                 # App entry point
│── index.css                # Global styles
```

---

## ▶️ How to Run Locally

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
```

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Start the development server:

```bash
npm run dev
```

Open your browser at:

```
http://localhost:5173
```

---

## 🧠 How It Works (High Level)

1. User enters a city or allows location detection  
2. Weather API service fetches real-time weather data  
3. Loading state shown while fetching  
4. Error messages displayed for invalid cities or permission denial  
5. WeatherCard displays temperature, humidity, wind speed, and condition  
6. Modular components keep UI and API logic separated  

---

## 📸 Screenshots

### Search by City

<img width="655" height="624" alt="image" src="https://github.com/user-attachments/assets/197ac1e3-3c27-40d7-b910-1c6d0484d800" />
<img width="664" height="664" alt="image" src="https://github.com/user-attachments/assets/f2386e14-c526-4a18-aca9-3a9b261f1696" />


### Auto-detect Location

<img width="706" height="700" alt="image" src="https://github.com/user-attachments/assets/8ebea34e-286e-434b-9fcb-f53796c93f77" />


---

## 🎯 Learning Outcomes

* Practical React state management  
* API integration & service layer abstraction  
* Handling loading and error states  
* Conditional rendering & defensive coding  
* Branch-based Git workflow simulation  
* Building a real-world, interactive web app  

---

## 👨‍💻 Author

Built by **Kalavala Sai Siddharth**

---

⭐ If you like this project, consider starring the repository!
