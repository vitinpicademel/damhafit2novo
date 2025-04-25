const Location = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Localização</h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              O privilégio de morar em contato com a natureza e perto da cidade
            </h3>
            <p className="text-lg text-gray-700">
              O Damha Fit II fica a apenas 12 minutos de Uberlândia, e muito próximo de supermercados, 
              farmácias, escolas, entre outros estabelecimentos fundamentais para a sua conveniência.
            </p>
          </div>

          {/* Mapa */}
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2!2d-48.3!3d-18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU0JzAwLjAiUyA0OMKwMTgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold mb-4">
              Rodovia LMG 751 (antiga Rodovia Neuza Rezende), km 15, na saída para Cruzeiro dos Peixotos.
            </p>
            <a
              href="https://goo.gl/maps/xyz123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            >
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location; 