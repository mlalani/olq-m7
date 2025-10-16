"use client";

import { useState, useEffect } from "react";

const descriptions = [
  { id: "desc1", text: "Helps educate children." },
  { id: "desc2", text: "Helps protect people in emergencies." },
  { id: "desc3", text: "Provides places to play." },
  { id: "desc4", text: "Helps us travel safely." },
  { id: "desc5", text: "Helps people when they are sick." },
  { id: "desc6", text: "Keeps us safe." }
];

const pictures = [
  { id: "pic1", name: "School", emoji: "🏫", correctDesc: "desc1" },
  { id: "pic2", name: "Fire truck", emoji: "🚒", correctDesc: "desc2" },
  { id: "pic3", name: "Public park", emoji: "🏞️", correctDesc: "desc3" },
  { id: "pic4", name: "Road & Bridge", emoji: "🌉", correctDesc: "desc4" },
  { id: "pic5", name: "Doctor/hospital", emoji: "🏥", correctDesc: "desc5" },
  { id: "pic6", name: "Police car", emoji: "🚔", correctDesc: "desc6" }
];

export default function Com() {

  const [leftItems, setLeftItems] = useState(descriptions);
  const [rightItems, setRightItems] = useState(pictures.map(pic => ({ ...pic, droppedDescs: [] })));
  const [draggedItem, setDraggedItem] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Shuffle the descriptions only on the client side
    setLeftItems([...descriptions].sort(() => Math.random() - 0.5));
  }, []);

  const handleDragStart = (e, item, source, sourceIndex = null) => {
    setDraggedItem({ item, source, sourceIndex });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, target, targetIndex) => {
    e.preventDefault();
    if (!draggedItem) return;

    const { item, source, sourceIndex } = draggedItem;

    if (source === "left" && target === "right") {
      setLeftItems(prev => prev.filter(desc => desc.id !== item.id));
      setRightItems(prev => prev.map((pic, index) => 
        index === targetIndex ? { ...pic, droppedDescs: [...pic.droppedDescs, item] } : pic
      ));
    } else if (source === "right" && target === "left") {
      setRightItems(prev => prev.map(pic => 
        pic.id === rightItems[sourceIndex].id 
          ? { ...pic, droppedDescs: pic.droppedDescs.filter(desc => desc.id !== item.id) }
          : pic
      ));
      setLeftItems(prev => [...prev, item]);
    } else if (source === "right" && target === "right") {
      if (sourceIndex !== targetIndex) {
        setRightItems(prev => prev.map((pic, index) => {
          if (index === sourceIndex) {
            return { ...pic, droppedDescs: pic.droppedDescs.filter(desc => desc.id !== item.id) };
          } else if (index === targetIndex) {
            return { ...pic, droppedDescs: [...pic.droppedDescs, item] };
          }
          return pic;
        }));
      }
    }

    setDraggedItem(null);
  };

  const handleLeftDrop = (e) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.source !== "right") return;

    const { item, sourceIndex } = draggedItem;
    
    setRightItems(prev => prev.map((pic, index) => 
      index === sourceIndex 
        ? { ...pic, droppedDescs: pic.droppedDescs.filter(desc => desc.id !== item.id) }
        : pic
    ));
    setLeftItems(prev => [...prev, item]);

    setDraggedItem(null);
  };

  const checkAnswers = () => {
    let allCorrect = true;
    rightItems.forEach(pic => {
      if (pic.droppedDescs.length !== 1 || pic.droppedDescs[0].id !== pic.correctDesc) {
        allCorrect = false;
      }
    });

    if (allCorrect) {
      setResult({
        success: true,
        message: "Excellent! All descriptions are matched correctly!"
      });
    } else {
      setResult({
        success: false,
        message: "Some descriptions are not matched correctly. Please try again!"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-6">
      
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Descriptions</h2>
            <div 
              className="min-h-[400px] p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50"
              onDragOver={handleDragOver}
              onDrop={handleLeftDrop}
            >
              {leftItems.map((desc) => (
                <div
                  key={desc.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, desc, "left")}
                  className="mb-3 p-3 bg-blue-100 rounded-lg shadow-sm cursor-move hover:bg-blue-200 transition-colors select-none"
                >
                  {desc.text}
                </div>
              ))}
            </div>
            
            {leftItems.length === 0 && (
              <button
                onClick={checkAnswers}
                className="mt-4 w-full bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-colors font-semibold"
              >
                Submit Answers
              </button>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-green-600">Public services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rightItems.map((pic, index) => (
                <div
                  key={pic.id}
                  className="border-2 border-dashed border-green-300 rounded-lg p-4 bg-green-50 min-h-[80px]"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "right", index)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-8xl">{pic.emoji}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{pic.name}</h3>
                      <div className="mt-2 space-y-2">
                        {pic.droppedDescs.map((desc, descIndex) => (
                          <div
                            key={desc.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, desc, "right", index)}
                            className="p-2 bg-yellow-100 rounded cursor-move hover:bg-yellow-200 transition-colors"
                          >
                            {desc.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {result && (
          <div className={`mt-6 p-4 rounded-lg text-center text-lg font-semibold ${
            result.success 
              ? "bg-green-100 text-green-800 border-2 border-green-300" 
              : "bg-red-100 text-red-800 border-2 border-red-300"
          }`}>
            {result.message}
          </div>
        )}

      </div>
    </div>
  );
}