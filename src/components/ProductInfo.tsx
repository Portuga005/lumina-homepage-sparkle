
import React from 'react';
import { Star } from 'lucide-react';
import { showAddToCartToast } from './CartToast';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  material: string;
  sizes: string[];
  stock: number;
  rating: number;
  images: string[];
  isNew?: boolean;
}

interface ProductInfoProps {
  product: Product;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  children: React.ReactNode;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ 
  product, 
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
  children 
}) => {
  // Generate the star rating display
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="h-5 w-5 fill-lumina-gold text-lumina-gold" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-5 w-5 text-gray-300" />
            <div className="absolute top-0 left-0 overflow-hidden w-1/2">
              <Star className="h-5 w-5 fill-lumina-gold text-lumina-gold" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="h-5 w-5 text-gray-300" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="flex flex-col">
      {product.isNew && (
        <span className="inline-block bg-lumina-gold text-lumina-dark px-2 py-1 text-xs font-medium rounded-full mb-2 w-fit">
          Novo
        </span>
      )}
      
      <h1 className="font-playfair text-3xl md:text-4xl font-bold text-lumina-dark">
        {product.name}
      </h1>
      
      <div className="flex items-center mt-2 mb-4">
        <div className="flex">
          {renderStars()}
        </div>
        <span className="ml-2 text-sm text-gray-600">
          {product.rating.toFixed(1)} ({Math.round(product.rating * 10)} avaliações)
        </span>
      </div>
      
      <p className="text-2xl font-bold text-lumina-gold mb-4">
        R$ {product.price.toFixed(2).replace('.', ',')}
      </p>
      
      <p className="text-gray-700 mb-6">
        {product.description}
      </p>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-lumina-dark mb-1">Material</h3>
          <p>{product.material}</p>
        </div>
        
        <div>
          <h3 className="font-medium text-lumina-dark mb-1">Tamanho</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-md transition-all ${
                  selectedSize === size 
                    ? 'border-lumina-gold bg-lumina-gold/10 text-lumina-dark' 
                    : 'border-gray-300 hover:border-lumina-gold'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-lumina-dark mb-1">Quantidade</h3>
          <div className="flex items-center">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-4 py-1 border-t border-b border-gray-300 min-w-[40px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
              className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
              disabled={quantity >= product.stock}
            >
              +
            </button>
            <span className="ml-4 text-sm text-gray-500">
              {product.stock} {product.stock === 1 ? 'item' : 'itens'} em estoque
            </span>
          </div>
        </div>
      </div>
      
      {children}
    </div>
  );
};

export default ProductInfo;
