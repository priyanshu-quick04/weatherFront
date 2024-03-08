import React from "react";
import { useState } from "react";
import axios from "axios";

const Credential = ({
  title = "Register",
  pageType = "register",
  setPage,
  setPresent,
}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const resetUser = () => {
    setUser({
      email: "",
      password: "",
    });
  };
  const handleBothRegister = () => {
    handleRegisterClick();
    resetUser();
  };
  const handleBothLogin = () => {
    handleLoginClick();
    resetUser();
  };
  const handleRegisterClick = async () => {
    const { email, password } = user;
    if (email && password) {
      try {
        const value = await axios.post("http://localhost:4000/register", user);
        alert(value.data.message);
        setPage("Login");
      } catch (error) {
        alert(`Error you have: ${error.message}`);
      }
    } else {
      alert("Empty Credentials are not Valid");
    }
  };
  const handleLoginClick = async () => {
    const { email, password } = user;
    if (email && password) {
      try {
        const value = await axios.post("http://localhost:4000/login", user);
        alert(value.data.message);
        setPresent(true);
      } catch (error) {
        alert(`Some error: ${error.message}`);
      }
    } else {
      alert("Some Credentials are empty");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-950">
      <div className="mx-auto md:w-[480px] w-[300px] border-4 border-blue-400 rounded-md flex flex-col space-y-9">
        <div className="flex justify-center border-b-2 border-yellow-600 text-4xl py-2 text-white font-semibold">
          {title}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col bg-none mx-[10%] space-y-4 my-5">
            <input
              type="text"
              name="email"
              value={user.email}
              className="px-2 py-2 border-2 border-blue-200 bg-slate-900 rounded-xl"
              placeholder={
                pageType !== "register" ? "Username/Email" : "Enter your Email"
              }
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              value={user.password}
              className="px-2 py-2 border-2 border-blue-200 bg-slate-900 rounded-xl"
              placeholder={
                pageType !== "register" ? "Password" : "Set your Password"
              }
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between px-5 my-5 text-blue-800 font-bold">
            <button
              className="bg-blue-200 rounded-2xl px-3 py-2 text-xl"
              onClick={
                title === "Register"
                  ? () => setPage("Login")
                  : () => setPage("Register")
              }
            >
              {pageType === "register" ? "Login" : "Register"}
            </button>
            <button
              className="bg-blue-200 rounded-2xl px-3 py-2 text-xl"
              onClick={
                title === "Register" ? handleBothRegister : handleBothLogin
              }
            >
              {pageType === "register" ? "Register" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credential;
