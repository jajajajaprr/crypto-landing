import React from 'react';

const CryptoHeader = ({ setCurrentPage }) => {
  return (
    <header className="w-full bg-white shadow-md p-4 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">CryptoInfo Hub Pro</h1>
      <nav className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
        <button
          onClick={() => setCurrentPage('home')}
          className="text-gray-600 hover:text-gray-900 transition-colors text-base sm:text-lg px-2 py-1 rounded-md"
        >
          Inicio
        </button>
        <button
          onClick={() => setCurrentPage('whatIsCrypto')}
          className="text-gray-600 hover:text-gray-900 transition-colors text-base sm:text-lg px-2 py-1 rounded-md"
        >
          ¿Qué es?
        </button>
        <button
          onClick={() => setCurrentPage('howItWorks')}
          className="text-gray-600 hover:text-gray-900 transition-colors text-base sm:text-lg px-2 py-1 rounded-md"
        >
          ¿Cómo funciona?
        </button>
        <button
          onClick={() => setCurrentPage('typesOfCrypto')}
          className="text-gray-600 hover:text-gray-900 transition-colors text-base sm:text-lg px-2 py-1 rounded-md"
        >
          Tipos
        </button>
        <button
          onClick={() => setCurrentPage('securityTips')}
          className="text-gray-600 hover:text-gray-900 transition-colors text-base sm:text-lg px-2 py-1 rounded-md"
        >
          Seguridad
        </button>
        <button
          onClick={() => setCurrentPage('news')}
          className="text-gray-600 hover:text-gray-900 transition-colors text-base sm:text-lg px-2 py-1 rounded-md"
        >
          Noticias
        </button>
        <button
          onClick={() => setCurrentPage('myOtherPage')}
          className="text-gray-600 hover:text-gray-900 transition-colors text-base sm:text-lg px-2 py-1 rounded-md"
        >
          Mi Otra Página
        </button>
      </nav>
    </header>
  );
};

export default CryptoHeader;