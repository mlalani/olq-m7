"use client";

import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s1.png";
import s4 from "../assets/s1.png";
import s5 from "../assets/s1.png";
import s6 from "../assets/s1.png";
import s7 from "../assets/s1.png";
import s8 from "../assets/s1.png";
import s9 from "../assets/s1.png";
import s10 from "../assets/s1.png";
import s11 from "../assets/s1.png";
import s12 from "../assets/s1.png";
import s13 from "../assets/s1.png";
import s14 from "../assets/s1.png";
import s15 from "../assets/s1.png";
import s16 from "../assets/s1.png";
import s17 from "../assets/s1.png";
import s18 from "../assets/s1.png";
import s19 from "../assets/s1.png";

const mcqs = [
  {
    question: "Do you know what an Energy Bill is?",
    description: "",
    answer: "Energy is like “food for home.” Just like our body needs food to get energy, our home needs energy to ensure that the lights, fans, phone, laptop, fridge, and TV work. The energy bill is a record of how much energy we used and how much we must pay for what we have used.",
    image: s1
  },
  {
    question: "What do we find at the top of the bill?",
    description: "",
    answer: "It is the name of the company, EVERSOURCE, and the title 'ACCOUNT STATEMENT.'",
    example: "This is like the logo on your favorite cereal box, telling you which company made it.",
    image: s2
  },
  {
    question: "What do you think an Account Number is?",
    description: "",
    answer: "It’s a special ID number given to each home: 0000 0000 0000.",
    example: "It helps the company track your energy, just like a lunch box has a name written on it so everyone knows it belongs to whom.",
    image: s3
  },
  {
    question: "What does the 'Statement Date' mean?",
    description: "",
    answer: "It’s the date the bill was released, like MM/DD/YY shown here.",
    example: "It’s the date on your school worksheet when the teacher gives it to you.",
    image: s4
  },
  {
    question: "What does the 'Service Provided to' section show?",
    description: "",
    answer: "It tells us whose home the bill belongs to: JOHN J CUSTOMER.",
    example: "It’s like the name tag on your school bag, showing that it belongs to you.",
    image: s5
  },
  {
    question: "What does 'Amount now Due Date' mean?",
    description: "",
    answer: "It’s the last day to pay the bill, shown as MM/DD/YY.",
    example: "It’s like when your teacher says, “Please finish your homework by Friday!”  that’s your due date too.",
    image: s6
  },
  {
    question: "What does the amount $197.57 denote?",
    description: "",
    answer: "It’s the total money we must pay: $196.57.",
    example: "It’s the total cost of all the treats you picked out at the candy store.",
    image: s7
  },
  {
    question: "In how many parts does the amount $197.57 is split?",
    description: "",
    answer: "The total amount of $197.57 is split into 4 different jobs done by the energy company.",
    splitList: [
      {
        title: "Supply cost: $96.12",
        desc: "These are the costs of producing the electricity you used.",
        example: "Just like the cost of making cookies."
      },
      {
        title: "Transmission: $28.67 and Local Delivery: $59.09",
        desc: "These are costs for bringing electricity from the power station to your home.",
        example: "Similar to paying the bus driver to take you from school all the way home."
      },
      {
        title: "Public Benefits",
        desc: "This is a small cost that helps support energy programs authorized by the state.",
        example: "This is like putting a little bit of your allowance into the 'class party' jar so everyone can enjoy the snacks and games! It helps the whole community."
      }
    ],
    image: s8
  },
  {
    question: "What does the Usage History graph is about?",
    description: "",
    answer: "It shows the energy consumed by the house in the current and past months.",
    example: "This graph is like a height chart on the wall that shows how tall you grow each month.",
    image: s9
  },
  {
    question: "Which month had the highest energy consumption?",
    description: "",
    answer: "August had the highest energy consumption.",
    image: s10
  },
  {
    question: "Which month had the lowest energy consumption?",
    description: "",
    answer: "March had the lowest energy consumption.",
    image: s11
  },
  {
    question: "What does the number 697 kWh tell us in the 'How Your Use Changed' box?",
    description: "",
    answer: "It tells about the total amount of energy the house used this month.",
    example: "This is like the total number of crayons you used to draw pictures this month.",
    image: s12
  },
  {
    question: "Can you guess what kWh stands for?",
    description: "",
    answer: "kWh stands for kilo-watt hour. It's the unit of measure for electricity, like how we use 'scoops' to measure ice cream or 'minutes' to measure time.",
    image: s12
  },
  {
    question: "What is the 'News For You' section for?",
    description: "",
    answer: "This section gives us helpful tips and advice from the energy company.",
    example: "It’s like when your parents remind you to “close the fridge door quickly” or “turn off the TV when no one’s watching.” These little tips help the whole family save energy!",
    image: s13
  }
];

export default function Com() {
  const [mcqIdx, setMcqIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  if (mcqIdx >= mcqs.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-8xl w-full flex flex-col items-center justify-center p-12">
          <h2 className="text-5xl font-extrabold text-green-800 mb-8 text-center">Well done!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-8xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left image: dedicated for each QnA */}
        <div className="md:w-1/2 flex flex-col items-center justify-center bg-indigo-50 p-8">
          <Image src={mcqs[mcqIdx].image} alt={`Q${mcqIdx + 1} Image`} className="rounded-xl shadow-md w-[60%]" />
        </div>
        {/* Right content: MCQ only */}
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          <div className="flex flex-col justify-center h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-indigo-700 mb-2">{mcqs[mcqIdx].question}</h2>
              {mcqs[mcqIdx].description && (
                <p className="text-md text-gray-700 mb-4">{mcqs[mcqIdx].description}</p>
              )}
              {revealed && (
                <div className="mt-6 text-xl font-bold text-green-800">
                  {mcqIdx === 7 ? (
                    <>
                      <div className="mb-2">The total amount of $197.57 is split into 4 different jobs done by the energy company.</div>
                      <ul className="list-disc pl-6 space-y-4">
                        {mcqs[mcqIdx].splitList.map((item, idx) => (
                          <li key={idx}>
                            <span className="font-semibold">{item.title}</span><br />
                            {item.desc}<br />
                            <span className="italic">Example: {item.example}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      {mcqs[mcqIdx].answer}
                      {mcqs[mcqIdx].example && (
                        <>
                          <br />
                          <br />
                          <span className="italic">
                            Example: {mcqs[mcqIdx].example}
                          </span>
                        </>
                      )}
                    </>
                  )}
                </div>
              )}
              <button
                className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                onClick={() => {
                  if (!revealed) {
                    setRevealed(true);
                  } else {
                    setRevealed(false);
                    setMcqIdx(mcqIdx + 1);
                  }
                }}
              >
                {revealed ? 'Next' : 'Show Answer'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}