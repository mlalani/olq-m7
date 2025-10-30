"use client";

import { useState } from 'react';

const initialItems = [
  { id: 1, name: "Milk", icon: "🥛" },
  { id: 2, name: "Chocolate", icon: "🍫" },
  { id: 3, name: "Bread", icon: "🍞" },
  { id: 4, name: "Ice Cream", icon: "🍦" },
  { id: 5, name: "Rice", icon: "🍚" },
  { id: 6, name: "Soap", icon: "🧼" },
  { id: 7, name: "Biscuits", icon: "🍪" },
  { id: 8, name: "Toothbrush", icon: "🪥" },
  { id: 9, name: "Toy Car", icon: "🚗" },
  { id: 10, name: "Eggs", icon: "🥚" },
  { id: 11, name: "Video Game", icon: "🎮" },
  { id: 12, name: "Vegetables", icon: "🥬" },
  { id: 13, name: "Chips", icon: "🍟" },
  { id: 14, name: "Medicine", icon: "💊" },
  { id: 15, name: "Juice Box", icon: "🧃" },
  { id: 16, name: "Comic Book", icon: "📚" }
];

const correctAnswers = {
  essential: ["Milk", "Bread", "Rice", "Soap", "Toothbrush", "Eggs", "Vegetables", "Medicine"],
  nonEssential: ["Chocolate", "Ice Cream", "Toy Car", "Video Game", "Biscuits", "Chips", "Juice Box", "Comic Book"]
};

export default function Com() {
  const [shoppingList, setShoppingList] = useState(initialItems);
  const [essentialItems, setEssentialItems] = useState([]);
  const [nonEssentialItems, setNonEssentialItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropShoppingList = (e) => {
    e.preventDefault();
    if (draggedItem) {
      setShoppingList([draggedItem, ...shoppingList]);
      setEssentialItems(essentialItems.filter(item => item.id !== draggedItem.id));
      setNonEssentialItems(nonEssentialItems.filter(item => item.id !== draggedItem.id));
    }
    setDraggedItem(null);
  };

  const handleDropEssential = (e) => {
    e.preventDefault();
    if (draggedItem) {
      if (!essentialItems.find(item => item.id === draggedItem.id)) {
        setEssentialItems([...essentialItems, draggedItem]);
        setShoppingList(shoppingList.filter(item => item.id !== draggedItem.id));
        setNonEssentialItems(nonEssentialItems.filter(item => item.id !== draggedItem.id));
      }
    }
    setDraggedItem(null);
  };

  const handleDropNonEssential = (e) => {
    e.preventDefault();
    if (draggedItem) {
      if (!nonEssentialItems.find(item => item.id === draggedItem.id)) {
        setNonEssentialItems([...nonEssentialItems, draggedItem]);
        setShoppingList(shoppingList.filter(item => item.id !== draggedItem.id));
        setEssentialItems(essentialItems.filter(item => item.id !== draggedItem.id));
      }
    }
    setDraggedItem(null);
  };

  const checkAnswers = () => {
    const userEssential = essentialItems.map(item => item.name);
    const userNonEssential = nonEssentialItems.map(item => item.name);
    
    const essentialCorrect = correctAnswers.essential.every(item => userEssential.includes(item));
    const nonEssentialCorrect = correctAnswers.nonEssential.every(item => userNonEssential.includes(item));
    
    return essentialCorrect && nonEssentialCorrect;
  };

  const getItemStyle = (itemName, category) => {
    if (!showResults) {
      return 'bg-white border-gray-200';
    }
    
    const isCorrect = category === 'essential' 
      ? correctAnswers.essential.includes(itemName)
      : correctAnswers.nonEssential.includes(itemName);
    
    return isCorrect 
      ? 'bg-green-100 border-green-300' 
      : 'bg-red-100 border-red-300';
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Essential v/s Non-essential items
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Drag items from the shopping list into the correct baskets: Essential or Non-Essential
        </p>
        
        {showResults && (
          <div className="text-center mb-8">
            <div className={`inline-block px-6 py-3 rounded-lg text-2xl font-bold ${
              checkAnswers() ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {checkAnswers() ? 'All items are sorted correctly!' : 'Some items are in the wrong basket. Try again!'}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Shopping List
            </h2>
            <div
              onDragOver={handleDragOver}
              onDrop={handleDropShoppingList}
              className="min-h-[500px] border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50"
            >
              {shoppingList.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-500">
                  {/* <p className="text-lg">All items sorted!</p> */}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3">
                  {shoppingList.map((item) => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item)}
                      className="bg-white border-2 border-gray-200 rounded-lg p-3 cursor-move hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 shadow-sm"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <span className="font-medium text-gray-800">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
              Essential Items
            </h2>
            <div
              onDragOver={handleDragOver}
              onDrop={handleDropEssential}
              className="min-h-[500px] border-2 border-dashed border-green-300 rounded-lg p-4 bg-green-50"
            >
              {essentialItems.length === 0 ? (
                <div className="flex items-center justify-center h-full text-green-600">
                  <p className="text-lg">Drop essential items here</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3">
                  {essentialItems.map((item) => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item)}
                      className={`border-2 rounded-lg p-3 cursor-move hover:bg-green-100 transition-colors duration-200 flex items-center space-x-3 shadow-sm ${getItemStyle(item.name, 'essential')}`}
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <span className="font-medium text-gray-800">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-600 mb-6 text-center">
              Non-Essential Items
            </h2>
            <div
              onDragOver={handleDragOver}
              onDrop={handleDropNonEssential}
              className="min-h-[500px] border-2 border-dashed border-purple-300 rounded-lg p-4 bg-purple-50"
            >
              {nonEssentialItems.length === 0 ? (
                <div className="flex items-center justify-center h-full text-purple-600">
                  <p className="text-lg">Drop non-essential items here</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3">
                  {nonEssentialItems.map((item) => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item)}
                      className={`border-2 rounded-lg p-3 cursor-move hover:bg-purple-100 transition-colors duration-200 flex items-center space-x-3 shadow-sm ${getItemStyle(item.name, 'nonEssential')}`}
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <span className="font-medium text-gray-800">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {shoppingList.length === 0 && !showResults && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowResults(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors duration-200 shadow-lg"
            >
              Submit
            </button>
          </div>
        )}
        
        {showResults && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setShoppingList(initialItems);
                setEssentialItems([]);
                setNonEssentialItems([]);
                setShowResults(false);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors duration-200 shadow-lg"
            >
              Reset & Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}