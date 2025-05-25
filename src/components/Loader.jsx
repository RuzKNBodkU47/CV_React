import React from 'react';
import './Loader.css';
import logo from '../assets/logo666.png'; // Reemplaza con la ruta real de tu imagen

const Loader = () => (
  <div className="loader-overlay">
    <img src={logo} alt="Loader" className="loader-image" />
  </div>
);

export default Loader;

