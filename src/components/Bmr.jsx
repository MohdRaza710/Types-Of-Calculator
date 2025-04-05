import React, { useState } from 'react';

const containerStyle = "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4";
const cardStyle = "bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center";
const inputStyle = "border border-gray-300 rounded-md p-2 mb-4 w-full text-center shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const selectStyle = "border border-gray-300 rounded-md p-2 mb-4 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const buttonStyle = "mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 shadow-md";
const resetButtonStyle = "ml-5 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 mt-4 shadow-md";
const resultStyle = "text-lg font-semibold mt-4 text-gray-800";

function Bmr() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [bmr, setBmr] = useState(null);

    const calculateBmr = () => {
        let result;
        if (gender === 'male') {
            result = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (gender === 'female') {
            result = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        } else {
            result =
                (88.362 + 447.593) / 2 +
                ((13.397 + 9.247) / 2 * weight) +
                ((4.799 + 3.098) / 2 * height) -
                ((5.677 + 4.330) / 2 * age);
        }

        setBmr(result.toFixed(2));
    };

    const resetFields = () => {
        setWeight('');
        setHeight('');
        setAge('');
        setGender('male');
        setBmr(null);
    };

    return (
        <div className={containerStyle}>
            <div className={cardStyle}>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">BMR Calculator</h2>

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
                    placeholder="Age (years)"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className={inputStyle}
                />

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className={selectStyle}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="other">Other</option>
                </select>

                <button onClick={calculateBmr} className={buttonStyle}>
                    Calculate BMR
                </button>

                <button onClick={resetFields} className={resetButtonStyle}>
                    Reset
                </button>

                {bmr && (
                    <h3 className={resultStyle}>
                        Your BMR is: {bmr} kcal/day
                    </h3>
                )}
            </div>
        </div>
    );
}

export default Bmr;
