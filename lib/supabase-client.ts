'use client'

import { createBrowserClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'

// Cliente para uso no lado do cliente (browser)
export function createClientSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  // Tenta usar @supabase/ssr se disponível, caso contrário usa o cliente padrão
  try {
    return createBrowserClient(supabaseUrl, supabaseAnonKey)
  } catch {
    return createClient(supabaseUrl, supabaseAnonKey)
  }
}
