import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const EletrodomesticosPage = () => {
  const products = [
    "Exaustores",
    "Placas de Indução",
    "Fornos Elétricos e a Gás",
    "Lava-Louças",
    "Micro-Ondas",
    "Frigoríficos",
    "Máquina de Lavar Louça",
    "Garrafeiras"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Catálogo
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Eletrodomésticos
          </h1>
          <p className="text-xl text-gray-600">
            Equipamentos de qualidade para a sua cozinha
          </p>
        </div>

        {/* Brand Section - Teka */}
        <div className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Representante Oficial
            </h2>
            <div className="flex justify-center items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/lboc2h9r_TEKA%20LOGO%20FINAL.png" 
                alt="Teka Logo" 
                className="h-16 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Products List */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Nossos Produtos
          </h2>
          <div className="grid gap-4">
            {products.map((product, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700 font-medium">
                  {product}
                </span>
              </div>
            ))}
            
            {/* Additional Options */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-cyan-50 border border-cyan-100 mt-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-cyan-900 font-medium italic">
                E mais opções sob consulta
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Precisa de ajuda a escolher?
          </h3>
          <p className="text-lg mb-6 text-cyan-50">
            Entre em contacto connosco para aconselhamento personalizado
          </p>
          <a 
            href="tel:+351219279178"
            className="inline-block bg-white text-cyan-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            +351 21 927 9178
          </a>
        </div>
      </div>
    </div>
  );
};

export default EletrodomesticosPage;
