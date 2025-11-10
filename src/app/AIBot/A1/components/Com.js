'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import robotImg from '../assets/s1.png';
import binWet from '../assets/s2.png';
import binDry from '../assets/s3.png';
import item1 from '../assets/i1.png';
import item2 from '../assets/i2.png';
import item3 from '../assets/i3.png';
import item4 from '../assets/i4.png';
import item5 from '../assets/i5.png';
import item6 from '../assets/i6.png';
import item7 from '../assets/i7.png';
import item8 from '../assets/i8.png';
import item9 from '../assets/i9.png';
import item10 from '../assets/i10.png';
import item11 from '../assets/i11.png';
import item12 from '../assets/i12.png';
import item13 from '../assets/i13.png';
import item14 from '../assets/i14.png';
import item15 from '../assets/i15.png';
import item16 from '../assets/i16.png';
import item17 from '../assets/i17.png';
import item18 from '../assets/i18.png';

const initialItems = [
  { id: 1, src: item1, label: 'Container' },
  { id: 2, src: item2, label: 'Apple Core' },
  { id: 3, src: item3, label: 'Banana Peel' },
  { id: 4, src: item4, label: 'Glass Jar' },
  { id: 5, src: item5, label: 'Metal Can' },
  { id: 6, src: item6, label: 'Chocolate Wrapper' },
  { id: 7, src: item7, label: 'Fruits Seeds' },
  { id: 8, src: item8, label: 'Lemon' },
  { id: 9, src: item9, label: 'Peel' },
  { id: 10, src: item10, label: 'Rotten Vegetable' },
  { id: 11, src: item11, label: 'Rotten Vegetable' },
  { id: 12, src: item12, label: 'Sponge' },
  { id: 13, src: item13, label: 'Plastic Spoon' },
  { id: 14, src: item14, label: 'Tea Bag' },
  { id: 15, src: item15, label: 'Egg Shell' },
  { id: 16, src: item16, label: 'Fish Bone' },
  { id: 17, src: item17, label: 'Plastic Fork' },
  { id: 18, src: item18, label: 'Tyre' },
];

