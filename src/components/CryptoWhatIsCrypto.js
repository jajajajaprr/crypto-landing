import React from 'react';

const CryptoWhatIsCrypto = () => {
  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
        ¿Qué son las Criptomonedas? Una Inmersión Profunda
      </h2>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Definición y Origen</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Las criptomonedas son monedas digitales o virtuales que utilizan criptografía
          para asegurar y verificar las transacciones, así como para controlar la
          creación de nuevas unidades. Nacieron como una alternativa descentralizada
          a los sistemas financieros tradicionales, buscando eliminar la necesidad
          de intermediarios como bancos o gobiernos.
        </p>
        <p className="text-gray-700 leading-relaxed">
          El concepto de dinero digital criptográfico se remonta a la década de 1980,
          pero la primera criptomoneda exitosa y ampliamente reconocida fue Bitcoin,
          lanzada en 2009 por una entidad o persona anónima conocida como Satoshi Nakamoto.
          Bitcoin introdujo la tecnología blockchain, que resolvió el problema del
          "doble gasto" en el dinero digital.
        </p>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Características Clave</h3>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong>Descentralización:</strong> No están controladas por ninguna
            autoridad central (gobierno o banco). Las transacciones son verificadas
            por una red de usuarios.
          </li>
          <li>
            <strong>Criptografía:</strong> Utilizan algoritmos criptográficos avanzados
            para asegurar las transacciones y proteger la identidad de los usuarios.
          </li>
          <li>
            <strong>Transparencia:</strong> Todas las transacciones se registran en
            un libro mayor público (blockchain) que es accesible para todos, aunque
            las identidades de los usuarios son seudónimas.
          </li>
          <li>
            <strong>Inmutabilidad:</strong> Una vez que una transacción se registra
            en la blockchain, no puede ser alterada ni eliminada.
          </li>
          <li>
            <strong>Suministro Limitado:</strong> Muchas criptomonedas tienen un
            suministro máximo predefinido, lo que las hace deflacionarias por naturaleza,
            a diferencia de las monedas fiduciarias que pueden imprimirse indefinidamente.
          </li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Usos y Aplicaciones</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Más allá de ser un medio de intercambio, las criptomonedas y la tecnología
          blockchain tienen diversas aplicaciones:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong>Inversión:</strong> Muchos las ven como una clase de activo para
            diversificar carteras y buscar altos rendimientos.
          </li>
          <li>
            <strong>Remesas:</strong> Permiten enviar dinero a través de fronteras
            de forma más rápida y económica que los métodos tradicionales.
          </li>
          <li>
            <strong>Contratos Inteligentes:</strong> Acuerdos auto-ejecutables que
            se almacenan en la blockchain, eliminando la necesidad de intermediarios
            legales.
          </li>
          <li>
            <strong>Finanzas Descentralizadas (DeFi):</strong> Ecosistema de aplicaciones
            financieras construidas sobre blockchain, ofreciendo servicios como préstamos,
            seguros y trading sin bancos.
          </li>
          <li>
            <strong>Tokens No Fungibles (NFTs):</strong> Activos digitales únicos
            que representan la propiedad de un artículo o contenido específico,
            desde arte hasta coleccionables.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CryptoWhatIsCrypto;