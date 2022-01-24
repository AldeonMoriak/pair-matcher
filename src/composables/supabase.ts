import type { SupabaseClientOptions } from '@supabase/supabase-js'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string

const options: SupabaseClientOptions = {
  schema: 'public',
  headers: { 'x-my-custom-header': 'pair-matcher' },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
}

export const supabase = createClient(supabaseUrl, supabaseKey, options)
