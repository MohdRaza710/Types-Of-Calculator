import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../public/clac-Photoroom.png'; // Adjust the path as necessary

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { path: '/', label: 'Home' },
        { path: '/Bmi', label: 'BMi Calculator' },
        { path: '/Age', label: 'Age Calculator' },
        { path: '/BodyFat', label: 'BodyFat Calculator' },
        { path: '/Bmr', label: 'Bmr Calculator' },
        { path: '/Calorie', label: 'Calorie Calculator' },
        { path: '/IdealWeight', label: 'Ideal Weight Calculator' },
        { path: '/StepToCalorie', label: 'Step To Calorie Calculator' },
        { path: '/WaterIntake', label: 'WaterIntake Calculator' },
    ];

    const liColor = ''; // Define a single color for all <li> elements

    return (
        <nav className="text-black bg-blue-500 p-4 flex flex-col md:flex-row">
            <div className="flex justify-between items-center w-full md:w-auto">
                <h1 className="text-white text-lg font-bold mr-5">
                    <Link to="/"><img className='h-12 transform rotate-180' src={image} alt="" /></Link>
                </h1>
                <button
                    className="text-white md:hidden"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                >
                    ☰
                </button>
            </div>
            <ul
                className={`${isOpen ? 'block' : 'hidden'
                    } md:flex md:space-x-4 text-white font-bold mt-4 md:mt-0 decoration-none`}
            >
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="p-2 rounded hover:bg-blue-600"
                        style={{ backgroundColor: liColor }}
                    >
                        <Link to={item.path} className="hover:underline">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
