'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ImagensVideos from './components/ImagensVideos'
import StatusObra from './components/StatusObra'
import Localizacao from './components/Localizacao'

export default function Home() {
  const [activeTab, setActiveTab] = useState('fotos')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      image: '/images/galeria/inicial.jpg',
      title: 'DAMHA FIT II',
      subtitle: 'NOVO LANÇAMENTO',
      description: 'Onde natureza e bem-estar se encontram para criar o seu lugar perfeito'
    },
    {
      image: '/images/galeria/inicial2.jpg',
      title: '250m²',
      subtitle: 'Lotes a partir de:',
      description: 'Chegou a sua oportunidade de investir em um lote a partir de 250m², o espaço ideal para construir a casa dos seus sonhos! Aproveite essa chance de ter mais liberdade, conforto e qualidade de vida em um terreno com excelente valorização.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 12000) // Troca a cada 12 segundos

    return () => clearInterval(interval)
  }, [])

  // Efeito de scroll com progresso
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY
      const heroButtons = document.querySelector('.hero-buttons')
      if (heroButtons) {
        const buttonPosition = heroButtons.getBoundingClientRect().top + window.scrollY
        const navHeight = 80 // Altura aproximada da barra de navegação
        const progress = Math.max(0, (scrollHeight + navHeight - buttonPosition) / 100)
        setScrollProgress(Math.min(progress, 1))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Menu de navegação */}
      <nav 
        className="fixed top-0 w-full transition-all duration-300 z-50" 
        style={{ 
          backgroundColor: scrollProgress > 0 ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          backdropFilter: scrollProgress > 0 ? 'blur(8px)' : 'none',
          boxShadow: scrollProgress > 0 ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
          borderBottom: scrollProgress > 0 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo ou Nome */}
            <div className="h-12">
              <Link href="/">
                <Image
                  src="/images/logo.PNG"
                  alt="Logo Damha Fit II"
                  width={180}
                  height={48}
                  className="object-contain h-12"
                  priority
                />
              </Link>
            </div>

            {/* Links de Navegação */}
            <div className="flex items-center">
              <ul className="flex items-center gap-6">
                <li>
                  <Link href="#sobre" className="relative group px-4 py-2 transition-colors duration-300 text-base font-semibold text-white hover:text-gold bg-black/30 rounded-full">
                    <span className="relative z-10">Sobre</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#diferenciais" className="relative group px-4 py-2 transition-colors duration-300 text-base font-semibold text-white hover:text-gold bg-black/30 rounded-full">
                    <span className="relative z-10">Diferenciais</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#imagens" className="relative group px-4 py-2 transition-colors duration-300 text-base font-semibold text-white hover:text-gold bg-black/30 rounded-full">
                    <span className="relative z-10">Imagens e Vídeos</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#status-obra" className="relative group px-4 py-2 transition-colors duration-300 text-base font-semibold text-white hover:text-gold bg-black/30 rounded-full">
                    <span className="relative z-10">Status da obra</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#localizacao" className="relative group px-4 py-2 transition-colors duration-300 text-base font-semibold text-white hover:text-gold bg-black/30 rounded-full">
                    <span className="relative z-10">Localização</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
                <li className="ml-6">
                  <Link 
                    href="https://wa.me/553433339576?text=[DF1] Olá! Gostaria de mais informações sobre o Damha Fit II."
                    target="_blank"
                    className="bg-gold hover:bg-gold-dark text-white px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
                  >
                    <span>TENHO INTERESSE</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section com Slider */}
      <section className="relative w-full h-[90vh] mt-8">
        {/* Área para a imagem principal */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full h-full relative">
                {/* Imagem de fundo */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                  style={{
                    backgroundImage: `url('${slide.image}')`
                  }}
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Ondas decorativas superiores */}
        <div className="absolute top-0 left-0 right-0 rotate-180">
          <div className="relative">
            <svg className="w-full h-32 fill-white/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg className="absolute bottom-0 w-full h-32 fill-white/20" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg className="absolute bottom-0 w-full h-40 fill-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Ondas decorativas inferiores */}
        <div className="absolute -bottom-16 left-0 right-0">
          <div className="relative">
            <svg className="w-full h-32 fill-white/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg className="absolute bottom-0 w-full h-32 fill-white/20" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg className="absolute bottom-0 w-full h-32 fill-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Conteúdo do Hero */}
        <div className="absolute inset-0 flex items-center justify-center px-12 lg:px-24">
          <div className="text-white max-w-3xl text-center">
            <span className={`text-gold font-medium tracking-wider mb-6 block animate-fade-in-down ${activeSlide === 1 ? 'text-3xl' : 'text-xl'} mt-20`}>
              {slides[activeSlide].subtitle}
            </span>
            <h1 className="text-8xl font-display mb-8 animate-fade-in leading-tight">
              {slides[activeSlide].title}
            </h1>
            <p className="text-2xl font-light mb-12 text-white/90">
              {slides[activeSlide].description}
            </p>
            <div className="space-y-4 mb-12">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 inline-block shadow-2xl animate-fade-in-up">
                <p className="text-4xl font-light">A PARTIR DE <span className="font-semibold text-gold">R$ 145.000,00</span></p>
              </div>
            </div>
            <div className="mt-12 flex space-x-6 justify-center animate-fade-in-up delay-300 hero-buttons">
              <Link href="#sobre" className="bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center">
                <span>Saiba mais</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="https://wa.me/553433339576?text=[DF1] Olá! Gostaria de mais informações sobre o Damha Fit II."
                target="_blank"
                className="border-2 border-white/30 hover:border-gold text-white px-10 py-4 rounded-full text-lg transition-all duration-300 hover:bg-black/20 backdrop-blur-sm"
              >
                Fale conosco
              </Link>
            </div>
          </div>
        </div>

        {/* Controles do Slider */}
        <div className="absolute bottom-32 right-12 lg:right-24 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'bg-gold border border-gold'
                  : 'bg-white/30 border border-white/50 hover:bg-gold hover:border-gold'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-[#FFFBF4] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Conteúdo */}
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <span className="text-gold uppercase tracking-wider font-medium mb-4 block">SOBRE</span>
                <h2 className="text-4xl lg:text-5xl font-display text-gray-800 mb-8 leading-tight">
                  A vida é melhor com a natureza ao redor.
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="leading-relaxed">
                    Viver em contato permanente com a natureza é transformador, faz bem para nossa saúde física e mental.
                  </p>
                  <p className="leading-relaxed">
                    Assim como o lazer, a atividade física e a prática de esportes são essenciais para se viver com mais qualidade.
                  </p>
                  <p className="leading-relaxed">
                    Por isso, o Damha Fit II, com uma área total de <span className="font-semibold">mais de 150 mil m²</span> de verde e uma área de lazer formidável, que inclui piscinas, quadras de tênis, espaços gourmet e até lagos para a pesca, é a escolha certa para quem procura uma vida mais saudável, harmoniosa e prazerosa.
                  </p>
                  <p className="leading-relaxed">
                    Próximo ao centro da cidade e com um sistema de segurança moderno, ele ainda proporciona todo conforto e tranquilidade que você e sua família merecem.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagem com formato curvo */}
            <div className="lg:w-1/2 relative">
              <div className="aspect-[16/12] relative rounded-[100px] overflow-hidden shadow-2xl" style={{
                borderTopLeftRadius: '300px',
                borderBottomRightRadius: '300px'
              }}>
                <iframe
                  src="https://www.youtube.com/embed/nEZgLYtrQg0?autoplay=1&mute=1&loop=1&playlist=nEZgLYtrQg0"
                  className="absolute w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Vídeo sobre o Damha Fit II"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="bg-[#C2B59B] relative overflow-hidden">
        <div className="relative min-h-[600px]">
          {/* Background Image */}
          <div className="absolute top-0 bottom-0 left-0 w-[45%] overflow-visible">
            <div className="relative w-[120%] h-[130%] -mt-[10%] -ml-[10%]">
              <Image
                src="/images/leaf-bg.png"
                alt="Folha decorativa"
                fill
                className="object-cover"
                style={{
                  objectPosition: '60% 50%'
                }}
                priority
              />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10 py-16">
            <div className="flex items-start">
              {/* Lado esquerdo - Título */}
              <div className="w-[45%] relative pl-4 pt-8">
                <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 max-w-[600px]">
                  <span className="text-white uppercase tracking-wider text-sm mb-6 block font-medium drop-shadow-lg">DIFERENCIAIS</span>
                  <h2 className="text-[42px] font-light text-white leading-[1.2] drop-shadow-lg" style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                  }}>
                    <span className="italic block mb-2">O Lugar onde lazer</span>
                    <span className="italic block">e conforto são prioridades</span>
                  </h2>
                  <p className="text-white text-lg mt-8 leading-relaxed font-light drop-shadow-lg">
                    No Damha Fit Uberaba, o lazer é completo e pensado para transformar sua rotina. Piscinas, quadras esportivas, academia equipada e espaços gourmet oferecem momentos únicos para todas as idades. Seja relaxando, cuidando da saúde ou celebrando, você aproveita o melhor da vida sem sair de casa, com a segurança e a privacidade que você merece.
                  </p>
                </div>
              </div>

              {/* Lado direito - Diferenciais em grid */}
              <div className="w-[55%] pl-16 pt-12">
                <div className="grid grid-cols-3 gap-x-8 gap-y-10">
                  {/* Centro de Convívio */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-[100px] h-[100px] flex items-center justify-center mb-3 shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 border border-white/20">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15 9h2v2h-2V9m2-4h-2v2h2V5m-6 10h2v-2h-2v2m2-10h-2v2h2V5m-2 6h2V9h-2v2M7 9h2V7H7v2m12 14H5V3h14m0-2H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7 19h2v-2H7v2m0-6h2v-2H7v2m0-6h2V5H7v2m6 10h2v-2h-2v2"/>
                      </svg>
                    </div>
                    <span className="text-white text-base font-medium tracking-wide">Centro de Convívio</span>
                  </div>

                  {/* Quadra Poliesportiva */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-[100px] h-[100px] flex items-center justify-center mb-3 shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 border border-white/20">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-5 4l3 3l-3 3l-3-3l3-3m10 0l3 3l-3 3l-3-3l3-3M7 17l3-3l3 3l-3 3l-3-3m7 0l3-3l3 3l-3 3l-3-3m-4-5c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1"/>
                      </svg>
                    </div>
                    <span className="text-white text-base font-medium tracking-wide">Quadra Poliesportiva</span>
                  </div>

                  {/* Mini Campo */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-[100px] h-[100px] flex items-center justify-center mb-3 shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 border border-white/20">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2c1.9 0 3.6.6 4.9 1.7L2.7 17.9C2.2 16.7 2 15.4 2 14c0-6.6 5.4-12 12-12m10 12c0 6.6-5.4 12-12 12c-1.9 0-3.6-.6-4.9-1.7L19.3 10.1c.5 1.2.7 2.5.7 3.9M8.2 5L20 16.8c-1.1 2.3-3 4.2-5.3 5.3L2.9 10.3C4 8 5.9 6.1 8.2 5"/>
                      </svg>
                    </div>
                    <span className="text-white text-base font-medium tracking-wide">Mini Campo</span>
                  </div>

                  {/* Quadra de Tênis Saibro */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-[100px] h-[100px] flex items-center justify-center mb-3 shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 border border-white/20">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M18.5 2A1.5 1.5 0 0 1 20 3.5A1.5 1.5 0 0 1 18.5 5c-.23 0-.45-.05-.65-.15l-3.69 3.7.34.34l2.82-2.83h2.83L17 9.21l1.44 1.44l-.71.7l-1.44-1.44L13 13.21V10.38l-2.83 2.83l.34.34l3.7-3.69c-.1-.2-.15-.42-.15-.65A1.5 1.5 0 0 1 15.5 7A1.5 1.5 0 0 1 17 8.5c0 .23-.05.45-.15.65l3.7-3.69c-.1-.2-.15-.42-.15-.65A1.5 1.5 0 0 1 22 3.5"/>
                      </svg>
                    </div>
                    <span className="text-white text-base font-medium tracking-wide">Quadra de Tênis</span>
                  </div>

                  {/* Beach Tênis */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-[100px] h-[100px] flex items-center justify-center mb-3 shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 border border-white/20">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19.5 12c.93 0 1.78.34 2.44.91L20 15l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1l-1-1l-1.94-2.09c.66-.57 1.51-.91 2.44-.91c1.03 0 1.97.42 2.65 1.09c.68-.67 1.62-1.09 2.65-1.09Z"/>
                      </svg>
                    </div>
                    <span className="text-white text-base font-medium tracking-wide">Beach Tênis</span>
                  </div>

                  {/* Quadra de Vôlei */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-[100px] h-[100px] flex items-center justify-center mb-3 shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 border border-white/20">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M13 6.5A6.5 6.5 0 0 1 19.5 13a6.5 6.5 0 0 1-6.5 6.5A6.5 6.5 0 0 1 6.5 13A6.5 6.5 0 0 1 13 6.5m0 2c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2-4.5-4.5-4.5"/>
                      </svg>
                    </div>
                    <span className="text-white text-base font-medium tracking-wide">Quadra de Vôlei</span>
                  </div>

                  {/* Playground */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-[100px] h-[100px] flex items-center justify-center mb-3 shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 border border-white/20">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3.5 6l-4.5 1l-4.5-1c-.8-.2-1.5.4-1.5 1.2V17h2v5h3v-3.5h2V22h3v-5h2v-7.8c0-.8-.7-1.4-1.5-1.2"/>
                      </svg>
                    </div>
                    <span className="text-white text-base font-medium tracking-wide">Playground</span>
                  </div>

                  {/* Churrasqueira */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-[100px] h-[100px] flex items-center justify-center mb-3 shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 border border-white/20">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18m6.78-1.81c1.53.71 3.68.21 5.27-1.38c1.91-1.91 2.28-4.65.81-6.12c-1.46-1.46-4.2-1.1-6.12.81c-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88l1.41-1.41L13.41 13l1.47-1.47z"/>
                      </svg>
                    </div>
                    <span className="text-white text-base font-medium tracking-wide">Churrasqueira</span>
                  </div>

                  {/* Espaço Pet */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-[100px] h-[100px] flex items-center justify-center mb-3 shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 border border-white/20">
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.35 3c1.18-.17 2.43.29 3.11 1.29c.91-.68 2.12-.89 3.26-.36c.64.3 1.16.86 1.42 1.52c1.4-.04 2.78.8 3.31 2.14c.47 1.12.27 2.43-.44 3.36c.49.54.85 1.2 1.06 1.92c.92-.31 1.96-.17 2.75.38c1.35.94 1.73 2.84.83 4.22c-.77 1.18-2.27 1.71-3.62 1.31c-.21 1.01-.78 1.94-1.63 2.54c-1.02.72-2.33.91-3.5.52c-.54.46-1.21.77-1.93.89c.29.89.23 1.87-.18 2.71c-.75 1.52-2.7 2.15-4.24 1.39c-1.33-.65-1.97-2.24-1.54-3.65c-.46-.54-.78-1.21-.89-1.93c-1.05.29-2.19.11-3.08-.51c-1.38-.96-1.77-2.87-.85-4.25c.78-1.18 2.29-1.7 3.63-1.29c.21-1.03.79-1.97 1.66-2.58c1.05-.74 2.41-.93 3.61-.49c.2-.98.75-1.87 1.57-2.47c-.26-.87-.18-1.82.22-2.63c-1.23-.21-2.23-1.3-2.33-2.56c-.1-1.24.61-2.45 1.78-2.97Z"/>
                      </svg>
                    </div>
                    <span className="text-white text-base font-medium tracking-wide">Espaço Pet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imagens e Vídeos */}
      <ImagensVideos />
      <StatusObra />
      <Localizacao />
    </>
  )
} 