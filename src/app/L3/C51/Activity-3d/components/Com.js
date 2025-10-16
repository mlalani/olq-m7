"use client";
import { useState } from "react";

export default function Com() {
  const [chequeMode, setChequeMode] = useState("bearer");
  const [date, setDate] = useState(Array(8).fill(""));
  const [payeeName, setPayeeName] = useState("fd");
  const [amountInWords, setAmountInWords] = useState("dww");
  const [amount, setAmount] = useState("11");
  const [signature, setSignature] = useState("");

  const handleDateChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newDate = [...date];
      newDate[index] = value;
      setDate(newDate);
    }
  };

  const applyMode = (mode) => {
    setChequeMode(mode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex flex-col items-center justify-center p-8 gap-5">
      <select
        value={chequeMode}
        onChange={(e) => applyMode(e.target.value)}
        className="appearance-none border border-slate-300 bg-white rounded-lg px-4 py-3 font-semibold text-slate-800 shadow-sm cursor-pointer"
      >
        <option value="bearer">Keep OR BEARER</option>
        <option value="acpayee">A/C Payee</option>
        <option value="cross">Cross Cheque</option>
      </select>

      <section className="w-[880px] min-h-[420px] bg-white border border-slate-200 rounded-2xl shadow-xl relative overflow-hidden flex flex-col">
        {chequeMode === "cross" && (
          <div className="absolute top-5 left-5 w-36 h-20 pointer-events-none">
            <div className="absolute inset-0 border-t-2 border-slate-800 transform -rotate-[35deg]"></div>
            <div className="absolute inset-0 border-t-2 border-slate-800 transform translate-y-3 -rotate-[35deg]"></div>
          </div>
        )}

        <header className="flex items-center gap-4 px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-white">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold shadow-lg">
            BNK
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="font-bold text-lg">Bank Name</div>
            <div className="text-slate-500 text-sm">IFSC: KK221BVFG</div>
            <div className="text-slate-500 text-sm">Branch Name</div>
          </div>

          <div className="flex items-center gap-1.5 ml-auto">
            {date.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleDateChange(index, e.target.value)}
                className="w-7 h-8 border border-slate-600 rounded-md text-center font-bold text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={index < 2 ? "D" : index < 4 ? "M" : "Y"}
              />
            ))}
          </div>
        </header>

        <main className="flex-1 p-6 pb-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="min-w-[92px] font-semibold text-sm text-slate-800">PAY</div>
            <input
              type="text"
              value={payeeName}
              onChange={(e) => setPayeeName(e.target.value)}
              placeholder="Enter payee name"
              className="flex-1 border-none outline-none border-b-2 border-dashed border-slate-400 pb-2 px-1 font-semibold text-sm placeholder-slate-400"
            />
            <div className="relative ml-auto">
              {chequeMode === "acpayee" && (
                <span className="absolute left-1/2 transform -translate-x-1/2 -top-2 px-2 py-1 text-xs font-bold border border-slate-700 rounded-md bg-white">
                  A/C PAYEE
                </span>
              )}
              <div className={`font-bold text-xs px-3 py-1.5 rounded-full border ${
                chequeMode === "acpayee" 
                  ? "line-through text-slate-500 bg-slate-100 border-slate-200" 
                  : "text-indigo-700 bg-indigo-50 border-indigo-200"
              }`}>
                OR&nbsp;BEARER
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="min-w-[92px] font-semibold text-sm text-slate-800">SUM OF</div>
            <input
              type="text"
              value={amountInWords}
              onChange={(e) => setAmountInWords(e.target.value)}
              placeholder="Amount in words"
              className="flex-1 border-none outline-none border-b-2 border-dashed border-slate-400 pb-2 px-1 font-semibold text-sm placeholder-slate-400"
            />
            <div className="flex items-center gap-2 px-3 py-1.5 border-2 border-slate-300 rounded-lg min-w-[220px] bg-slate-50">
              <span className="font-bold text-slate-600">₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="border-none outline-none bg-transparent text-right w-full font-bold text-lg font-mono"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="min-w-[92px] font-semibold text-sm text-slate-800">Acc. No.</div>
            <div className="flex gap-1">
              {[1,2,3,4,5,6,7,8,9,0,1,2,8,7].map((digit, index) => (
                <div
                  key={index}
                  className="w-7 h-8 border border-slate-400 rounded text-center font-bold text-sm flex items-center justify-center bg-slate-50"
                >
                  {digit}
                </div>
              ))}
            </div>
          </div>

          <div className="ml-auto flex flex-col items-end gap-1.5 mt-1.5">
            <input
              type="text"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              placeholder="Signature"
              className="border-none outline-none border-b-2 border-dashed border-slate-400 w-[230px] px-1 py-2 text-center"
            />
            <small className="text-slate-500 font-semibold">Please sign above</small>
          </div>

          <div className="mt-auto pt-4 pb-2 px-5 flex justify-between items-end border-t border-dashed border-slate-200 font-mono tracking-widest font-bold text-slate-800">
            <span className="before:content-['\'''] after:content-['\'''] before:mx-1.5 after:mx-1.5 before:text-slate-500 after:text-slate-500">
              567890
            </span>
            <span className="before:content-['\'''] after:content-['\'''] before:mx-1.5 after:mx-1.5 before:text-slate-500 after:text-slate-500">
              1234567890
            </span>
            <span className="before:content-['\'''] after:content-['\'''] before:mx-1.5 after:mx-1.5 before:text-slate-500 after:text-slate-500">
              1234
            </span>
          </div>
        </main>
      </section>
    </div>
  );
}