import "./home.css";
import Search from "../../components/search/search";
import Weather from "../../components/weather/weather";
import Placeholder from "../../components/placeholder/placeholder";
import { WEATHER_API_KEY } from "../../api";
import { useState } from "react";

function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch])
      .then(async (res) => {
        const weatherDeet = await res[0].json();
        setCurrentWeather({ city: searchData.label, ...weatherDeet });
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(currentWeather);

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather ? <Weather data={currentWeather} /> : <Placeholder />}
    </div>
  );
}

export default Home;
