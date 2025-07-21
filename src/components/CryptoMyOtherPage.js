import React from 'react';

const CryptoMyOtherPage = () => {
  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto text-center bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-2xl shadow-xl">
      <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
        ¡Visita mi página para simular el movimiento de las criptomonedas!
      </h2>
      <p className="text-lg sm:text-xl leading-relaxed mb-8 opacity-90">
        ¿Quieres ver cómo se comportan las criptomonedas sin arriesgar tu dinero?
        ¡En mi otra página puedes simular sus movimientos y aprender de forma interactiva!
      </p>
      <a
        href="http://nerd-lat-nerdtasktuasistentedigital-1751229586560-nzmkec.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-blue-600 text-xl sm:text-2xl font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
      >
        ¡Simula ahora!
      </a>
      <p className="text-sm sm:text-base text-gray-100 mt-4 opacity-80">
        (Se abrirá en una nueva pestaña para que no pierdas el hilo de esta)
      </p>
    </div>
  );
};

export default CryptoMyOtherPage;