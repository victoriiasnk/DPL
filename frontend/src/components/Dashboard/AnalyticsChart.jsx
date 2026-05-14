import React from "react";

function AnalyticsChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-xl font-semibold mb-4">Аналітика</h3>

      {/* Плейсхолдер графіка */}
      <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
        Тут буде графік
      </div>
    </div>
  );
}

export default AnalyticsChart;