import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-blue-300 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Health & Fitness Calculators
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/bmr" className="calculator-card">
            <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 text-center">
              <h3 className="text-xl font-semibold">BMR Calculator</h3>
              <p>Calculate your Basal Metabolic Rate</p>
            </div>
          </Link>

          <Link to="/bmi" className="calculator-card">
            <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 text-center">
              <h3 className="text-xl font-semibold">BMI Calculator</h3>
              <p>Calculate your Body Mass Index</p>
            </div>
          </Link>

          <Link to="/calorie" className="calculator-card">
            <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 text-center">
              <h3 className="text-xl font-semibold">Calorie Calculator</h3>
              <p>Calculate daily calorie needs</p>
            </div>
          </Link>

          <Link to="/bodyfat" className="calculator-card">
            <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 text-center">
              <h3 className="text-xl font-semibold">Body Fat Calculator</h3>
              <p>Estimate your body fat percentage</p>
            </div>
          </Link>

          <Link to="/waterintake" className="calculator-card">
            <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 text-center">
              <h3 className="text-xl font-semibold">Water Intake Calculator</h3>
              <p>Calculate how much water you should drink</p>
            </div>
          </Link>

          <Link to="/age" className="calculator-card">
            <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 text-center">
              <h3 className="text-xl font-semibold">Age Calculator</h3>
              <p>Calculate your age based on birthdate</p>
            </div>
          </Link>

          <Link to="/idealweight" className="calculator-card">
            <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 text-center">
              <h3 className="text-xl font-semibold">Ideal Weight Calculator</h3>
              <p>Find your ideal weight based on height and gender</p>
            </div>
          </Link>

          <Link to="/steptocalorie" className="calculator-card">
            <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 text-center">
              <h3 className="text-xl font-semibold">Steps to Calories</h3>
              <p>Calculate calories burned from steps taken</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
