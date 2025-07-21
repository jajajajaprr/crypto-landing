import React from 'react';

const CryptoHowItWorks = () => {
  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
        El Funcionamiento de las Criptomonedas: Blockchain y Más
      </h2>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">La Blockchain: El Corazón del Sistema</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La tecnología blockchain es la columna vertebral de la mayoría de las
          criptomonedas. Imagina un libro mayor digital, distribuido y descentralizado,
          donde se registran todas las transacciones. Cada vez que se realiza una
          transacción, se agrupa con otras en un "bloque". Una vez que un bloque
          está lleno, se "sella" criptográficamente y se añade a la cadena de bloques
          existente, formando una secuencia inmutable.
        </p>
        <p className="text-gray-700 leading-relaxed">
          La naturaleza distribuida significa que una copia de este libro mayor
          existe en miles de computadoras (nodos) en todo el mundo. Esto hace que
          sea extremadamente difícil de hackear o manipular, ya que cualquier intento
          de alteración en una copia sería inmediatamente detectado por las otras.
        </p>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Consenso y Minería/Staking</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Para que las transacciones sean válidas y se añadan a la blockchain,
          la red debe llegar a un "consenso". Los dos mecanismos de consenso más comunes son:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
          <li>
            <strong>Proof of Work (PoW - Prueba de Trabajo):</strong> Utilizado por Bitcoin.
            Los "mineros" compiten para resolver complejos problemas matemáticos. El primero
            en resolverlo añade el siguiente bloque a la cadena y es recompensado con nuevas
            criptomonedas y tarifas de transacción. Este proceso consume mucha energía.
          </li>
          <li>
            <strong>Proof of Stake (PoS - Prueba de Participación):</strong> Utilizado por Ethereum 2.0
            y muchas otras altcoins. Los "validadores" son elegidos para crear nuevos bloques
            basándose en la cantidad de criptomonedas que "apuestan" (stake) como garantía.
            Es más eficiente energéticamente.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Estos mecanismos aseguran que la red sea segura y que nadie pueda gastar
          la misma moneda dos veces (problema del doble gasto).
        </p>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Carteras (Wallets) y Claves</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Para interactuar con las criptomonedas, necesitas una "cartera" o "wallet".
          Una cartera no almacena tus criptomonedas físicamente, sino que guarda
          las claves criptográficas que te dan acceso a tus fondos en la blockchain.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong>Clave Pública:</strong> Es como tu número de cuenta bancaria.
            Puedes compartirla para recibir criptomonedas.
          </li>
          <li>
            <strong>Clave Privada:</strong> Es como tu contraseña o PIN. Es secreta
            y te permite acceder y gastar tus criptomonedas. ¡Nunca la compartas!
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Existen diferentes tipos de carteras: de hardware (frías, más seguras),
          de software (calientes, más convenientes) y de papel.
        </p>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transacciones</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cuando envías criptomonedas, firmas la transacción con tu clave privada.
          Esta transacción se transmite a la red, donde los nodos la verifican.
          Una vez verificada, se añade a un bloque y se registra en la blockchain.
          Este proceso suele ser mucho más rápido que las transferencias bancarias
          tradicionales, especialmente a nivel internacional.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Las transacciones suelen incurrir en una pequeña tarifa, que se paga a
          los mineros o validadores como incentivo por asegurar la red.
        </p>
      </section>
    </div>
  );
};

export default CryptoHowItWorks;