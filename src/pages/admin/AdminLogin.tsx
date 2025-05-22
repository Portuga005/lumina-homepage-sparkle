
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const navigate = useNavigate();

  const handleEmailPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally check credentials against an API
    if (email === 'admin@luminajoias.com' && password === 'admin123') {
      setShowTwoFactor(true);
      toast({
        title: "Verificação de dois fatores necessária",
        description: "Por favor, insira o código do Google Authenticator",
      });
    } else {
      toast({
        title: "Erro de autenticação",
        description: "Email ou senha incorretos",
        variant: "destructive",
      });
    }
  };

  const handleTwoFactorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally verify the 2FA code
    if (twoFactorCode === '123456') {
      toast({
        title: "Login bem-sucedido",
        description: "Bem-vindo ao painel de administração",
      });
      navigate('/admin/dashboard');
    } else {
      toast({
        title: "Código inválido",
        description: "O código 2FA está incorreto",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lumina-gray">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="font-playfair text-2xl font-bold text-lumina-dark">
            Lúmina Joias - Painel Administrativo
          </h1>
          <div className="w-16 h-1 bg-lumina-gold mx-auto mt-2"></div>
        </div>

        {!showTwoFactor ? (
          <form onSubmit={handleEmailPasswordSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="admin@luminajoias.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-lumina-gold hover:bg-yellow-500 text-lumina-dark">
              Entrar
            </Button>
            <p className="text-xs text-center text-gray-500 mt-4">
              Use admin@luminajoias.com / admin123 para teste
            </p>
          </form>
        ) : (
          <form onSubmit={handleTwoFactorSubmit} className="space-y-4">
            <div>
              <label htmlFor="twoFactorCode" className="block text-sm font-medium text-gray-700 mb-1">
                Código de Autenticação
              </label>
              <Input
                id="twoFactorCode"
                type="text"
                placeholder="123456"
                value={twoFactorCode}
                onChange={(e) => setTwoFactorCode(e.target.value)}
                required
                className="text-center tracking-widest"
                maxLength={6}
              />
              <p className="text-xs text-gray-500 mt-1">
                Use o código do Google Authenticator
              </p>
            </div>
            <Button type="submit" className="w-full bg-lumina-gold hover:bg-yellow-500 text-lumina-dark">
              Verificar
            </Button>
            <p className="text-xs text-center text-gray-500 mt-4">
              Use 123456 para teste
            </p>
            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={() => setShowTwoFactor(false)}
            >
              Voltar
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
