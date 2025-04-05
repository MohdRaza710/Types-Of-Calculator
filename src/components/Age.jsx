import React, { useState } from 'react';

function Age() {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);
    const [error, setError] = useState('');

    function calculateAge(birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months -= 1;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        return { years, months, days };
    }

    const handleCalculate = () => {
        const selectedDate = new Date(birthdate);
        const today = new Date();

        if (!birthdate) {
            setError("Please select a birthdate.");
            setAge(null);
            return;
        }

        if (selectedDate > today) {
            setError("Birthdate cannot be in the future.");
            setAge(null);
            return;
        }

        setError('');
        const calculatedAge = calculateAge(birthdate);
        setAge(calculatedAge);
    };

    const handleReset = () => {
        setBirthdate('');
        setAge(null);
        setError('');
    };

    return (
        <div name="age" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center animate-fadeIn">
                <h1 className="text-3xl font-bold mb-2 text-black">Age Calculator</h1>
                <p className="text-gray-600 mb-6">Calculate your age in years, months, and days.</p>

                <div className="mb-4">
                    <input
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-500 mb-2">{error}</p>}

                <div className="flex justify-center gap-4 mb-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        onClick={handleCalculate}
                    >
                        Calculate
                    </button>
                    <button
                        className="ml-5 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                        onClick={handleReset}
                    >
                    Reset
                </button>
            </div>

            {age && (
                <div className="mt-6 text-gray-700">
                    <h2 className="text-xl font-semibold mb-2">Your Age:</h2>
                    <p>{age.years} years, {age.months} months, and {age.days} days</p>
                </div>
            )}
        </div>
        </div >
    );
}

export default Age;
