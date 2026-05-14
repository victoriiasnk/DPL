// frontend/src/App.js
import React, { useState } from 'react';
import Header from './components/Shared/Header';
import MetricCard from './components/Dashboard/MetricCard';
import AnalyticsChart from './components/Dashboard/AnalyticsChart';
import ControlPanel from './components/Dashboard/ControlPanel';
import AddPlantModal from './components/Modals/AddPlantModal';
import { Plus } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOnline] = useState(true); // Статус ESP32

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3748] p-4 md:p-8">
      <Header isOnline={isOnline} />
      
      <main className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Мій сад</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-2xl hover:bg-green-700 transition shadow-lg shadow-green-100"
          >
            <Plus size={20} /> Додати рослину
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MetricCard type="humidity" value="42" />
              <MetricCard type="temperature" value="24" />
            </div>
            <AnalyticsChart />
          </div>

          <aside className="space-y-8">
            <ControlPanel />
          </aside>
        </div>
      </main>

      <AddPlantModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;