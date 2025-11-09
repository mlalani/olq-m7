'use client';

import { useState } from 'react';
import Image from 'next/image';
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";


export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      title: "Earning Money",
      description: (
        <>
          Meet Mr. Jay, the Doctor working at the City Hospital.<br />
          He treats children who are not well to help recover everyday.<br />
          For his work, he earns money, which is called a salary or an income.<br />
          Just like students get grades or points for doing good work in class,<br />
          grown-ups get salary or income for their good work.
        </>
      ),
      image: S1
    },
    {
      title: "Calculating Tax",
      description: (
        <>
          The government needs to know how much money Mr. Jay earned.<br />
          So, the City Hospital administration deducts income tax from his salary each month.<br />
          <b>Income tax is deducted from salaries each month.</b> Higher the salary, higher is the income tax.<br />
          Every country has its own rules for calculating income tax.<br />
          Some take a bigger portion, some take a smaller portion, but everyone has to contribute.<br />
          In addition, everyone is expected to share a record of their earnings and taxes paid annually.
        </>
      ),
      image: S2
    },
    {
      title: "Annual Tax Filing",
      description: (
        <>
          Every year, Mr. Jay has to inform the government about his earnings.<br />
          Every earning person, whether employed with company, running business or self employed, has to inform:<br />
          <ul className="list-disc ml-6 my-2 text-left">
            <li>How much money he earned this year</li>
            <li>How much tax he has already paid or still needs to pay.</li>
          </ul>
          This is a process called <b>annual tax filing</b>.<br />
          This means he fills out a special form for the government.
        </>
      ),
      image: S3
    },
    {
      title: "Who Can File Income Tax",
      description: (
        <ul className="list-disc ml-6 my-2 text-left">
          <li>Any individual who earns money and is employed with an organisation/company (like Mr. Jay.)</li>
          <li>Self employed professionals like lawyers or architects</li>
          <li>Business owners</li>
          <li>Sometimes, parents file taxes on behalf of their children if the child earns money. e.g. kidpreneur, child actor or a YouTuber!</li>
        </ul>
      ),
      image: null
    },
    {
      title: "Who Helps with Filing",
      description: (
        <>
          People can file taxes online by themselves.<br />
          But many people take the help of a <b>CA (Chartered Accountant)</b>.
        </>
      ),
      image: null
    },
    {
      title: "Who is a Chartered Accountant (CA)",
      description: (
        <>
          A Chartered Accountant is a finance and accounting expert,<br />
          who helps people and businesses manage their money, pay taxes correctly, and follow government rules.
        </>
      ),
      image: null
    },
    {
      title: "What does a CA do?",
      description: (
        <ul className="list-disc ml-6 my-2 text-left">
          <li>A CA records how much money you earn and spend. You always know where your money goes.</li>
          <li>Taxes can be tricky as every country has several rules! A CA helps you calculate and pay the correct tax to the government.</li>
          <li>They advise people and companies on how to save money, invest wisely, and grow safely.</li>
        </ul>
      ),
      image: null
    }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {screens[currentScreen].title}
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className={screens[currentScreen].image ? "grid md:grid-cols-2 gap-8 items-center mb-8" : "flex justify-center mb-8"}>
          <div className={screens[currentScreen].image ? "space-y-6 text-[1.35rem] text-gray-700 leading-relaxed" : "space-y-6 max-w-2xl text-center text-[1.35rem] text-gray-700 leading-relaxed"}>
            {typeof screens[currentScreen].description === 'string' ? (
              <p>{screens[currentScreen].description}</p>
            ) : (
              screens[currentScreen].description
            )}
          </div>
          
          {screens[currentScreen].image && (
          <div className="flex justify-center">
            <Image 
              src={screens[currentScreen].image} 
              alt={screens[currentScreen].title}
              className="w-[350px] object-cover rounded-lg shadow-lg"
            />
          </div>
          )}
        </div>

        {currentScreen < screens.length - 1 && (
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg"
            >
              Next
            </button>
          </div>
        )}

      
      </div>
    </div>
  );
}