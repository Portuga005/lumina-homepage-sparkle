
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

// Enum for checkout steps
enum CheckoutStep {
  DELIVERY = 'delivery',
  SHIPPING = 'shipping',
  PAYMENT = 'payment',
  REVIEW = 'review',
  CONFIRMATION = 'confirmation'
}

const Checkout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(CheckoutStep.DELIVERY);
  const [formData, setFormData] = useState({
    // Delivery details
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Shipping method
    shippingMethod: 'pac',
    
    // Payment details
    paymentMethod: 'credit',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  // Mock order data
  const orderItems = [
    {
      id: 1,
      name: "Colar de Ouro com Diamantes",
      price: 2999.90,
      image: "/products/necklace-1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Pulseira de Prata com Zircônias",
      price: 899.90,
      image: "/products/bracelet-1.jpg",
      quantity: 2,
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = formData.shippingMethod === 'pac' ? 24.90 : 42.50;
  const total = subtotal + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleContinue = () => {
    switch (currentStep) {
      case CheckoutStep.DELIVERY:
        setCurrentStep(CheckoutStep.SHIPPING);
        break;
      case CheckoutStep.SHIPPING:
        setCurrentStep(CheckoutStep.PAYMENT);
        break;
      case CheckoutStep.PAYMENT:
        setCurrentStep(CheckoutStep.REVIEW);
        break;
      case CheckoutStep.REVIEW:
        // In a real application, you would process payment here
        setCurrentStep(CheckoutStep.CONFIRMATION);
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case CheckoutStep.SHIPPING:
        setCurrentStep(CheckoutStep.DELIVERY);
        break;
      case CheckoutStep.PAYMENT:
        setCurrentStep(CheckoutStep.SHIPPING);
        break;
      case CheckoutStep.REVIEW:
        setCurrentStep(CheckoutStep.PAYMENT);
        break;
      default:
        break;
    }
  };

  const renderStepIndicator = () => {
    const steps = [
      { key: CheckoutStep.DELIVERY, label: 'Entrega' },
      { key: CheckoutStep.SHIPPING, label: 'Envio' },
      { key: CheckoutStep.PAYMENT, label: 'Pagamento' },
      { key: CheckoutStep.REVIEW, label: 'Revisão' }
    ];

    return (
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => {
            const isActive = currentStep === step.key;
            const isPast = (
              (currentStep === CheckoutStep.SHIPPING && index === 0) ||
              (currentStep === CheckoutStep.PAYMENT && index <= 1) ||
              (currentStep === CheckoutStep.REVIEW && index <= 2) ||
              (currentStep === CheckoutStep.CONFIRMATION && index <= 3)
            );
            
            return (
              <div key={step.key} className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  isActive || isPast ? 'bg-lumina-gold text-lumina-dark' : 'bg-gray-200 text-gray-500'
                }`}>
                  {isPast && !isActive ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className={`text-sm ${
                  isActive ? 'font-medium text-lumina-dark' : 'text-gray-500'
                }`}>
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block h-px w-full flex-1 mt-4 ${
                    isPast ? 'bg-lumina-gold' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderDeliveryForm = () => (
    <div>
      <h2 className="font-playfair text-2xl font-bold mb-6">Informações de Entrega</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Nome Completo</label>
          <Input 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleInputChange} 
            placeholder="Nome Completo" 
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            placeholder="seu@email.com" 
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Telefone</label>
          <Input 
            name="phone" 
            value={formData.phone} 
            onChange={handleInputChange} 
            placeholder="(00) 00000-0000" 
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Endereço</label>
          <Input 
            name="address" 
            value={formData.address} 
            onChange={handleInputChange} 
            placeholder="Rua, número, complemento" 
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Cidade</label>
          <Input 
            name="city" 
            value={formData.city} 
            onChange={handleInputChange} 
            placeholder="Cidade" 
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Estado</label>
          <Input 
            name="state" 
            value={formData.state} 
            onChange={handleInputChange} 
            placeholder="Estado" 
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">CEP</label>
          <Input 
            name="zipCode" 
            value={formData.zipCode} 
            onChange={handleInputChange} 
            placeholder="00000-000" 
            required
          />
        </div>
      </div>
    </div>
  );

  const renderShippingOptions = () => (
    <div>
      <h2 className="font-playfair text-2xl font-bold mb-6">Opções de Envio</h2>
      <div className="space-y-4">
        <Card className={`cursor-pointer border-2 ${
          formData.shippingMethod === 'pac' ? 'border-lumina-gold' : 'border-gray-200'
        }`}>
          <CardContent className="p-4 flex items-center">
            <input
              type="radio"
              id="pac"
              name="shippingMethod"
              value="pac"
              checked={formData.shippingMethod === 'pac'}
              onChange={() => handleRadioChange('shippingMethod', 'pac')}
              className="mr-3"
            />
            <label htmlFor="pac" className="flex flex-1 cursor-pointer">
              <div className="flex-1">
                <p className="font-medium">PAC</p>
                <p className="text-gray-500 text-sm">5-8 dias úteis</p>
              </div>
              <span className="font-medium">R$ 24,90</span>
            </label>
          </CardContent>
        </Card>
        
        <Card className={`cursor-pointer border-2 ${
          formData.shippingMethod === 'sedex' ? 'border-lumina-gold' : 'border-gray-200'
        }`}>
          <CardContent className="p-4 flex items-center">
            <input
              type="radio"
              id="sedex"
              name="shippingMethod"
              value="sedex"
              checked={formData.shippingMethod === 'sedex'}
              onChange={() => handleRadioChange('shippingMethod', 'sedex')}
              className="mr-3"
            />
            <label htmlFor="sedex" className="flex flex-1 cursor-pointer">
              <div className="flex-1">
                <p className="font-medium">SEDEX</p>
                <p className="text-gray-500 text-sm">2-3 dias úteis</p>
              </div>
              <span className="font-medium">R$ 42,50</span>
            </label>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPaymentOptions = () => (
    <div>
      <h2 className="font-playfair text-2xl font-bold mb-6">Forma de Pagamento</h2>
      
      <div className="space-y-4 mb-6">
        <Card className={`cursor-pointer border-2 ${
          formData.paymentMethod === 'credit' ? 'border-lumina-gold' : 'border-gray-200'
        }`}>
          <CardContent className="p-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="credit"
                name="paymentMethod"
                value="credit"
                checked={formData.paymentMethod === 'credit'}
                onChange={() => handleRadioChange('paymentMethod', 'credit')}
                className="mr-3"
              />
              <label htmlFor="credit" className="flex-1 cursor-pointer">
                <p className="font-medium">Cartão de Crédito</p>
              </label>
            </div>
            
            {formData.paymentMethod === 'credit' && (
              <div className="mt-4 pl-7 space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Número do Cartão</label>
                  <Input 
                    name="cardNumber" 
                    value={formData.cardNumber} 
                    onChange={handleInputChange} 
                    placeholder="0000 0000 0000 0000" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Nome no Cartão</label>
                  <Input 
                    name="cardName" 
                    value={formData.cardName} 
                    onChange={handleInputChange} 
                    placeholder="NOME COMO ESTÁ NO CARTÃO" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Data de Validade</label>
                    <Input 
                      name="expiryDate" 
                      value={formData.expiryDate} 
                      onChange={handleInputChange} 
                      placeholder="MM/AA" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">CVV</label>
                    <Input 
                      name="cvv" 
                      value={formData.cvv} 
                      onChange={handleInputChange} 
                      placeholder="123" 
                    />
                  </div>
                </div>
                
                <div className="text-sm text-gray-500 flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Seus dados estão seguros e criptografados
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className={`cursor-pointer border-2 ${
          formData.paymentMethod === 'pix' ? 'border-lumina-gold' : 'border-gray-200'
        }`}>
          <CardContent className="p-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="pix"
                name="paymentMethod"
                value="pix"
                checked={formData.paymentMethod === 'pix'}
                onChange={() => handleRadioChange('paymentMethod', 'pix')}
                className="mr-3"
              />
              <label htmlFor="pix" className="flex-1 cursor-pointer">
                <p className="font-medium">PIX</p>
                <p className="text-gray-500 text-sm">Pagamento instantâneo</p>
              </label>
            </div>
            
            {formData.paymentMethod === 'pix' && (
              <div className="mt-4 pl-7">
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="mb-2">QR Code para pagamento será exibido na próxima etapa</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 mx-auto opacity-50">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <circle cx="15.5" cy="8.5" r="1.5"></circle>
                    <circle cx="15.5" cy="15.5" r="1.5"></circle>
                    <circle cx="8.5" cy="15.5" r="1.5"></circle>
                  </svg>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className={`cursor-pointer border-2 ${
          formData.paymentMethod === 'boleto' ? 'border-lumina-gold' : 'border-gray-200'
        }`}>
          <CardContent className="p-4 flex items-center">
            <input
              type="radio"
              id="boleto"
              name="paymentMethod"
              value="boleto"
              checked={formData.paymentMethod === 'boleto'}
              onChange={() => handleRadioChange('paymentMethod', 'boleto')}
              className="mr-3"
            />
            <label htmlFor="boleto" className="flex-1 cursor-pointer">
              <p className="font-medium">Boleto Bancário</p>
              <p className="text-gray-500 text-sm">Prazo de 1-3 dias úteis para compensação</p>
            </label>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderOrderReview = () => (
    <div>
      <h2 className="font-playfair text-2xl font-bold mb-6">Revisar Pedido</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-medium text-lg mb-3">Itens do Pedido</h3>
          <div className="space-y-4">
            {orderItems.map(item => (
              <div key={item.id} className="flex space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500 text-sm">Quantidade: {item.quantity}</p>
                  <p className="text-lumina-gold">
                    R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Frete ({formData.shippingMethod === 'pac' ? 'PAC' : 'SEDEX'})</span>
              <span>R$ {shippingCost.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total</span>
              <span>R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-lg mb-3">Informações de Entrega</h3>
          <p>{formData.fullName}</p>
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
          <p>{formData.address}</p>
          <p>{formData.city}, {formData.state} - {formData.zipCode}</p>
          
          <h3 className="font-medium text-lg mt-6 mb-3">Método de Envio</h3>
          <p>
            {formData.shippingMethod === 'pac' 
              ? 'PAC (5-8 dias úteis)' 
              : 'SEDEX (2-3 dias úteis)'
            }
          </p>
          
          <h3 className="font-medium text-lg mt-6 mb-3">Forma de Pagamento</h3>
          <p>
            {formData.paymentMethod === 'credit' && 'Cartão de Crédito'}
            {formData.paymentMethod === 'pix' && 'PIX'}
            {formData.paymentMethod === 'boleto' && 'Boleto Bancário'}
          </p>
          {formData.paymentMethod === 'credit' && (
            <p className="text-gray-500">
              **** **** **** {formData.cardNumber.slice(-4)}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderOrderConfirmation = () => (
    <div className="text-center max-w-xl mx-auto">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      
      <h2 className="font-playfair text-3xl font-bold mb-4">Pedido Confirmado!</h2>
      <p className="text-gray-600 mb-6">
        Seu pedido #LJ12345 foi confirmado e está em processamento. 
        Você receberá um e-mail com os detalhes do pedido.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-medium mb-3">Detalhes do Pedido</h3>
        <div className="flex justify-between mb-2">
          <span>Total</span>
          <span className="font-medium">R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Data</span>
          <span className="font-medium">{new Date().toLocaleDateString()}</span>
        </div>
        {formData.paymentMethod === 'pix' && (
          <div className="mt-4 bg-white p-4 rounded-lg">
            <p className="mb-2 font-medium">QR Code PIX</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-32 h-32 mx-auto">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <circle cx="15.5" cy="8.5" r="1.5"></circle>
                <circle cx="15.5" cy="15.5" r="1.5"></circle>
                <circle cx="8.5" cy="15.5" r="1.5"></circle>
              </svg>
            </div>
            <Button className="mt-4 bg-lumina-dark hover:bg-lumina-dark/90 w-full">
              Copiar Código PIX
            </Button>
          </div>
        )}
        {formData.paymentMethod === 'boleto' && (
          <div className="mt-4">
            <Button className="bg-lumina-dark hover:bg-lumina-dark/90 w-full">
              Baixar Boleto
            </Button>
          </div>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1 bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90">
          Acompanhar Pedido
        </Button>
        <Button variant="outline" className="flex-1 border-lumina-gold text-lumina-dark hover:bg-lumina-gold/10">
          Continuar Comprando
        </Button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-playfair text-3xl md:text-4xl font-bold text-lumina-dark mb-8 text-center">
        Checkout
      </h1>
      
      {currentStep !== CheckoutStep.CONFIRMATION && renderStepIndicator()}
      
      <div className="max-w-4xl mx-auto">
        {currentStep === CheckoutStep.DELIVERY && renderDeliveryForm()}
        {currentStep === CheckoutStep.SHIPPING && renderShippingOptions()}
        {currentStep === CheckoutStep.PAYMENT && renderPaymentOptions()}
        {currentStep === CheckoutStep.REVIEW && renderOrderReview()}
        {currentStep === CheckoutStep.CONFIRMATION && renderOrderConfirmation()}
        
        {currentStep !== CheckoutStep.CONFIRMATION && (
          <div className="flex justify-between mt-8">
            {currentStep !== CheckoutStep.DELIVERY && (
              <Button 
                variant="outline" 
                onClick={handleBack}
                className="border-lumina-gold text-lumina-dark hover:bg-lumina-gold/10"
              >
                Voltar
              </Button>
            )}
            
            <Button 
              onClick={handleContinue}
              className={`${
                currentStep === CheckoutStep.REVIEW 
                  ? 'bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90'
                  : 'bg-lumina-dark hover:bg-lumina-dark/90'
              } ${currentStep === CheckoutStep.DELIVERY ? 'ml-auto' : ''}`}
            >
              {currentStep === CheckoutStep.REVIEW ? 'Finalizar Compra' : 'Continuar'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
