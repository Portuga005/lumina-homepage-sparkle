
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Collection = () => {
  const { categoria } = useParams<{ categoria: string }>();
  
  // Mock product collections
  const collections = {
    noivas: {
      title: "Coleção Noivas",
      description: "Peças delicadas e sofisticadas para o dia mais especial da sua vida.",
      products: [
        {
          id: 101,
          name: "Conjunto Pérolas Noiva",
          price: 399.90,
          image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
          id: 102,
          name: "Tiara Cristais Bride",
          price: 259.90,
          image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
          id: 103,
          name: "Brincos Longos Cascata",
          price: 189.90,
          image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        }
      ]
    },
    festa: {
      title: "Coleção Festa",
      description: "Joias deslumbrantes para eventos especiais e momentos inesquecíveis.",
      products: [
        {
          id: 201,
          name: "Choker Cristais Festa",
          price: 279.90,
          image: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
          id: 202,
          name: "Conjunto Dourado Glamour",
          price: 349.90,
          image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
          id: 203,
          name: "Brincos Gota Zircônia",
          price: 159.90,
          image: "https://images.unsplash.com/photo-1626784215021-2e39ccbdddf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        }
      ]
    },
    promocoes: {
      title: "Promoções",
      description: "Aproveite descontos especiais em peças selecionadas por tempo limitado.",
      products: [
        {
          id: 301,
          name: "Anel Solitário Elegance",
          price: 149.90,
          image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
          id: 302,
          name: "Pulseira Charm Nature",
          price: 129.90,
          image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
          id: 303,
          name: "Conjunto Basic Silver",
          price: 199.90,
          image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        }
      ]
    },
    default: {
      title: "Coleção",
      description: "Explore nossas joias exclusivas com design elegante e materiais de qualidade.",
      products: [
        {
          id: 401,
          name: "Anel Lúmina Prata 925",
          price: 199.90,
          image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
          id: 402,
          name: "Colar Dourado Elegance",
          price: 299.90,
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
          id: 403,
          name: "Brincos Pérola Clássica",
          price: 159.90,
          image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
      ]
    }
  };

  type CollectionKeys = keyof typeof collections;
  
  // Get the collection based on the category parameter, or default if not found
  const collection = collections[categoria as CollectionKeys] || collections.default;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-lumina-dark mb-6 text-center">
            {collection.title}
          </h1>
          
          <p className="font-roboto text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            {collection.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collection;
