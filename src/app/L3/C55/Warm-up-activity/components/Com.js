'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Import images from ../assets/s1 folder
import earbuds from '../assets/s1.png';
import lamp from '../assets/s2.png';
import stand from '../assets/s3.png';
import smartwatch from '../assets/s4.png';
import speaker from '../assets/s5.png';
import camera from '../assets/s6.png';
import printer from '../assets/s7.png';
import webcam from '../assets/s8.png';
import mouse from '../assets/s9.png';
import phone from '../assets/s10.png';
import usb from '../assets/s11.png';

const screens = [
  {
    clue: "I’m small, I play music, and I connect wirelessly.",
    image: earbuds,
    label: "Wireless Earbuds",
  },
  {
    clue: "I light up your desk and help you study at night.",
    image: lamp,
    label: "LED Desk Lamp",
  },
  {
    clue: "I hold your phone steady when you watch videos or take pictures.",
    image: stand,
    label: "Phone Stand",
  },
  {
    clue: "I can tell you the time, count your steps, and even read your messages.",
    image: smartwatch,
    label: "Smartwatch",
  },
  {
    clue: "I help you find answers, set alarms, and even tell jokes — all with your voice.",
    image: speaker,
    label: "Smart Speaker (like Alexa or Google Home)",
  },
  {
    clue: "I help you click pictures, record videos, and sometimes even make movies!",
    image: camera,
    label: "Camera or Action Camera",
  },
  {
    clue: "You use me to print things from your computer onto paper.",
    image: printer,
    label: "Printer",
  },
  {
    clue: "I will help you see your friends during online classes.",
    image: webcam,
    label: "Webcam",
  },
  {
    clue: "I let you move the pointer on the screen with a small click.",
    image: mouse,
    label: "Computer Mouse",
  },
  {
    clue: "You use me to talk to someone who is far away.",
    image: phone,
    label: "Mobile Phone",
  },
  {
    clue: "I store all your important files, photos, and documents.",
    image: usb,
    label: "USB Drive or Hard Disk",
  },
];

export default function Com() {
  const [screen, setScreen] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const handleNext = () => {
    if (!revealed && screen < screens.length) {
      setRevealed(true);
    } else if (screen < screens.length - 1) {
      setScreen(screen + 1);
      setRevealed(false);
    } else {
      setScreen(screen + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        {screen < screens.length ? (
          <>
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
              {screens[screen].clue}
            </h2>
            {revealed && (
              <div className="mt-6 flex flex-col items-center">
                <Image
                  src={screens[screen].image}
                  alt={screens[screen].label}
                  width={250}
                  className="rounded-lg mb-2"
                />
                <div className="text-lg md:text-xl text-gray-800 font-semibold text-center">
                  {screens[screen].label}
                </div>
              </div>
            )}
            <button
              onClick={handleNext}
              className="mt-8 px-8 py-3 text-lg md:text-xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Next
            </button>
          </>
        ) : (
          <p className="text-2xl text-green-700 font-bold text-center">You cracked every clue like a true tech detective, Good job!</p>
        )}
      </div>
    </div>
  );
}