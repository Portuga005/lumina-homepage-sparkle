
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash, Pencil, Plus } from 'lucide-react';

// Mock addresses
const mockAddresses = [
  {
    id: 1,
    name: 'Casa',
    recipient: 'Ana Silva',
    street: 'Rua das Flores, 123',
    district: 'Jardim Botânico',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '01234-567',
    phone: '(11) 98765-4321',
    isDefault: true
  },
  {
    id: 2,
    name: 'Trabalho',
    recipient: 'Ana Silva',
    street: 'Av. Paulista, 1000',
    district: 'Bela Vista',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '01310-100',
    phone: '(11) 3456-7890',
    isDefault: false
  }
];

const AccountAddresses: React.FC = () => {
  const [addresses, setAddresses] = useState(mockAddresses);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    recipient: '',
    street: '',
    district: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    isDefault: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      recipient: '',
      street: '',
      district: '',
      city: '',
      state: '',
      postalCode: '',
      phone: '',
      isDefault: false
    });
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const newAddress = {
      id: addresses.length > 0 ? Math.max(...addresses.map(a => a.id)) + 1 : 1,
      ...formData
    };
    
    setAddresses([...addresses, newAddress]);
    setShowAddForm(false);
    resetForm();
  };

  const handleEditAddress = (address: typeof mockAddresses[0]) => {
    setEditingAddress(address.id);
    setFormData({
      name: address.name,
      recipient: address.recipient,
      street: address.street,
      district: address.district,
      city: address.city,
      state: address.state,
      postalCode: address.postalCode,
      phone: address.phone,
      isDefault: address.isDefault
    });
  };

  const handleUpdateAddress = (e: React.FormEvent) => {
    e.preventDefault();
    setAddresses(addresses.map(address => 
      address.id === editingAddress 
        ? { ...address, ...formData } 
        : address
    ));
    setEditingAddress(null);
    resetForm();
  };

  const handleRemoveAddress = (id: number) => {
    if (window.confirm('Tem certeza que deseja remover este endereço?')) {
      setAddresses(addresses.filter(address => address.id !== id));
    }
  };

  const addressForm = (
    <form onSubmit={editingAddress ? handleUpdateAddress : handleAddAddress} className="space-y-4">
      <h3 className="font-playfair text-xl font-bold mb-4">
        {editingAddress ? 'Editar Endereço' : 'Adicionar Novo Endereço'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome do Endereço</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Ex: Casa, Trabalho"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Nome do Destinatário</label>
          <Input
            name="recipient"
            value={formData.recipient}
            onChange={handleInputChange}
            placeholder="Nome completo do destinatário"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Endereço</label>
          <Input
            name="street"
            value={formData.street}
            onChange={handleInputChange}
            placeholder="Rua, Número, Complemento"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Bairro</label>
          <Input
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            placeholder="Bairro"
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
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            placeholder="00000-000"
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
        
        <div className="md:col-span-2 flex items-center space-x-2">
          <input
            type="checkbox"
            id="isDefault"
            name="isDefault"
            checked={formData.isDefault}
            onChange={handleInputChange}
            className="h-4 w-4 rounded border-gray-300"
          />
          <label htmlFor="isDefault" className="text-sm font-medium">
            Definir como endereço principal
          </label>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <Button type="submit" className="bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90">
          {editingAddress ? 'Atualizar' : 'Adicionar'} Endereço
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => {
            setShowAddForm(false);
            setEditingAddress(null);
            resetForm();
          }}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-playfair text-2xl font-bold">Meus Endereços</h2>
        {!showAddForm && !editingAddress && (
          <Button 
            className="bg-lumina-dark hover:bg-lumina-dark/90"
            onClick={() => setShowAddForm(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Endereço
          </Button>
        )}
      </div>
      
      {showAddForm || editingAddress ? (
        <Card>
          <CardContent className="p-6">
            {addressForm}
          </CardContent>
        </Card>
      ) : addresses.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-gray-600">Você ainda não tem endereços cadastrados.</p>
            <Button 
              className="mt-4 bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90"
              onClick={() => setShowAddForm(true)}
            >
              Adicionar Endereço
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {addresses.map(address => (
            <Card key={address.id} className={address.isDefault ? 'border-lumina-gold' : ''}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-lg">{address.name}</h3>
                      {address.isDefault && (
                        <span className="inline-block px-2 py-1 text-xs bg-lumina-gold text-lumina-dark rounded-full">
                          Principal
                        </span>
                      )}
                    </div>
                    <p className="mt-1">{address.recipient}</p>
                    <p>{address.street}</p>
                    <p>{address.district}</p>
                    <p>{address.city}, {address.state} - {address.postalCode}</p>
                    <p className="mt-1 text-gray-600">{address.phone}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-300 hover:bg-gray-100"
                      onClick={() => handleEditAddress(address)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-300 hover:bg-gray-100 text-red-600 hover:text-red-700"
                      onClick={() => handleRemoveAddress(address.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountAddresses;
