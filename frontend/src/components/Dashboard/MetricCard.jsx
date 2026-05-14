import React from "react";
import { Droplets, Thermometer } from "lucide-react";

function MetricCard({ type, value }) {
  const isTemperature = type === "temperature";

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
      <div
        className={`p-4 rounded-full ${
          isTemperature ? "bg-red-100" : "bg-blue-100"
        }`}
      >
        {isTemperature ? (
          <Thermometer className="text-red-600" size={28} />
        ) : (
          <Droplets className="text-blue-600" size={28} />
        )}
      </div>

      <div>
        <p className="text-gray-500 text-sm">
          {isTemperature ? "Температура" : "Вологість"}
        </p>
        <p className="text-3xl font-bold text-gray-800">{value}°</p>
      </div>
    </div>
  );
}

export default MetricCard;