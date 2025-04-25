'use client'

import Image from 'next/image'

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-24 bg-gradient-to-b from-white to-[#F8F5F0] relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00A651]/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#00A651]/5 rounded-full blur-2xl"></div>
        
        {/* Padrão de pontos decorativo */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(#00A651 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-gold uppercase tracking-wider text-sm mb-4 block font-medium">LOCALIZAÇÃO</span>
          <h2 className="text-4xl md:text-5xl font-display text-[#4A3418] mb-6 italic">
            O privilégio de morar em contato com a natureza e perto da cidade.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O Damha Fit II fica a apenas 5 minutos do centro da cidade, e muito próximo de supermercados, farmácias, escolas, entre outros estabelecimentos fundamentais para a sua conveniência.
          </p>
        </div>

        {/* Mapa e Informações */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 relative">
          {/* Imagem de Localização */}
          <div className="lg:w-2/3 relative">
            <div className="absolute inset-0 bg-[#00A651]/10 transform rotate-3 rounded-2xl"></div>
            <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/galeria/localizacao.jpg"
                alt="Mapa de localização"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Niza+Marquez+Guaritá,+Uberaba+-+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#00A651] hover:text-white text-[#00A651] px-4 md:px-8 py-2 md:py-4 rounded-full shadow-xl transition-all duration-300 flex items-center space-x-2 md:space-x-3 transform hover:scale-105 text-sm md:text-base"
                >
                  <svg className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium tracking-wide">COMO CHEGAR</span>
                </a>
              </div>
            </div>
          </div>

          {/* Informações */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <h3 className="text-[#4A3418] text-2xl md:text-3xl font-display mb-4 italic">
                Localização privilegiada
              </h3>
              <div className="h-0.5 w-24 bg-[#C2B280] mb-8 md:mb-10"></div>

              <div className="space-y-8 md:space-y-10">
                {/* Endereço */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F8F5F0] p-4 rounded-full">
                    <svg className="w-6 h-6 text-[#00A651]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[#4A3418] font-medium text-lg block mb-2">Endereço</span>
                    <span className="text-gray-600 text-base">Av. Niza Marquez Guaritá, Uberaba - MG</span>
                  </div>
                </div>

                {/* Tempo até o centro */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F8F5F0] p-4 rounded-full">
                    <svg className="w-6 h-6 text-[#00A651]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[#4A3418] font-medium text-lg block mb-2">Tempo até o centro</span>
                    <span className="text-gray-600 text-base">Apenas 5 minutos</span>
                  </div>
                </div>

                {/* Proximidades */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F8F5F0] p-4 rounded-full">
                    <svg className="w-6 h-6 text-[#00A651]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[#4A3418] font-medium text-lg block mb-2">Proximidades</span>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600 text-base">
                        <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mr-3"></span>
                        Supermercados
                      </li>
                      <li className="flex items-center text-gray-600 text-base">
                        <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mr-3"></span>
                        Farmácias
                      </li>
                      <li className="flex items-center text-gray-600 text-base">
                        <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mr-3"></span>
                        Escolas
                      </li>
                      <li className="flex items-center text-gray-600 text-base">
                        <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mr-3"></span>
                        Hospitais
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 