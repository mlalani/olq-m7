"use client";

import { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
const items = [
  { id: 1, name: "Water bottle", image: S2},
  { id: 2, name: "Compass", emoji: "🧭"},
  { id: 3, name: "Map of the jungle", emoji: "🗺️"},
  { id: 4, name: "Binoculars", image: S1},
  { id: 5, name: "Camera", emoji: "📸"},
  { id: 6, name: "First-aid kit", emoji: "🧰"},
  { id: 7, name: "Snacks", emoji: "🥞🧇🫐🍒🥐"},
  { id: 8, name: "Flashlight", emoji: "🔦"},
  { id: 9, name: "Extra batteries", emoji: "🔋"},
  { id: 10, name: "Sleeping bag", emoji: "👝"},
  { id: 11, name: "Insect repellent", emoji: "🦟"},
  { id: 12, name: "Jungle boots", emoji: "🥾"},
  { id: 13, name: "Notebook & pencil", emoji: "✏️📓"},
  { id: 14, name: "Hat", emoji: "🧢"},
  { id: 15, name: "Rope", emoji: "🪢"}
];

export default function Com() {
  const [backpackItems, setBackpackItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedItem && backpackItems.length < 10) {
      if (!backpackItems.find(item => item.id === draggedItem.id)) {
        setBackpackItems([...backpackItems, draggedItem]);
      }
    }
    setDraggedItem(null);
  };

  const removeFromBackpack = (itemId) => {
    setBackpackItems(backpackItems.filter(item => item.id !== itemId));
  };

  const availableItems = items.filter(item => 
    !backpackItems.find(backpackItem => backpackItem.id === item.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Jungle Adventure Packing
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Drag and drop up to 10 items into your backpack. Choose wisely, you have limited space!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Available Items
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {availableItems.map((item) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item)}
                  className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-move hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3"
                >
                  
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    {item.image ? (
                      <div className="w-16 h-16 flex items-center justify-center">
                        <Image 
                          src={item.image} 
                          alt={item.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <p className="text-4xl">{item.emoji}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Your Backpack ({backpackItems.length}/10)
            </h2>
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="min-h-[400px] border-2 border-dashed border-green-300 bg-green-50 rounded-lg p-4"
            >
              {backpackItems.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <p className="text-lg">Drop items here to pack your backpack!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {backpackItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-gray-200 rounded-lg p-3 flex items-center space-x-3 shadow-sm"
                    >
                      
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                        {item.image ? (
                          <div className="w-8 h-8 flex items-center justify-center">
                            <Image 
                              src={item.image} 
                              alt={item.name}
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <p className="text-lg">{item.emoji}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromBackpack(item.id)}
                        className="text-red-500 hover:text-red-700 font-bold text-lg"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {backpackItems.length >= 10 && (
              <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-700 text-center font-medium">
                  Backpack is full!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}