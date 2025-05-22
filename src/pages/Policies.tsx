
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Policies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-lumina-dark mb-6 text-center">
            Política de <span className="text-lumina-gold">Privacidade</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Introdução</h2>
            <p className="font-roboto text-gray-700 mb-6">
              A Lúmina Joias valoriza a privacidade dos seus clientes e está comprometida em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos e compartilhamos suas informações quando você utiliza nosso site.
            </p>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Informações que Coletamos</h2>
            <p className="font-roboto text-gray-700 mb-3">
              Ao utilizar nosso site, podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc pl-6 mb-6 font-roboto text-gray-700 space-y-2">
              <li>Informações de contato: nome, endereço de e-mail, número de telefone, endereço de entrega e faturamento.</li>
              <li>Informações de pagamento: dados de cartão de crédito, informações de conta bancária (processadas por gateways de pagamento seguros).</li>
              <li>Informações de perfil: histórico de compras, preferências e favoritos.</li>
              <li>Informações técnicas: endereço IP, tipo de navegador, dispositivo utilizado, páginas visitadas.</li>
            </ul>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Como Utilizamos suas Informações</h2>
            <p className="font-roboto text-gray-700 mb-3">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-6 font-roboto text-gray-700 space-y-2">
              <li>Processar pedidos e pagamentos.</li>
              <li>Enviar comunicações sobre pedidos, produtos e promoções (quando autorizado).</li>
              <li>Melhorar nossos produtos e serviços.</li>
              <li>Personalizar sua experiência de compra.</li>
              <li>Cumprir obrigações legais e fiscais.</li>
            </ul>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Cookies e Tecnologias Semelhantes</h2>
            <p className="font-roboto text-gray-700 mb-6">
              Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, lembrar suas preferências e entender como os visitantes usam nosso site. Você pode ajustar as configurações do seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Compartilhamento de Informações</h2>
            <p className="font-roboto text-gray-700 mb-3">
              Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 mb-6 font-roboto text-gray-700 space-y-2">
              <li>Parceiros de serviços (processadores de pagamento, serviços de entrega).</li>
              <li>Autoridades legais, quando exigido por lei.</li>
            </ul>
            <p className="font-roboto text-gray-700 mb-6">
              Não vendemos ou alugamos suas informações pessoais para terceiros.
            </p>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Seus Direitos</h2>
            <p className="font-roboto text-gray-700 mb-3">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc pl-6 mb-6 font-roboto text-gray-700 space-y-2">
              <li>Acessar suas informações pessoais.</li>
              <li>Corrigir informações imprecisas.</li>
              <li>Solicitar a exclusão de seus dados.</li>
              <li>Revogar consentimento para uso de dados.</li>
              <li>Solicitar portabilidade de dados.</li>
            </ul>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Contato</h2>
            <p className="font-roboto text-gray-700 mb-6">
              Para exercer seus direitos ou esclarecer dúvidas sobre nossa Política de Privacidade, entre em contato conosco através do e-mail: privacidade@luminajoias.com
            </p>
            
            <p className="font-roboto text-gray-500 italic text-sm">
              Última atualização: 15 de maio de 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Policies;
