import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./weather.css";

const Weather = ({ data }) => {
  return (
    <div className="main-div">
      <div className="big-icons">
        <div className="weather-icon">
          <AcUnitIcon sx={{ fontSize: 200 }} />
        </div>
        <p className="weather-text">{Math.round(data.current.temp)}°C</p>
      </div>
      <div className="info-div">
        <p className="city-name">{data.city}</p>
        <p className="weather-description">
          {data.current.weather[0].description}
        </p>

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
