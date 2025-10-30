"use client";


export default function Com() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-teal-50 flex flex-col items-center py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-teal-700 mb-6">Diversify Your Investments</h1>
        <div className="mb-6">
          <p className="text-lg text-gray-800 mb-2">
            Diversify the investment across the following:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Bank</strong> <span className="text-gray-500">(safe, steady return)</span>
            </li>
            <li>
              <strong>Mutual Funds</strong> <span className="text-gray-500">(medium risk)</span>
            </li>
          </ul>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
          <h2 className="text-xl font-semibold text-teal-700 mb-2">Benefits of a Balanced Approach</h2>
          <ul className="list-disc list-inside text-gray-800">
            <li>
              If an option doesn’t do well, the others can still yield profit. This lowers the risk of losing all the money in a go.
            </li>
            <li>
              She can enjoy the safety of the bank and the excitement of growing money faster in mutual funds at the same time. 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}