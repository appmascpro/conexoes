import type { User } from '@supabase/supabase-js'

export type { User }

export interface AuthUser extends User {
  email?: string
}
