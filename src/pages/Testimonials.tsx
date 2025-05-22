
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star } from 'lucide-react';

const Testimonials = () => {
  // Mock testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      rating: 5,
      product: "Colar Gota Cristal",
      text: "Estou extremamente satisfeita com meu colar da Lúmina Joias. A qualidade é excepcional e o atendimento foi impecável. Já estou de olho na próxima compra!"
    },
    {
      id: 2,
      name: "Carolina Mendes",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      rating: 5,
      product: "Brincos Pérola",
      text: "Comprei os brincos para usar no meu casamento e foram perfeitos! Elegantes, leves e delicados, exatamente como eu queria. Recebi muitos elogios."
    },
    {
      id: 3,
      name: "Fernanda Costa",
      image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      rating: 4,
      product: "Anel Solitário",
      text: "O anel é lindo e o acabamento é muito bem feito. A entrega foi rápida e o produto veio em uma embalagem linda. Recomendo!"
    },
    {
      id: 4,
      name: "Juliana Almeida",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      rating: 5,
      product: "Conjunto Dourado",
      text: "As peças da Lúmina são de excelente qualidade! Uso frequentemente e não perdem o brilho. Sem dúvida, o melhor custo-benefício em semi joias."
    },
    {
      id: 5,
      name: "Amanda Oliveira",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      rating: 5,
      product: "Pulseira Charm",
      text: "Presente para minha mãe que adorou! O design é moderno mas elegante, e a qualidade é visível. Com certeza voltarei a comprar na Lúmina."
    },
    {
      id: 6,
      name: "Beatriz Santos",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      rating: 4,
      product: "Tornozeleira",
      text: "Estou apaixonada pela minha tornozeleira! Delicada e resistente, uso na praia e na piscina e continua linda. Recomendo muito!"
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} 
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-lumina-dark mb-6 text-center">
            <span className="text-lumina-gold">Depoimentos</span> de Clientes
          </h1>
          
          <p className="font-roboto text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Veja o que nossas clientes têm a dizer sobre suas experiências com as joias Lúmina. Valorizamos cada feedback e nos empenhamos para proporcionar sempre a melhor experiência.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-roboto font-semibold text-lg text-lumina-dark">{testimonial.name}</h3>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <p className="font-roboto text-gray-700 mb-3">
                  <span className="font-semibold text-lumina-gold">Produto: </span>
                  {testimonial.product}
                </p>
                
                <p className="font-roboto text-gray-700 italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="font-roboto text-lg text-gray-700 mb-6">
              Tem uma experiência para compartilhar? Envie seu depoimento!
            </p>
            <button className="bg-lumina-gold text-lumina-dark px-8 py-3 rounded-full font-roboto font-medium hover:bg-yellow-600 transition-colors duration-300">
              Enviar Depoimento
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
