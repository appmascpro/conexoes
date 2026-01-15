'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Copy, Check } from 'lucide-react'

export default function ProfilePage() {
  const [copied, setCopied] = useState(false)
  const referralLink = 'https://conexoes.app/signup?ref=PLACEHOLDER_CODE' // TODO: Substituir com link real

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Perfil</h1>
        <p className="text-zinc-400">Gerencie sua conta e configurações</p>
      </div>

      {/* Seção Meu Link de Indicação */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Meu Link de Indicação</CardTitle>
          <CardDescription>
            Indique pessoas certas. Aqui, ninguém cresce sozinho.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={referralLink}
              readOnly
              className="bg-zinc-950 border-zinc-800 text-white"
            />
            <Button
              onClick={handleCopyLink}
              variant="outline"
              className="border-zinc-800 text-zinc-300 hover:bg-zinc-800"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copiar link
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Outras seções do perfil (placeholder) */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Informações da Conta</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-400 text-sm">Conteúdo em desenvolvimento</p>
        </CardContent>
      </Card>
    </div>
  )
}
