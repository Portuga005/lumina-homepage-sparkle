
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
}

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <Link to={`/product/${product.id}`} className="block group">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <span className="absolute top-3 left-3 bg-lumina-gold text-lumina-dark px-2 py-1 text-xs font-medium rounded-full">
                        Novo
                      </span>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-playfair text-lg font-medium text-lumina-dark group-hover:text-lumina-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-roboto text-xl font-bold text-lumina-gold mt-2">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </p>
                    <div className="mt-4 text-center">
                      <span className="inline-block w-full py-2 bg-lumina-dark text-white text-sm font-medium rounded-md group-hover:bg-lumina-gold group-hover:text-lumina-dark transition-colors">
                        Ver Detalhes
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-white/80 hover:bg-white" />
        <CarouselNext className="right-0 bg-white/80 hover:bg-white" />
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
