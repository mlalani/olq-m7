"use client";

import { useState } from 'react';
import Image from 'next/image';
import S1 from "../assets/s1.png";

const shopItems = [
  { id: 1, name: "Rice (5 kg)", price: 15, icon: "🍚", essential: true },
  { id: 2, name: "Chips", price: 4, icon: "🍟", essential: false },
  { id: 3, name: "Mixed Vegetables (1 packet)", price: 8, icon: "🥬", essential: true },
  { id: 4, name: "Oil (1 liter)", price: 12, icon: "🛢️", essential: true },
  { id: 5, name: "Cookies", price: 6, icon: "🍪", essential: false },
  { id: 6, name: "Lemons (10 pieces)", price: 6, icon: "🍋", essential: true },
  { id: 7, name: "Sugar (1 kg)", price: 4, icon: "🍯", essential: true },
  { id: 8, name: "Pizza", price: 18, icon: "🍕", essential: false },
  { id: 9, name: "Chocolate", price: 5, icon: "🍫", essential: false },
  { id: 10, name: "Ice Cream", price: 8, icon: "🍦", essential: false },
  { id: 11, name: "Juice Box", price: 3, icon: "🧃", essential: false },
  { id: 12, name: "Candy", price: 2, icon: "🍭", essential: false },
  { id: 13, name: "Soda", price: 4, icon: "🥤", essential: false },
  { id: 14, name: "Cake", price: 12, icon: "🍰", essential: false },
  { id: 15, name: "Water (2 liters)", price: 3, icon: "🫙", essential: true },
];

const requiredEssentials = [
  "Rice (5 kg)",
  "Mixed Vegetables (1 packet)", 
  "Oil (1 liter)",
  "Lemons (10 pieces)",
  "Sugar (1 kg)",
  "Water (2 liters)"
];

export default function Com() {
  const [budget, setBudget] = useState(60);
  const [cart, setCart] = useState([]);
  const [showStart, setShowStart] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [warning, setWarning] = useState("");

  const addToCart = (item) => {
    if (budget >= item.price) {
      const existingItem = cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        setCart(cart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));
      } else {
        setCart([...cart, { ...item, quantity: 1 }]);
      }
      setBudget(budget - item.price);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCart(cart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ));
      } else {
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
      }
      setBudget(budget + item.price);
    }
  };

  const getCartQuantity = (itemId) => {
    const cartItem = cart.find(cartItem => cartItem.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const checkEssentialItems = () => {
    const cartItemNames = cart.map(item => item.name);
    return requiredEssentials.every(essential => cartItemNames.includes(essential));
  };

  const handleBuy = () => {
    setWarning("");
    
    const totalCost = getTotalCost();
    const hasAllEssentials = checkEssentialItems();
    
    if (totalCost > 60) {
      setWarning("⚠️ Over Budget! You've spent $" + totalCost + " but only have $60. Please remove some items.");
      return;
    }
    
    if (!hasAllEssentials) {
      const missingEssentials = requiredEssentials.filter(essential => 
        !cart.some(cartItem => cartItem.name === essential)
      );
      setWarning("⚠️ Missing Essentials! You need: " + missingEssentials.join(", ") + ". Please add these items to your cart.");
      return;
    }
    
    setShowResults(true);
  };

  const resetGame = () => {
    setBudget(60);
    setCart([]);
    setShowStart(true);
    setShowResults(false);
    setWarning("");
  };

  if (showStart) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-2">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-lg text-gray-700 space-y-4 text-left max-w-3xl mx-auto">
              <p>Meet Leo, a curious 9-year-old who dreams of becoming a chef.</p>
              <p>One sunny afternoon, Chef Marco from the local food cart calls and says: 'Leo, I'm short on time! Can you grab my groceries from the supermarket?</p>
              <p>Today's menu has to be ready for the customers. The list is all mixed up! Some items are essential for today's menu, while others are just extras. You only have $60 to spend.</p>
            </div>
            <br />
            <Image 
              src={S1}
              width={330}
              height={330}
              alt="Leo the chef" 
              className="rounded-lg mx-auto mb-6"
            />
          </div>
          <button
            onClick={() => setShowStart(false)}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors duration-200 shadow-lg"
          >
            Start Shopping!
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const hasAllEssentials = checkEssentialItems();
    const totalCost = getTotalCost();
    const remainingBudget = 60 - totalCost;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Shopping Results</h1>
            <div className={`inline-block px-6 py-3 rounded-lg text-2xl font-bold ${
              hasAllEssentials ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {hasAllEssentials ? 'Great job! You got all the essentials!' : 'You missed some essential items for today\'s menu!'}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Purchase Summary</h2>
              <div className="space-y-2 mb-4">
                <p className="text-lg"><span className="font-semibold">Total Spent:</span> ${totalCost}</p>
                <p className="text-lg"><span className="font-semibold">Remaining Budget:</span> ${remainingBudget}</p>
              </div>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${item.price} × {item.quantity}</p>
                      <p className="text-gray-600">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Today's Menu Requirements</h2>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-orange-600 mb-4">Veggie Rice Bowl + Lemonade</p>
                <p className="text-lg font-semibold text-green-600 mb-2">Required Essentials:</p>
                {requiredEssentials.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                    <span className="text-xl">✅</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-2">
      <div className="max-w-8xl mx-auto">
        {warning && (
          <div className="mb-4 p-4 bg-red-100 border border-red-300 rounded-lg">
            <p className="text-red-800 font-semibold text-center">{warning}</p>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h2 className="text-xl font-bold text-orange-600 mb-3">Budget</h2>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <p className="text-3xl font-bold text-orange-600">${budget}</p>
              <p className="text-gray-600">Remaining</p>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Today's Menu</h3>
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <p className="font-semibold text-orange-600 mb-2">Veggie Rice Bowl + Lemonade</p>
                <p className="text-sm text-gray-600 mb-3">Required Essentials:</p>
                <div className="space-y-1">
                  {requiredEssentials.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 text-md">
                      <span className="text-green-500">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 lg:col-span-2">
            <h2 className="text-xl font-bold text-blue-600 mb-3">Shop</h2>
            <div className="grid grid-cols-2 gap-3 max-h-[600px] overflow-y-auto">
              {shopItems.map((item) => (
                <div key={item.id} className="border-2 border-gray-200 bg-white rounded-lg p-3">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{item.icon}</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-lg font-bold text-blue-600">${item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeFromCart(item)}
                        disabled={getCartQuantity(item.id) === 0}
                        className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-semibold text-sm">{getCartQuantity(item.id)}</span>
                      <button
                        onClick={() => addToCart(item)}
                        disabled={budget < item.price}
                        className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4">
            <h2 className="text-xl font-bold text-purple-600 mb-3">Cart</h2>
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-gray-600 text-sm">${item.price} × {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-bold text-purple-600">${item.price * item.quantity}</p>
                  </div>
                ))
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-xl font-bold text-purple-600">${getTotalCost()}</span>
                </div>
                <button
                  onClick={handleBuy}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
                >
                  Buy Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}