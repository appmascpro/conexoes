'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Algo deu errado!</h2>
        <p className="text-zinc-400 mb-6">{error.message || 'Ocorreu um erro inesperado'}</p>
        <Button onClick={reset} variant="default">
          Tentar novamente
        </Button>
      </div>
    </div>
  )
}
