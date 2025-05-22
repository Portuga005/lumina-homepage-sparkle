
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-lumina-dark mb-6 text-center">
            Loja <span className="text-lumina-gold">Lúmina</span>
          </h1>
          
          <div className="py-8 text-center">
            <p className="font-roboto text-xl text-gray-600">
              Estamos trabalhando em nosso catálogo completo de produtos.
            </p>
            <p className="font-roboto text-xl text-gray-600 mt-2">
              Em breve, você poderá explorar toda a nossa coleção!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
