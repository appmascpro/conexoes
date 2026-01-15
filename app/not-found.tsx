import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">404</h2>
        <p className="text-zinc-400 mb-6">Página não encontrada</p>
        <Link href="/">
          <Button variant="default">Voltar para Home</Button>
        </Link>
      </div>
    </div>
  )
}
