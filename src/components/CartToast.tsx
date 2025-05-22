
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { ShoppingCart, Check } from 'lucide-react';

export const showAddToCartToast = (productName: string) => {
  toast.success('Produto adicionado ao carrinho!', {
    description: `${productName} foi adicionado ao seu carrinho.`,
    icon: <ShoppingCart className="h-4 w-4" />,
    position: 'bottom-right',
    duration: 3000,
  });
};

export const showCartActionToast = (action: 'removed' | 'updated', productName: string) => {
  const messages = {
    removed: {
      title: 'Produto removido',
      description: `${productName} foi removido do seu carrinho.`,
    },
    updated: {
      title: 'Carrinho atualizado',
      description: `A quantidade de ${productName} foi atualizada.`,
    }
  };

  toast(messages[action].title, {
    description: messages[action].description,
    icon: <Check className="h-4 w-4" />,
    position: 'bottom-right',
    duration: 3000,
  });
};
