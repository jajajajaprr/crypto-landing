import React from 'react';

const CryptoHome = () => {
  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <section className="mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 sm:p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
          Bienvenido a CryptoInfo Hub Pro
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed opacity-90">
          Tu portal definitivo para sumergirte en el universo de las criptomonedas.
          Desde los fundamentos hasta las últimas tendencias, aquí encontrarás todo lo que necesitas.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            ¿Qué son las Criptomonedas?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Activos digitales descentralizados que utilizan criptografía para transacciones seguras y control de nuevas unidades.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Tecnología Blockchain
          </h3>
          <p className="text-gray-700 leading-relaxed">
            El pilar de las criptomonedas: un libro mayor distribuido e inmutable que registra todas las transacciones.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Minería y Staking
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Procesos para validar transacciones y crear nuevas unidades de criptomonedas, esenciales para la seguridad de la red.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-inner border border-gray-200">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          Conceptos Clave
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Descentralización</h4>
            <p className="text-gray-600 text-sm">Sin control centralizado.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Criptografía</h4>
            <p className="text-gray-600 text-sm">Seguridad de las transacciones.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Carteras (Wallets)</h4>
            <p className="text-gray-600 text-sm">Almacenamiento seguro de criptos.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Contratos Inteligentes</h4>
            <p className="text-gray-600 text-sm">Acuerdos auto-ejecutables en blockchain.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoHome;