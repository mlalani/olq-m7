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
    answer: "An energy bill is a bill that shows how much electricity your home has used over a certain period and how much needs to be paid for it. It’s like a monthly report that tells how much “power” your home used to keep lights, fans, TVs, and other appliances running.",
    image: s1
  },
  {
    question: "What do we find at the top of the bill?",
    description: "",
    answer: "At the top, you’ll see the name of the energy company Energy Statement and their website.",
    example: "Just like a school letterhead shows the school’s name and contact details, this section tells you who issued the bill.",
    image: s2
  },
  {
    question: "What do you think an Account Number is?",
    description: "",
    answer: "IIt’s a unique ID number given to each customer or home. It helps the company record how much energy your household uses.",
    example: "Think of it like your student ID number - it’s unique to you and helps your school track your grades or attendance.",
    image: s3
  },
  {
    question: "What does the “Statement Date” mean?",
    description: "",
    answer: "It’s the date the bill was created or released.",
    example: "Similar to when your teacher writes the date on top of your worksheet to show when it was given out.",
    image: s4
  },
  {
    question: "What does “Due Date” mean?",
    description: "",
    answer: "It’s the last day to pay the bill without a late charge.",
    example: "Like a project submission deadline, if you miss it, you might lose points (or in this case, pay an extra fee).",
    image: s5
  },
  {
    question: "What does the “Service For” section show?",
    description: "",
    answer: "It tells who the bill belongs to or which address used the energy.",
    example: "Just like a report card shows your name and class to identify whose marks are listed.",
    image: s6
  },
  {
    question: "What details does the “Questions About Your Bill” section include, and why is this section important?",
    description: "",
    answer: "This section lists the company’s phone number, email, and office hours. It helps customers contact the company if they find an error or have questions about the bill.",
    example: "It’s like the “Help Desk” in your school, a place you can reach out to when you need support.",
    image: s7
  },
  {
    question: "What is the use of the ‘Ways to Pay’ section?",
    description: "",
    answer: "It lists different payment options, such as online payment, mail, or phone.",
    example: "Like choosing whether to submit your assignment online or on paper, you have multiple ways to complete the task.",
    image: s8
  },
  {
    question: "What does “Amount Due on the Previous Statement” mean?",
    description: "",
    answer: "It shows how much money was owed from the last bill.",
    example: "Like when a teacher reminds you that you still haven’t turned in last week’s assignment, it’s something that carried over from before.",
    image: s9
  },
  {
    question: "What does “Payments Made Since the Last Statement” mean?",
    description: "",
    answer: "It shows how much money was already paid toward the bill.",
    example: "Similar to marking off homework you’ve already completed, it reduces what’s still left to do.",
    image: s10
  },
  {
    question: "What is a “Previous Unpaid Balance”?",
    description: "",
    answer: "It’s the leftover amount from a bill that wasn’t paid yet.",
    example: "Like when you still owe part of a class project, it remains incomplete until you finish it next time.",
    image: s11
  },
  {
    question: "What are “Electric Delivery Charges”?",
    description: "",
    answer: "These are the costs of bringing electricity from the power station to your home.",
    example: "Like paying a delivery fee when ordering food online, you’re paying for the service that brings it to you.",
    image: s12
  },
  {
    question: "What are “Electric Generation Charges”?",
    description: "",
    answer: "These are the costs of producing the electricity you use.",
    example: "If electricity were pizza, this would be the cost of making it, ingredients, labor, and all.",
    image: s13
  },
  {
    question: "What does “Total Amount Due” mean?",
    description: "",
    answer: "It’s the final total you owe, after all additions and subtractions. And the final date to pay off the bill.",
    example: "Like checking your shopping bill, the last line shows exactly what you need to pay at the counter.",
    image: s14
  },
  {
    question: "What does the graph show?",
    description: "",
    answer: "The graph shows how much electricity was used each month over the year. It helps identify when energy use is highest or lowest.",
    example: "You might notice higher use in summer (fans/AC) or winter (heaters), it reflects how our habits change with the seasons.",
    image: s15
  },
  {
    question: "In which month was the highest electricity used?",
    description: "",
    answer: "In July, with 460 kWh used.",
    image: s16
  },
  {
    question: "What is kWh that we see on the bill?",
    description: "",
    answer: "kWh is a unit to measure electricity, it tells us how much electrical energy we used.",
    example: "We use centimeters (cm) to measure length, and we use kilowatt-hours (kWh) to measure electricity. So, just like saying a pencil is 10 cm long, we can say a home used 200 kWh of electricity in a month!",
    image: s17
  },
  {
    question: "In which month was the lowest electricity used?",
    description: "",
    answer: "A: April, with 320 kWh used.",
    image: s18
  },
  {
    question: "What is shown in the Summary section?",
    description: "",
    answer: "A quick recap of key details, account number, due date, total amount, and amount enclosed.",
    example: "Just like a summary box on a report card showing your overall grades at a glance.",
    image: s19
  },
  {
    question: "What does “Amount Enclosed” mean?",
    description: "",
    answer: "It’s the space where you write how much you’re paying if you send a paper payment.",
    example: "Like writing the total marks you think you’ll score before submitting your answer sheet, a final check before turning it in.",
    image: s19
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
                  {mcqs[mcqIdx].answer}
                  {mcqs[mcqIdx].example && (
                    <>
                      <br />
                      <br />
                      <span className="italic">Example: {mcqs[mcqIdx].example}</span>
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