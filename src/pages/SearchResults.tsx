
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  // Mock products database
  const allProducts = [
    {
      id: 1,
      name: "Anel Lúmina Prata 925",
      price: 199.90,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      keywords: ["anel", "prata", "925", "lumina"]
    },
    {
      id: 2,
      name: "Colar Dourado Elegance",
      price: 299.90,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      keywords: ["colar", "dourado", "elegance", "gargantilha"]
    },
    {
      id: 3,
      name: "Brincos Pérola Clássica",
      price: 159.90,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      keywords: ["brinco", "perola", "classico", "branco"]
    },
    {
      id: 4,
      name: "Pulseira Charm Delicada",
      price: 179.90,
      image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      keywords: ["pulseira", "charm", "delicada", "dourado"]
    },
    {
      id: 5,
      name: "Anel Solitário Zircônia",
      price: 249.90,
      image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      keywords: ["anel", "solitario", "zirconia", "noivado"]
    },
    {
      id: 6,
      name: "Conjunto Dourado Luxo",
      price: 399.90,
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2a65c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      keywords: ["conjunto", "dourado", "luxo", "colar", "brincos"]
    },
  ];

  // Filter products based on search query
  const filteredProducts = searchQuery 
    ? allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-lumina-dark mb-6 text-center">
            Resultados da Busca
          </h1>
          
          <p className="font-roboto text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
            {filteredProducts.length > 0 
              ? `${filteredProducts.length} resultado(s) encontrado(s) para "${searchQuery}"`
              : `Nenhum resultado encontrado para "${searchQuery}"`
            }
          </p>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="font-roboto text-gray-600 mb-4">Não encontramos o que você está procurando.</p>
              <p className="font-roboto text-gray-600 mb-8">Tente usar termos diferentes ou navegue por nossas categorias.</p>
              <a href="/loja" className="bg-lumina-gold text-lumina-dark px-8 py-3 rounded-full font-roboto font-medium hover:bg-yellow-600 transition-colors duration-300">
                Ver Todos os Produtos
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
