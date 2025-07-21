import React from 'react';

const CryptoSecurityTips = () => {
  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Consejos de Seguridad en el Mundo Cripto
      </h2>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Protege tus Claves Privadas</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Tu clave privada es la llave a tus criptomonedas. Si la pierdes o alguien
          la obtiene, perderás tus fondos.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong>Nunca compartas tu clave privada:</strong> Ni con amigos, ni con
            soporte técnico, ni en sitios web sospechosos.
          </li>
          <li>
            <strong>Usa carteras de hardware (cold wallets):</strong> Para grandes
            cantidades de criptomonedas, son la opción más segura ya que mantienen
            tus claves fuera de línea.
          </li>
          <li>
            <strong>Haz copias de seguridad de tu frase semilla:</strong> La frase
            semilla (seed phrase o recovery phrase) es un conjunto de palabras que
            te permite recuperar tu cartera. Guárdala en un lugar seguro, fuera de línea,
            y nunca la digitalices.
          </li>
        </ul>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Autenticación de Dos Factores (2FA)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Habilita 2FA en todas tus cuentas de intercambio de criptomonedas y carteras
          que lo soporten. Esto añade una capa extra de seguridad.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong>Usa aplicaciones de autenticación:</strong> Como Google Authenticator
            o Authy, en lugar de 2FA basado en SMS, que es más vulnerable a ataques.
          </li>
        </ul>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cuidado con el Phishing y Estafas</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Los estafadores son muy creativos. Sé escéptico ante ofertas que parecen
          demasiado buenas para ser verdad.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong>Verifica URLs:</strong> Siempre asegúrate de que estás en el sitio
            web oficial de un intercambio o servicio. Los sitios de phishing suelen
            tener URLs muy similares.
          </li>
          <li>
            <strong>Desconfía de mensajes no solicitados:</strong> Correos electrónicos,
            mensajes de texto o de redes sociales que te pidan información personal
            o claves.
          </li>
          <li>
            <strong>No caigas en esquemas Ponzi:</strong> Promesas de retornos garantizados
            y extremadamente altos son una señal de alerta.
          </li>
        </ul>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Software y Conexión Segura</h3>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong>Mantén tu software actualizado:</strong> Tu sistema operativo,
            antivirus y software de cartera deben estar siempre al día.
          </li>
          <li>
            <strong>Usa una VPN:</strong> Especialmente si te conectas desde redes
            Wi-Fi públicas, una VPN puede añadir una capa extra de seguridad.
          </li>
          <li>
            <strong>Evita redes Wi-Fi públicas para transacciones:</strong> Son
            más vulnerables a ataques de intermediarios.
          </li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Investiga Antes de Invertir</h3>
        <p className="text-gray-700 leading-relaxed">
          El espacio cripto es volátil y lleno de proyectos nuevos. Haz tu propia
          investigación (DYOR - Do Your Own Research) antes de poner tu dinero.
          Entiende el proyecto, su tecnología, su equipo y su propósito.
        </p>
      </section>
    </div>
  );
};

export default CryptoSecurityTips;