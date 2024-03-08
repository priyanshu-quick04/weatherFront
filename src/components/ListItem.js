import React from "react";

const ListItem = ({ title, value }) => {
  return (
    <div className="md:w-1/5 w-1/2 bg-blue-400 border-4 border-yellow-300 py-2 rounded-xl flex flex-col justify-center items-center">
      <div className="text-2xl text-slate-700">
        {title}
        {title === "Temperature" ? " °C" : null}
      </div>
      <div className="text-3xl text-slate-900">{value}</div>
    </div>
  );
};

export default ListItem;
