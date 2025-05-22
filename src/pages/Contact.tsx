
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success('Mensagem enviada!', {
      description: 'Entraremos em contato em breve.',
      position: 'bottom-center',
      duration: 3000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-lumina-dark mb-6 text-center">
            Entre em <span className="text-lumina-gold">Contato</span>
          </h1>
          
          <div className="max-w-6xl mx-auto mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="mr-4 text-lumina-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-roboto font-semibold text-lumina-dark">Endereço</h3>
                      <p className="font-roboto text-gray-600">Av. Paulista, 1000 - Bela Vista</p>
                      <p className="font-roboto text-gray-600">São Paulo - SP, 01310-100</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="mr-4 text-lumina-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-roboto font-semibold text-lumina-dark">Telefone</h3>
                      <p className="font-roboto text-gray-600">(11) 99999-9999</p>
                      <p className="font-roboto text-gray-600">(11) 5555-5555</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="mr-4 text-lumina-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-roboto font-semibold text-lumina-dark">E-mail</h3>
                      <p className="font-roboto text-gray-600">contato@luminajoias.com</p>
                      <p className="font-roboto text-gray-600">atendimento@luminajoias.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="mr-4 text-lumina-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-roboto font-semibold text-lumina-dark">Horário de Funcionamento</h3>
                      <p className="font-roboto text-gray-600">Segunda à Sexta: 9h às 18h</p>
                      <p className="font-roboto text-gray-600">Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Envie uma Mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-roboto text-lumina-dark mb-2">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lumina-gold"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-roboto text-lumina-dark mb-2">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lumina-gold"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block font-roboto text-lumina-dark mb-2">Assunto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lumina-gold"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Informações sobre produtos">Informações sobre produtos</option>
                      <option value="Pedido e entrega">Pedido e entrega</option>
                      <option value="Trocas e devoluções">Trocas e devoluções</option>
                      <option value="Parcerias">Parcerias</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-roboto text-lumina-dark mb-2">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lumina-gold"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-lumina-gold text-lumina-dark px-6 py-3 rounded-md font-roboto font-medium hover:bg-yellow-600 transition-colors duration-300"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
