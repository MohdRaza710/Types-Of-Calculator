import React, { useState } from 'react';

const containerStyle = "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4";
const cardStyle = "bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center";
const inputStyle = "border border-gray-300 rounded-md p-2 mb-4 w-full text-center shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const buttonStyle = "mt-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 shadow-md";
const resultStyle = "text-lg font-semibold mt-4 text-gray-800";
const resetButtonStyle = "bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 mt-4 shadow-md";

function Bmi() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(0);
    const [message, setMessage] = useState('');

    const calculateBmi = () => {
        const heightInMeters = height / 100;
        const calculatedBmi = weight / (heightInMeters * heightInMeters);
        setBmi(calculatedBmi.toFixed(2));

        if (calculatedBmi < 18.5) {
            setMessage('Underweight');
        } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
            setMessage('Normal weight');
        } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
            setMessage('Overweight');
        } else {
            setMessage('Obesity');
        }
    };

    const reset = () => {
        setHeight("");
        setWeight("");
        setBmi(0);
        setMessage('');
    };

    return (
        <div className={containerStyle}>
            <div className={cardStyle}>
                <h1 className="text-2xl font-bold text-gray-800 mb-6">BMI Calculator</h1>

                <label htmlFor="height" className="mb-2 text-gray-700 block text-left">Height (in cm):</label>
                <input
                    type="text"
                    id="height"
                    placeholder="Enter your height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className={inputStyle}
                />

                <label htmlFor="weight" className="mb-2 text-gray-700 block text-left">Weight (in kg):</label>
                <input
                    type="text"
                    id="weight"
                    placeholder="Enter your weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className={inputStyle}
                />

                <button onClick={calculateBmi} className={buttonStyle}>
                    Calculate BMI
                </button>

                <h2 className={resultStyle}>Your BMI is: {bmi}</h2>
                <h3 className={resultStyle}>{message}</h3>

                <button onClick={reset} className={resetButtonStyle}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Bmi;
