import { useState, useEffect } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const api = {
    key: "989fd4bddde1d3fdd425c6f3cffbf37f",
    base: "https://api.openweathermap.org/data/2.5/weather"
  };

  useEffect(() => {
    // Get user's current location weather when the component mounts
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
  }, []); // Empty dependency array ensures this effect runs once on mount

  function handleSearch() {
    fetch(`${api.base}?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((d) => setWeather(d));
  }

  return (
    <div>
      <input type="search" placeholder="Enter Your City" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div>
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
  );
};

export default App;
