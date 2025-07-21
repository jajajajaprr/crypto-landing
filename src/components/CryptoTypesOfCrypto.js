import React from 'react';

const CryptoTypesOfCrypto = () => {
  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Tipos de Criptomonedas: Más Allá de Bitcoin
      </h2>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bitcoin (BTC)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La primera y más grande criptomoneda por capitalización de mercado.
          Fue creada en 2009 por Satoshi Nakamoto. Bitcoin fue diseñado como un
          sistema de efectivo electrónico peer-to-peer, lo que significa que
          las transacciones se realizan directamente entre usuarios sin necesidad
          de un intermediario.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Su principal característica es su escasez programada: solo existirán
          21 millones de Bitcoins, lo que lo convierte en un activo deflacionario
          y a menudo se le compara con el "oro digital".
        </p>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Altcoins</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          El término "altcoin" se refiere a cualquier criptomoneda que no sea Bitcoin.
          Existen miles de altcoins, cada una con sus propias características,
          tecnologías y propósitos. Algunas de las categorías más importantes incluyen:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
          <li>
            <strong>Ethereum (ETH):</strong> La segunda criptomoneda más grande.
            Ethereum no es solo una moneda, sino una plataforma descentralizada
            que permite la creación de contratos inteligentes y aplicaciones
            descentralizadas (dApps). Su token nativo, Ether, se utiliza para
            pagar las tarifas de transacción (gas) en la red.
          </li>
          <li>
            <strong>Stablecoins:</strong> Criptomonedas diseñadas para mantener
            un valor estable, generalmente vinculado a una moneda fiduciaria
            (como el dólar estadounidense), a materias primas o a otras criptomonedas.
            Ejemplos populares son Tether (USDT), USD Coin (USDC) y Binance USD (BUSD).
            Son útiles para evitar la volatilidad del mercado cripto.
          </li>
          <li>
            <strong>Tokens de Finanzas Descentralizadas (DeFi):</strong> Tokens
            asociados a proyectos de finanzas descentralizadas que buscan replicar
            servicios financieros tradicionales (préstamos, seguros, trading)
            sin intermediarios. Ejemplos: Aave (AAVE), Uniswap (UNI), Chainlink (LINK).
          </li>
          <li>
            <strong>Tokens de Gobernanza:</strong> Permiten a sus poseedores votar
            sobre decisiones importantes relacionadas con el desarrollo y la dirección
            de un proyecto blockchain.
          </li>
          <li>
            <strong>Tokens de Utilidad:</strong> Otorgan acceso a un producto o servicio
            específico dentro de un ecosistema blockchain. Por ejemplo, un token
            podría usarse para pagar tarifas en una plataforma o para acceder a
            funciones premium.
          </li>
          <li>
            <strong>Memecoins:</strong> Criptomonedas que se originan como bromas
            o memes de internet, a menudo sin un propósito tecnológico serio.
            Dogecoin (DOGE) y Shiba Inu (SHIB) son ejemplos prominentes. Su valor
            suele ser impulsado por la comunidad y la especulación.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          La diversidad de altcoins refleja la constante innovación en el espacio
          blockchain, con proyectos que buscan resolver problemas específicos o
          explorar nuevas aplicaciones de la tecnología.
        </p>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tokens No Fungibles (NFTs)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Aunque no son criptomonedas en el sentido tradicional, los NFTs son
          activos digitales únicos que se almacenan en una blockchain. A diferencia
          de las criptomonedas (que son fungibles, es decir, cada unidad es
          intercambiable por otra), cada NFT es único y no puede ser reemplazado
          por otro.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Los NFTs se utilizan para representar la propiedad de una amplia gama
          de artículos digitales, incluyendo arte, música, videos, coleccionables,
          bienes raíces virtuales y elementos de juegos. Su singularidad y la
          prueba de propiedad verificable en la blockchain les otorgan valor.
        </p>
      </section>
    </div>
  );
};

export default CryptoTypesOfCrypto;