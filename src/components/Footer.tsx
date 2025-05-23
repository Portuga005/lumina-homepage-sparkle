
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lumina-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-lumina-gold">Lúmina Joias</h3>
            <p className="font-roboto text-sm leading-relaxed mb-4 text-gray-300">
              Semi joias exclusivas com design elegante e materiais de qualidade. Cada peça é confeccionada com carinho para celebrar momentos especiais.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lumina-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lumina-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lumina-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-lumina-gold">Links Rápidos</h3>
            <ul className="space-y-2 font-roboto">
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-lumina-gold transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/loja" className="text-gray-300 hover:text-lumina-gold transition-colors">Loja</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-lumina-gold transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-lumina-gold">Contato</h3>
            <ul className="space-y-3 font-roboto">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-lumina-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-lumina-gold" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-lumina-gold" />
                <a href="mailto:contato@luminajoias.com" className="text-gray-300 hover:text-lumina-gold transition-colors">contato@luminajoias.com</a>
              </li>
            </ul>
          </div>

          {/* Empty col for balance */}
          <div></div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-roboto mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Lúmina Joias. Todos os direitos reservados.
            </p>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6 mx-1" />
              <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6 mx-1" />
              <img src="https://via.placeholder.com/40x25" alt="American Express" className="h-6 mx-1" />
              <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6 mx-1" />
              <img src="https://via.placeholder.com/40x25" alt="Pix" className="h-6 mx-1" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
