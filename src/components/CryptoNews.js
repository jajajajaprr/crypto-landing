import React, { useEffect, useState } from 'react';

const CryptoNews = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://api.coinstats.app/public/v1/news?skip=0&limit=9");
        const data = await response.json();
        setNewsArticles(data.news);
      } catch (err) {
        setError("No se pudo cargar las noticias.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center p-8">Cargando noticias...</p>;
  if (error) return <p className="text-center p-8 text-red-500">{error}</p>;

  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Últimas Noticias del Mundo Cripto
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsArticles.map((article) => (
          <div key={article.id} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{new Date(article.feedDate).toLocaleDateString()}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Leer más &rarr;
            </a>
          </div>
        ))}
      </div>

      <section className="mt-12 text-center bg-gray-50 p-6 rounded-xl shadow-inner border">
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
