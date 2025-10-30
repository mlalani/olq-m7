"use client";

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Image from "next/image"; 

export default function Com() {
  const initialItems = [
    { id: "item-1", text: "Milk" },
    { id: "item-2", text: "Candy" },
    { id: "item-3", text: "Bread" },
    { id: "item-4", text: "Water" },
    { id: "item-5", text: "Medicine" },
    { id: "item-6", text: "Chips" },
    { id: "item-7", text: "Rice" },
    { id: "item-8", text: "Chocolate" },
    { id: "item-9", text: "Ice Cream" },
    { id: "item-10", text: "Toothpaste" },
    { id: "item-11", text: "Soap" },
    { id: "item-12", text: "Balloon pack" },
    { id: "item-13", text: "Toy car" },
  ];

  const correctAnswers = {
    essential: ["Milk", "Bread", "Rice", "Toothpaste", "Soap", "Water", "Medicine"],
    nonessential: ["Balloon pack", "Toy car", "Chips", "Chocolate", "Ice Cream", "Candy"],
  };

  const [items, setItems] = useState(initialItems);
  const [categories, setCategories] = useState({
    essential: [],
    nonessential: [],
  });
  const [result, setResult] = useState(null);
  const [showGame, setShowGame] = useState(false); 

  const categoryMeta = {
    essential: {
      label: "Essential Items",
      color: "from-green-200 to-green-100",
      border: "border-green-300",
    },
    nonessential: {
      label: "Non-Essential",
      color: "from-yellow-200 to-yellow-100",
      border: "border-yellow-300",
    },
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    // same list reordering
    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "items") {
        const newItems = Array.from(items);
        const [moved] = newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, moved);
        setItems(newItems);
      } else {
        const newCat = Array.from(categories[source.droppableId]);
        const [moved] = newCat.splice(source.index, 1);
        newCat.splice(destination.index, 0, moved);
        setCategories((prev) => ({
          ...prev,
          [source.droppableId]: newCat,
        }));
      }
      return;
    }

    // moving between lists
    let movedItem;
    if (source.droppableId === "items") {
      const newItems = Array.from(items);
      movedItem = newItems.splice(source.index, 1)[0];
      setItems(newItems);
    } else {
      const newSourceCat = Array.from(categories[source.droppableId]);
      movedItem = newSourceCat.splice(source.index, 1)[0];
      setCategories((prev) => ({
        ...prev,
        [source.droppableId]: newSourceCat,
      }));
    }

    if (destination.droppableId === "items") {
      const newItems = Array.from(items);
      newItems.splice(destination.index, 0, movedItem);
      setItems(newItems);
    } else {
      const newDestCat = Array.from(categories[destination.droppableId]);
      newDestCat.splice(destination.index, 0, movedItem);
      setCategories((prev) => ({
        ...prev,
        [destination.droppableId]: newDestCat,
      }));
    }
  };

  const checkAnswers = () => {
    let allCorrect = true;
    const wrongItems = [];

    Object.keys(correctAnswers).forEach((cat) => {
      const correctSet = new Set(correctAnswers[cat]);
      const placedSet = new Set(categories[cat].map((it) => it.text));

      correctSet.forEach((item) => {
        if (!placedSet.has(item)) {
          allCorrect = false;
          wrongItems.push(item);
        }
      });
      placedSet.forEach((item) => {
        if (!correctSet.has(item)) {
          allCorrect = false;
          wrongItems.push(item);
        }
      });
    });

    if (allCorrect) {
      setResult({
        success: true,
        message: "🎉 Great job! All items are sorted correctly!",
      });
    } else {
      setResult({
        success: false,
        message: `⚠️ Some items are misplaced: ${wrongItems.join(", ")}`,
      });
    }
  };

  // 🚀 Screen 1 (Intro)
  if (!showGame) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Essential vs Non-Essential Items
        </h1>
        
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Essential Items</h2>
            <p className="text-lg text-gray-700">
              Essential means things we need on a daily basis, like food, water, and soap.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">Non-Essential Items</h2>
            <p className="text-lg text-gray-700">
              Non-essential items are special treats we enjoy, but don&apos;t really need to live.
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setShowGame(true)}
          className="px-8 py-4 bg-blue-500 text-white text-xl rounded-xl shadow-lg hover:bg-blue-600 transition"
        >
          Start
        </button>
      </div>
    );
  }

  // 🚀 Screen 2 (Main Game)
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Essential vs Non-Essential Items
      </h1>
      <p className="text-center text-md mb-4 text-gray-600">
        Drag items from the left into the correct category: Essential or Non-Essential
      </p>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6">
          {/* Items list */}
          <div className="w-1/4 bg-white rounded-2xl shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-3 text-pink-600">
              Items
            </h2>
            <Droppable droppableId="items">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`min-h-[420px] p-3 rounded-xl border-2 ${snapshot.isDraggingOver
                      ? "border-dashed border-pink-400 bg-pink-50"
                      : "border-transparent"
                    }`}
                >
                  {items.map((it, idx) => (
                    <Draggable key={it.id} draggableId={it.id} index={idx}>
                      {(prov, snap) => (
                        <div
                          ref={prov.innerRef}
                          {...prov.draggableProps}
                          {...prov.dragHandleProps}
                          className={`mb-3 p-3 rounded-xl shadow-sm font-medium text-center select-none transition-transform ${snap.isDragging
                              ? "scale-105 bg-yellow-200"
                              : "bg-yellow-100"
                            }`}
                        >
                          {it.text}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {/* Show Check Button only when items are empty */}
            {items.length === 0 && (
              <button
                onClick={checkAnswers}
                className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600"
              >
                Check Answers
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-3 text-blue-600">
              Categories
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {Object.keys(categories).map((key) => {
                const meta = categoryMeta[key];
                return (
                  <Droppable droppableId={key} key={key}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`min-w-[260px] max-w-[260px] grow-0 flex-shrink-0 rounded-2xl p-4 shadow-lg border-2 ${meta.border} bg-gradient-to-br ${meta.color}`}
                      >
                        <div className="mb-2">
                          <h3 className="text-lg font-bold">{meta.label}</h3>
                        </div>
                        <div
                          className={`flex-1 min-h-[400px] p-2 rounded-md ${snapshot.isDraggingOver
                              ? "bg-white/60 border-2 border-dashed"
                              : "bg-white/30"
                            }`}
                        >
                          {categories[key].map((it, idx) => (
                            <Draggable key={it.id} draggableId={it.id} index={idx}>
                              {(prov, snap) => (
                                <div
                                  ref={prov.innerRef}
                                  {...prov.draggableProps}
                                  {...prov.dragHandleProps}
                                  className={`mb-2 p-2 rounded-md shadow-sm text-center bg-white transition-transform ${snap.isDragging ? "scale-105" : ""
                                    }`}
                                >
                                  {it.text}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      </div>
                    )}
                  </Droppable>
                );
              })}
            </div>

            {/* Show result after checking */}
            {result && (
              <div
                className={`mt-4 p-3 rounded-lg font-medium text-center ${result.success
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                  }`}
              >
                {result.message}
              </div>
            )}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
