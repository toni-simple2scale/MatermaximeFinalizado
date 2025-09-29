import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      title: 'Agregados',
      description: 'Areias, britas e cascalho de diferentes granulometrias para todas as aplicações.',
      image: 'https://images.unsplash.com/photo-1672541298906-4aeb3edd3520',
      items: ['Areia fina', 'Areia grossa', 'Brita 1', 'Brita 2', 'Cascalho'],
      link: '/produtos/agregados'
    },
    {
      id: 2,
      title: 'Cimento',
      description: 'Cimento Portland de alta qualidade das melhores marcas nacionais.',
      image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg',
      items: ['Cimento 32.5', 'Cimento 42.5', 'Cimento Branco', 'Cimento Cola'],
      link: '/produtos/cimento'
    },
    {
      id: 3,
      title: 'Blocos e Tijolos',
      description: 'Ampla variedade de blocos e tijolos para construção e acabamentos.',
      image: 'https://images.unsplash.com/photo-1637241612956-b7309005288b',
      items: ['Blocos de betão', 'Tijolos furados', 'Tijolos maciços', 'Blocos térmicos'],
      link: '/produtos/blocos-tijolos'
    },
    {
      id: 4,
      title: 'Ferro de Construção',
      description: 'Varão de ferro de alta resistência em diferentes diâmetros.',
      image: 'https://images.pexels.com/photos/46167/iron-rods-reinforcing-bars-rods-steel-bars-46167.jpeg',
      items: ['Varão ø6mm', 'Varão ø8mm', 'Varão ø10mm', 'Varão ø12mm', 'Rede electrossoldada'],
      link: '/produtos/ferro'
    },
    {
      id: 5,
      title: 'Tubagens',
      description: 'Tubos para águas, esgotos e instalações diversas.',
      image: 'https://images.unsplash.com/photo-1580810734898-5e1753f23337',
      items: ['Tubo PVC', 'Tubo corrugado', 'Tubo multicamadas', 'Acessórios'],
      link: '/produtos/tubagens'
    },
    {
      id: 6,
      title: 'Materiais Diversos',
      description: 'Outros materiais essenciais para a sua obra.',
      image: 'https://images.unsplash.com/photo-1629608564457-5d74829a9e14',
      items: ['Cal hidráulica', 'Gesso', 'Argamassas', 'Isolamentos'],
      link: '/produtos/materiais-diversos'
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20 mb-4">
            <span className="text-sm font-medium text-[#00BFFF]">Catálogo de Produtos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Materiais de <span className="text-[#00BFFF]">Qualidade Superior</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fornecemos uma vasta gama de materiais de construção das melhores marcas, 
            garantindo qualidade e resistência para a sua obra.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#00BFFF]/20 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00BFFF] transition-colors duration-200">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Product Items */}
                <div className="space-y-2 mb-6">
                  {product.items.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#00BFFF] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                  {product.items.length > 3 && (
                    <div className="text-sm text-gray-500 ml-5">
                      +{product.items.length - 3} mais produtos
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-gray-50 hover:bg-[#00BFFF] text-gray-700 hover:text-white border border-gray-200 hover:border-[#00BFFF] transition-all duration-300 group/btn">
                  <span>Ver Detalhes</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Temos muito mais produtos disponíveis. Entre em contacto connosco para uma consulta personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Contactar Agora
            </Button>
            <Button variant="outline" className="border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;