import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../mock';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    openWhatsApp('Olá! Visitei o vosso website e gostaria de mais informações sobre materiais de construção.');
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <button
            onClick={handleClick}
            className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
              !
            </div>
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap">
              Contacte-nos via WhatsApp!
              <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;