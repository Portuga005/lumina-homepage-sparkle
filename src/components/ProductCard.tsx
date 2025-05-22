
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-lumina-gold text-lumina-dark px-2 py-1 text-sm font-roboto font-medium rounded-full">
            Novo
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-4">
        <h3 className="font-playfair text-lg font-semibold text-lumina-dark mb-2 group-hover:text-lumina-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-roboto text-xl font-bold text-lumina-gold mb-3">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>
        <button className="w-full bg-lumina-dark text-white py-2 rounded-lg font-roboto font-medium hover:bg-lumina-gold hover:text-lumina-dark transition-all duration-300 group-hover:border-lumina-gold border border-transparent">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
