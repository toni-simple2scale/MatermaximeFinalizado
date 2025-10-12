import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      title: 'Agregados',
      description: 'Areias, britas e cascalho de diferentes granulometrias para todas as aplicações.',
      image: 'https://images.unsplash.com/photo-1649796877686-847d6bdeea6b',
      items: ['Areia do Rio', 'Areia Branca', 'Areia Amarela', 'Saibro', 'Brita 1', 'Brita 2', 'Brita 3'],
      link: '/produtos/agregados'
    },
    {
      id: 2,
      title: 'Cimentos e Rebocos',
      description: 'Cimentos e Rebocos de alta qualidade das melhores marcas.',
      image: 'https://images.unsplash.com/photo-1673865641469-34498379d8af',
      items: ['Cimento', 'Cimento Branco', 'Cimento Cola Branco/Cinza', 'Cimento Cola Flexível', 'Reboco Interior', 'Reboco Exterior'],
      link: '/produtos/cimento'
    },
    {
      id: 3,
      title: 'Blocos e Tijolos',
      description: 'Ampla variedade de blocos e tijolos para construção e acabamentos.',
      image: 'https://images.unsplash.com/photo-1657007508392-d68322544f70',
      items: ['Blocos de betão', 'Tijolos furados', 'Tijolos maciços', 'Blocos térmicos'],
      link: '/produtos/blocos-tijolos'
    },
    {
      id: 4,
      title: 'Pavimentos Clássicos e Técnicos',
      description: 'Soluções em pavimentos para exterior, desde clássicos a sistemas drenantes.',
      image: 'https://images.unsplash.com/photo-1623018035782-b269248df916',
      items: ['Holanda', 'Hexagonal', 'Alfa', 'Uni', 'Ecopavé Drenante', 'Grelha de Enrelvamento'],
      link: '/produtos/pavimentos'
    },
    {
      id: 5,
      title: 'Muros',
      description: 'Blocos e elementos para construção de muros e vedações.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      items: ['Jardimuro', 'Murante', 'Gardenbloco', 'Pilar de Muro', 'Floreira', 'Cobremuros'],
      link: '/produtos/muros'
    },
    {
      id: 6,
      title: 'Ferragens para Construção',
      description: 'Varão de ferro de alta resistência em diferentes diâmetros.',
      image: 'https://images.pexels.com/photos/46167/iron-rods-reinforcing-bars-rods-steel-bars-46167.jpeg',
      items: ['Varão ø6mm', 'Varão ø8mm', 'Varão ø10mm', 'Varão ø12mm', 'Rede electrossoldada'],
      link: '/produtos/ferro'
    },
    {
      id: 7,
      title: 'Tubagens',
      description: 'Tubos para águas, esgotos e instalações diversas.',
      image: 'https://images.unsplash.com/photo-1729169927271-7826d8aae360',
      items: ['Tubo PVC', 'Tubo corrugado', 'Tubo multicamadas', 'Acessórios'],
      link: '/produtos/tubagens'
    },
    {
      id: 8,
      title: 'Pré-moldados de Betão',
      description: 'Elementos pré-fabricados de betão armado para construção civil e infraestruturas.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      items: ['Vigas de Betão Pré-Moldadas', 'Cúpulas e Semi-Cúpulas', 'Caixas de Betão / Canalizações'],
      link: '/produtos/pre-moldados'
    },
    {
      id: 9,
      title: 'Ferramentas e Equipamentos',
      description: 'Ferramentas manuais e equipamentos profissionais para construção civil.',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8',
      items: ['Colheres de pedreiro', 'Martelos', 'Níveis de bolha', 'Betoneiras', 'Equipamentos de proteção'],
      link: '/produtos/ferramentas'
    },
    {
      id: 10,
      title: 'Colas, Selantes e Vedantes',
      description: 'Produtos especializados para vedação, colagem e fixação.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      items: ['Silicones e Selantes', 'Colas de Montagem', 'Cola de contacto', 'Pistolas aplicadoras', 'Acessórios'],
      link: '/produtos/colas-selantes'
    },
    {
      id: 11,
      title: 'Saneamento e Esgotos',
      description: 'Soluções para sistemas de saneamento, drenagem e redes de esgotos.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a',
      items: ['Tampas e grelhas em aço'],
      link: '/produtos/saneamento'
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
                <Link to={product.link}>
                  <Button className="w-full bg-gray-50 hover:bg-[#00BFFF] text-gray-700 hover:text-white border border-gray-200 hover:border-[#00BFFF] transition-all duration-300 group/btn">
                    <span>Ver Detalhes</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
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
          <div className="flex justify-center">
            <Button className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Contactar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;