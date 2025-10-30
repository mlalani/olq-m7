"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import T1 from "../assets/t1.png";
import T2 from "../assets/t2.png";

const travelOptions = [
  { id: 1, name: "Bus Tickets (for 3)", price: 30, time: 40, icon: "🚌"  },
  { id: 2, name: "Train Tickets (for 3)", price: 32, time: 30, icon: "🚂"  },
  { id: 3, name: "Taxi Ride (for 3)", price: 45, time: 20, icon: "🚕"  }
];

const foodOptions = [
  { id: 4, name: "Burger Pack (3)", price: 18, time: 30, icon: "🍔"  },
  { id: 5, name: "Sandwich Pack (3)", price: 12, time: 20, icon: "🥪"  },
  { id: 6, name: "Fruit Basket (for 3)", price: 8, time: 15, icon: "🍎"  },
  { id: 7, name: "Pizza (3 small)", price: 22, time: 35, icon: "🍕"  },
  { id: 8, name: "Hotdog Pack (3)", price: 16, time: 25, icon: "🌭"  }
];

const activityOptions = [
  { id: 10, name: "Joy ride pass (3)", price: 15, time: 45, icon: "🎬", image: T1  },
  { id: 11, name: "Nature Trail Pass (3)", price: 12, time: 50, icon: "🥾"  },
  { id: 12, name: "Waterpark pass (3)", price: 10, time: 30, icon: "🎠", image: T2  }
];

const allOptions = [...travelOptions, ...foodOptions, ...activityOptions];

