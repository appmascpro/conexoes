'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { User, LogOut, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const { user, signOut } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Conexões</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 text-zinc-300">
                <User className="h-5 w-5" />
                <span className="text-sm">{user?.email}</span>
              </div>
              <Button onClick={signOut} variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-zinc-900/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            <div className="flex items-center gap-2 text-zinc-300 pb-3 border-b border-zinc-800">
              <User className="h-5 w-5" />
              <span className="text-sm">{user?.email}</span>
            </div>
            <Button onClick={signOut} variant="ghost" size="sm" className="w-full justify-start">
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
