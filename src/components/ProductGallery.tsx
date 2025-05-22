
import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Eye } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  onView360Click: () => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, onView360Click }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col overflow-x-auto md:overflow-y-auto space-x-2 md:space-x-0 md:space-y-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`min-w-[80px] w-20 h-20 border-2 rounded-md overflow-hidden transition-all duration-300 ${
              currentImage === index 
                ? 'border-lumina-gold' 
                : 'border-transparent hover:border-lumina-gold/50'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image with zoom */}
      <div className="flex-1 bg-lumina-gray rounded-lg overflow-hidden relative">
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={3}
          wheel={{ step: 0.1 }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <TransformComponent wrapperClass="w-full h-full">
                <AspectRatio ratio={1 / 1} className="w-full bg-white">
                  <img
                    src={images[currentImage]}
                    alt="Product"
                    className="w-full h-full object-contain"
                  />
                </AspectRatio>
              </TransformComponent>

              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button 
                  onClick={() => zoomIn()} 
                  size="sm" 
                  variant="secondary" 
                  className="bg-white/80 hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </Button>
                <Button 
                  onClick={() => zoomOut()} 
                  size="sm" 
                  variant="secondary"
                  className="bg-white/80 hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </Button>
                <Button 
                  onClick={() => resetTransform()} 
                  size="sm" 
                  variant="secondary"
                  className="bg-white/80 hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"></path>
                    <path d="M14 15l-4-4 4-4"></path>
                  </svg>
                </Button>
              </div>

              <Button
                onClick={onView360Click}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-lumina-dark"
                size="sm"
              >
                <Eye className="mr-2 h-4 w-4" />
                Visualização 360°
              </Button>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};

export default ProductGallery;
