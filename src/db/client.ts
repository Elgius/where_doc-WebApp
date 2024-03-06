import { createClient } from "@supabase/supabase-js";

export function SupabaseClient() {
  let url = process.env.SUPABASE_PROJECT_URL;
  let key = process.env.SUPABASE_API_KEY;
  return createClient(url!, key!);
}
