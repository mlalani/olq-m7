'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import garbageMain from '../assets/s1.png';
import binWet from '../assets/s2.png';
import binDry from '../assets/s3.png';
import item1 from '../assets/s1.png';
import item2 from '../assets/s1.png';
import item3 from '../assets/s1.png';
import item4 from '../assets/s1.png';
import item5 from '../assets/s1.png';
import item6 from '../assets/s1.png';
import item7 from '../assets/s1.png';
import item8 from '../assets/s1.png';
import item9 from '../assets/s1.png';
import item10 from '../assets/s1.png';
import item11 from '../assets/s1.png';
import item12 from '../assets/s1.png';

const initialItems = [
  { id: 1, src: item1, label: 'Apple Core' },
  { id: 2, src: item2, label: 'Plastic Bottle' },
  { id: 3, src: item3, label: 'Banana Peel' },
  { id: 4, src: item4, label: 'Newspaper' },
  { id: 5, src: item5, label: 'Tea Bag' },
  { id: 6, src: item6, label: 'Glass Jar' },
  { id: 7, src: item7, label: 'Vegetable Peels' },
  { id: 8, src: item8, label: 'Metal Can' },
  { id: 9, src: item9, label: 'Egg Shells' },
  { id: 10, src: item10, label: 'Cardboard' },
  { id: 11, src: item11, label: 'Coffee Grounds' },
  { id: 12, src: item12, label: 'Plastic Bag' },
];

