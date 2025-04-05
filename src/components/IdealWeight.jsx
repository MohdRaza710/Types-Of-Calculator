import React, { useState } from 'react';

const resetButtonStyle = "w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 mt-4 shadow-md";

function IdealWeight() {
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('male');
    const [idealWeight, setIdealWeight] = useState(null);

    const calculateIdealWeight = () => {
        const h = parseFloat(height);
        if (isNaN(h) || h <= 0) return;

        let weight;
        if (gender === 'male') {
            weight = 50 + 2.3 * ((h / 2.54) - 60); // Devine formula for males
        } else {
            weight = 45.5 + 2.3 * ((h / 2.54) - 60); // Devine formula for females
        }

        setIdealWeight(weight.toFixed(2));
    };

    const reset = () => {
        setHeight('');
        setGender('male');
        setIdealWeight(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Ideal Weight Calculator</h2>

                <input
                    type="number"
                    placeholder="Height (in cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full text-center shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <button
                    onClick={calculateIdealWeight}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 shadow-md"
                >
                    Calculate
                </button>
                <button onClick={reset} className={resetButtonStyle}>
                    Reset
                </button>

                {idealWeight && (
                    <p className="mt-6 bg-green-100 text-green-800 p-4 rounded-lg font-semibold">
                        Your Ideal Weight: {idealWeight} kg
                    </p>
                )}
            </div>
        </div>
    );
}

export default IdealWeight;
