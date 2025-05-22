
import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  Edit, 
  Trash2, 
  Upload,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import ProductForm from './ProductForm';

// Sample product data
const productData = [
  { 
    id: 1, 
    name: 'Anel Solitário Lúmina', 
    category: 'Anéis', 
    material: 'Prata 925', 
    price: 'R$ 199,90',
    stock: 25,
    status: 'Ativo'
  },
  { 
    id: 2, 
    name: 'Colar Ponto de Luz', 
    category: 'Colares', 
    material: 'Ouro 18k', 
    price: 'R$ 249,90',
    stock: 18,
    status: 'Ativo'
  },
  { 
    id: 3, 
    name: 'Brinco Gota Cristal', 
    category: 'Brincos', 
    material: 'Prata 925', 
    price: 'R$ 129,90',
    stock: 32,
    status: 'Ativo'
  },
  { 
    id: 4, 
    name: 'Pulseira Riviera', 
    category: 'Pulseiras', 
    material: 'Ouro 18k', 
    price: 'R$ 179,90',
    stock: 12,
    status: 'Ativo'
  },
  { 
    id: 5, 
    name: 'Anel Meia Aliança', 
    category: 'Anéis', 
    material: 'Prata 925', 
    price: 'R$ 159,90',
    stock: 0,
    status: 'Esgotado'
  },
];

const ProductManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(productData);
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }

    const sortedProducts = [...products].sort((a, b) => {
      if (a[field as keyof typeof a] < b[field as keyof typeof b]) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (a[field as keyof typeof a] > b[field as keyof typeof b]) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setProducts(sortedProducts);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filtered = productData.filter(
      (product) => 
        product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        product.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
        product.material.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProducts(filtered);
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setIsAddProductOpen(true);
  };

  const handleDelete = (id: number) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    toast({
      title: "Produto removido",
      description: "O produto foi removido com sucesso",
    });
  };

  const handleSubmit = (product: any) => {
    if (editingProduct) {
      const updatedProducts = products.map(p => 
        p.id === editingProduct.id ? { ...product, id: editingProduct.id } : p
      );
      setProducts(updatedProducts);
      toast({
        title: "Produto atualizado",
        description: "As alterações foram salvas com sucesso",
      });
    } else {
      const newProduct = { ...product, id: products.length + 1 };
      setProducts([...products, newProduct]);
      toast({
        title: "Produto adicionado",
        description: "O novo produto foi adicionado com sucesso",
      });
    }
    setIsAddProductOpen(false);
    setEditingProduct(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-playfair text-2xl font-bold text-lumina-dark">Gerenciamento de Produtos</h1>
        <div className="flex gap-2">
          <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
            <DialogTrigger asChild>
              <Button className="bg-lumina-gold hover:bg-yellow-500 text-lumina-dark">
                <Plus className="mr-2 h-4 w-4" /> Adicionar Produto
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingProduct ? 'Editar Produto' : 'Adicionar Novo Produto'}</DialogTitle>
              </DialogHeader>
              <ProductForm 
                initialData={editingProduct} 
                onSubmit={handleSubmit} 
                onCancel={() => {
                  setIsAddProductOpen(false);
                  setEditingProduct(null);
                }}
              />
            </DialogContent>
          </Dialog>
          
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" /> Importar CSV
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            className="pl-10" 
            placeholder="Pesquisar produtos..." 
            value={searchTerm}
            onChange={handleSearch}
          />
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
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('name')}>
                  <div className="flex items-center">
                    Nome
                    {sortField === 'name' && (
                      sortDirection === 'asc' ? 
                        <ArrowUp className="ml-2 h-3 w-3" /> : 
                        <ArrowDown className="ml-2 h-3 w-3" />
                    )}
                  </div>
                </TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Estoque</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.length > 0 ? (
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.material}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        product.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="icon" onClick={() => handleEdit(product)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => handleDelete(product.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="h-24 text-center">
                    Nenhum produto encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
