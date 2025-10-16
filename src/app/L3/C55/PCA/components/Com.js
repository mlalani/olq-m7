"use client";
export default function Com() {
  const items = [
    { name: "Chocolate Bar", price: 2, current: "Depreciated", nextYear: "Depreciate", member: "Mom" },
    { name: "Rare Comic Book", price: 5, current: "Appreciated", nextYear: "Appreciate", member: "Brother" },
    { name: "Small Toy", price: 15, current: "Depreciated", nextYear: "Depreciate", member: "Sister" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Appreciate or Depreciate?</h1>
      <div className="mb-8 text-center space-y-2 text-gray-600 ">
        <p className="max-w-xl text-center">
          Ask family member & friends about 2-3 things they recently bought.
        </p>
        <p>
          Guess if its current value has appreciated or depreciated since it was bought.
        </p>
        <p>
          Guess if it will appreciate or depreciate in the next 1 year.
        </p>
        <p>
          Ask your family member to verify your guess. 
        </p>
        <p>
          Here’s a sample table to record your answers.
        </p>
      </div>

      <div className="overflow-x-auto w-full max-w-5xl">
        <table className="min-w-full bg-white rounded-lg shadow-lg divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Family Member</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Item Bought</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Approx. Price Paid</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Has Value Appreciated/Depreciated Now?</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Will It Appreciate/Depreciate Next Year?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-800 font-medium">{item.member}</td>
                <td className="px-6 py-4 text-gray-800 font-medium">{item.name}</td>
                <td className="px-6 py-4 text-gray-700">${item.price}</td>
                <td className="px-6 py-4 text-gray-700">{item.current}</td>
                <td className="px-6 py-4 text-gray-700">{item.nextYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  );
}
