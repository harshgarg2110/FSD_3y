import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState();
  const [data, setData] = useState();
  const api_key = "b2e3e9eb5055ef25f6313a4226f32820";
  const fetchdata = () => {
    alert("Weather data");
  };
  return (
    <div>
      WeatherApp{city}
      <input
        type="text"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></input>
      <button onClick={fetchdata}>fetch weather</button>
    </div>
  );
};

export default WeatherApp;
