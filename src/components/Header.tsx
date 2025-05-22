
import * as React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [cartItems] = React.useState(2); // Mock cart items count

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Loja', href: '/loja' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
    { name: 'Minha Conta', href: '/conta' },
  ];

  return (
    <header className="bg-lumina-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-2xl font-bold text-lumina-dark">
              <span className="text-lumina-gold">Lúmina</span> Joias
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-roboto text-lumina-dark hover:text-lumina-gold transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lumina-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-md mx-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Buscar joias..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-lumina-silver rounded-full focus:outline-none focus:ring-2 focus:ring-lumina-gold focus:border-transparent font-roboto"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lumina-gold hover:text-lumina-dark transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-lumina-dark hover:text-lumina-gold transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-lumina-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-roboto font-medium">
                  {cartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-lumina-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-lumina-white border-t border-lumina-silver">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-lumina-dark hover:text-lumina-gold hover:bg-lumina-gray rounded-md font-roboto transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Buscar joias..."
                  className="w-full pl-4 pr-4 py-2 border border-lumina-silver rounded-full focus:outline-none focus:ring-2 focus:ring-lumina-gold font-roboto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
