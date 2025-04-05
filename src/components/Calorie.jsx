import React, { useState } from 'react';

const resetButtonStyle = "ml-5 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 mt-4 shadow-md";


const containerStyle = "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4";
const cardStyle = "bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center";
const inputStyle = "border border-gray-300 rounded-md p-2 mb-4 w-full text-center shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const selectStyle = "border border-gray-300 rounded-md p-2 mb-4 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const buttonStyle = "mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 shadow-md";
const resultStyle = "text-lg font-semibold mt-4 text-gray-800";

function Calorie() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    let bmr;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (gender === 'male') {
      bmr = 88.36 + (13.4 * w) + (4.8 * h) - (5.7 * a);
    } else if (gender === 'female') {
      bmr = 447.6 + (9.2 * w) + (3.1 * h) - (4.3 * a);
    } else {
      alert('Please select a valid gender');
      return;
    }

    setCalories(bmr.toFixed(2));
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('');
    setCalories(null);
  }

  return (
    <div className={containerStyle}>
      <div className={cardStyle}>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Calorie Calculator</h1>

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className={inputStyle}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className={inputStyle}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={inputStyle}
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className={selectStyle}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button onClick={calculateCalories} className={buttonStyle}>
          Calculate
        </button>

        <button onClick={reset} className={resetButtonStyle}>
          Reset
        </button>

        {calories && (
          <p className={resultStyle}>
            Calories Needed: {calories} kcal/day
          </p>
        )}
      </div>
    </div>
  );
}

export default Calorie;
