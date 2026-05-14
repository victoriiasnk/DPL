// frontend/src/components/Dashboard/ControlPanel.jsx
import React, { useState } from 'react';
import { Power, Cpu } from 'lucide-react';

const ControlPanel = () => {
  const [isAuto, setIsAuto] = useState(true);

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-md border border-gray-50">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Cpu size={22} className="text-green-600" /> Керування
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between p-5 bg-gray-50 rounded-3xl">
          <div>
            <p className="font-bold text-gray-700">Авто-режим</p>
            <p className="text-xs text-gray-400">Розумний полив активовано</p>
          </div>
          <button 
            onClick={() => setIsAuto(!isAuto)}
            className={`w-14 h-8 rounded-full transition-all relative ${isAuto ? 'bg-green-500' : 'bg-gray-300'}`}
          >
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${isAuto ? 'left-7' : 'left-1'}`}></div>
          </button>
        </div>

        <button 
          disabled={isAuto}
          className={`w-full py-5 rounded-3xl font-bold flex items-center justify-center gap-3 transition-all ${
            isAuto ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:scale-[1.02]'
          }`}
        >
          <Power size={20} /> {isAuto ? 'Доступно в ручному режимі' : 'Увімкнути насос'}
        </button>

        <div className="pt-4 border-t border-gray-50">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Поріг поливу</label>
          <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
          <div className="flex justify-between text-sm mt-2 font-medium text-gray-500">
            <span>20%</span>
            <span>Поточний: 35%</span>
            <span>80%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;