export default function Com() {
  const [screen, setScreen] = useState(0);
  const [started, setStarted] = useState(false); // Unused, but kept for context



  // Shuffle initial items so the first item is randomized each session
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const [items, setItems] = useState(() => shuffle(initialItems));
  const [wetBin, setWetBin] = useState([]);
  const [dryBin, setDryBin] = useState([]);
  const [animatingItem, setAnimatingItem] = useState(null);
  const [animationTarget, setAnimationTarget] = useState(null);
  const [animStyle, setAnimStyle] = useState(null);
  const [listOffset, setListOffset] = useState(0);

  // Screen 5 replay state
  const robotRef = useRef(null);
  const replayWetRef = useRef(null);
  const replayDryRef = useRef(null);
  const [replayQueue, setReplayQueue] = useState([]);
  const [replayIndex, setReplayIndex] = useState(0);
  const [replayAnimating, setReplayAnimating] = useState(false);

  const itemRef = useRef(null);
  const wetRef = useRef(null);
  const dryRef = useRef(null);

  // Log bins for debugging whenever they change
  useEffect(() => {
    console.log('wetBin updated:', wetBin);
  }, [wetBin]);

  useEffect(() => {
    console.log('dryBin updated:', dryBin);
  }, [dryBin]);

  // When all items are sorted on Screen 3, auto-advance to Screen 4
  useEffect(() => {
    if (screen === 3 && items.length === 0) {
      // small delay to allow any animations to finish
      const t = setTimeout(() => setScreen(4), 300);
      return () => clearTimeout(t);
    }
  }, [items, screen]);

  // Prepare replay queue when entering Screen 5
  useEffect(() => {
    if (screen === 5) {
      // Build queue according to initialItems order but include only those that were sorted
      const sortedMap = new Map();
      wetBin.forEach(i => sortedMap.set(i.id, 'wet'));
      dryBin.forEach(i => sortedMap.set(i.id, 'dry'));
      const queue = initialItems.filter(it => sortedMap.has(it.id)).map(it => ({ ...it, target: sortedMap.get(it.id) }));
      setReplayQueue(queue);
      setReplayIndex(0);
      setReplayAnimating(false);
    }
  }, [screen]);

  // Start replay sequence when queue is ready
  useEffect(() => {
    if (screen !== 5) return;
    if (!replayQueue || replayQueue.length === 0) return;
    if (replayAnimating) return;
    // kick off the first item
    setReplayAnimating(true);
    setTimeout(() => runReplayItem(0), 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, replayQueue]);

  // core replay animator: moves itemIndex through conveyor and to bin
  const runReplayItem = (index) => {
    if (index >= replayQueue.length) {
      setReplayAnimating(false);
      return;
    }
    const item = replayQueue[index];
    // create fixed anim element starting from center-left of the viewport
    // anim size set to 100 to match the displayed image size (140x140 visual)
    const animSize = 100;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const startX = Math.floor(vw * 0.15); // center-left (~15% from left)
    const startY = Math.floor(vh / 2 - animSize / 2); // vertically centered

    // compute stop position (point below robot) - will re-evaluate later
    const targetBinEl = item.target === 'wet' ? replayWetRef.current : replayDryRef.current;

    // reset any previous anim style to force fresh layout
    setAnimStyle(null);
    setAnimatingItem(item);

    // small delay to ensure DOM updated before setting initial style
    setTimeout(() => {
      const robotRect = robotRef.current?.getBoundingClientRect();
      const binRect = targetBinEl?.getBoundingClientRect();
      const stopX = robotRect ? robotRect.left + robotRect.width / 2 - animSize / 2 : 100;
      const stopY = robotRect ? robotRect.bottom + 20 : 150;

      // place at center-left and slide vertically to stopY
      setAnimStyle({
        position: 'fixed',
        left: startX + 'px',
        top: startY + 'px',
        width: animSize + 'px',
        height: animSize + 'px',
        transform: 'translate(0,0)',
        transition: 'transform 0.9s cubic-bezier(0.2,0.8,0.2,1)',
        opacity: 1,
        zIndex: 9999,
      });

      const dy = stopY - startY;

      // animate vertical movement first
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimStyle(prev => ({ ...prev, transform: `translate(0px, ${dy}px)` }));
        });
      });

      // after vertical arrives, slide horizontally to align under robot, then pause 2s
      const verticalDuration = 900;
      const horizontalDuration = 400;
      setTimeout(() => {
        const dxToRobot = stopX - startX;
        // slide horizontally to robot center (keep Y offset)
        setAnimStyle(prev => ({ ...prev, transition: `transform ${horizontalDuration}ms ease-in-out`, transform: `translate(${dxToRobot}px, ${dy}px)` }));

        setTimeout(() => {
          // now pause for 2s under robot
          setTimeout(() => {
            // recompute bin rect just before moving
            const latestBinRect = targetBinEl?.getBoundingClientRect();
            if (!latestBinRect) {
              setAnimatingItem(null);
              setReplayIndex(idx => idx + 1);
              runReplayItem(index + 1);
              return;
            }
            const animCenterX = stopX + animSize / 2;
            const animCenterY = stopY + animSize / 2;
            const binCenterX = latestBinRect.left + latestBinRect.width / 2;
            const binCenterY = latestBinRect.top + latestBinRect.height / 2;
            const dx2 = binCenterX - animCenterX;
            const dy2 = binCenterY - animCenterY;
            // animate to bin (add dx2/dy2 to current transform)
            setAnimStyle(prev => ({ ...prev, transition: 'transform 0.7s ease-in-out, opacity 0.7s', transform: `translate(${dxToRobot + dx2}px, ${dy + dy2}px)`, opacity: 0 }));
            setTimeout(() => {
              setAnimatingItem(null);
              setReplayIndex(idx => idx + 1);
              runReplayItem(index + 1);
            }, 750);
          }, 2000);
        }, horizontalDuration + 50);
      }, verticalDuration + 50);
    }, 30);
  };


  const handleSort = (binType) => {
    // Prevent sorting if the list is empty or an animation is already running
    if (!items.length || animatingItem) return;

    const itemToSort = items[0]; // Always take the first item
    // Try to get DOM nodes for precise animation. If not available, fall back to simple animation.
    const sourceEl = itemRef.current;
    const targetEl = binType === 'wet' ? wetRef.current : dryRef.current;

    if (!sourceEl || !targetEl) {
      // Fallback: simple animation state and timed update
      setAnimatingItem(itemToSort);
      setAnimationTarget(binType);
      setTimeout(() => {
        if (binType === 'wet') setWetBin(prev => [...prev, itemToSort]);
        else setDryBin(prev => [...prev, itemToSort]);
        // Remove first and shuffle remaining to present a new random first item
        setItems(prev => shuffle(prev.slice(1)));
        setAnimatingItem(null);
        setAnimationTarget(null);
        setAnimStyle(null);
      }, 400);
      return;
    }

    const startRect = sourceEl.getBoundingClientRect();
    const endRect = targetEl.getBoundingClientRect();

    const animSize = 100; // single declaration for animated element size
    // Compute delta from anim element's center to bin center
    const animStartCenterX = startRect.left + startRect.width / 2;
    const animStartCenterY = startRect.top + startRect.height / 2;
    const dx = (endRect.left + endRect.width / 2) - animStartCenterX;
    const dy = (endRect.top + endRect.height / 2) - animStartCenterY;

    // Prepare animating element positioned at the source
    setAnimatingItem(itemToSort);
    setAnimationTarget(binType);
    // Nudge the list for a smooth slide effect when the top item leaves
    setListOffset(-20);
    setAnimStyle({
      position: 'fixed',
      // center the smaller animating element over the source's center
      left: startRect.left + (startRect.width - animSize) / 2 + 'px',
      top: startRect.top + (startRect.height - animSize) / 2 + 'px',
      width: animSize + 'px',
      height: animSize + 'px',
      transform: 'translate(0px, 0px)',
      transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out',
      opacity: 1,
      zIndex: 9999,
    });

    // Trigger the transform on the next frame so the transition animates
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimStyle(prev => ({ ...prev, transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }));
      });
    });

    // After animation, commit state updates
    setTimeout(() => {
      if (binType === 'wet') setWetBin(prev => [...prev, itemToSort]);
      else setDryBin(prev => [...prev, itemToSort]);
      // Slide the list smoothly by resetting the offset then removing the item.
      setListOffset(0);
      // Use a short timeout to allow CSS transition to complete before mutating the array.
      setTimeout(() => setItems(prev => shuffle(prev.slice(1))), 0);
      setAnimatingItem(null);
      setAnimationTarget(null);
      setAnimStyle(null);
    }, 350);
  };

  // --- Screen 0: Introduction ---
  if (screen === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        {/* Top content (image + text) */}
        <div className="flex flex-row items-center justify-center w-full max-w-6xl p-8">
          <Image src={robotImg} alt="robotImg" width={250} />

          <div
            className="ml-12 bg-white px-12 py-12 flex items-center justify-center"
            style={{ minWidth: 400, maxWidth: 600 }}
          >
            <span className="text-xl md:text-xl text-center font-bold leading-relaxed text-gray-800">
              <span className="block mb-6">
                Mixing all garbage together makes the soil and water dirty.
              </span>
              <span className="block mb-6">
                In this activity, you will program or train A.I. (artificial
                intelligence) to separate wet and dry waste.
              </span>
              <span className="block mb-6">Let’s sort the garbage!</span>
            </span>
          </div>
        </div>

        {/* Next button on new row */}
        <div className="w-full flex justify-center mt-8">
          <button
            className="px-8 py-3 text-2xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg"
            onClick={() => setScreen(1)}
          >
            Next
          </button>
        </div>
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
        <div className="w-full flex justify-center mt-8">
          <button
            className="px-8 py-3 text-2xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg"
            onClick={() => setScreen(2)}
          >
            Next
          </button>
        </div>
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
      <div className="min-h-screen flex justify-center flex-col bg-white relative p-8 overflow-hidden">
        {/* Instruction for Screen 3 */}
        <div className="w-full flex justify-center mb-4">
          <div className="text-lg text-center text-gray-700">Click on the bin to move the item inside it.</div>
        </div>
        {/* Animated element uses computed fixed position and transform */}
        {animatingItem && animStyle && (
          <div
            style={{
              ...animStyle,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image
                src={animatingItem.src}
                alt={animatingItem.label}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="mt-2 text-sm font-medium text-center">{animatingItem.label}</div>
            </div>
          </div>
        )}

        <div className="flex justify-between w-full gap-2">
          {/* Left side: Items in single row with scroll */}
          <div className="flex-1 overflow-x-auto"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row-reverse',
              overflow: 'hidden'
            }}
          >
            <div
              className="flex flex-row-reverse flex-nowrap gap-4 items-center min-h-[200px] p-4"
              style={{
                transition: 'transform 0.2s ease-in-out',
                transform: `translateX(${listOffset}px)`,
              }}
            >

              {/* If an item is animating, show items.slice(1) to make the list appear shifted. 
                  If not animating, just show the full list starting from items[0]. 
                  We use a conditional map to manage the shifting appearance. 
              */}

              {/* Show the next item only if no animation is in progress */}
              {items.length > 0 && (
                <div
                  key={items[0].id}
                  ref={itemRef}
                  className={`flex flex-col items-center p-2 rounded-lg bg-white shadow-xl transition-transform hover:scale-105 w-[160px] flex-none`}
                  style={{
                    position: 'relative',
                    zIndex: items.length,
                    // Keep the element in DOM during animation but hide visuals to avoid blinking
                    visibility: animatingItem && animatingItem.id === items[0].id ? 'hidden' : 'visible',
                  }}
                >
                  <div style={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      src={items[0].src}
                      alt={items[0].label}
                      width={100}
                      height={100}
                      className="rounded-lg"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="mt-2 text-sm font-medium text-center">{items[0].label}</div>
                </div>
              )}

              {/* Show the rest of the items in the list */}
              {items.slice(1).map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col items-center p-2 rounded-lg bg-white shadow-xl transition-transform hover:scale-105 w-[160px] flex-none`}
                  style={{
                    position: 'relative',
                    zIndex: items.length - index,
                  }}
                >
                  <div style={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={100}
                      height={100}
                      className="rounded-lg"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="mt-2 text-sm font-medium text-center">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Bins */}
          <div className="flex flex-col gap-8 items-center" style={{ width: '180px' }}>
            <div
              ref={wetRef}
              className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleSort('wet')}
            >
              <Image
                src={binWet}
                alt="Wet Waste Bin"
                width={180}
                height={180}
                className=""
              />
              <div className="mt-2 font-bold text-blue-600">Wet Waste</div>
              <div className="text-sm text-gray-500">({wetBin.length} items)</div>
            </div>

            <div
              ref={dryRef}
              className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleSort('dry')}
            >
              <Image
                src={binDry}
                alt="Dry Waste Bin"
                width={180}
                height={180}
                className=""
              />
              <div className="mt-2 font-bold text-blue-600">Dry Waste</div>
              <div className="text-sm text-gray-500">({dryBin.length} items)</div>
            </div>
          </div>
        </div>

        {/* No Next button on this screen; flow continues automatically when sorting is done */}
      </div>
    );
  }

  // --- Screen 4: Dummy + Start ---
  if (screen === 4) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="text-3xl md:text-4xl font-semibold text-center mb-8">Now let’s see how well our AI Bot has been trained.</div>
        <br />
        <div className="w-full flex justify-center">
          <button
            className="px-8 py-3 text-2xl bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold shadow-lg"
            onClick={() => setScreen(5)}
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  // --- Screen 5: Robot image at top center ---
  if (screen === 5) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-white">
        <div className="w-full flex justify-center pt-2">
          <div ref={robotRef}>
            <Image src={robotImg} alt="robot" width={170} />
          </div>
        </div>
        {/* Animated item (conveyor) */}
        {animatingItem && animStyle && (
          <div
            style={{
              ...animStyle,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
              overflow: 'hidden',
            }}
          >
            {/* Adjusted replay image size to 140x140 (originally 120x120) */}
            <Image src={animatingItem.src} alt={animatingItem.label}
              width={140} height={140} />
          </div>
        )}

        <div className="flex-1 flex items-end justify-center pb-6 w-full">
          <div className="flex gap-12 items-end">
            <div ref={replayWetRef} className="flex flex-col items-center">
              <Image src={binWet} alt="wet" width={210} height={210} />
              <div 
              style={{
                marginTop: '-12px'
              }}
              className="font-bold text-blue-600">Wet Waste</div>
            </div>
            <div ref={replayDryRef} className="flex flex-col items-center">
              <Image src={binDry} alt="dry" width={210} height={210} />
              <div 
              style={{
                marginTop: '-12px'
              }}
              className="font-bold text-blue-600">Dry Waste</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback (Shouldn't be reached if logic is complete)
  return null;
}