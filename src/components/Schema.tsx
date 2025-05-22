
import React from 'react';

interface ProductSchemaProps {
  product: {
    name: string;
    description: string;
    image: string;
    price: number;
    currency: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
  };
}

export const Schema: React.FC<ProductSchemaProps> = ({ product }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": product.currency,
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>
  );
};
