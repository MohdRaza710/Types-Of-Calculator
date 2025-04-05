import React, { useState } from 'react';

function WaterIntake() {
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [waterIntake, setWaterIntake] = useState(null);
  const [hydrationTip, setHydrationTip] = useState('');

  const calculateWaterIntake = () => {
    if (!weight || !activityLevel) {
      alert('Please enter both weight and activity level.');
      return;
    }

    // Basic water intake formula: 35 ml per kg of body weight
    let intake = weight * 35;

    // Adjust for activity level
    if (activityLevel === 'low') {
      intake *= 1;
      setHydrationTip('You have a low activity level, keep hydrating regularly!');
    } else if (activityLevel === 'moderate') {
      intake *= 1.2;
      setHydrationTip('With moderate activity, stay hydrated and drink extra water during exercise!');
    } else if (activityLevel === 'high') {
      intake *= 1.5;
      setHydrationTip('With high activity, it’s important to replenish fluids after intense workouts!');
    }

    // Set the result in both milliliters and liters
    setWaterIntake({
      ml: intake,
      liters: (intake / 1000).toFixed(2), // Convert to liters
    });
  };

  const resetFields = () => {
    setWeight('');
    setActivityLevel('');
    setWaterIntake(null);
    setHydrationTip('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Water Intake Calculator</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Activity Level:</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>

        <button
          onClick={calculateWaterIntake}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Calculate
        </button>

        {waterIntake && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Your Daily Water Intake: {waterIntake.ml.toFixed(2)} ml / {waterIntake.liters} L
            </p>
          </div>
        )}

        {hydrationTip && (
          <div className="mt-4 bg-yellow-100 text-yellow-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">{hydrationTip}</h3>
          </div>
        )}

        <button
          onClick={resetFields}
          className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default WaterIntake;
