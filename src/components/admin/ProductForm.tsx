
import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    price: initialData?.price?.replace('R$ ', '') || '',
    category: initialData?.category || '',
    material: initialData?.material || '',
    stock: initialData?.stock || 0,
    status: initialData?.status || 'Ativo',
    images: initialData?.images || []
  });

  const [dragActive, setDragActive] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const newImages = Array.from(files).map(file => ({
      id: Date.now() + Math.random().toString(),
      name: file.name,
      url: URL.createObjectURL(file),
      file
    }));

    setFormData(prev => ({ 
      ...prev, 
      images: [...prev.images, ...newImages].slice(0, 10) // Limit to 10 images
    }));
  };

  const removeImage = (id: string) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((img: any) => img.id !== id)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format price to include R$ for display
    const formattedData = {
      ...formData,
      price: `R$ ${formData.price}`
    };
    
    onSubmit(formattedData);
  };

  const categories = ['Anéis', 'Colares', 'Brincos', 'Pulseiras', 'Conjuntos', 'Acessórios'];
  const materials = ['Prata 925', 'Ouro 18k', 'Aço Inoxidável', 'Bronze'];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nome do Produto</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Anel Solitário Lúmina"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descreva o produto em detalhes..."
              className="h-32"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Preço (R$)</Label>
              <Input
                id="price"
                name="price"
                type="text"
                inputMode="decimal"
                value={formData.price}
                onChange={handleChange}
                placeholder="199,90"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="stock">Estoque</Label>
              <Input
                id="stock"
                name="stock"
                type="number"
                min="0"
                value={formData.stock}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Categoria</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="material">Material</Label>
              <Select 
                value={formData.material} 
                onValueChange={(value) => handleSelectChange('material', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {materials.map(material => (
                      <SelectItem key={material} value={material}>
                        {material}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="status">Status</Label>
            <Select 
              value={formData.status} 
              onValueChange={(value) => handleSelectChange('status', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ativo">Ativo</SelectItem>
                  <SelectItem value="Esgotado">Esgotado</SelectItem>
                  <SelectItem value="Oculto">Oculto</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-4">
          <Label>Imagens do Produto (Máximo 10)</Label>
          
          <div 
            className={`border-2 border-dashed rounded-md p-6 text-center ${
              dragActive ? 'border-lumina-gold bg-yellow-50' : 'border-gray-300'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center">
              <Upload className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Arraste e solte ou <label htmlFor="fileInput" className="text-lumina-gold hover:underline cursor-pointer">
                  selecione
                </label> imagens
              </p>
              <p className="text-xs text-gray-500 mt-1">JPEG, PNG • Max 5MB • Min 800x800px</p>
              <input
                id="fileInput"
                type="file"
                multiple
                accept="image/jpeg,image/png"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {formData.images.length > 0 ? (
              formData.images.map((image: any) => (
                <div key={image.id} className="relative group">
                  <div className="aspect-square rounded-md overflow-hidden bg-gray-100">
                    <img 
                      src={image.url} 
                      alt={image.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-white rounded-full p-1 shadow opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(image.id)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full flex items-center justify-center h-32 bg-gray-50 rounded-md">
                <div className="text-center text-gray-500">
                  <ImageIcon className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Nenhuma imagem adicionada</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" className="bg-lumina-gold hover:bg-yellow-500 text-lumina-dark">
          {initialData ? 'Salvar Alterações' : 'Adicionar Produto'}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
