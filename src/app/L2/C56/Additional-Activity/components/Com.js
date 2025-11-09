"use client";

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function Com() {
  const initialDescriptions = [
    { id: "desc-1", text: "If you buy a new toy at the shop, what tax is usually added?" },
    { id: "desc-2", text: "When grown-ups get paid for their work, what tax is often taken from their earnings?" },
    { id: "desc-3", text: "If someone goes to watch a movie, what tax is added to the ticket price?" },
    { id: "desc-4", text: "When someone goes with their family to eat at a restaurant, the bill has an extra amount. What tax is that?" },
    { id: "desc-5", text: "If someone drives a car through a special highway or bridge, what tax do you pay for using that road?" }
  ];

  const correctAnswers = {
    "Sales Tax": ["If you buy a new toy at the shop, what tax is usually added?", "When someone goes with their family to eat at a restaurant, the bill has an extra amount. What tax is that?"],
    "Income Tax": ["When grown-ups get paid for their work, what tax is often taken from their earnings?"],
    "Toll Tax": ["If someone drives a car through a special highway or bridge, what tax do you pay for using that road?"],
    "Entertainment Tax": ["If someone goes to watch a movie, what tax is added to the ticket price?"]
  };

  const [descriptions, setDescriptions] = useState(initialDescriptions);
  const [taxCategories, setTaxCategories] = useState({
    "Sales Tax": [],
    "Income Tax": [],
    "Toll Tax": [],
    "Entertainment Tax": []
  });
  const [result, setResult] = useState(null);

  const categoryMeta = {
    "Sales Tax": {
      color: "from-green-200 to-green-100",
      border: "border-green-300",
    },
    "Income Tax": {
      color: "from-blue-200 to-blue-100",
      border: "border-blue-300",
    },
    "Toll Tax": {
      color: "from-yellow-200 to-yellow-100",
      border: "border-yellow-300",
    },
    "Entertainment Tax": {
      color: "from-purple-200 to-purple-100",
      border: "border-purple-300",
    }
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    let movedItem;
    if (source.droppableId === "descriptions") {
      const newDescriptions = Array.from(descriptions);
      movedItem = newDescriptions.splice(source.index, 1)[0];
      setDescriptions(newDescriptions);
    } else {
      const newSourceCat = Array.from(taxCategories[source.droppableId]);
      movedItem = newSourceCat.splice(source.index, 1)[0];
      setTaxCategories((prev) => ({
        ...prev,
        [source.droppableId]: newSourceCat,
      }));
    }

    if (destination.droppableId === "descriptions") {
      const newDescriptions = Array.from(descriptions);
      newDescriptions.splice(destination.index, 0, movedItem);
      setDescriptions(newDescriptions);
    } else {
      const newDestCat = Array.from(taxCategories[destination.droppableId]);
      newDestCat.splice(destination.index, 0, movedItem);
      setTaxCategories((prev) => ({
        ...prev,
        [destination.droppableId]: newDestCat,
      }));
    }
  };

  const checkAnswers = () => {
    let allCorrect = true;
    const wrongItems = [];

    Object.keys(correctAnswers).forEach((category) => {
      const correctSet = new Set(correctAnswers[category]);
      const placedSet = new Set(taxCategories[category].map((item) => item.text));

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
        message: "Excellent! All tax descriptions are placed correctly!",
      });
    } else {
      setResult({
        success: false,
        message: `Some descriptions are misplaced. Please try again.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
      Tax Match-Up
      </h1>

      <h2 className="text-lg italic text-center mb-6 text-gray-800">
        Match the type of tax with its description
      </h2>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6">
          <div className="w-1/3 bg-white rounded-2xl shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-3 text-blue-600">
              Tax Descriptions
            </h2>
            <Droppable droppableId="descriptions">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`min-h-[400px] p-3 rounded-xl border-2 ${
                    snapshot.isDraggingOver
                      ? "border-dashed border-blue-400 bg-blue-50"
                      : "border-transparent"
                  }`}
                >
                  {descriptions.map((desc, idx) => (
                    <Draggable key={desc.id} draggableId={desc.id} index={idx}>
                      {(prov, snap) => (
                        <div
                          ref={prov.innerRef}
                          {...prov.draggableProps}
                          {...prov.dragHandleProps}
                          className={`mb-3 p-3 rounded-xl shadow-sm font-medium text-lg select-none transition-transform ${
                            snap.isDragging
                              ? "scale-105 bg-yellow-200"
                              : "bg-yellow-100"
                          }`}
                        >
                          {desc.text}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {descriptions.length === 0 && (
              <button
                onClick={checkAnswers}
                className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-green-600 transition-colors font-semibold"
              >
                Submit Answers
              </button>
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-3 text-green-600">
              Tax Categories
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(taxCategories).map((category) => {
                const meta = categoryMeta[category];
                return (
                  <Droppable droppableId={category} key={category}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`min-h-[180px] rounded-2xl p-4 shadow-lg border-2 ${meta.border} bg-gradient-to-br ${meta.color}`}
                      >
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-center">{category}</h3>
                        </div>
                        <div
                          className={`flex-1 min-h-[120px] p-2 rounded-md ${
                            snapshot.isDraggingOver
                              ? "bg-white/60 border-2 border-dashed"
                              : "bg-white/30"
                          }`}
                        >
                          {taxCategories[category].map((desc, idx) => (
                            <Draggable key={desc.id} draggableId={desc.id} index={idx}>
                              {(prov, snap) => (
                                <div
                                  ref={prov.innerRef}
                                  {...prov.draggableProps}
                                  {...prov.dragHandleProps}
                                  className={`mb-2 p-2 rounded-md shadow-sm text-center bg-white text-md transition-transform ${
                                    snap.isDragging ? "scale-105" : ""
                                  }`}
                                >
                                  {desc.text}
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

            {result && (
              <div
                className={`mt-6 p-4 rounded-lg font-medium text-center text-lg ${
                  result.success
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