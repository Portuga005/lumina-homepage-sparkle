
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard,
  LogOut, 
  Menu
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

const AdminSidebar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso",
    });
    navigate('/admin');
  };

  const menuItems = [
    {
      label: 'Dashboard',
      icon: <LayoutDashboard className="mr-2 h-5 w-5" />,
      path: '/admin/dashboard'
    }
  ];

  const SidebarContent = () => (
    <>
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-playfair text-xl font-bold text-lumina-dark">
          Lúmina Admin
        </h2>
        <div className="w-12 h-1 bg-lumina-gold mt-1"></div>
      </div>
      
      <nav className="mt-4 flex-1">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors
                  ${isActive 
                    ? 'bg-lumina-gold text-lumina-dark' 
                    : 'text-gray-700 hover:bg-gray-100'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </Button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center p-4">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
        <span className="ml-4 font-playfair font-bold text-lg">Lúmina Admin</span>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <SidebarContent />
      </div>
    </>
  );
};

export default AdminSidebar;
