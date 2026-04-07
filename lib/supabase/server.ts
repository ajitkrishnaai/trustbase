import { createClient } from '@supabase/supabase-js'

export function createServerSupabaseClient() {
  // For API routes and server components that need auth
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
      },
    }
  )
}

export function createServiceClient() {
  // For operations that don't need user auth (like patient viewer)
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}
