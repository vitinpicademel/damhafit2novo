import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Damha Fit II
          </Link>
          
          {/* Menu para Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="#sobre" className="nav-link">
              Sobre
            </Link>
            <Link href="#diferenciais" className="nav-link">
              Diferenciais
            </Link>
            <Link href="#imagens-e-videos" className="nav-link">
              Imagens e Vídeos
            </Link>
            <Link href="#status-da-obra" className="nav-link">
              Status da obra
            </Link>
            <Link href="#localizacao" className="nav-link">
              Localização
            </Link>
          </div>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Botão CTA */}
          <button className="hidden md:block btn-primary">
            Tenho interesse
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="#sobre" className="nav-link">
                Sobre
              </Link>
              <Link href="#diferenciais" className="nav-link">
                Diferenciais
              </Link>
              <Link href="#imagens-e-videos" className="nav-link">
                Imagens e Vídeos
              </Link>
              <Link href="#status-da-obra" className="nav-link">
                Status da obra
              </Link>
              <Link href="#localizacao" className="nav-link">
                Localização
              </Link>
              <button className="btn-primary w-full">
                Tenho interesse
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 