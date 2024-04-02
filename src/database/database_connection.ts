import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bwilgcpoznydfosiupih.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_DB_KEY
export const supabase = createClient(supabaseUrl, supabaseKey as string)