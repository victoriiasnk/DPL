import React from "react";

function Toggle({ enabled, onChange }) {
  return (
    <div
      onClick={() => onChange(!enabled)}
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition 
        ${enabled ? "bg-green-500" : "bg-gray-300"}`}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition 
          ${enabled ? "translate-x-6" : "translate-x-0"}`}
      ></div>
    </div>
  );
}

export default Toggle;