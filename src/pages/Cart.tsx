
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash, Plus, Minus } from 'lucide-react';

// Mock cart data - would come from cart state/API
const mockCartItems = [
  {
    id: 1,
    name: "Colar de Ouro com Diamantes",
    price: 2999.90,
    image: "/products/necklace-1.jpg",
    quantity: 1,
    size: "Único"
  },
  {
    id: 3,
    name: "Pulseira de Prata com Zircônias",
    price: 899.90,
    image: "/products/bracelet-1.jpg",
    quantity: 2,
    size: "19cm"
  }
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [shippingOptions, setShippingOptions] = useState<null | {pac: number, sedex: number}>(null);
  const [selectedShipping, setSelectedShipping] = useState<string | null>(null);

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Apply discount if coupon applied (mock 10% discount)
  const discount = couponApplied ? subtotal * 0.1 : 0;
  
  // Shipping cost based on selected option
  const shippingCost = selectedShipping === 'pac' ? (shippingOptions?.pac || 0) : 
                      selectedShipping === 'sedex' ? (shippingOptions?.sedex || 0) : 0;
  
  // Calculate total
  const total = subtotal - discount + shippingCost;

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleApplyCoupon = () => {
    // In a real app, this would validate the coupon with an API
    if (couponCode.toUpperCase() === 'LUMINA10') {
      setCouponApplied(true);
    } else {
      alert('Código de cupom inválido');
    }
  };

  const calculateShipping = () => {
    // Validate zip code (simple validation for Brazilian CEP)
    if (!/^\d{8}$/.test(zipCode.replace(/\D/g, ''))) {
      alert('Por favor, insira um CEP válido');
      return;
    }
    
    // In a real app, this would call a shipping API
    // Mock shipping calculation
    setShippingOptions({
      pac: 24.90,
      sedex: 42.50
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-playfair text-3xl md:text-4xl font-bold text-lumina-dark mb-8">
        Carrinho de Compras
      </h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-medium mb-4">Seu carrinho está vazio</h2>
          <p className="text-gray-600 mb-8">Explore nossa coleção e adicione itens ao seu carrinho</p>
          <Link to="/products">
            <Button className="bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90">
              Continuar Comprando
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left">Produto</th>
                    <th className="py-4 px-6 text-center">Quantidade</th>
                    <th className="py-4 px-6 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-20 h-20 object-cover rounded-md"
                          />
                          <div className="ml-4">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-gray-600 text-sm">Tamanho: {item.size}</p>
                            <p className="text-lumina-gold font-medium">
                              R$ {item.price.toFixed(2).replace('.', ',')}
                            </p>
                            <button 
                              onClick={() => handleRemoveItem(item.id)} 
                              className="mt-1 text-sm text-red-600 flex items-center hover:text-red-800"
                            >
                              <Trash className="h-3 w-3 mr-1" />
                              Remover
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-1 border border-gray-300 rounded-l hover:bg-gray-100"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-4 py-1 border-t border-b border-gray-300 min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-1 border border-gray-300 rounded-r hover:bg-gray-100"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="font-medium">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-playfair text-xl font-bold mb-6">Resumo do Pedido</h2>
              
              {/* Coupon Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Cupom de Desconto</label>
                <div className="flex">
                  <Input
                    type="text"
                    placeholder="Digite seu cupom"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="rounded-r-none"
                  />
                  <Button 
                    onClick={handleApplyCoupon}
                    className="rounded-l-none bg-lumina-dark hover:bg-lumina-dark/90"
                    disabled={couponApplied}
                  >
                    Aplicar
                  </Button>
                </div>
                {couponApplied && (
                  <p className="text-green-600 text-sm mt-1">Cupom LUMINA10 aplicado (10% de desconto)</p>
                )}
              </div>
              
              {/* Shipping Calculation */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Calcular Frete</label>
                <div className="flex">
                  <Input
                    type="text"
                    placeholder="CEP"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="rounded-r-none"
                  />
                  <Button 
                    onClick={calculateShipping}
                    className="rounded-l-none bg-lumina-dark hover:bg-lumina-dark/90"
                  >
                    Calcular
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Não sabe seu CEP? <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noreferrer" className="text-lumina-gold">Consulte aqui</a>
                </p>
              </div>
              
              {/* Shipping Options */}
              {shippingOptions && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Opções de Envio</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="pac" 
                        name="shipping" 
                        className="mr-2"
                        checked={selectedShipping === "pac"}
                        onChange={() => setSelectedShipping("pac")}
                      />
                      <label htmlFor="pac">PAC (5-8 dias úteis)</label>
                      <span className="ml-auto font-medium">
                        R$ {shippingOptions.pac.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="sedex" 
                        name="shipping" 
                        className="mr-2"
                        checked={selectedShipping === "sedex"}
                        onChange={() => setSelectedShipping("sedex")}
                      />
                      <label htmlFor="sedex">SEDEX (2-3 dias úteis)</label>
                      <span className="ml-auto font-medium">
                        R$ {shippingOptions.sedex.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Order Totals */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                
                {couponApplied && (
                  <div className="flex justify-between mb-2 text-green-600">
                    <span>Desconto (10%)</span>
                    <span>-R$ {discount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                
                {selectedShipping && (
                  <div className="flex justify-between mb-2">
                    <span>Frete ({selectedShipping === 'pac' ? 'PAC' : 'SEDEX'})</span>
                    <span>R$ {shippingCost.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                
                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
              
              <Link to={selectedShipping ? "/checkout" : "#"}>
                <Button 
                  className="w-full bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90 font-medium text-lg py-6"
                  disabled={!selectedShipping}
                >
                  Prosseguir para Checkout
                </Button>
              </Link>
              
              {!selectedShipping && (
                <p className="text-sm text-center text-amber-600 mt-2">
                  Selecione uma opção de frete para continuar
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
