
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Trash, ShoppingCart } from 'lucide-react';

// Mock wishlist items
const mockWishlistItems = [
  {
    id: 2,
    name: "Brincos de Ouro com Safiras",
    price: 1899.90,
    image: "/products/earrings-1.jpg",
    stock: 3,
  },
  {
    id: 4,
    name: "Anel Solitário de Diamante",
    price: 3599.90,
    image: "/products/ring-1.jpg",
    stock: 2,
  },
  {
    id: 5,
    name: "Conjunto Colar e Brincos",
    price: 4299.90,
    image: "/products/set-1.jpg",
    stock: 0,
  }
];

const AccountWishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems);
  
  const handleRemoveItem = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };
  
  const handleAddToCart = (id: number) => {
    // Logic to add to cart would go here
    console.log(`Added item ${id} to cart`);
    // Then optionally remove from wishlist
    // setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-playfair text-2xl font-bold mb-6">Minha Lista de Desejos</h2>
      
      {wishlistItems.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <Heart className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-600 mb-4">Sua lista de desejos está vazia.</p>
            <Link to="/products">
              <Button className="bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90">
                Explorar Produtos
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map(item => (
            <Card key={item.id} className="overflow-hidden group">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="absolute top-3 right-3 p-1.5 bg-white/80 hover:bg-white rounded-full text-red-500 transition-all"
                  title="Remover da Lista de Desejos"
                >
                  <Trash className="h-4 w-4" />
                </button>
              </div>
              
              <CardContent className="p-4">
                <Link to={`/product/${item.id}`} className="block">
                  <h3 className="font-playfair text-lg font-medium text-lumina-dark group-hover:text-lumina-gold transition-colors">
                    {item.name}
                  </h3>
                </Link>
                
                <p className="font-roboto text-xl font-bold text-lumina-gold mt-2">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </p>
                
                <div className="mt-4">
                  {item.stock > 0 ? (
                    <Button 
                      onClick={() => handleAddToCart(item.id)}
                      className="w-full bg-lumina-dark hover:bg-lumina-dark/90"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Adicionar ao Carrinho
                    </Button>
                  ) : (
                    <Button 
                      disabled
                      className="w-full opacity-70 cursor-not-allowed"
                    >
                      Indisponível
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountWishlist;
