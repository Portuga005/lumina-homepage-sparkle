
import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Show toast notification
      toast.success('Inscrição realizada!', {
        description: 'Você receberá nossas novidades em breve.',
        position: 'bottom-center',
        duration: 3000,
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-lumina-gold to-yellow-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-lumina-dark mb-4">
            Receba Novidades Exclusivas
          </h2>
          <p className="font-roboto text-lg text-lumina-dark mb-8 opacity-90">
            Seja a primeira a saber sobre novas coleções, promoções especiais e eventos exclusivos da Lúmina Joias
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-full font-roboto text-lumina-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lumina-dark focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-lumina-dark text-white px-8 py-3 rounded-full font-roboto font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Inscrever-se
              </button>
            </div>
          </form>

          {isSubscribed && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg font-roboto animate-fade-in">
              ✨ Obrigada! Você receberá nossas novidades em breve.
            </div>
          )}

          <p className="font-roboto text-sm text-lumina-dark mt-4 opacity-75">
            Prometemos não fazer spam. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
