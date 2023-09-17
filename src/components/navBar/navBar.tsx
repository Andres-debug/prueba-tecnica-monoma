import React, { useState } from 'react';
import Logo from '../../assets/logo-white.png';
import Avatar from 'react-avatar'; 



export const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("isMenuOpen:", isMenuOpen);
  };

  const handleLogout = () => {
    console.log('Sesion Cerrada')
  };

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt='Monoma' className="h-10"/>
        <h1 className="text-2xl font-semibold">PokeMonoma</h1>
         <div className="relative">
          <Avatar
            size={'40'}
            round={true}
            onClick={toggleMenu}
            className="cursor-pointer"
          />

          {isMenuOpen && (
            <div className="menu absolute top-10 right-0 bg-white border border-gray-300 rounded shadow-md p-2">
              <button onClick={handleLogout} className="block w-full text-left">
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

