
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Settings: React.FC = () => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    toast({
      title: "Configurações salvas",
      description: "As alterações foram aplicadas com sucesso",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-playfair text-2xl font-bold text-lumina-dark">Configurações</h1>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="shipping">Frete</TabsTrigger>
          <TabsTrigger value="categories">Categorias</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Gerais</CardTitle>
              <CardDescription>
                Gerencie as configurações básicas da sua loja.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="storeName">Nome da Loja</Label>
                  <Input
                    id="storeName"
                    defaultValue="Lúmina Joias"
                  />
                </div>
                
                <div>
                  <Label htmlFor="storeDescription">Descrição da Loja</Label>
                  <Textarea
                    id="storeDescription"
                    defaultValue="Semi joias de luxo com prata 925 e ouro 18k"
                    className="h-20"
                  />
                </div>
                
                <div>
                  <Label htmlFor="contactEmail">Email de Contato</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    defaultValue="contato@luminajoias.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phoneNumber">Telefone</Label>
                  <Input
                    id="phoneNumber"
                    defaultValue="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <Label>Logo da Loja</Label>
                  <div className="mt-2 flex items-center gap-4">
                    {logoPreview ? (
                      <div className="h-20 w-20 rounded-md bg-gray-100 overflow-hidden">
                        <img 
                          src={logoPreview} 
                          alt="Logo preview" 
                          className="h-full w-full object-cover" 
                        />
                      </div>
                    ) : (
                      <div className="h-20 w-20 rounded-md bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">Sem logo</span>
                      </div>
                    )}
                    
                    <div>
                      <Button type="button" variant="outline" className="relative">
                        <Upload className="mr-2 h-4 w-4" />
                        Carregar Logo
                        <input
                          type="file"
                          accept="image/*"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleLogoChange}
                        />
                      </Button>
                      <p className="text-xs text-gray-500 mt-1">
                        PNG, JPG, WebP • Max 2MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-lumina-gold hover:bg-yellow-500 text-lumina-dark" onClick={handleSave}>
                  Salvar Alterações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="shipping" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Frete</CardTitle>
              <CardDescription>
                Gerencie as opções de entrega e frete da sua loja.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="freeShipping">Frete Grátis Acima de</Label>
                  <Input
                    id="freeShipping"
                    defaultValue="299.90"
                    type="text"
                    inputMode="decimal"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Defina o valor mínimo para frete grátis (R$). Deixe em branco para desativar.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-lumina-gold hover:bg-yellow-500 text-lumina-dark" onClick={handleSave}>
                    Salvar Alterações
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="categories" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Categorias de Produtos</CardTitle>
              <CardDescription>
                Gerencie as categorias da sua loja.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="bg-lumina-gold hover:bg-yellow-500 text-lumina-dark">
                  <Plus className="mr-2 h-4 w-4" /> Adicionar Categoria
                </Button>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">
                    Lista de categorias atuais: Anéis, Colares, Brincos, Pulseiras, Conjuntos, Acessórios
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
