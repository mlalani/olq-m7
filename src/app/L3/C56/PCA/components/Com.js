'use client';

export default function Com() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">
          Bill Detective
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-6">
          Bills are all around us. Each bill contains important information. In this activity, you have to:
        </p>
        <ul className="list-disc ml-6 text-lg md:text-xl text-gray-800 mb-6">
          <li className="mb-2">
            <span className="font-semibold">Find Bills:</span> Find 3 different kinds of bills:
            <ul className="list-disc ml-6">
              <li>Energy</li>
              <li>Property</li>
              <li>Restaurant or air travel</li>
            </ul>
          </li>
          <li className="mb-2">
            <span className="font-semibold">Circle &amp; Mark:</span>
            <ul className="list-disc ml-6">
              <li>Use a <span className="text-green-700 font-semibold">green pen</span> to circle what you understand (shop name, date).</li>
              <li>Use a <span className="text-red-700 font-semibold">red pen</span> to circle tax levied.</li>
            </ul>
          </li>
          <li className="mb-2">
            <span className="font-semibold">Understand the bill:</span>
            <ul className="list-disc ml-6">
              <li>
                For the <span className="font-semibold">Energy Bill</span>, check the consumption and bill amount for past months to identify the trend and note which month had the highest and lowest consumption and bill.
              </li>
              <li>
                For the <span className="font-semibold">Property Bill</span>, check the taxable value and tax levied.
              </li>
              <li>
                For the <span className="font-semibold">Restaurant/Air Travel Bill</span>, check the amount of tax levied. Note the difference in cost of food/ticket with and without tax.
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <span className="font-semibold">Reflect on the learnings of this activity.</span>
          </li>
          <li className="mb-2">
            Narrate what you did and learnt in this activity and record it.
          </li>
          <li>
            Please share pictures of the bills you selected along with your recording with your teacher.
          </li>
        </ul>      
      </div>
    </div>
  );
}