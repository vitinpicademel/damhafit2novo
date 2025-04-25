'use client'

import Image from 'next/image'

export default function Diferenciais() {
  return (
    <section className="relative bg-[#C2B280] py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Lado Esquerdo - Texto e Imagem */}
          <div className="lg:w-1/2">
            <span className="text-white uppercase tracking-wider text-sm mb-4 block font-medium">DIFERENCIAIS</span>
            <h2 className="text-4xl font-display text-white mb-6 italic">
              A vida urbana aliada<br />
              ao bem-estar que só<br />
              a natureza nos dá.
            </h2>
            <div className="relative h-96">
              <Image
                src="/images/galeria/folha-verde.jpg"
                alt="Folha verde"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Lado Direito - Grid de Ícones */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-3 gap-8">
              {/* Áreas verdes exuberantes */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-6 rounded-2xl mb-3 w-20 h-20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#C2B280]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-white font-medium">Áreas verdes exuberantes</span>
              </div>

              {/* Infraestrutura completa */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-6 rounded-2xl mb-3 w-20 h-20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#C2B280]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-white font-medium">Infraestrutura completa</span>
              </div>

              {/* Lazer completo */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-6 rounded-2xl mb-3 w-20 h-20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#C2B280]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Lazer completo</span>
              </div>

              {/* Sustentabilidade na construção */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-6 rounded-2xl mb-3 w-20 h-20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#C2B280]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Sustentabilidade na construção</span>
              </div>

              {/* Coleta seletiva */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-6 rounded-2xl mb-3 w-20 h-20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#C2B280]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <span className="text-white font-medium">Coleta seletiva</span>
              </div>

              {/* Flexibilidade na construção */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-6 rounded-2xl mb-3 w-20 h-20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#C2B280]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <span className="text-white font-medium">Flexibilidade na construção</span>
              </div>

              {/* Projeto urbanístico moderno */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-6 rounded-2xl mb-3 w-20 h-20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#C2B280]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-white font-medium">Projeto urbanístico moderno</span>
              </div>

              {/* Acesso controlado na portaria 24h */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-6 rounded-2xl mb-3 w-20 h-20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#C2B280]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Acesso controlado na portaria 24h</span>
              </div>

              {/* Acesso fácil à cidade */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-6 rounded-2xl mb-3 w-20 h-20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#C2B280]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <span className="text-white font-medium">Acesso fácil à cidade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 