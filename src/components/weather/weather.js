import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AirIcon from "@mui/icons-material/Air";

import "./weather.css";

// Function to get the appropriate weather icon
const getWeatherIcon = (weather, temp, hour) => {
  switch (weather) {
    case "Thunderstorm":
      return <ThunderstormIcon sx={{ fontSize: 200 }} />;
    case "Drizzle":
    case "Rain":
      return <BeachAccessIcon sx={{ fontSize: 200 }} />;
    case "Snow":
      return <AcUnitIcon sx={{ fontSize: 200 }} />;
    case "Clear":
      if (hour >= 18 || hour < 6) {
        return <NightlightIcon sx={{ fontSize: 200 }} />;
      } else {
        return <WbSunnyIcon sx={{ fontSize: 200 }} />;
      }
    case "Clouds":
      return <CloudIcon sx={{ fontSize: 200 }} />;
    default:
      return <AirIcon sx={{ fontSize: 200 }} />;
  }
};

const Weather = ({ data }) => {
  const currentHour = new Date().getHours();
  const weatherCondition = data.current.weather[0].main;
  const temp = Math.round(data.current.temp);

  return (
    <div className="main-div">
      <div className="big-icons">
        <div className="weather-icon">
          {getWeatherIcon(weatherCondition, temp, currentHour)}
        </div>
        <p className="weather-text">{temp}°C</p>
      </div>
      <div className="info-div">
        <p className="city-name">{data.city}</p>
        <p className="weather-description">{weatherCondition}</p>

        <div className="detail-div">
          <div className="weather-details1">
            <p>Feels like</p>
            <p>Humidity</p>
            <p>Wind</p>
            <p>Pressure</p>
          </div>
          <div className="weather-details2">
            <p>{Math.round(data.current.feels_like)}°C</p>
            <p>{data.current.humidity}%</p>
            <p>{data.current.wind_speed} km/h</p>
            <p>{data.current.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
