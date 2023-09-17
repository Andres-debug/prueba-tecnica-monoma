import React from 'react';
import Logo from '../../assets/logo-white.png'; 

export const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt='Monoma' className="h-10"/>
        <h1 className="text-2xl font-semibold">PokeMonoma</h1>
      </div>
    </nav>
  );
};

