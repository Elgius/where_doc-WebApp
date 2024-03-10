// the supabase client...thing

import { SupabaseClient, createClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient | undefined;

if (
  typeof process.env.SUPABASE_PROJECT_URL !== "undefined" &&
  typeof process.env.SUPABASE_API_KEY !== "undefined"
) {
  const url = process.env.SUPABASE_PROJECT_URL;
  const key = process.env.SUPABASE_API_KEY;
  supabaseClient = createClient(url, key);
} else {
  console.error(
    `The enviroment variables are not loading...wtaf... ${supabaseClient}`
  );
  console.log("Supabase client status:  ", supabaseClient);
}

export { supabaseClient }; // this some wacky javascript/typescript move i pulled here
