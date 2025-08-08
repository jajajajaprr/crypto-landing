import React, { useEffect, useState } from 'react';

const CryptoNews = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://cryptopanic.com/feed'
        );
        if (!response.ok) throw new Error('Error al cargar noticias');
        const data = await response.json();
        setNewsArticles(data.items.slice(0, 9)); // Solo 9 noticias
      } catch (err) {
        setError('No se pudo cargar las noticias.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center p-6">Cargando noticias...</p>;
  if (error) return <p className="text-center p-6 text-red-500">{error}</p>;

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Últimas Noticias del Mundo Cripto
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-shadow"
          >
            {article.thumbnail && (
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-3">
              {new Date(article.pubDate).toLocaleDateString()}
            </p>
            <p className="text-gray-700 text-sm mb-4 line-clamp-4">{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Leer más →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-gray-50 p-6 rounded-xl shadow-inner border">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Mantente Informado</h3>
        <p className="text-gray-700">
          Sigue fuentes confiables como CryptoPanic o CoinDesk para mantenerte al día.
        </p>
      </div>
    </div>
  );
};

export default CryptoNews;
