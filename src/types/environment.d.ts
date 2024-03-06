export {}


declare global {
    namespace NodeJS {
        interface processEnv {
            SUPABASE_PROJECT_URL: string,
            SUPABASE_API_KEY : string
        }
    }
}
