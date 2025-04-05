import React, { useState } from 'react';

function StepToCalorie() {
  const [steps, setSteps] = useState('');
  const [calories, setCalories] = useState(null);

  const handleCalculate = () => {
    if (!steps) {
      alert('Please enter the number of steps');
      return;
    }
    
    const caloriesBurned = steps * 0.04; // Assuming 0.04 calories per step
    setCalories(caloriesBurned.toFixed(2));
  };

  const resetFields = () => {
    setSteps('');
    setCalories(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Step to Calorie Calculator</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Steps:</label>
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of steps"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Calculate
        </button>

        {calories !== null && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Calories Burned: {calories} kcal
            </p>
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

export default StepToCalorie;
