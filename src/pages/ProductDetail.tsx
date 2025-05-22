
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '@/components/ProductGallery';
import RelatedProducts from '@/components/RelatedProducts';
import ProductInfo from '@/components/ProductInfo';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

// Mock product data - would typically come from an API
const mockProduct = {
  id: 1,
  name: "Colar de Ouro com Diamantes",
  price: 2999.90,
  description: "Este deslumbrante colar de ouro 18k é adornado com diamantes de corte brilhante, criando um efeito de luz inigualável. Ideal para ocasiões especiais ou para adicionar elegância ao seu visual diário.",
  material: "Ouro 18k com diamantes",
  sizes: ["Único", "Personalizado"],
  stock: 5,
  rating: 4.8,
  images: [
    "/products/necklace-1.jpg",
    "/products/necklace-2.jpg",
    "/products/necklace-3.jpg",
    "/products/necklace-4.jpg"
  ],
  isNew: true
};

// Mock related products
const relatedProducts = [
  {
    id: 2,
    name: "Brincos de Ouro com Safiras",
    price: 1899.90,
    image: "/products/earrings-1.jpg",
    isNew: true
  },
  {
    id: 3,
    name: "Pulseira de Prata com Zircônias",
    price: 899.90,
    image: "/products/bracelet-1.jpg"
  },
  {
    id: 4,
    name: "Anel Solitário de Diamante",
    price: 3599.90,
    image: "/products/ring-1.jpg"
  },
  {
    id: 5,
    name: "Conjunto Colar e Brincos",
    price: 4299.90,
    image: "/products/set-1.jpg",
    isNew: true
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState<string>(mockProduct.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);
  const [show360View, setShow360View] = useState<boolean>(false);

  const handleAddToCart = () => {
    // Logic to add to cart would go here
    console.log(`Added ${quantity} of item ${id} with size ${selectedSize} to cart`);
    // In a real app, this would dispatch to a cart state manager or API
  };

  const handleBuyNow = () => {
    // First add to cart, then redirect to checkout
    handleAddToCart();
    // Navigate to checkout
    window.location.href = '/checkout';
  };

  const handleAddToWishlist = () => {
    console.log(`Added item ${id} to wishlist`);
    // In a real app, this would dispatch to wishlist state or API
  };

  const handleView360 = () => {
    setShow360View(true);
    // In a real app, this would open a modal with 360 view
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Gallery */}
        <ProductGallery images={mockProduct.images} onView360Click={handleView360} />

        {/* Product Info */}
        <ProductInfo 
          product={mockProduct} 
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          quantity={quantity}
          setQuantity={setQuantity}
        >
          <div className="flex flex-wrap gap-4 mt-8">
            <Button 
              onClick={handleAddToCart} 
              className="flex-1 bg-lumina-dark text-white hover:bg-lumina-dark/90"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Adicionar ao Carrinho
            </Button>
            
            <Button 
              onClick={handleBuyNow} 
              className="flex-1 bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90"
            >
              Comprar Agora
            </Button>

            <Button 
              onClick={handleAddToWishlist} 
              variant="outline" 
              className="border-lumina-gold text-lumina-dark hover:bg-lumina-gold/10"
            >
              <Heart className="h-4 w-4" />
            </Button>

            <Button 
              onClick={handleView360} 
              variant="outline" 
              className="border-lumina-gold text-lumina-dark hover:bg-lumina-gold/10"
            >
              <Eye className="h-4 w-4" />
              <span className="ml-2 hidden sm:inline">Visualização 360°</span>
            </Button>
          </div>

          <button 
            onClick={() => setShowReviewForm(!showReviewForm)} 
            className="mt-6 text-lumina-dark underline font-medium"
          >
            Enviar Avaliação
          </button>

          {showReviewForm && (
            <div className="mt-4 p-4 border border-lumina-gold/30 rounded-lg bg-lumina-gray/50">
              {/* Review form would go here */}
              <h3 className="font-playfair text-lg mb-2">Sua Avaliação</h3>
              {/* Rating stars component would go here */}
              <textarea 
                className="w-full p-2 border rounded-md" 
                rows={3} 
                placeholder="Compartilhe sua experiência com este produto..."
              />
              <Button 
                className="mt-2 bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90"
              >
                Enviar
              </Button>
            </div>
          )}
        </ProductInfo>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-lumina-dark mb-6">
          Produtos Relacionados
        </h2>
        <RelatedProducts products={relatedProducts} />
      </div>

      {/* 360 View Modal would be implemented here */}
      {show360View && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full p-4">
            <div className="flex justify-between mb-4">
              <h3 className="font-playfair text-xl">Visualização 360°</h3>
              <Button variant="ghost" onClick={() => setShow360View(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Button>
            </div>
            <div className="aspect-square bg-gray-100 flex items-center justify-center">
              {/* In a real app, this would be a 360 viewer component */}
              <p>360° View Content Would Go Here</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
