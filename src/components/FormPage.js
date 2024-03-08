import React, { useState, useEffect } from "react";
import WeatherInfo from "./weatherInfo";
import axios from "axios";

const FormPage = ({ weatherDetail, setWeatherDetail }) => {
  const [infoAsked, setInfoAsked] = useState(false);
  const [detail, setDetail] = useState({
    place: "",
    longitude: "",
    latitude: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({
      ...detail,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const { place, latitude, longitude } = detail;
    try {
      if (!place && (!longitude || !latitude)) {
        alert("No information is given");
        return;
      }

      let response;

      if (place) {
        response = await axios.post("http://localhost:4000/weather", detail);
      } else {
        response = await axios.post("http://localhost:4000/weather", detail);
      }

      if (!response.data || Object.keys(response.data).length === 0) {
        alert("No information is found");
        return;
      }
      if (response.status === 404) {
        alert("No such Place exist");
        return;
      }
      console.log(response);
      setWeatherDetail(response.data);
      setInfoAsked(true);
      console.log(weatherDetail.base);
      // navigate("/weather");
    } catch (error) {
      console.log("Error:", error.message);
      alert("An error occurred while fetching weather information");
    }
  };
  useEffect(() => {
    console.log("weatherDetail updated:", weatherDetail);
  }, [weatherDetail]);
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center px-8 py-10 bg-gray-950">
        <div className="flex flex-col items-center justify-center border-4 border-yellow-400 rounded-lg px-5 py-5 space-y-6 md:mr-5 mr-0 mb-5">
          <div
            className="text-slate-500 text-2xl font-mono font-semibold md:w-[480px] w-[300px] text-center border-2
         border-sky-400 rounded-md px-4 py-3"
          >
            Don't let the weather surprise you. <br /> Enter your location and
            stay informed!
          </div>
          <div
            className="text-slate-300 text-2xl font-serif font-semibold md:w-[480px] w-[300px] text-center border-2
         border-sky-400 rounded-md px-4 py-3"
          >
            Type a place, unveil its weather. Simple as that!
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-4 border-purple-400 rounded-lg py-10 px-6 mb-5 space-y-2">
          <div className="flex flex-row font-sans text-lg font-semibold space-x-2 w-full justify-between">
            <label htmlFor="place">Place</label>
            <input
              type="text"
              id="place"
              name="place"
              value={detail.place}
              className="bg-gray-900 border-2 border-blue-300 rounded-2xl px-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row font-sans text-lg font-semibold space-x-2 w-full justify-between">
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              id="latitude"
              name="latitude"
              value={detail.latitude}
              className="bg-gray-900 border-2 border-blue-300 rounded-2xl px-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row font-sans text-lg font-semibold space-x-2 w-full justify-between">
            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              id="place"
              name="longitude"
              value={detail.longitude}
              className="bg-gray-900 border-2 border-blue-300 rounded-2xl px-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end w-full">
            <button
              className="px-3 py-2 text-lg font-serif font-bold bg-yellow-400 text-sky-800 rounded-xl"
              type="Submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {infoAsked === false ? null : <WeatherInfo {...weatherDetail} />}
    </>
  );
};

export default FormPage;
