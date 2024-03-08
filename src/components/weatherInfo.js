import React from "react";
import ListItem from "./ListItem";

const WeatherInfo = ({ coord, weather, main, visibility, wind, name }) => {
  const imageName = weather[0].icon;
  const weatherImageLink = `https://openweathermap.org/img/wn/${imageName}@2x.png`;

  const mainObject = {
    Latitude: coord.lat,
    Longitude: coord.lon,
    Temperature: main.temp,
    Weather: weather[0].main,
    Wind: wind.speed,
    Humidity: main.humidity,
    Visibility_Value: visibility,
  };

  return (
    <div className="w-full flex flex-col bg-slate-950 border-2 border-blue-950 rounded-lg">
      <div
        className="flex justify-center items-center border-b-2 border-yellow-300 text-4xl text-sky-500
       font-bold py-2"
      >
        Details for {name}
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center py-3 md:flex-wrap space-x-4 space-y-3">
        <div className="w-1/5 flex justify-center items-center">
          <img src={weatherImageLink} alt="Weather_Icon" />
        </div>
        {Object.entries(mainObject).map(([key, value]) => (
          <ListItem title={key} keyName={key} value={value} />
        ))}
      </div>
    </div>
  );
};

export default WeatherInfo;
