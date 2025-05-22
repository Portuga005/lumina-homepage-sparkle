
import React from 'react';

const CollectionsSection = () => {
  const collections = [
    {
      id: 1,
      name: "Noivas",
      description: "Peças exclusivas para o dia mais especial da sua vida",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2a65c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/colecao/noivas"
    },
    {
      id: 2,
      name: "Festa",
      description: "Brilhe em todas as ocasiões especiais",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/colecao/festa"
    },
    {
      id: 3,
      name: "Dia a Dia",
      description: "Elegância e conforto para o seu cotidiano",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/colecao/dia-a-dia"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-lumina-dark mb-4">
            Coleções Especiais
          </h2>
          <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra nossas coleções cuidadosamente curadas para cada momento da sua vida
          </p>
          <div className="w-24 h-1 bg-lumina-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-playfair text-2xl font-bold mb-2">
                    {collection.name}
                  </h3>
                  <p className="font-roboto text-sm mb-4 opacity-90">
                    {collection.description}
                  </p>
                  <button className="bg-lumina-gold text-lumina-dark px-6 py-2 rounded-full font-roboto font-medium hover:bg-yellow-500 transition-all duration-300 transform group-hover:scale-105">
                    Explorar Coleção
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
