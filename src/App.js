import React, { useState, useEffect } from 'react';
import IconsSection from './components/IconsSection';
import FormComponent from './components/FormComponent';
import DataEntitas from './components/DataEntitas';
import DataPungutan from './components/DataPungutan';

const App = () => {
  const [activeTab, setActiveTab] = useState('Data Utama');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date()); 
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const day = days[date.getDay()];
    const dayNumber = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Bulan dimulai dari 0
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${day}, ${dayNumber} ${month} ${year} - ${hours}:${minutes}:${seconds}`;
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-blue-800 text-white p-4 flex justify-between">
        <div className="flex items-center">
          <img src="https://www.ilcs.co.id/cfind/source/images/pelindo-solusi-digital-logo-putih.png" alt="Logo" className="h-8 mr-4" />
        </div>
        <div className="text-sm">{formatTime(currentTime)}</div> {/* Menampilkan waktu real-time */}
      </div>

      <div className="text-sm text-gray-500 mt-4 mb-4">
        <a href=" " className="hover:underline text-blue-500">Beranda</a> /
        <a href=" " className="hover:underline ml-1 text-blue-500">SSM QC</a>
      </div>

      <div className="bg-white shadow-md rounded-md p-6">
        <IconsSection />

        <div className="text-sm text-gray-500 mt-4 flex justify-between absolute right-14">
          <div>No Pengajuan: <span className="font-medium">20120B388FAE202404020000001</span> | KSWP: VALID | Jenis API: 02</div>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="text-lg font-bold mb-4">Data Pemberitahuan</div>

          <div className="border-b border-gray-200 mb-4">
            <ul className="flex space-x-4">
              <li
                className={`py-2 px-4 cursor-pointer ${activeTab === 'Data Utama' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
                onClick={() => handleTabClick('Data Utama')}
              >
                Data Utama
              </li>
              <li
                className={`py-2 px-4 cursor-pointer ${activeTab === 'Data Entitas' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
                onClick={() => handleTabClick('Data Entitas')}
              >
                Data Entitas
              </li>
              <li
                className={`py-2 px-4 cursor-pointer ${activeTab === 'Data Pungutan' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
                onClick={() => handleTabClick('Data Pungutan')}
              >
                Data Pungutan
              </li>
            </ul>
          </div>

          <div className="mt-4">
            {activeTab === 'Data Utama' && <FormComponent />}
            {activeTab === 'Data Entitas' && <DataEntitas />}
            {activeTab === 'Data Pungutan' && <DataPungutan />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
