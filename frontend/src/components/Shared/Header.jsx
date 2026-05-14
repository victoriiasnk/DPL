import React from "react";

function Header({ isOnline }) {
  return (
    <header className="flex justify-between items-center mb-10">
      <h1 className="text-4xl font-bold text-gray-800">DPL RareCare</h1>

      <div
        className={
          "px-4 py-2 rounded-xl text-white text-sm font-medium " +
          (isOnline ? "bg-green-600" : "bg-red-600")
        }
      >
        {isOnline ? "ESP32 онлайн" : "ESP32 офлайн"}
      </div>
    </header>
  );
}

export default Header;