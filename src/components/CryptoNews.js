import React from 'react';

const CryptoNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Bitcoin supera los $70,000: ¿Qué sigue para el mercado cripto?",
      date: "20 de Mayo, 2024",
      summary: "La criptomoneda líder ha alcanzado un nuevo hito, generando optimismo y especulación sobre su trayectoria futura. Analistas debaten si la tendencia alcista se mantendrá.",
      link: "#" // En un proyecto real, esto sería un link a la noticia completa
    },
    {
      id: 2,
      title: "Ethereum se prepara para la actualización 'Pectra'",
      date: "18 de Mayo, 2024",
      summary: "La próxima gran actualización de Ethereum, 'Pectra', promete mejoras significativas en escalabilidad y eficiencia. La comunidad espera con ansias su implementación.",
      link: "#"
    },
    {
      id: 3,
      title: "El auge de las Stablecoins: ¿Refugio en la volatilidad?",
      date: "16 de Mayo, 2024",
      summary: "Las stablecoins están ganando terreno como una opción segura para los inversores en tiempos de alta volatilidad en el mercado de criptomonedas.",
      link: "#"
    },
    {
      id: 4,
      title: "NFTs en el mundo del gaming: Una nueva era de propiedad digital",
      date: "14 de Mayo, 2024",
      summary: "Los Tokens No Fungibles (NFTs) están revolucionando la industria de los videojuegos, permitiendo a los jugadores poseer activos únicos dentro de los juegos.",
      link: "#"
    },
    {
      id: 5,
      title: "Regulación cripto en América Latina: Un panorama diverso",
      date: "12 de Mayo, 2024",
      summary: "Varios países de América Latina están explorando diferentes enfoques para regular las criptomonedas, desde la adopción hasta la prohibición.",
      link: "#"
    },
  ];

  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Últimas Noticias del Mundo Cripto
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsArticles.map(article => (
          <div key={article.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{article.date}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{article.summary}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Leer más &rarr;
            </a>
          </div>
        ))}
      </div>

      <section className="mt-12 text-center bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Mantente Informado</h3>
        <p className="text-gray-700 leading-relaxed">
          El mercado de criptomonedas es dinámico. Suscríbete a boletines o sigue
          fuentes confiables para estar al tanto de los últimos desarrollos.
        </p>
      </section>
    </div>
  );
};

export default CryptoNews;