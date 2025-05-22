
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample order data
const orderData = [
  { 
    id: '#ORD-001', 
    customer: 'Maria Silva',
    date: '22/05/2023',
    total: 'R$ 429,80',
    status: 'Entregue',
  },
  { 
    id: '#ORD-002', 
    customer: 'João Oliveira',
    date: '20/05/2023',
    total: 'R$ 199,90',
    status: 'Em trânsito',
  },
  { 
    id: '#ORD-003', 
    customer: 'Ana Santos',
    date: '18/05/2023',
    total: 'R$ 329,70',
    status: 'Processando',
  },
  { 
    id: '#ORD-004', 
    customer: 'Carlos Mendes',
    date: '15/05/2023',
    total: 'R$ 179,90',
    status: 'Entregue',
  },
  { 
    id: '#ORD-005', 
    customer: 'Patrícia Lima',
    date: '10/05/2023',
    total: 'R$ 599,90',
    status: 'Cancelado',
  },
];

const OrderManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-playfair text-2xl font-bold text-lumina-dark">Gerenciamento de Pedidos</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input className="pl-10" placeholder="Pesquisar pedidos..." />
        </div>
        <Button variant="outline" className="w-full md:w-auto">
          <Filter className="mr-2 h-4 w-4" /> Filtrar
        </Button>
      </div>

      <div className="bg-white rounded-md shadow">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Pedido</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Entregue' ? 'bg-green-100 text-green-800' : 
                      order.status === 'Processando' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Em trânsito' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
