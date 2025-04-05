import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bmi from './components/Bmi';
import Navbar from './components/Navbar';
import Age from './components/Age';
import Home from './components/Home';
import BodyFat from './components/BodyFat';
import Bmr from './components/Bmr';
import IdealWeight from './components/IdealWeight';
import SteptoCalorie from './components/StepToCalorie';
import WaterIntake from './components/WaterIntake';
import Calorie from './components/Calorie';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/age" element={<Age />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/bodyfat" element={<BodyFat />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/bmr" element={<Bmr />} />
        <Route path="/idealweight" element={<IdealWeight />} />
        <Route path="/steptocalorie" element={<SteptoCalorie />} />
        <Route path="/waterintake" element={<WaterIntake />} />
        <Route path="/calorie" element={<Calorie />} />
      </Routes>
    </Router>
  );
}

export default App;
