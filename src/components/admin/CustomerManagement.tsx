
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

// Sample customer data
const customerData = [
  { 
    id: 1, 
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    orders: 5,
    totalSpent: 'R$ 1.429,50',
    lastOrder: '22/05/2023',
  },
  { 
    id: 2, 
    name: 'João Oliveira',
    email: 'joao.oliveira@email.com',
    orders: 3,
    totalSpent: 'R$ 789,70',
    lastOrder: '20/05/2023',
  },
  { 
    id: 3, 
    name: 'Ana Santos',
    email: 'ana.santos@email.com',
    orders: 7,
    totalSpent: 'R$ 2.129,30',
    lastOrder: '18/05/2023',
  },
  { 
    id: 4, 
    name: 'Carlos Mendes',
    email: 'carlos.mendes@email.com',
    orders: 2,
    totalSpent: 'R$ 359,80',
    lastOrder: '15/05/2023',
  },
  { 
    id: 5, 
    name: 'Patrícia Lima',
    email: 'patricia.lima@email.com',
    orders: 4,
    totalSpent: 'R$ 899,60',
    lastOrder: '10/05/2023',
  },
];

const CustomerManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-playfair text-2xl font-bold text-lumina-dark">Gerenciamento de Clientes</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input className="pl-10" placeholder="Pesquisar clientes..." />
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
                <TableHead>ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Pedidos</TableHead>
                <TableHead>Total Gasto</TableHead>
                <TableHead>Último Pedido</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customerData.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{customer.totalSpent}</TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
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

export default CustomerManagement;
