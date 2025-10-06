import React from 'react';
import { useDesignStore } from '../../stores/designStore';

export const TShirtMockup: React.FC = () => {
  const { tshirtColor, currentView, setCurrentView } = useDesignStore();

  const views = [
    { id: 'front', label: 'Front', icon: '👕' },
    { id: 'back', label: 'Back', icon: '🔙' },
    { id: 'left', label: 'Left Side', icon: '⬅️' },
    { id: 'right', label: 'Right Side', icon: '➡️' },
  ] as const;

  return (
    <div className="flex flex-col items-center">
      {/* View Controls */}
      <div className="flex space-x-2 mb-4">
        {views.map((view) => (
          <button
            key={view.id}
            onClick={() => setCurrentView(view.id)}
            className={`px-3 py-2 rounded-lg flex items-center space-x-2 text-sm ${
              currentView === view.id
                ? 'bg-violet-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <span>{view.icon}</span>
            <span>{view.label}</span>
          </button>
        ))}
      </div>

      {/* T-shirt Canvas Area */}
      <div className="relative bg-gray-800 rounded-xl p-8">
        <div 
          className="w-80 h-96 bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='320' height='384' viewBox='0 0 320 384' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M80 64C80 28.6538 108.654 0 144 0H176C211.346 0 240 28.6538 240 64V128C240 163.346 211.346 192 176 192H144C108.654 192 80 163.346 80 128V64Z' fill='${tshirtColor.replace('#', '%23')}'/%3E%3Cpath d='M0 128L40 96V192H0V128Z' fill='${tshirtColor.replace('#', '%23')}'/%3E%3Cpath d='M320 128L280 96V192H320V128Z' fill='${tshirtColor.replace('#', '%23')}'/%3E%3Cpath d='M40 192H280V384H40V192Z' fill='${tshirtColor.replace('#', '%23')}'/%3E%3C/svg%3E")`
          }}
          id="tshirt-canvas"
        >
          {/* Design elements will be placed here */}
        </div>
      </div>
    </div>
  );
};