export default function Com() {
  const [budget, setBudget] = useState(130);
  const [timeLeft, setTimeLeft] = useState(360);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('picnicCart');
    const savedBudget = localStorage.getItem('picnicBudget');
    const savedTimeLeft = localStorage.getItem('picnicTimeLeft');
    
    if (savedCart) {
      const cartData = JSON.parse(savedCart);
      const filteredCart = cartData.filter(item => !travelOptions.some(travel => travel.id === item.id));
      const removedTravelItems = cartData.filter(item => travelOptions.some(travel => travel.id === item.id));
      
      let updatedBudget = 130;
      let updatedTimeLeft = 360;
      
      if (savedBudget) {
        updatedBudget = parseInt(savedBudget);
      }
      if (savedTimeLeft) {
        updatedTimeLeft = parseInt(savedTimeLeft);
      }
      
      removedTravelItems.forEach(item => {
        updatedBudget += item.price;
        updatedTimeLeft += item.time;
      });
      
      setCart(filteredCart);
      setBudget(updatedBudget);
      setTimeLeft(updatedTimeLeft);
    } else {
      if (savedBudget) {
        setBudget(parseInt(savedBudget));
      }
      if (savedTimeLeft) {
        setTimeLeft(parseInt(savedTimeLeft));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('picnicCart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('picnicBudget', budget.toString());
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('picnicTimeLeft', timeLeft.toString());
  }, [timeLeft]);


  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      return;
    }
    
    if (budget >= item.price && timeLeft >= item.time) {
      setCart([...cart, item]);
      setBudget(budget - item.price);
      setTimeLeft(timeLeft - item.time);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
    setBudget(budget + item.price);
    setTimeLeft(timeLeft + item.time);
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const getTotalTime = () => {
    return cart.reduce((total, item) => total + item.time, 0);
  };

  const checkRequirements = () => {
    const hasTravel = cart.some(item => travelOptions.some(travel => travel.id === item.id));
    const hasFood = cart.filter(item => foodOptions.some(food => food.id === item.id)).length >= 2;
    const activityCount = cart.filter(item => activityOptions.some(activity => activity.id === item.id)).length;
    const hasActivity = activityCount >= 1 && activityCount <= 2;
    
    return { hasTravel, hasFood, hasActivity };
  };

  const handleBuy = () => {
    setWarning("");
    
    const totalCost = getTotalCost();
    const totalTime = getTotalTime();
    const { hasTravel, hasFood, hasActivity } = checkRequirements();
    
    if (totalCost > 130) {
      setWarning("⚠️ Over Budget! You've spent $" + totalCost + " but only have $130. Please remove some items.");
      return;
    }
    
    if (totalTime > 360) {
      setWarning("⚠️ Over Time Limit! You've used " + Math.floor(totalTime/60) + " hours " + (totalTime%60) + " minutes but only have 6 hours. Please remove some items.");
      return;
    }
    
    if (!hasTravel) {
      setWarning("⚠️ Missing Requirements! You need to select one travel option.");
      return;
    }
    
    if (!hasFood) {
      setWarning("⚠️ Missing Requirements! You need to select at least two food items.");
      return;
    }
    
    if (!hasActivity) {
      setWarning("⚠️ Missing Requirements! You need to select 1-2 park activities.");
      return;
    }
    
    setShowResults(true);
  };

  const resetGame = () => {
    setBudget(130);
    setTimeLeft(360);
    setCart([]);
    setShowResults(false);
    setWarning("");
    localStorage.removeItem('picnicCart');
    localStorage.removeItem('picnicBudget');
    localStorage.removeItem('picnicTimeLeft');
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  if (showResults) {
    const totalCost = getTotalCost();
    const totalTime = getTotalTime();
    const remainingBudget = budget;
    const remainingTime = timeLeft;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-6 py-3 rounded-lg text-2xl font-bold bg-green-100 text-green-800">
              Great job! Your picnic plan is perfect!
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Picnic Summary</h2>
              <div className="space-y-2 mb-4">
                <p className="text-lg"><span className="font-semibold">Total Spent:</span> ${totalCost}</p>
                <p className="text-xl"><span className="font-semibold">Remaining Budget:</span> ${remainingBudget}</p>
                <p className="text-lg"><span className="font-semibold">Time Used:</span> {formatTime(totalTime)}</p>
                <p className="text-lg"><span className="font-semibold">Time Remaining:</span> {formatTime(remainingTime)}</p>
              </div>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {item.image ? (
                        <div className="w-8 h-8 flex items-center justify-center">
                          <Image 
                            src={item.image} 
                            alt={item.name}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <span className="text-2xl">{item.icon}</span>
                      )}
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${item.price}</p>
                      <p className="text-gray-600">{formatTime(item.time)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Picnic Requirements</h2>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-green-600 mb-2">Required Items:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                    <span className="text-xl">✅</span>
                    <span>Select one Travel option</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                    <span className="text-xl">✅</span>
                    <span>Choose two to three food options</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                    <span className="text-xl">✅</span>
                    <span>Choose one or two park activities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <div className="max-w-8xl mx-auto">
        {warning && (
          <div className="mb-4 p-4 bg-red-100 border border-red-300 rounded-lg">
            <p className="text-red-800 font-semibold text-center">{warning}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h2 className="text-xl font-bold text-blue-600 mb-3">Budget & Time</h2>
            <div className="space-y-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">${budget}</p>
                <p className="text-gray-600 text-sm">Remaining</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{formatTime(timeLeft)}</p>
                <p className="text-gray-600 text-sm">Time Left</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Requirements</h3>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">•</span>
                    <span className="text-lg">Select one Travel option</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">•</span>
                    <span className="text-lg">Choose two to three food options</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-500">•</span>
                    <span className="text-lg">Choose one or two park activities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 lg:col-span-2">
            <h2 className="text-xl font-bold text-blue-600 mb-3">Picnic Options</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Travel Options</h3>
                <div className="grid grid-cols-1 gap-3">
                  {travelOptions.map((item) => (
                    <div key={item.id} className="border-2 border-gray-200 bg-white rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <p className="font-medium text-md">{item.name}</p>
                            <p className="text-xl font-bold text-blue-600">${item.price}</p>
                            <p className="text-sm text-gray-600">⏱{' '}{formatTime(item.time)}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          disabled={budget < item.price || timeLeft < item.time || cart.some(cartItem => cartItem.id === item.id)}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Food Options</h3>
                <div className="grid grid-cols-2 gap-3">
                  {foodOptions.map((item) => (
                    <div key={item.id} className="border-2 border-gray-200 bg-white rounded-lg p-3">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl">{item.icon}</span>
                          <div className="flex-1">
                            <p className="font-medium text-md">{item.name}</p>
                            <p className="text-xl font-bold text-blue-600">${item.price}</p>
                            <p className="text-xs text-gray-600">⏱{' '}{formatTime(item.time)}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          disabled={budget < item.price || timeLeft < item.time || cart.some(cartItem => cartItem.id === item.id)}
                          className="w-full px-2 py-1 bg-green-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed text-xs"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Park Activities</h3>
                <div className="grid grid-cols-1 gap-3">
                  {activityOptions.map((item) => (
                    <div key={item.id} className="border-2 border-gray-200 bg-white rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {item.image ? (
                            <div className="w-8 h-8 flex items-center justify-center">
                              <Image 
                                src={item.image} 
                                alt={item.name}
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <span className="text-2xl">{item.icon}</span>
                          )}
                          <div>
                            <p className="font-medium text-md">{item.name}</p>
                            <p className="text-xl font-bold text-blue-600">${item.price}</p>
                            <p className="text-sm text-gray-600">⏱{' '}{formatTime(item.time)}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          disabled={budget < item.price || timeLeft < item.time || cart.some(cartItem => cartItem.id === item.id)}
                          className="px-4 py-2 bg-purple-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
                    <div className="flex items-center space-x-2">
                      {item.image ? (
                        <div className="w-6 h-6 flex items-center justify-center">
                          <Image 
                            src={item.image} 
                            alt={item.name}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <span className="text-lg">{item.icon}</span>
                      )}
                      <div>
                        <p className="font-medium text-xs">{item.name}</p>
                        <p className="text-gray-600 text-xs">${item.price} • {formatTime(item.time)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item)}
                      className="text-red-500 hover:text-red-700 font-bold text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="mt-4 pt-4 border-t">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">Total:</span>
                    <span className="text-lg font-bold text-purple-600">${getTotalCost()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">Time:</span>
                    <span className="text-lg font-bold text-green-600">{formatTime(getTotalTime())}</span>
                  </div>
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