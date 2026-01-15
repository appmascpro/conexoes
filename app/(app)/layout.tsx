import Image from 'next/image'
import Link from 'next/link'
import { Home, BookOpen, Users, ShoppingBag, Calendar, User, Shield } from 'lucide-react'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/app/home" className="flex items-center gap-2">
              <Image
                src="/brand/mascpro-logo.svg"
                alt="MASC PRO"
                width={100}
                height={32}
                className="object-contain"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/app/home"
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-md"
              >
                Home
              </Link>
              <Link
                href="/app/courses"
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-md"
              >
                Cursos
              </Link>
              <Link
                href="/app/community"
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-md"
              >
                Comunidade
              </Link>
              <Link
                href="/app/products"
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-md"
              >
                Produtos
              </Link>
              <Link
                href="/app/events"
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-md"
              >
                Eventos
              </Link>
              <Link
                href="/app/profile"
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-md"
              >
                Perfil
              </Link>
              <Link
                href="/app/admin"
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-md"
              >
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-900 bg-black md:hidden">
        <div className="grid grid-cols-5 h-16">
          <Link
            href="/app/home"
            className="flex flex-col items-center justify-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            href="/app/courses"
            className="flex flex-col items-center justify-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            <span>Cursos</span>
          </Link>
          <Link
            href="/app/community"
            className="flex flex-col items-center justify-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <Users className="h-5 w-5" />
            <span>Comunidade</span>
          </Link>
          <Link
            href="/app/products"
            className="flex flex-col items-center justify-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Produtos</span>
          </Link>
          <Link
            href="/app/profile"
            className="flex flex-col items-center justify-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <User className="h-5 w-5" />
            <span>Perfil</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pb-24 md:pb-8">
        {children}
      </main>
    </div>
  )
}
