import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Damha Fit II',
  description: 'Viver em contato permanente com a natureza é transformador',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 