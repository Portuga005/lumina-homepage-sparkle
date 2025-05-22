
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-lumina-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              <span className="text-lumina-gold">Lúmina</span> Joias
            </h3>
            <p className="font-roboto text-gray-300 mb-4 max-w-md">
              Semi joias que combinam elegância atemporal com um toque moderno. 
              Iluminamos momentos especiais com peças que contam histórias e celebram a individualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-lumina-gold hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.219-.438-.219-1.085c0-1.016.589-1.775 1.322-1.775.623 0 .924.466.924 1.024 0 .624-.399 1.554-.606 2.418-.172.727.364 1.32 1.078 1.32 1.295 0 2.291-1.365 2.291-3.335 0-1.744-1.254-2.965-3.046-2.965-2.074 0-3.293 1.554-3.293 3.162 0 .626.242 1.297.544 1.662.059.072.068.135.05.209-.054.227-.176.694-.199.79-.031.128-.101.156-.233.094-1.265-.588-2.057-2.433-2.057-3.917 0-3.197 2.323-6.134 6.688-6.134 3.51 0 6.24 2.501 6.24 5.841 0 3.485-2.197 6.291-5.244 6.291-1.024 0-1.985-.532-2.314-1.165l-.628 2.39c-.227.869-.84 1.96-1.252 2.626.943.29 1.944.446 2.982.446 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-lumina-gold hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-lumina-gold hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-lumina-gold">Links Rápidos</h4>
            <ul className="font-roboto space-y-2">
              <li><a href="/sobre" className="text-gray-300 hover:text-lumina-gold transition-colors">Sobre Nós</a></li>
              <li><a href="/loja" className="text-gray-300 hover:text-lumina-gold transition-colors">Nossa Loja</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-lumina-gold transition-colors">Contato</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-lumina-gold transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-lumina-gold">Atendimento</h4>
            <ul className="font-roboto space-y-2">
              <li><a href="/politicas" className="text-gray-300 hover:text-lumina-gold transition-colors">Políticas de Privacidade</a></li>
              <li><a href="/trocas" className="text-gray-300 hover:text-lumina-gold transition-colors">Trocas e Devoluções</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-lumina-gold transition-colors">FAQ</a></li>
              <li><a href="/rastreamento" className="text-gray-300 hover:text-lumina-gold transition-colors">Rastrear Pedido</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="font-roboto text-gray-300">
              <span className="text-lumina-gold font-medium">Email:</span> contato@luminajoias.com.br
            </div>
            <div className="font-roboto text-gray-300">
              <span className="text-lumina-gold font-medium">Telefone:</span> (11) 99999-9999
            </div>
            <div className="font-roboto text-gray-300">
              <span className="text-lumina-gold font-medium">WhatsApp:</span> (11) 99999-9999
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-roboto text-gray-400">
            © 2024 Lúmina Joias. Todos os direitos reservados. | CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
