"use client";

import { useState, useEffect } from "react";

const SERVICES = [
  { id: "gov_school", name: "Government School", sector: "public" },
  { id: "bus_metro", name: "Bus / Metro Train", sector: "public" },
  { id: "public_hospital", name: "Public Hospital", sector: "public" },
  { id: "public_park", name: "Public Park", sector: "public" },
  { id: "post_office", name: "Government Post Office", sector: "public" },
  { id: "police", name: "Police Department", sector: "public" },
  { id: "private_school", name: "Private School", sector: "private" },
  { id: "taxi", name: "Taxi / Cab", sector: "private" },
  { id: "private_clinic", name: "Private Clinic or Hospital", sector: "private" },
  { id: "private_park", name: "Private Amusement Park", sector: "private" },
  { id: "private_power", name: "Private Power / Water Company", sector: "private" },
  { id: "security", name: "Private Security Guard / Agency", sector: "private" },
  { id: "garbage", name: "Private Garbage Pickup Company", sector: "private" },
  { id: "tuition", name: "Private Tuition Classes", sector: "private" },
];

export default function Com() {
  const [leftItems, setLeftItems] = useState(SERVICES);
  const [publicItems, setPublicItems] = useState([]);
  const [privateItems, setPrivateItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setLeftItems([...SERVICES].sort(() => Math.random() - 0.5));
  }, []);

  const handleDragStart = (e, item, source) => {
    setDraggedItem({ item, source });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, target) => {
    e.preventDefault();
    if (!draggedItem) return;
    const { item, source } = draggedItem;

    if (source === "left") {
      setLeftItems(prev => prev.filter(s => s.id !== item.id));
      if (target === "public") setPublicItems(prev => [...prev, item]);
      if (target === "private") setPrivateItems(prev => [...prev, item]);
    } else if (source === "public" && target === "left") {
      setPublicItems(prev => prev.filter(s => s.id !== item.id));
      setLeftItems(prev => [...prev, item]);
    } else if (source === "private" && target === "left") {
      setPrivateItems(prev => prev.filter(s => s.id !== item.id));
      setLeftItems(prev => [...prev, item]);
    } else if (source === "public" && target === "private") {
      setPublicItems(prev => prev.filter(s => s.id !== item.id));
      setPrivateItems(prev => [...prev, item]);
    } else if (source === "private" && target === "public") {
      setPrivateItems(prev => prev.filter(s => s.id !== item.id));
      setPublicItems(prev => [...prev, item]);
    }
    setDraggedItem(null);
  };

  const checkAnswers = () => {
    let correct = true;
    publicItems.forEach(item => {
      if (item.sector !== "public") correct = false;
    });
    privateItems.forEach(item => {
      if (item.sector !== "private") correct = false;
    });
    if (leftItems.length > 0) correct = false;

    setResult({
      success: correct,
      message: correct
        ? "Great job! All services are sorted correctly."
        : "Some services are not sorted correctly. Please try again!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Services List */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Services</h3>
            <div
              className="min-h-[400px] p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50"
              onDragOver={handleDragOver}
              onDrop={e => handleDrop(e, "left")}
            >
              {leftItems.map(item => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={e => handleDragStart(e, item, "left")}
                  className="mb-3 p-3 bg-blue-100 rounded-lg shadow-sm cursor-move hover:bg-blue-200 transition-colors select-none"
                >
                  {item.name}
                </div>
              ))}
            </div>
            {leftItems.length === 0 && (
              <>
                <button
                  onClick={checkAnswers}
                  className="mt-4 w-full bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-colors font-semibold"
                >
                  Submit Answers
                </button>
                {result && (
                  <div className={`mt-4 p-4 rounded-lg text-center text-lg font-semibold ${
                    result.success
                      ? "bg-green-100 text-green-800 border-2 border-green-300"
                      : "bg-red-100 text-red-800 border-2 border-red-300"
                  }`}>
                    {result.message}
                  </div>
                )}
              </>
            )}
          </div>
          {/* Right: Public Sector */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-semibold text-green-700">Public Sector</h3>
            </div>
            <div
              className="min-h-[400px] w-full p-4 border-2 border-dashed border-green-300 rounded-lg bg-green-50"
              onDragOver={handleDragOver}
              onDrop={e => handleDrop(e, "public")}
            >
              {publicItems.map(item => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={e => handleDragStart(e, item, "public")}
                  className="mb-3 p-3 bg-green-100 rounded-lg shadow-sm cursor-move hover:bg-green-200 transition-colors select-none"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          {/* Right: Private Sector */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-semibold text-blue-700">Private Sector</h3>
            </div>
            <div
              className="min-h-[400px] w-full p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50"
              onDragOver={handleDragOver}
              onDrop={e => handleDrop(e, "private")}
            >
              {privateItems.map(item => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={e => handleDragStart(e, item, "private")}
                  className="mb-3 p-3 bg-blue-100 rounded-lg shadow-sm cursor-move hover:bg-blue-200 transition-colors select-none"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
  {/* Result message now shown below the submit button */}
      </div>
    </div>
  );
}