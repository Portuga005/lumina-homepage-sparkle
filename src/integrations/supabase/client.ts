
// Este arquivo é automaticamente gerado. Não o edite diretamente.
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../types/supabase';

const SUPABASE_URL = "https://yvizssuccygsmlsdexlp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2aXpzc3VjY3lnc21sc2RleGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMTA1MzYsImV4cCI6MjA2MzU4NjUzNn0.cCT1CwCvcBWZuARHCvAeV4H1C_QZ8i4-TC-rpdAB6G8";

// Importe o cliente supabase desta forma:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
