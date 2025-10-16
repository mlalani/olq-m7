"use client";
import { useState, useEffect } from "react";

export default function Com() {
  const [currency, setCurrency] = useState("INR");
  const [accountNumber, setAccountNumber] = useState(Array(14).fill(""));
  const [bankAccountNumber, setBankAccountNumber] = useState(Array(14).fill(""));
  const [date, setDate] = useState(Array(8).fill(""));
  const [bankDate, setBankDate] = useState(Array(8).fill(""));
  const [depositType, setDepositType] = useState("cash");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [bankAccountHolderName, setBankAccountHolderName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [amountInWords, setAmountInWords] = useState("");
  const [bankAmountInWords, setBankAmountInWords] = useState("");
  const [customerRows, setCustomerRows] = useState([
    { details: "", chequeNo: "", amount: "" },
    { details: "", chequeNo: "", amount: "" }
  ]);
  const [bankRows, setBankRows] = useState([
    { bankName: "", chequeNo: "", qty: "", amount: "" },
    { bankName: "", chequeNo: "", qty: "", amount: "" },
    { bankName: "", chequeNo: "", qty: "", amount: "" }
  ]);

  const currencyConfig = {
    INR: { symbol: "₹", major: "Rupees" },
    USD: { symbol: "$", major: "Dollars" },
    EUR: { symbol: "€", major: "Euros" },
    GBP: { symbol: "£", major: "Pounds" }
  };

  const currentCurrency = currencyConfig[currency] || currencyConfig.INR;

  const handleAccountNumberChange = (index, value, isBank = false) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      if (isBank) {
        const newAccountNumber = [...bankAccountNumber];
        newAccountNumber[index] = value;
        setBankAccountNumber(newAccountNumber);
      } else {
        const newAccountNumber = [...accountNumber];
        newAccountNumber[index] = value;
        setAccountNumber(newAccountNumber);
      }
    }
  };

  const handleAccountNumberKeyDown = (e, index, isBank = false) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      if (isBank) {
        const newAccountNumber = [...bankAccountNumber];
        newAccountNumber[index] = "";
        setBankAccountNumber(newAccountNumber);
      } else {
        const newAccountNumber = [...accountNumber];
        newAccountNumber[index] = "";
        setAccountNumber(newAccountNumber);
      }
    }
  };

  const handleDateChange = (index, value, isBank = false) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      if (isBank) {
        const newDate = [...bankDate];
        newDate[index] = value;
        setBankDate(newDate);
      } else {
        const newDate = [...date];
        newDate[index] = value;
        setDate(newDate);
      }
    }
  };

  const handleCustomerRowChange = (rowIndex, field, value) => {
    const newRows = [...customerRows];
    newRows[rowIndex][field] = value;
    setCustomerRows(newRows);
  };

  const handleBankRowChange = (rowIndex, field, value) => {
    const newRows = [...bankRows];
    newRows[rowIndex][field] = value;
    setBankRows(newRows);
  };

  const calculateTotal = (rows) => {
    return rows.reduce((sum, row) => {
      const amount = parseFloat(row.amount) || 0;
      return sum + amount;
    }, 0);
  };

  const customerTotal = calculateTotal(customerRows);
  const bankTotal = calculateTotal(bankRows);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 flex justify-end">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border border-gray-400 rounded-lg px-3 py-2 font-semibold bg-white min-w-[300px]"
          >
            <option value="INR">India — Rupee (INR)</option>
            <option value="USD">United States — Dollar (USD)</option>
            <option value="EUR">Eurozone — Euro (EUR)</option>
            <option value="GBP">United Kingdom — Pound (GBP)</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border-2 border-gray-800 p-4">
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
              <div>
                <h2 className="text-xl font-bold tracking-wide">CASH / CHEQUE DEPOSIT SLIP</h2>
                <div className="text-gray-600 font-bold tracking-widest text-sm">CUSTOMER COPY</div>
              </div>
              <div className="bg-black text-white px-3 py-2 rounded-lg font-bold text-sm min-w-[140px] text-center">
                BANK NAME
              </div>
            </div>

            <div className="flex items-center gap-4 mb-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Date</span>
                <div className="flex items-center gap-1">
                  {date.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleDateChange(index, e.target.value)}
                      className="w-7 h-7 border border-gray-400 rounded text-center font-bold text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                      placeholder={index < 2 ? "D" : index < 4 ? "M" : "Y"}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold">Account No.</span>
                <div className="flex gap-1">
                  {accountNumber.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleAccountNumberChange(index, e.target.value)}
                      onKeyDown={(e) => handleAccountNumberKeyDown(e, index)}
                      className="w-7 h-7 border border-gray-400 rounded text-center font-bold text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                      inputMode="numeric"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-gray-500 text-xs mb-4">
              (Please mention this Account Number on the reverse of the cheques also)
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">Name of Account Holder</span>
                <input
                  type="text"
                  value={accountHolderName}
                  onChange={(e) => setAccountHolderName(e.target.value)}
                  placeholder="Enter account holder name"
                  className="flex-1 border border-gray-400 rounded px-3 py-2 font-semibold min-w-[300px]"
                />
              </div>
            </div>

            <table className="w-full border-collapse border border-gray-400 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-400 p-2 text-left font-bold w-1/2">Cash / Cheque Details</th>
                  <th className="border border-gray-400 p-2 text-left font-bold w-1/4">Cheque No.</th>
                  <th className="border border-gray-400 p-2 text-right font-bold w-1/4">{currentCurrency.major}</th>
                </tr>
              </thead>
              <tbody>
                {customerRows.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 p-2">
                      <input
                        type="text"
                        value={row.details}
                        onChange={(e) => handleCustomerRowChange(index, "details", e.target.value)}
                        className="w-full border-none outline-none"
                      />
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input
                        type="text"
                        value={row.chequeNo}
                        onChange={(e) => handleCustomerRowChange(index, "chequeNo", e.target.value)}
                        className="w-full border-none outline-none"
                      />
                    </td>
                    <td className="border border-gray-400 p-2 text-right">
                      <input
                        type="text"
                        value={row.amount}
                        onChange={(e) => handleCustomerRowChange(index, "amount", e.target.value)}
                        className="w-full border-none outline-none text-right"
                        placeholder={`${currentCurrency.symbol} 0`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 font-bold">
                  <td colSpan="2" className="border border-gray-400 p-2 text-right">
                    Total ({currentCurrency.symbol})
                  </td>
                  <td className="border border-gray-400 p-2 text-right">
                    {currentCurrency.symbol} {customerTotal}
                  </td>
                </tr>
              </tfoot>
            </table>

            <div className="flex items-center gap-2">
              <span className="font-semibold">AMOUNT IN WORDS :</span>
              <input
                type="text"
                value={amountInWords}
                onChange={(e) => setAmountInWords(e.target.value)}
                placeholder="Enter amount in words"
                className="flex-1 border border-gray-400 rounded px-3 py-2 font-semibold min-w-[300px]"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg border-2 border-gray-800 p-4">
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
              <div>
                <h2 className="text-xl font-bold tracking-wide">CASH / CHEQUE DEPOSIT SLIP</h2>
                <div className="text-gray-600 font-bold tracking-widest text-sm">BANK COPY</div>
              </div>
              <div className="bg-black text-white px-3 py-2 rounded-lg font-bold text-sm min-w-[140px] text-center">
                BANK NAME
              </div>
            </div>

            <div className="flex items-center justify-between mb-2 flex-wrap">
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="depositType"
                    value="cash"
                    checked={depositType === "cash"}
                    onChange={(e) => setDepositType(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-semibold">Cash</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="depositType"
                    value="cheque"
                    checked={depositType === "cheque"}
                    onChange={(e) => setDepositType(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-semibold">Cheque</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Date</span>
                <div className="flex items-center gap-1">
                  {bankDate.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleDateChange(index, e.target.value, true)}
                      className="w-7 h-7 border border-gray-400 rounded text-center font-bold text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                      placeholder={index < 2 ? "D" : index < 4 ? "M" : "Y"}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-4">
              <span className="font-semibold">Account No.</span>
              <div className="flex gap-1">
                {bankAccountNumber.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleAccountNumberChange(index, e.target.value, true)}
                    onKeyDown={(e) => handleAccountNumberKeyDown(e, index, true)}
                    className="w-7 h-7 border border-gray-400 rounded text-center font-bold text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    inputMode="numeric"
                  />
                ))}
              </div>
            </div>

            <div className="mb-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">Name of Account Holder</span>
                <input
                  type="text"
                  value={bankAccountHolderName}
                  onChange={(e) => setBankAccountHolderName(e.target.value)}
                  placeholder="Enter account holder name"
                  className="flex-1 border border-gray-400 rounded px-3 py-2 font-semibold"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Contact Number</span>
                <input
                  type="text"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter contact number"
                  className="flex-1 border border-gray-400 rounded px-3 py-2 font-semibold"
                />
              </div>
            </div>

            <table className="w-full border-collapse border border-gray-400 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-400 p-2 text-left font-bold w-2/5">Bank Name, Branch & City</th>
                  <th className="border border-gray-400 p-2 text-left font-bold w-1/5">Cheque No.</th>
                  <th className="border border-gray-400 p-2 text-right font-bold w-1/6">Denomination</th>
                  <th className="border border-gray-400 p-2 text-right font-bold w-1/12">Qty</th>
                  <th className="border border-gray-400 p-2 text-right font-bold w-1/6">{currentCurrency.major}</th>
                </tr>
              </thead>
              <tbody>
                {bankRows.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 p-2">
                      <input
                        type="text"
                        value={row.bankName}
                        onChange={(e) => handleBankRowChange(index, "bankName", e.target.value)}
                        className="w-full border-none outline-none"
                      />
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input
                        type="text"
                        value={row.chequeNo}
                        onChange={(e) => handleBankRowChange(index, "chequeNo", e.target.value)}
                        className="w-full border-none outline-none"
                      />
                    </td>
                    <td className="border border-gray-400 p-2 text-right font-bold">
                      {currentCurrency.symbol} {[1000, 500, 100][index]} x
                    </td>
                    <td className="border border-gray-400 p-2 text-right">
                      <input
                        type="text"
                        value={row.qty}
                        onChange={(e) => handleBankRowChange(index, "qty", e.target.value)}
                        className="w-full border-none outline-none text-right"
                      />
                    </td>
                    <td className="border border-gray-400 p-2 text-right">
                      <input
                        type="text"
                        value={row.amount}
                        onChange={(e) => handleBankRowChange(index, "amount", e.target.value)}
                        className="w-full border-none outline-none text-right"
                        placeholder={`${currentCurrency.symbol} 0`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 font-bold">
                  <td colSpan="4" className="border border-gray-400 p-2 text-right">
                    Total ({currentCurrency.symbol})
                  </td>
                  <td className="border border-gray-400 p-2 text-right">
                    {currentCurrency.symbol} {bankTotal}
                  </td>
                </tr>
              </tfoot>
            </table>

            <div className="flex items-center gap-2">
              <span className="font-semibold">AMOUNT IN WORDS :</span>
              <input
                type="text"
                value={bankAmountInWords}
                onChange={(e) => setBankAmountInWords(e.target.value)}
                placeholder="Enter amount in words"
                className="flex-1 border border-gray-400 rounded px-3 py-2 font-semibold min-w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}