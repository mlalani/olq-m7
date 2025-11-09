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
      title: "What is tax?",
      description: (
        <>
          Taxes are money that people and businesses give to the government.<br />
          It is like a community piggy bank that everyone puts money into.<br /><br />
          <span className="font-semibold">Who collects it?</span><br />
          The government of every country collects tax.<br /><br />
          <span className="font-semibold">Why do you think the government collects tax?</span><br />
          The government uses this tax money to build infrastructure like roads, transportation, schools, hospitals, and provide public services like police and firefighters.
        </>
      ),
      image: null
    },
    {
      title: "Direct v/s Indirect Tax",
      description: (
        <>
          There are two main types of taxes:<br /><br />
          <span className="font-bold">Direct Tax:</span> Paid directly to the government from the money people earn.<br />
          Example: If Rohan earns $2000, he has to pay a part of his income to the government as tax.<br />
          <span className="italic">It is a Direct Tax because it is paid directly from a person’s income to the government.</span><br /><br />
        </>
      ),
      image: null
    },
    {
      title: "Direct v/s Indirect Tax",
      description: (
        <>
          There are two main types of taxes:<br /><br />
          <span className="font-bold">Direct Tax:</span> Paid directly to the government from the money people earn.<br />
          Example: If Rohan earns $2000, he has to pay a part of his income to the government as tax.<br />
          <span className="italic">It is a Direct Tax because it is paid directly from a person’s income to the government.</span><br /><br />
          <span className="font-bold">Indirect Tax:</span> Added to the price of goods and services we buy. Shops collect it from us and pass it on to the government.<br />
          Example: Sales Tax like in this fuel bill.
        </>
      ),
      image: null
    },
    {
      title: "Key characteristics of a direct tax",
      description: (
        <ul className="list-disc ml-6 my-2 text-left text-lg">
          <li><b>Paid directly to the government:</b> The person who earns the money gives tax straight to the government.</li>
          <li><b>Non-transferable:</b> Only the person who earns pays it. They can’t make someone else pay it for them.</li>
          <li><b>Progressive:</b> Based on income or profit. The more money you earn, the more tax you pay.</li>
          <li><b>Collected once a year:</b> Usually paid when people calculate how much they earned in a year.</li>
        </ul>
      ),
      image: null
    },
    {
      title: "Key features of Indirect tax",
      description: (
        <ul className="list-disc ml-6 my-2 text-left text-lg">
          <li><b>Transferable:</b> As it is paid through the seller, who collects it from buyers and transfers it to the government.</li>
          <li><b>Included in the price of goods:</b> You don’t pay it separately — it’s already added to the cost.</li>
          <li><b>Shared by everyone:</b> Everyone who buys things pays this tax — rich or poor, young or old.</li>
          <li><b>Collected throughout the year:</b> Since people keep buying things every day, this tax is collected all year round.</li>
        </ul>
      ),
      image: null
    },
    {
      title: "Examples of Direct Tax",
      description: (
        <>
          <span className="font-bold">Income tax:</span> This is the tax taken from the money people earn from their jobs.<br />
          Example: Your parents pay income tax on their salary.<br /><br />
        </>
      ),
      image: null
    },
    {
      title: "Examples of Direct Tax",
      description: (
        <>
          <span className="font-bold">Property Tax:</span> An annual tax paid by a real estate owner based on the value of their property.<br />
          Example: If your parents own a house, they must pay property tax to the government.<br /><br />
        </>
      ),
      image: null
    },
    {
      title: "Examples of Direct Tax",
      description: (
        <>
          <span className="font-bold">Capital Gains Tax:</span> Paid when profit is earned on selling something valuable like land, house, or shares.<br />
          Example: Raima holds equity or shares of a company. When she sells her shares later for a higher price than she bought them — she earns a profit. That profit is called a Capital Gain.<br /><br />
          <span className="font-bold">LTCG:</span> If Raima keeps her shares for more than 1 year before selling them, it is called a Long-Term Capital Gain (LTCG).<br />
          <span className="font-bold">STCG:</span> If she sells them within 1 year, it’s a Short-Term Capital Gain (STCG).
        </>
      ),
      image: null
    },
    {
      title: "Examples of Indirect Tax",
      description: (
        <>
          <span className="font-bold">Sales Tax/ Value added tax [VAT] / Goods and Services Tax [GST]:</span> This is the tax added to things people buy. The government earns money from purchases we make every day.<br />
          Example: You buy a T-shirt for $10, and your state’s sales tax is 8%. You pay $10.80 — the store sends the $0.80 to the government.<br /><br />
        </>
      ),
      image: null
    },
    {
      title: "Examples of Indirect Tax",
      description: (
        <>
          <span className="font-bold">Customs Duty (Import Tax):</span> This is a tax on goods that come into a country from another country. It helps local businesses by making imported goods a little more expensive.<br />
          Example: If a company imports cars from another country, it pays customs duty when the goods enter the port. That’s why imported items sometimes cost more.<br /><br />
        </>
      ),
      image: null
    },    
    {
      title: "Examples of Indirect Tax",
      description: (
        <>
          <span className="font-bold">Excise duty:</span> This tax is charged on specific items that are harmful or luxury goods.<br />
          Example: It is levied on soda, tobacco, or energy drinks.<br /><br />
        </>
      ),
      image: null
    },    
        {
      title: "Examples of Indirect Tax",
      description: (
        <>
          <span className="font-bold">Toll Tax:</span> This tax is paid when vehicles travel on highways or special bridges. This is the toll tax used for road maintenance.<br />
          Example: The Golden Gate Bridge toll is $9.25.<br /><br />
        </>
      ),
      image: null
    },
        {
      title: "Examples of Indirect Tax",
      description: (
        <>
          <span className="font-bold">Entertainment Tax:</span> This tax is paid when we spend money on fun or entertainment activities like watching movies, going to amusement parks, concerts, or sports events.<br />
          Example: A movie ticket for $10 includes $1 as entertainment tax.
        </>
      ),
      image: null
    },
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
          <div className={screens[currentScreen].image ? "space-y-6" : "space-y-6 max-w-2xl text-center"}>
            {typeof screens[currentScreen].description === 'string' ? (
              <p className="text-xl text-gray-700 leading-relaxed">{screens[currentScreen].description}</p>
            ) : (
              <div className="text-xl text-gray-700 leading-relaxed">{screens[currentScreen].description}</div>
            )}
            {screens[currentScreen].example && (
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mt-4">
                <p className="text-xl text-gray-800 font-medium">
                  {screens[currentScreen].example}
                </p>
              </div>
            )}
            {screens[currentScreen].extra && (
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg mt-4">
                <p className="text-lg text-gray-800 font-medium">
                  {screens[currentScreen].extra}
                </p>
              </div>
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