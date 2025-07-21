import React from 'react';

const CryptoNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Trump firma la GENIUS Act, marco regulatorio para stablecoins",
      date: "July 18, 2025",
      summary: "El 18 de julio de 2025, el expresidente firmó la GENIUS Act, la primera ley federal de EE. UU. que regula stablecoins, exigiendo respaldo 1:1 en dólares o activos seguros y estableciendo supervisión clara.",
      link: "https://www.cbsnews.com/news/trump-signs-genius-act-crypto-bill/"
    },
    {
     id: 2,
      title: "Mercado cripto supera los USD 4 billones tras la ley y sostén institucional",
      date: "July 18, 2025",
      summary: "El valor total del mercado cripto supera los 4 billones de dólares, con Bitcoin rompiendo los $120 000, impulsado por la regulación y los ETFs institucionales.",
      link: "https://www.reuters.com/business/crypto-sector-breaches-4-trillion-market-value-during-pivotal-week-2025-07-18/"
    },
    {
      id: 3,
      title: "Hack masivo: USD 44 millones robados a CoinDCX",
      date: "July, 20, 2025",
      summary: "En un ciberataque del 19 de julio, el exchange indio CoinDCX sufrió un hack de $44.2 M desde una cuenta operativa; los fondos de usuarios permanecen intactos, y la empresa lo cubre de su tesorería.",
      link: "https://cryptorank.io/news/feed/edb3d-bitcoin-exchange-coin-dcx-lost-44-million-due-to-hack"
    },
    {
      id: 4,
      title: "Ciberataques cripto en julio superan los USD 1.5 billones",
      date: "July 20, 2025",
      summary: "Varios exchanges, incluidos Bybit, BigONE y CoinDCX, perdieron colectivamente $1.5 billones en ciberataques durante julio, reflejando alto riesgo para la seguridad centralizada.",
      link: "https://www.ainvest.com/news/cryptocurrency-exchanges-lose-1-5-billion-july-2025-hacks-2507/"
    },
    {
      id: 5,
      title: "Bitcoin en pausa antes de posible nuevo máximo en julio",
      date: "July 19, 2025",
      summary: "Aunque BTC se estabiliza alrededor de $118 000, analistas, como Michael Harvey de Galaxy Digital, anticipan que podría alcanzar un nuevo ATH antes de fin de mes.",
      link: "https://cointelegraph.com/news/bitcoin-price-consolidation-phase-possible-july-highs-forecast-trader?"
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
