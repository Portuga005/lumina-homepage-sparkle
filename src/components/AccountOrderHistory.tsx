
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Mock orders data
const mockOrders = [
  {
    id: 'LJ12345',
    date: '2023-12-15',
    status: 'Entregue',
    total: 2999.90,
    items: [
      { id: 1, name: 'Colar de Ouro com Diamantes', price: 2999.90, quantity: 1, image: '/products/necklace-1.jpg' }
    ],
    tracking: 'LB123456789BR'
  },
  {
    id: 'LJ12346',
    date: '2024-01-05',
    status: 'Em trânsito',
    total: 1799.80,
    items: [
      { id: 3, name: 'Pulseira de Prata com Zircônias', price: 899.90, quantity: 2, image: '/products/bracelet-1.jpg' }
    ],
    tracking: 'LB987654321BR'
  },
  {
    id: 'LJ12347',
    date: '2024-02-20',
    status: 'Processando',
    total: 3599.90,
    items: [
      { id: 4, name: 'Anel Solitário de Diamante', price: 3599.90, quantity: 1, image: '/products/ring-1.jpg' }
    ],
    tracking: null
  }
];

const AccountOrderHistory: React.FC = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  
  const toggleOrderDetails = (orderId: string) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-playfair text-2xl font-bold mb-6">Histórico de Pedidos</h2>
      
      {mockOrders.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-gray-600">Você ainda não tem pedidos.</p>
            <Button className="mt-4 bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90">
              Explorar Produtos
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {mockOrders.map(order => (
            <Card key={order.id} className="overflow-hidden">
              <div 
                className="p-4 flex flex-wrap items-center justify-between cursor-pointer bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleOrderDetails(order.id)}
              >
                <div>
                  <p className="font-medium">Pedido #{order.id}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-lumina-gold">
                    R$ {order.total.toFixed(2).replace('.', ',')}
                  </p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    order.status === 'Entregue' 
                      ? 'bg-green-100 text-green-800' 
                      : order.status === 'Em trânsito' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="w-full md:w-auto mt-2 md:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform transition-transform ${expandedOrder === order.id ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {expandedOrder === order.id && (
                <CardContent className="p-4 pt-0">
                  <div className="mt-4 border-t pt-4">
                    <h3 className="font-medium mb-3">Itens do Pedido</h3>
                    {order.items.map(item => (
                      <div key={item.id} className="flex space-x-4 mb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">Quantidade: {item.quantity}</p>
                          <p className="text-lumina-gold">
                            R$ {(item.price).toFixed(2).replace('.', ',')}
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    {order.tracking && (
                      <div className="mt-4">
                        <h3 className="font-medium mb-2">Rastreamento</h3>
                        <p className="text-gray-700">Código: {order.tracking}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Rastrear Pedido
                        </Button>
                      </div>
                    )}
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button className="bg-lumina-dark hover:bg-lumina-dark/90">
                        Ver Detalhes Completos
                      </Button>
                      {order.status !== 'Entregue' && order.status !== 'Cancelado' && (
                        <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                          Cancelar Pedido
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountOrderHistory;
