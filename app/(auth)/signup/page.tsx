'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [referralCode, setReferralCode] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const ref = searchParams.get('ref')
    if (ref) {
      setReferralCode(ref)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Implementar signup com Supabase e referral_code
    setTimeout(() => {
      setLoading(false)
      router.push('/app/home')
    }, 1000)
  }

  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_INVITE_URL || 'https://wa.me/5514991570389'

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black text-white">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/brand/mascpro-logo.svg"
            alt="MASC PRO"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </div>

        {/* Título e Subtítulo */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold tracking-tight">conexoes</h1>
          <p className="text-zinc-400 text-sm">Acesso por indicação.</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {referralCode && (
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Código de indicação"
                value={referralCode}
                readOnly
                className="bg-zinc-900 border-zinc-800 text-white"
              />
            </div>
          )}

          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-zinc-900 border-zinc-800 text-white"
            />
          </div>

          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-zinc-900 border-zinc-800 text-white"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-zinc-100"
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Criar conta'}
          </Button>
        </form>

        {/* Botão WhatsApp */}
        <div className="pt-4 border-t border-zinc-800">
          <Button
            type="button"
            variant="outline"
            className="w-full border-zinc-800 text-zinc-300 hover:bg-zinc-900"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Pedir link no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}
