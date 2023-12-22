import React from 'react';
import {
  Route, 
  Routes, 
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';


function App() {
  return (
    <div>
     <Routes>
      
        <Route path="/" >
        <Route index element={<LandingPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/Footer" element={<Footer />} />
        </Route>
      </Routes>  
    </div>
  );
}

export default App
