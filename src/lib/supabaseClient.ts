
import { createClient } from '@supabase/supabase-js';

// Importando as variáveis de ambiente do Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

// Verificação para garantir que as variáveis de ambiente estão definidas
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('As variáveis de ambiente VITE_SUPABASE_URL e VITE_SUPABASE_KEY devem estar definidas');
}

// Criando e exportando o cliente do Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
