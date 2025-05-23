
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

// Definindo a interface para os produtos
interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem_url: string;
  categoria: string;
  estoque: number;
  criado_em: string;
}

const ProdutosList: React.FC = () => {
  // Estado para armazenar os produtos
  const [produtos, setProdutos] = useState<Produto[]>([]);
  // Estado para gerenciar erros
  const [error, setError] = useState<string | null>(null);
  // Estado para indicar o carregamento
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar produtos do Supabase
    const fetchProdutos = async () => {
      try {
        setLoading(true);
        
        // Fazendo a consulta na tabela 'produtos'
        const { data, error } = await supabase
          .from('produtos')
          .select('*')
          .order('criado_em', { ascending: false });
        
        if (error) {
          throw error;
        }
        
        // Atualizando o estado com os dados recebidos
        setProdutos(data || []);
      } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        setError('Falha ao carregar produtos. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  // Renderização condicional baseada no estado de carregamento e erro
  if (loading) return <div className="text-center p-4">Carregando produtos...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Nossos Produtos</h2>
      
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <div 
              key={produto.id} 
              className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {produto.imagem_url && (
                <img 
                  src={produto.imagem_url} 
                  alt={produto.nome} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{produto.nome}</h3>
                <p className="text-gray-600 mb-2 line-clamp-2">{produto.descricao}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold">
                    {new Intl.NumberFormat('pt-BR', { 
                      style: 'currency', 
                      currency: 'BRL' 
                    }).format(produto.preco)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {produto.estoque > 0 
                      ? `${produto.estoque} em estoque` 
                      : 'Fora de estoque'}
                  </span>
                </div>
                <div className="mt-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {produto.categoria}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProdutosList;
