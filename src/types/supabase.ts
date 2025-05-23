
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// Esta interface pode ser expandida conforme necessário
export interface Database {
  public: {
    Tables: {
      produtos: {
        Row: {
          id: number
          nome: string
          preco: number
          descricao: string
          imagem_url: string
          categoria: string
          estoque: number
          criado_em: string
        }
        Insert: {
          id?: number
          nome: string
          preco: number
          descricao?: string
          imagem_url?: string
          categoria: string
          estoque: number
          criado_em?: string
        }
        Update: {
          id?: number
          nome?: string
          preco?: number
          descricao?: string
          imagem_url?: string
          categoria?: string
          estoque?: number
          criado_em?: string
        }
      }
    }
  }
}
