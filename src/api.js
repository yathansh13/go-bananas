export const geoDbOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_GEO_API_KEY,
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL =
  "https://api.openweathermap.org/data/3.0/onecall";
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
export const DOG_API_KEY = process.env.REACT_APP_DOG_API_KEY;
