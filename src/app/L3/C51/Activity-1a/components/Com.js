"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";

const SCREENS = [
  {
    id: 1,
    title: "",
    content: "A long, long time ago, around 3000 BCE in Ancient Mesopotamia, people kept their money under mats, in jars buried underground, or tied to their belts. During the Medieval period (around 1000–1500 CE), some kings and merchants hired guards to protect their gold and silver.",
    showImage: true,
    image: S1
  },
  {
    id: 2,
    content: "",
    title: "Do you think keeping money under a pillow or in a jar is safe in the modern world?",
    showImage: false
  },
  {
    id: 3,
    content: "",
    title: "Where do you think people keep money today?",
    showImage: false
  },
  {
    id: 4,
    content: "",
    title: "Do you know what a bank is?",
    showImage: false
  },
  {
    id: 5,
    title: "What is a Bank?",
    content: "Fun definition: A bank is like a money superhero, it keeps your money safe and helps you use it in magical ways.\n\nReal-life definition: A bank is a financial institution that keeps your money safe, provides loans, allows payments, and offers other money-related services.",
    showImage: false
  },
  {
    id: 6,
    title: "Mr. Branch – The Friendly Building",
    content: "Definition: A physical bank branch where you can deposit money, withdraw cash, open accounts, submit cheques, or get advice, especially for tasks that are complicated or require a signature.\n\nExample: Submitting a school fee cheque, applying for a student savings account, or updating personal details.",
    showImage: true,
    image: S2
  },
  {
    id: 7,
    title: "Ms. ATM – The Quick Money Machine",
    content: "Definition: An Automated Teller Machine (ATM) lets you withdraw cash, check balances, and sometimes deposit money.\n\nExample: Withdrawing cash for shopping, collecting an allowance, or emergencies.",
    showImage: true,
    image: S3
  },
  {
    id: 8,
    title: "Dr. Online – The Invisible Helper",
    content: "Definition: Online banking lets you check balances, pay bills, and transfer money through a website or app.",
    showImage: true,
    image: S4
  },
  {
    id: 9,
    title: "Deposit",
    content: "Putting money into your bank account.\n\nExample: You deposit your pocket money or school fee money.",
    showImage: false
  },
  {
    id: 10,
    title: "Withdraw",
    content: "Taking money out of your bank account.\n\nExample: You withdraw cash from an ATM to buy snacks.",
    showImage: false
  }
];

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < SCREENS.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const currentScreenData = SCREENS[currentScreen];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white/20 p-8">
          
      

          {/* Content */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent mb-6">
              {currentScreenData.title}
            </h1>
            
            <div className="text-slate-700 text-xl leading-relaxed max-w-3xl mx-auto">
              {currentScreenData.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Render image if available */}
            {currentScreenData.image && (
              <div className="mt-8">
                <Image 
                  src={currentScreenData.image} 
                  alt={currentScreenData.title} 
                  className="w-64 h-48 rounded-xl mx-auto object-cover shadow-md"
                />
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center">
            {currentScreen < SCREENS.length - 1 && (
              <button
                onClick={nextScreen}
                className="px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}