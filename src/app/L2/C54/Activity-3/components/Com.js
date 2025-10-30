"use client";

import React from "react";
import jsPDF from "jspdf";

export default function Com() {
  const [form, setForm] = React.useState({
    businessIdea: "",
    whyIdea: "",
    product: "",
    costPerItem: "",
    sellingPrice: "",
    advertise: "",
    adCost: "",
    whereToSell: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Business Plan", 14, 18);

    // Manually add table data
    const headers = [
      "Business Idea",
      "Why this Idea",
      "Product",
      "Cost per Item",
      "Selling Price",
      "How You Will Advertise",
      "Ad Cost",
      "Where to Sell"
    ];
    const values = [
      form.businessIdea,
      form.whyIdea,
      form.product,
      form.costPerItem,
      form.sellingPrice,
      form.advertise,
      form.adCost,
      form.whereToSell
    ];

    let startY = 30;
    doc.setFontSize(12);
    headers.forEach((header, i) => {
      doc.text(`${header}:`, 14, startY + i * 10);
      doc.text(`${values[i]}`, 80, startY + i * 10);
    });

    doc.save("business-plan.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-teal-50 flex flex-col items-center py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-full overflow-x-auto">
        <h1 className="text-3xl font-bold text-teal-700 mb-6">Business Plan</h1>
        <div className="w-full min-w-[1100px]">
          <table className="w-full border border-gray-300 rounded-xl mb-8 table-fixed">
            <thead>
              <tr className="bg-teal-100 text-teal-900">
                <th className="p-3 w-48">Business Idea</th>
                <th className="p-3 w-48">Why this Idea</th>
                <th className="p-3 w-48">Product</th>
                <th className="p-3 w-32">Cost per Item</th>
                <th className="p-3 w-32">Selling Price</th>
                <th className="p-3 w-48">How You Will Advertise</th>
                <th className="p-3 w-32">Ad Cost</th>
                <th className="p-3 w-48">Where to Sell</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">
                  <textarea
                    name="businessIdea"
                    value={form.businessIdea}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1 min-h-[48px]"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="whyIdea"
                    value={form.whyIdea}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1  min-h-[48px]"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1  min-h-[48px]"
                  />
                </td>
                <td className="p-2">
                  <input
                    type="number"
                    name="costPerItem"
                    value={form.costPerItem}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                </td>
                <td className="p-2">
                  <input
                    type="number"
                    name="sellingPrice"
                    value={form.sellingPrice}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="advertise"
                    value={form.advertise}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1  min-h-[48px]"
                  />
                </td>
                <td className="p-2">
                  <input
                    type="number"
                    name="adCost"
                    value={form.adCost}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="whereToSell"
                    value={form.whereToSell}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1  min-h-[48px]"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={handleDownloadPDF}
          className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition"
        >
          Submit & Download PDF
        </button>
      </div>
    </div>
  );
}