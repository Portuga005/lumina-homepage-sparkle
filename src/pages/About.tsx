
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-lumina-dark mb-6 text-center">
            Sobre a <span className="text-lumina-gold">Lúmina Joias</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mt-12 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-playfair text-2xl font-bold mb-4 text-lumina-gold">Nossa História</h2>
              <p className="font-roboto text-gray-700 leading-relaxed">
                A Lúmina Joias foi fundada em 2018 por Ana Clara Mendes, uma designer apaixonada por criar semi joias que unem elegância atemporal e modernidade. Inspirada pelo brilho natural de pedras e metais, Ana quis oferecer peças acessíveis, mas com a sofisticação de joias finas, para mulheres que valorizam estilo e qualidade.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-playfair text-2xl font-bold mb-4 text-lumina-gold">Nossa Missão</h2>
              <p className="font-roboto text-gray-700 leading-relaxed">
                Iluminar momentos especiais com joias que contam histórias e celebram a individualidade. Acreditamos que cada peça deve carregar significado e brilhar com a personalidade de quem a usa.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-playfair text-2xl font-bold mb-4 text-lumina-gold">Nossos Materiais</h2>
              <p className="font-roboto text-gray-700 leading-relaxed">
                Utilizamos apenas materiais de alta qualidade em nossas criações, como prata 925, ouro 18k e zircônias selecionadas. Todas as nossas peças passam por rigoroso controle de qualidade e vêm com certificados de autenticidade.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
