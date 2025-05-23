
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import AccountOrderHistory from '@/components/AccountOrderHistory';
import AccountAddresses from '@/components/AccountAddresses';
import AccountWishlist from '@/components/AccountWishlist';

// User authentication state - would come from auth context
const isLoggedIn = false;

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [showRecovery, setShowRecovery] = useState(false);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic would go here
    console.log('Login submitted', loginForm);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration logic would go here
    console.log('Registration submitted', registerForm);
  };

  const handleRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    // Password recovery logic would go here
    console.log('Recovery submitted', recoveryEmail);
    alert(`Email de recuperação enviado para ${recoveryEmail}`);
    setShowRecovery(false);
  };

  const renderLoginForm = () => (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6">
        <h2 className="font-playfair text-2xl font-bold mb-6">Entrar</h2>
        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium mb-1">Email</label>
              <Input
                id="login-email"
                name="email"
                type="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium mb-1">Senha</label>
              <Input
                id="login-password"
                name="password"
                type="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                placeholder="••••••••"
                required
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90"
            >
              Entrar
            </Button>
          </div>
        </form>
        
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowRecovery(true)}
            className="text-lumina-dark text-sm hover:underline"
          >
            Esqueceu sua senha?
          </button>
        </div>
        
        <div className="mt-6 pt-6 border-t text-center">
          <p className="text-gray-600 mb-4">Ou entre com</p>
          <Button 
            variant="outline" 
            className="w-full border-gray-300 hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21.35,11.1H12.18V13.83H18.69C18.36,15.64 16.79,17.04 14.61,17.04C12.13,17.04 10.13,15.04 10.13,12.56C10.13,10.08 12.13,8.08 14.61,8.08C15.87,8.08 16.99,8.56 17.82,9.34L19.94,7.22C18.51,5.88 16.67,5.08 14.61,5.08C10.47,5.08 7.13,8.42 7.13,12.56C7.13,16.7 10.47,20.04 14.61,20.04C18.47,20.04 21.59,17.14 21.59,12.74C21.59,12.19 21.5,11.63 21.35,11.1Z"
              />
            </svg>
            Entrar com Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderRegisterForm = () => (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6">
        <h2 className="font-playfair text-2xl font-bold mb-6">Criar Conta</h2>
        <form onSubmit={handleRegister}>
          <div className="space-y-4">
            <div>
              <label htmlFor="register-name" className="block text-sm font-medium mb-1">Nome Completo</label>
              <Input
                id="register-name"
                name="name"
                value={registerForm.name}
                onChange={handleRegisterChange}
                placeholder="Seu Nome Completo"
                required
              />
            </div>
            
            <div>
              <label htmlFor="register-email" className="block text-sm font-medium mb-1">Email</label>
              <Input
                id="register-email"
                name="email"
                type="email"
                value={registerForm.email}
                onChange={handleRegisterChange}
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="register-password" className="block text-sm font-medium mb-1">Senha</label>
              <Input
                id="register-password"
                name="password"
                type="password"
                value={registerForm.password}
                onChange={handleRegisterChange}
                placeholder="••••••••"
                required
              />
            </div>
            
            <div>
              <label htmlFor="register-confirm" className="block text-sm font-medium mb-1">Confirmar Senha</label>
              <Input
                id="register-confirm"
                name="confirmPassword"
                type="password"
                value={registerForm.confirmPassword}
                onChange={handleRegisterChange}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="newsletter" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="newsletter"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Quero receber promoções e novidades por email
                </label>
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90"
            >
              Criar Conta
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  const renderRecoveryForm = () => (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6">
        <h2 className="font-playfair text-2xl font-bold mb-6">Recuperar Senha</h2>
        <form onSubmit={handleRecovery}>
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              Digite seu email e enviaremos um link para redefinir sua senha.
            </p>
            <div>
              <label htmlFor="recovery-email" className="block text-sm font-medium mb-1">Email</label>
              <Input
                id="recovery-email"
                type="email"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90"
            >
              Enviar Link de Recuperação
            </Button>
            
            <Button 
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setShowRecovery(false)}
            >
              Voltar ao Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  // Mock user data
  const user = {
    name: 'Ana Silva',
    email: 'ana.silva@email.com',
    phone: '(11) 98765-4321',
    avatar: null, // Default avatar would use initials
  };

  const renderUserAccount = () => (
    <Tabs 
      value={activeTab} 
      onValueChange={setActiveTab}
      className="space-y-6"
    >
      <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:w-[600px] mx-auto">
        <TabsTrigger value="profile">Perfil</TabsTrigger>
        <TabsTrigger value="orders">Pedidos</TabsTrigger>
        <TabsTrigger value="addresses">Endereços</TabsTrigger>
        <TabsTrigger value="wishlist">Lista de Desejos</TabsTrigger>
      </TabsList>
      
      <TabsContent value="profile" className="max-w-md mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="font-playfair text-2xl font-bold mb-6">Meu Perfil</h2>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-lumina-gold/20 text-lumina-dark rounded-full flex items-center justify-center text-xl font-bold">
                {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nome</label>
                <Input defaultValue={user.name} />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input defaultValue={user.email} />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Telefone</label>
                <Input defaultValue={user.phone} />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Nova Senha (opcional)</label>
                <Input type="password" placeholder="Deixe em branco para manter a atual" />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="profile-newsletter" defaultChecked />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="profile-newsletter"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Receber promoções e novidades por email
                  </label>
                </div>
              </div>
              
              <Button className="w-full bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90">
                Salvar Alterações
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="orders">
        <AccountOrderHistory />
      </TabsContent>
      
      <TabsContent value="addresses">
        <AccountAddresses />
      </TabsContent>
      
      <TabsContent value="wishlist">
        <AccountWishlist />
      </TabsContent>
    </Tabs>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-playfair text-3xl md:text-4xl font-bold text-lumina-dark mb-8 text-center">
        Minha Conta
      </h1>
      
      {isLoggedIn ? (
        renderUserAccount()
      ) : (
        showRecovery ? (
          renderRecoveryForm()
        ) : (
          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid grid-cols-2 w-[400px] max-w-full mx-auto">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="register">Cadastrar</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              {renderLoginForm()}
            </TabsContent>
            <TabsContent value="register">
              {renderRegisterForm()}
            </TabsContent>
          </Tabs>
        )
      )}
    </div>
  );
};

export default Account;
