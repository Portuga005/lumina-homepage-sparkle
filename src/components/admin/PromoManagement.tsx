
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, Edit, Trash2, Calendar } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample promotion data
const promoData = [
  { 
    id: 1, 
    code: 'LUMINA15',
    discount: '15%',
    type: 'Percentual',
    minOrder: 'R$ 200,00',
    validUntil: '30/06/2023',
    status: 'Ativo',
  },
  { 
    id: 2, 
    code: 'FRETEGRATIS',
    discount: 'Frete Grátis',
    type: 'Frete',
    minOrder: 'R$ 300,00',
    validUntil: '15/06/2023',
    status: 'Ativo',
  },
  { 
    id: 3, 
    code: 'ANIVERSARIO',
    discount: '20%',
    type: 'Percentual',
    minOrder: 'R$ 150,00',
    validUntil: '10/06/2023',
    status: 'Ativo',
  },
  { 
    id: 4, 
    code: 'BEMVINDO',
    discount: 'R$ 50,00',
    type: 'Valor Fixo',
    minOrder: 'R$ 200,00',
    validUntil: '01/06/2023',
    status: 'Inativo',
  },
];

const PromoManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-playfair text-2xl font-bold text-lumina-dark">Cupons e Promoções</h1>
        <Button className="bg-lumina-gold hover:bg-yellow-500 text-lumina-dark">
          <Plus className="mr-2 h-4 w-4" /> Criar Cupom
        </Button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input className="pl-10" placeholder="Pesquisar cupons..." />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="w-full md:w-auto">
            <Calendar className="mr-2 h-4 w-4" /> Filtrar por Data
          </Button>
          <Button variant="outline" className="w-full md:w-auto">
            <Filter className="mr-2 h-4 w-4" /> Filtrar por Status
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-md shadow">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Desconto</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Pedido Mínimo</TableHead>
                <TableHead>Válido Até</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {promoData.map((promo) => (
                <TableRow key={promo.id}>
                  <TableCell className="font-medium">{promo.code}</TableCell>
                  <TableCell>{promo.discount}</TableCell>
                  <TableCell>{promo.type}</TableCell>
                  <TableCell>{promo.minOrder}</TableCell>
                  <TableCell>{promo.validUntil}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      promo.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {promo.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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

export default PromoManagement;
