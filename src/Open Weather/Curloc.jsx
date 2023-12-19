import { useState, useEffect } from "react";
import './Curloc.css'

const App = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const api = {
    key: "989fd4bddde1d3fdd425c6f3cffbf37f",
    base: "https://api.openweathermap.org/data/2.5/weather"
  };

  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(`${api.base}?lat=${latitude}&lon=${longitude}&units=metric&APPID=${api.key}`)
          .then((res) => res.json())
          .then((d) => setWeather(d));
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, [search]); 

  function handleSearch() {
    fetch(`${api.base}?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((d) => setWeather(d));
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-um">

      <div className="bg-red-400 p-6 rounded-lg">
      <input type="search" placeholder="Enter Your City" onChange={(e) => setSearch(e.target.value)}></input>

      <br/><br/>
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded ml-12">Search</button>
      <div className="mt-4 ml-6 font-semibold">
        {typeof weather.main !== "undefined" ? (
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}</p>
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
          </div>
        ) : (
          "Not Found"
        )}
      </div>
      </div>
    </div>
  );
};

export default App;
