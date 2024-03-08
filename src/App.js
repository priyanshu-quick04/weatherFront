import "./App.css";
import Navbar from "./components/Navbar";
import Credential from "./components/Credential";
import FormPage from "./components/FormPage";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState("Register");
  const [present, setPresent] = useState(false);
  const [weatherDetail, setWeatherDetail] = useState({});
  return (
    <div className="App text-blue-300">
      <Router>
        <Navbar setPage={setPage} setPresent={setPresent} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              present === false ? (
                <Credential
                  title={page === "Register" ? "Register" : "Login"}
                  pageType={page === "Register" ? "register" : "login"}
                  setPage={setPage}
                  setPresent={setPresent}
                />
              ) : (
                <FormPage
                  weatherDetail={weatherDetail}
                  setWeatherDetail={setWeatherDetail}
                />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
