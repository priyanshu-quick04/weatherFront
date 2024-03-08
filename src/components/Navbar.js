import React from "react";
import Icon from "../assets/appIcon.png";
import "../index.css";

const Navbar = ({ setPresent, setPage }) => {
  const handleFormClick = () => {
    setPage("Form");
    setPresent(false);
  };
  const handleRegisterClick = () => {
    setPage("Register");
    setPresent(false);
  };
  return (
    <div className="navbarMainDiv bg-black">
      <div className="w-[50%]">
        <img src={Icon} alt="Logo" className="w-[225px] h-[70px]" />
      </div>
      <div className="flex flex-row justify-evenly w-[50%]">
        <div
          className="pt-5 font-serif text-blue-400 text-lg cursor-pointer"
          onClick={handleFormClick}
        >
          Login
        </div>
        <div
          className="pt-5 font-serif text-blue-400 text-lg cursor-pointer"
          onClick={handleRegisterClick}
        >
          Register
        </div>
      </div>
    </div>
  );
};

export default Navbar;
