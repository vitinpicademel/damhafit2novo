'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ImagensVideos() {
  const [activeTab, setActiveTab] = useState('fotos')
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setIsImageOpen(true)
  }

  return (
    <section id="imagens" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-wider text-sm mb-4 block">IMAGENS E VÍDEOS</span>
          <h2 className="text-4xl font-display text-[#4A3418] mb-4 italic">
            Conhecer o Damha Fit II é se encantar.
          </h2>
          <p className="text-2xl text-[#4A3418] italic">
            Lotes a partir de 5.000 m².
          </p>
        </div>

        {/* Abas */}
        <div className="flex justify-center mb-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button 
                onClick={() => setActiveTab('fotos')}
                className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'fotos' 
                    ? 'border-gold text-gold' 
                    : 'border-transparent text-gray-500 hover:text-gold hover:border-gold'
                }`}
              >
                FOTOS
              </button>
              <button 
                onClick={() => setActiveTab('projeto')}
                className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'projeto' 
                    ? 'border-gold text-gold' 
                    : 'border-transparent text-gray-500 hover:text-gold hover:border-gold'
                }`}
              >
                PROJETO HUMANIZADO
              </button>
              <button 
                onClick={() => setActiveTab('videos')}
                className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'videos' 
                    ? 'border-gold text-gold' 
                    : 'border-transparent text-gray-500 hover:text-gold hover:border-gold'
                }`}
              >
                VÍDEOS
              </button>
            </nav>
          </div>
        </div>

        {/* Conteúdo das Abas */}
        {activeTab === 'fotos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Imagem 1 */}
            <div className="flex flex-col">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick('/images/galeria/1.jpeg')}
              >
                <Image
                  src="/images/galeria/1.jpeg"
                  alt="Entrada principal do condomínio"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#4A3418] text-sm mt-2">Entrada principal do condomínio</p>
            </div>

            {/* Imagem 2 */}
            <div className="flex flex-col">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick('/images/galeria/2.jpeg')}
              >
                <Image
                  src="/images/galeria/2.jpeg"
                  alt="Área gourmet do condomínio"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#4A3418] text-sm mt-2">Área gourmet do condomínio</p>
            </div>

            {/* Imagem 3 */}
            <div className="flex flex-col">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick('/images/galeria/3.jpeg')}
              >
                <Image
                  src="/images/galeria/3.jpeg"
                  alt="Academia do condomínio"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#4A3418] text-sm mt-2">Academia do condomínio</p>
            </div>

            {/* Imagem 4 */}
            <div className="flex flex-col">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick('/images/galeria/4.jpeg')}
              >
                <Image
                  src="/images/galeria/4.jpeg"
                  alt="Quadras de beach tennis"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#4A3418] text-sm mt-2">Quadras de beach tennis</p>
            </div>

            {/* Imagem 5 */}
            <div className="flex flex-col">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick('/images/galeria/5.jpeg')}
              >
                <Image
                  src="/images/galeria/5.jpeg"
                  alt="Playground"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#4A3418] text-sm mt-2">Playground</p>
            </div>

            {/* Imagem 6 */}
            <div className="flex flex-col">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick('/images/galeria/6.jpeg')}
              >
                <Image
                  src="/images/galeria/6.jpeg"
                  alt="Espaço gourmet"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#4A3418] text-sm mt-2">Espaço gourmet</p>
            </div>

            {/* Imagem 7 */}
            <div className="flex flex-col">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick('/images/galeria/7.jpeg')}
              >
                <Image
                  src="/images/galeria/7.jpeg"
                  alt="Espaço gourmet"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#4A3418] text-sm mt-2">Espaço gourmet</p>
            </div>

            {/* Imagem 8 */}
            <div className="flex flex-col">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick('/images/galeria/8.jpeg')}
              >
                <Image
                  src="/images/galeria/8.jpeg"
                  alt="Centro de convívio"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#4A3418] text-sm mt-2">Centro de convívio</p>
            </div>

            {/* Imagem 9 */}
            <div className="flex flex-col">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick('/images/galeria/9.jpeg')}
              >
                <Image
                  src="/images/galeria/9.jpeg"
                  alt="Quadra de tênis"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#4A3418] text-sm mt-2">Quadra de tênis</p>
            </div>
          </div>
        )}

        {activeTab === 'projeto' && (
          <div className="max-w-4xl mx-auto relative">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/projeto-humanizado.jpg"
                alt="Projeto Humanizado do empreendimento"
                fill
                className="object-cover"
              />
              <button 
                onClick={() => handleImageClick('/images/projeto-humanizado.jpg')}
                className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gold px-4 py-2 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Ampliar Projeto</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal de imagem ampliada */}
        {isImageOpen && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-12" 
            onClick={() => setIsImageOpen(false)}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsImageOpen(false);
              }}
              className="absolute top-4 md:top-8 right-4 md:right-8 z-50 bg-white hover:bg-gold rounded-full p-2 md:p-3 text-gold hover:text-white shadow-xl transition-all duration-300"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div 
              className="relative w-full h-[80vh] md:max-w-5xl flex items-center justify-center bg-white/5 rounded-xl md:rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={selectedImage}
                  alt="Imagem ampliada"
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 gap-8">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/nEZgLYtrQg0?autoplay=0"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Vídeo sobre o Damha Fit II"
              />
            </div>
          </div>
        )}

        {/* Nota de rodapé */}
        <p className="text-gray-500 text-sm mt-12 text-center">
          Imagens meramente ilustrativas. Projeto aprovado nos termos do processo nº 6850/2017.
        </p>
      </div>
    </section>
  )
} 