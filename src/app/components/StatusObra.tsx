'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StatusObra() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F5EFE6] via-[#F9F5EF] to-[#FFFBF4] overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C2B59B]/5 rounded-full translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C2B59B]/10 rounded-full -translate-x-1/2 translate-y-1/4"></div>
        
        {/* Padrão de pontos */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: 'radial-gradient(#C2B59B 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-wider text-sm mb-4 block">STATUS DA OBRA</span>
          <h2 className="text-4xl font-display text-gray-800">Conheça o progresso da obra</h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Status Geral */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C2B59B]/20">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#E5E0D9"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#C2B59B"
                  strokeWidth="8"
                  strokeDasharray="377"
                  strokeDashoffset={377 - (377 * 21) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-semibold text-gray-800">21%</span>
              </div>
            </div>
            <h3 className="text-xl text-gray-800 text-center font-medium">Status geral</h3>
          </div>

          {/* Acesso */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C2B59B]/20">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#E5E0D9"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#C2B59B"
                  strokeWidth="8"
                  strokeDasharray="377"
                  strokeDashoffset={377 - (377 * 99) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-semibold text-gray-800">99%</span>
              </div>
            </div>
            <h3 className="text-xl text-gray-800 text-center font-medium">Acesso</h3>
          </div>

          {/* Portaria */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C2B59B]/20">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#E5E0D9"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#C2B59B"
                  strokeWidth="8"
                  strokeDasharray="377"
                  strokeDashoffset={377 - (377 * 80) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-semibold text-gray-800">80%</span>
              </div>
            </div>
            <h3 className="text-xl text-gray-800 text-center font-medium">Portaria</h3>
          </div>

          {/* Abertura de ruas */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C2B59B]/20">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#E5E0D9"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#C2B59B"
                  strokeWidth="8"
                  strokeDasharray="377"
                  strokeDashoffset={377 - (377 * 95) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-semibold text-gray-800">95%</span>
              </div>
            </div>
            <h3 className="text-xl text-gray-800 text-center font-medium">Abertura de ruas</h3>
          </div>

          {/* Paisagismo */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C2B59B]/20">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#E5E0D9"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#C2B59B"
                  strokeWidth="8"
                  strokeDasharray="377"
                  strokeDashoffset={377 - (377 * 8) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-semibold text-gray-800">8%</span>
              </div>
            </div>
            <h3 className="text-xl text-gray-800 text-center font-medium">Paisagismo</h3>
          </div>

          {/* Rede de água */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C2B59B]/20">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#E5E0D9"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#C2B59B"
                  strokeWidth="8"
                  strokeDasharray="377"
                  strokeDashoffset={377 - (377 * 0) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-semibold text-gray-800">0%</span>
              </div>
            </div>
            <h3 className="text-xl text-gray-800 text-center font-medium">Rede de água</h3>
          </div>

          {/* Rede Elétrica */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C2B59B]/20">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#E5E0D9"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#C2B59B"
                  strokeWidth="8"
                  strokeDasharray="377"
                  strokeDashoffset={377 - (377 * 0) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-semibold text-gray-800">0%</span>
              </div>
            </div>
            <h3 className="text-xl text-gray-800 text-center font-medium">Rede Elétrica</h3>
          </div>

          {/* Terraplanagem */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C2B59B]/20">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#E5E0D9"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#C2B59B"
                  strokeWidth="8"
                  strokeDasharray="377"
                  strokeDashoffset={377 - (377 * 0) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-semibold text-gray-800">0%</span>
              </div>
            </div>
            <h3 className="text-xl text-gray-800 text-center font-medium">Terraplanagem</h3>
          </div>

          {/* Pavimentação */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C2B59B]/20">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#E5E0D9"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#C2B59B"
                  strokeWidth="8"
                  strokeDasharray="377"
                  strokeDashoffset={377 - (377 * 0) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-semibold text-gray-800">0%</span>
              </div>
            </div>
            <h3 className="text-xl text-gray-800 text-center font-medium">Pavimentação</h3>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="#"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span>VER FOTOS</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          ATUALIZADO EM 18/03/2024
        </div>
      </div>
    </section>
  )
} 