
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-lumina-dark mb-6 text-center">
            Trocas e <span className="text-lumina-gold">Devoluções</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Política de Trocas e Devoluções</h2>
            <p className="font-roboto text-gray-700 mb-6">
              Na Lúmina Joias, nos preocupamos com a sua satisfação. Por isso, oferecemos uma política de trocas e devoluções transparente para garantir a melhor experiência de compra.
            </p>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Prazo para Trocas e Devoluções</h2>
            <p className="font-roboto text-gray-700 mb-6">
              Você pode solicitar a troca ou devolução do produto em até 7 (sete) dias corridos após o recebimento, conforme o Código de Defesa do Consumidor.
            </p>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Condições para Troca ou Devolução</h2>
            <ul className="list-disc pl-6 mb-6 font-roboto text-gray-700 space-y-2">
              <li>O produto deve estar sem sinais de uso ou desgaste.</li>
              <li>A embalagem original deve estar intacta e com todos os acessórios, certificados e instruções.</li>
              <li>Não são aceitas trocas de brincos por questões de higiene, exceto em caso de defeito de fabricação.</li>
              <li>Produtos personalizados ou sob encomenda não são elegíveis para troca ou devolução, exceto em caso de defeito de fabricação.</li>
            </ul>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Como Solicitar Troca ou Devolução</h2>
            <ol className="list-decimal pl-6 mb-6 font-roboto text-gray-700 space-y-2">
              <li>Entre em contato com nossa Central de Atendimento pelo e-mail atendimento@luminajoias.com ou pelo telefone (11) 5555-5555.</li>
              <li>Informe o número do pedido, data de recebimento e motivo da troca ou devolução.</li>
              <li>Nossa equipe analisará sua solicitação e enviará instruções para o envio do produto.</li>
              <li>Após recebermos e avaliarmos o produto, processaremos a troca ou reembolso de acordo com sua preferência.</li>
            </ol>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Reembolsos</h2>
            <p className="font-roboto text-gray-700 mb-6">
              Caso opte pelo reembolso, ele será processado da seguinte forma:
            </p>
            <ul className="list-disc pl-6 mb-6 font-roboto text-gray-700 space-y-2">
              <li>Cartão de crédito: o estorno será solicitado à administradora do cartão em até 5 dias úteis após a aprovação da devolução. O prazo para o valor aparecer na fatura depende da administradora do cartão.</li>
              <li>PIX ou boleto bancário: o reembolso será realizado via transferência bancária em até 5 dias úteis após a aprovação da devolução.</li>
              <li>Vale-troca: você pode optar por receber um vale-troca no valor integral da compra, com validade de 90 dias.</li>
            </ul>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Defeitos de Fabricação</h2>
            <p className="font-roboto text-gray-700 mb-6">
              Todas as nossas peças passam por rigoroso controle de qualidade, mas caso você identifique algum defeito de fabricação, entre em contato conosco em até 30 dias após o recebimento. Enviaremos orientações para análise técnica e, caso confirmado o defeito, realizaremos a troca por um produto novo ou o reembolso, conforme sua preferência.
            </p>
            
            <h2 className="font-playfair text-2xl font-bold mb-6 text-lumina-gold">Dúvidas</h2>
            <p className="font-roboto text-gray-700 mb-6">
              Se você tiver dúvidas sobre nossa política de trocas e devoluções, entre em contato com nossa Central de Atendimento pelo e-mail atendimento@luminajoias.com ou pelo telefone (11) 5555-5555, de segunda a sexta, das 9h às 18h.
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

export default Returns;