export default function Com() {
  const [screen, setScreen] = useState(0);
  const [started, setStarted] = useState(false); // Unused, but kept for context
  const [items, setItems] = useState(initialItems);
  const [wetBin, setWetBin] = useState([]);
  const [dryBin, setDryBin] = useState([]);
  const [animatingItem, setAnimatingItem] = useState(null);
  const [animationTarget, setAnimationTarget] = useState(null);

  const handleSort = (binType) => {
    // Prevent sorting if the list is empty or an animation is already running
    if (!items.length || animatingItem) return;
    
    const itemToSort = items[0]; // Always take the first item
    
    // 1. Start the animation state
    setAnimatingItem(itemToSort);
    setAnimationTarget(binType);

    // 2. Wait for animation to complete before updating state
    // Note: The duration here (400ms) MUST match the CSS animation duration
    setTimeout(() => {
      if (binType === 'wet') {
        setWetBin([...wetBin, itemToSort]);
      } else {
        setDryBin([...dryBin, itemToSort]);
      }
      
      // 3. Remove the item from the source list permanently
      setItems(items.slice(1)); 
      
      // 4. Reset animation state
      setAnimatingItem(null);
      setAnimationTarget(null);
    }, 400); // Match this with CSS animation duration
  };

  // --- Screen 0: Introduction ---
  if (screen === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white relative">
        <div className="flex flex-row items-center justify-center w-full max-w-6xl p-8">
          <Image src={garbageMain} alt="Garbage" width={250} className="" />
          <div className="ml-12 bg-white  px-12 py-12 flex items-center justify-center"
            style={{ minWidth: 400, maxWidth: 600 }}>
            <span className="text-xl md:text-xl text-center font-bold leading-relaxed relative text-gray-800">
              <span className="block mb-6">Mixing all garbage together makes the soil and water dirty.</span>
              <span className="block mb-6">In this activity, you will program or train A.I. (artificial intelligence) to separate wet and dry waste.</span>
              <span className="block mb-6">Let’s sort the garbage!</span>
            </span>
          </div>
        </div>
        <button
          className="fixed bottom-8 right-8 px-8 py-3 text-2xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg"
          onClick={() => setScreen(1)}
        >
          Next
        </button>
      </div>
    );
  }

  // --- Screen 1: Examples ---
  if (screen === 1) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <div className="flex flex-col items-center w-full">
          <div className="text-2xl md:text-2xl text-center mb-8 max-w-2xl">
            AI does not know whether an object is wet or dry waste, but it can process images and identify patterns.
          </div>
          <div className="flex flex-row gap-16 items-end justify-center mb-8">
            <div className="flex flex-col items-center">
              <Image src={binWet} alt="Wet Waste Example" width={200} height={160} className="" />
              <div className="mt-2 text-md font-semibold text-center">Wet Waste Example</div>
            </div>
            <div className="flex flex-col items-center">
              <Image src={binDry} alt="Dry Waste Example" width={200} height={160} className="" />
              <div className="mt-2 text-md font-semibold text-center">Dry Waste Example</div>
            </div>
          </div>
        </div>
        <button
          className="fixed bottom-8 right-8 px-8 py-3 text-2xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg"
          onClick={() => setScreen(2)}
        >
          Next
        </button>
      </div>
    );
  }

  // --- Screen 2: Instructions ---
  if (screen === 2) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <div className="flex flex-col items-center w-full max-w-3xl">
          <div className="text-2xl md:text-3xl font-bold text-center mb-6">
            To program A.I, check each image and select the correct bin - “Wet” or “Dry”.
          </div>
          <div className="flex flex-row gap-8 justify-center items-center mb-8">
            <div className="flex flex-col items-center">
              <Image src={binWet} alt="Wet Bin" width={200} height={160} className="" />
              <div className="mt-2 text-lg font-bold">Wet Bin</div>
            </div>
            <div className="flex flex-col items-center">
              <Image src={binDry} alt="Dry Bin" width={200} height={160} className="" />
              <div className="mt-2 text-lg font-bold">Dry Bin</div>
            </div>
          </div>
          <div className="text-xl md:text-xl text-center mb-8">
            The training you provide will teach A.I. to recognize patterns on its own.
          </div>
          <button
            className="px-8 py-3 text-2xl bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold shadow-lg"
            onClick={() => setScreen(3)}
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  // --- Screen 3: Sorting Game (Main Content) ---
  if (screen === 3) {
    return (
      <div className="min-h-screen flex flex-col bg-white relative p-8 overflow-hidden">
        <style jsx>{`
          /* Animation from the current item's position (center-right) to the wet bin (top right) */
          @keyframes moveToWet {
            0% { 
              transform: translate(calc(100vw - 400px), 0); 
              opacity: 1;
            }
            100% { 
              /* Move right and up slightly towards the wet bin */
              transform: translate(calc(100vw - 200px), -100px); 
              opacity: 0;
            }
          }
          /* Animation from the current item's position (center-right) to the dry bin (bottom right) */
          @keyframes moveToDry {
            0% { 
              transform: translate(calc(100vw - 400px), 0);
              opacity: 1;
            }
            100% { 
              /* Move right and down slightly towards the dry bin */
              transform: translate(calc(100vw - 200px), 150px); 
              opacity: 0;
            }
          }
          .animate-to-wet {
            animation: moveToWet 0.4s ease-in-out forwards;
          }
          .animate-to-dry {
            animation: moveToDry 0.4s ease-in-out forwards;
          }
        `}</style>

        {/* 🚀 ABSOLUTELY POSITIONED ANIMATING ITEM 🚀 */}
        {animatingItem && (
          <div
            className={`flex flex-col items-center p-2 rounded-lg bg-white shadow-xl transition-transform w-[120px] ${
              animationTarget === 'wet' ? 'animate-to-wet' : 'animate-to-dry'
            }`}
            style={{
              position: 'absolute',
              // Position the item over where the first item in the list normally sits
              top: '40px', 
              left: '40px', 
              zIndex: 100, // Ensure it's on top
            }}
          >
            <Image
              src={animatingItem.src}
              alt={animatingItem.label}
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div className="mt-2 text-sm font-medium text-center">{animatingItem.label}</div>
          </div>
        )}

        <div className="flex justify-between w-full gap-8">
          {/* Left side: Items in single row with scroll */}
          <div className="flex-1 overflow-x-auto">
            <div className="flex flex-row-reverse flex-nowrap gap-4 items-center min-h-[200px] p-4">
              
              {/* If an item is animating, show items.slice(1) to make the list appear shifted. 
                  If not animating, just show the full list starting from items[0]. 
                  We use a conditional map to manage the shifting appearance. 
              */}

              {/* Show the next item only if no animation is in progress */}
              {!animatingItem && items.length > 0 && (
                 <div
                  key={items[0].id}
                  className={`flex flex-col items-center p-2 rounded-lg bg-white shadow-md transition-transform hover:scale-105 w-[120px]`}
                  style={{ 
                    position: 'relative',
                    zIndex: items.length
                  }}
                >
                  <Image
                    src={items[0].src}
                    alt={items[0].label}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="mt-2 text-sm font-medium text-center">{items[0].label}</div>
                </div>
              )}

              {/* Show the rest of the items in the list */}
              {items.slice(1).map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col items-center p-2 rounded-lg bg-white shadow-md transition-transform hover:scale-105 w-[120px]`}
                  style={{ 
                    position: 'relative',
                    zIndex: items.length - index 
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="mt-2 text-sm font-medium text-center">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Bins */}
          <div className="flex flex-col gap-8 items-center" style={{ width: '150px' }}>
            <div 
              className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleSort('wet')}
            >
              <Image
                src={binWet}
                alt="Wet Waste Bin"
                width={100}
                height={100}
                className=""
              />
              <div className="mt-2 font-bold text-blue-600">Wet Waste</div>
              <div className="text-sm text-gray-500">({wetBin.length} items)</div>
            </div>

            <div 
              className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleSort('dry')}
            >
              <Image
                src={binDry}
                alt="Dry Waste Bin"
                width={100}
                height={100}
                className=""
              />
              <div className="mt-2 font-bold text-blue-600">Dry Waste</div>
              <div className="text-sm text-gray-500">({dryBin.length} items)</div>
            </div>
          </div>
        </div>

        {/* Next button appears when all items are sorted */}
        {items.length === 0 && (
          <button
            className="fixed bottom-8 right-8 px-8 py-3 text-2xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg"
            onClick={() => setScreen(4)}
          >
            Next
          </button>
        )}
      </div>
    );
  }

  // --- Screen 4: Completion ---
  if (screen === 4) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="text-3xl md:text-4xl font-bold text-center mb-8">
          Great job training the A.I.!
        </div>
        <div className="text-2xl md:text-2xl text-center mb-8 max-w-2xl">
          Now the A.I. can help sort garbage and keep our soil and water clean.
        </div>
      </div>
    );
  }

  // Fallback (Shouldn't be reached if logic is complete)
  return null;
}