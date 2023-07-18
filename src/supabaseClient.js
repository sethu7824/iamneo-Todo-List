import { createClient } from '@supabase/supabase-js'

// To be more secure: .env file
    const supabaseURL="https://tkhjmgqozlncphqstcos.supabase.co";
    const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRraGptZ3FvemxuY3BocXN0Y29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1NzY5NzMsImV4cCI6MjAwNTE1Mjk3M30.7K1c-i8_iD6e3Z9mOhxcluwvdplhsX9skamCf1NkQ2E"; 

    export const supabase=createClient(supabaseURL,supabaseAnonKey);