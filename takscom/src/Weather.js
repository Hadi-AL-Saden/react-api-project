import React from 'react'
import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../src/router/Wstyle.css'



function Weather() {
    const [query, setQuery] = useState({ q: "berlin" });
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);
  
    useEffect(() => {
      const fetchWeather = async () => {
        const message = query.q ? query.q : "current location.";
  
        toast.info("Fetching weather for " + message);
  
        await getFormattedWeatherData({ ...query, units }).then((data) => {
          toast.success(
            `Successfully fetched weather for ${data.name}, ${data.country}.`
          );
  
          setWeather(data);
        });
      };
  
      fetchWeather();
    }, [query, units]);
  
    const formatBackground = () => {
      if (!weather) return "bg-violet-800";
      const threshold = units === "metric" ? 20 : 60;
      if (weather.temp <= threshold) return "bg-violet-800";
  
      return "bg-fuchsia-900";
    };
  
    return (
      <div
        className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  bg-violet-800 h-fit shadow-xl shadow-gray-400  ${formatBackground()}`}
      >
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
  
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
  
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}
  
        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} style={{marginTop:'69px'}} />
      </div>
    );
}

export default Weather