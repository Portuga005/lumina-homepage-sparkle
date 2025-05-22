
import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import ProductSection from '../components/ProductSection';
import CollectionsSection from '../components/CollectionsSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  // Mock data for products
  const bestSellers = [
    {
      id: 1,
      name: "Anel Lúmina Prata 925",
      price: 199.90,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Colar Dourado Elegance",
      price: 299.90,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Brincos Pérola Clássica",
      price: 159.90,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Pulseira Charm Delicada",
      price: 179.90,
      image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      name: "Anel Solitário Zircônia",
      price: 249.90,
      image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      name: "Conjunto Dourado Luxo",
      price: 399.90,
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2a65c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const newProducts = [
    {
      id: 7,
      name: "Colar Gargantilha Moderna",
      price: 189.90,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    },
    {
      id: 8,
      name: "Brincos Argola Sofisticada",
      price: 139.90,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    },
    {
      id: 9,
      name: "Anel Duplo Minimalista",
      price: 169.90,
      image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    },
    {
      id: 10,
      name: "Pulseira Corrente Fina",
      price: 129.90,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    },
    {
      id: 11,
      name: "Pingente Coração Delicado",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    },
    {
      id: 12,
      name: "Tornozeleira Boho Chic",
      price: 99.90,
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2a65c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-16">
        <HeroCarousel />
        
        {/* Products Sections */}
        <ProductSection title="Mais Vendidos" products={bestSellers} />
        <ProductSection title="Novidades" products={newProducts} />
        
        {/* Collections */}
        <CollectionsSection />
        
        {/* Newsletter */}
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
