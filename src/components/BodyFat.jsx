import React, { useState } from 'react';

const containerStyle = "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4";
const cardStyle = "bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center";
const inputStyle = "border border-gray-300 rounded-md p-2 mb-4 w-full text-center shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const selectStyle = "border border-gray-300 rounded-md p-2 mb-4 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const buttonStyle = "mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 shadow-md";
const resetButtonStyle = "ml-5 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 mt-4 shadow-md";
const resultStyle = "text-lg font-semibold mt-4 text-gray-800";

function BodyFat() {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [neck, setNeck] = useState('');
    const [waist, setWaist] = useState('');
    const [height, setHeight] = useState('');
    const [hip, setHip] = useState('');
    const [gender, setGender] = useState('male');
    const [bodyFat, setBodyFat] = useState(null);

    const calculateBodyFat = () => {
        const h = parseFloat(height);
        const w = parseFloat(waist);
        const n = parseFloat(neck);
        const hp = parseFloat(hip);

        let bodyFatPercentage;

        if (gender === 'male') {
            bodyFatPercentage = 86.010 * Math.log10(w - n) - 70.041 * Math.log10(h) + 36.76;
        } else {
            bodyFatPercentage = 163.205 * Math.log10(w + hp - n) - 97.684 * Math.log10(h) - 78.387;
        }

        setBodyFat(bodyFatPercentage.toFixed(2));
    };

    const resetFields = () => {
        setAge('');
        setWeight('');
        setNeck('');
        setWaist('');
        setHeight('');
        setHip('');
        setGender('male');
        setBodyFat(null);
    };

    return (
        <div className={containerStyle}>
            <div className={cardStyle}>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Body Fat Calculator</h2>

                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className={inputStyle}
                />

                <input
                    type="number"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className={inputStyle}
                />

                <input
                    type="number"
                    placeholder="Neck Size (cm)"
                    value={neck}
                    onChange={(e) => setNeck(e.target.value)}
                    className={inputStyle}
                />

                <input
                    type="number"
                    placeholder="Waist Size (cm)"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    className={inputStyle}
                />

                {gender === 'female' && (
                    <input
                        type="number"
                        placeholder="Hip Size (cm)"
                        value={hip}
                        onChange={(e) => setHip(e.target.value)}
                        className={inputStyle}
                    />
                )}

                <input
                    type="number"
                    placeholder="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className={inputStyle}
                />

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className={selectStyle}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <button onClick={calculateBodyFat} className={buttonStyle}>
                    Calculate Body Fat
                </button>

                <button onClick={resetFields} className={resetButtonStyle}>
                    Reset
                </button>

                {bodyFat && (
                    <p className={resultStyle}>
                        Body Fat Percentage: {bodyFat}%
                    </p>
                )}
            </div>
        </div>
    );
}

export default BodyFat;
