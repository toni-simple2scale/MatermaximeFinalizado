import React, { useState } from 'react';
import { Store, MapPin, Clock, Calendar, ArrowRight, X } from 'lucide-react';

const NovaLojaSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder images em formato vertical - estas podem ser substituídas pelas fotos reais da inauguração
  const galeriaFotos = [
    {
      url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=800&fit=crop',
      alt: 'Inauguração da Loja - Foto 1',
      caption: 'Momento da inauguração'
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=800&fit=crop',
      alt: 'Inauguração da Loja - Foto 2',
      caption: 'Espaço interior da loja'
    },
    {
      url: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&h=800&fit=crop',
      alt: 'Inauguração da Loja - Foto 3',
      caption: 'Produtos em exposição'
    },
    {
      url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=800&fit=crop',
      alt: 'Inauguração da Loja - Foto 4',
      caption: 'Secção de ferramentas'
    },
    {
      url: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=600&h=800&fit=crop',
      alt: 'Inauguração da Loja - Foto 5',
      caption: 'Equipa da loja'
    },
    {
      url: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&h=800&fit=crop',
      alt: 'Inauguração da Loja - Foto 6',
      caption: 'Vista geral da loja'
    }
  ];

  return (
    <section id="nova-loja" className="py-20 bg-gradient-to-br from-[#00BFFF]/5 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Announcement Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded-full mb-6 shadow-lg">
            <Store className="h-6 w-6 text-white mr-3" />
            <span className="text-white font-bold text-lg">NOVIDADE!</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Abriu a Nossa <span className="text-[#00BFFF]">Nova Loja</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Estamos muito felizes em anunciar a abertura da nossa nova loja! 
            Venha conhecer o nosso espaço dedicado a todo o tipo de materiais de construção, ferramentas e soluções para as suas obras e projetos.
          </p>
        </div>

        {/* Store Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-[#00BFFF]/10 rounded-full mb-6 mx-auto">
              <Store className="h-8 w-8 text-[#00BFFF]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">O Que Encontra</h3>
            <p className="text-gray-600 text-center">
              Ferramentas, materiais de construção, tintas, isolamentos, produtos de limpeza, drogaria e muito mais para os seus projetos
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-[#00BFFF]/10 rounded-full mb-6 mx-auto">
              <Clock className="h-8 w-8 text-[#00BFFF]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Horário</h3>
            <p className="text-gray-600 text-center">
              <strong>Segunda a Sexta:</strong><br />
              08:30 - 12:30 | 14:30 - 18:30
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-[#00BFFF]/10 rounded-full mb-6 mx-auto">
              <MapPin className="h-8 w-8 text-[#00BFFF]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Localização</h3>
            <p className="text-gray-600 text-center">
              Avenida da Liberdade nº51B<br />
              2715-001 - Pêro Pinheiro
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              <Calendar className="inline-block h-8 w-8 text-[#00BFFF] mr-3 mb-1" />
              Galeria da Inauguração
            </h3>
            <p className="text-lg text-gray-600">
              Veja as fotos da inauguração da nossa nova loja
            </p>
          </div>

          {/* Photo Grid - Formato Vertical */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galeriaFotos.map((foto, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(foto)}
              >
                <img 
                  src={foto.url} 
                  alt={foto.alt}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{foto.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="#contacto" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Visite-nos na Loja
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#00BFFF] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl w-full">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-xl font-semibold">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default NovaLojaSection;
