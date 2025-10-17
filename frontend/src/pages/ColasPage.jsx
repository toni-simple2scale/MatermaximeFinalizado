import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Truck, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ColasPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Colas, Selantes e Vedantes',
    quantity: '',
    message: ''
  });

  const colas = [
    {
      name: 'Silicones e Selantes',
      description: 'Gama completa de silicones para vedação e selagem.',
      specs: 'Várias cores e aplicações disponíveis',
      applications: ['Vedação de janelas', 'Selagem de fissuras', 'Impermeabilização', 'Acabamentos']
    },
    {
      name: 'Silicone neutro',
      description: 'Silicone neutro de alta qualidade para aplicações gerais.',
      specs: 'Várias cores | Cura neutra',
      applications: ['Vidros', 'Metais', 'Cerâmicos', 'Aplicações sanitárias']
    },
    {
      name: 'Selantes acrílicos',
      description: 'Selantes acrílicos para juntas e fissuras.',
      specs: 'Pintável | Várias cores',
      applications: ['Juntas de dilatação', 'Fissuras', 'Acabamentos pintáveis', 'Reparações']
    },
    {
      name: 'Selantes de poliuretano',
      description: 'Selantes de poliuretano para aplicações estruturais.',
      specs: 'Alta resistência | Flexível',
      applications: ['Juntas estruturais', 'Vedações exteriores', 'Aplicações industriais', 'Alta durabilidade']
    },
    {
      name: 'Colas de Montagem',
      description: 'Colas estruturais para montagem e fixação permanente.',
      specs: 'Alta aderência | Várias formulações',
      applications: ['Montagem estrutural', 'Fixação permanente', 'Colagem de painéis', 'Construção']
    },
    {
      name: 'Cola de contacto',
      description: 'Cola de contacto para aderência imediata.',
      specs: 'Aderência instantânea | Base solvente',
      applications: ['Laminados', 'Revestimentos', 'Espumas', 'Materiais flexíveis']
    },
    {
      name: 'Cola de madeira / MDF',
      description: 'Colas específicas para trabalhos em madeira e MDF.',
      specs: 'Resistente à humidade | Várias viscosidades',
      applications: ['Carpintaria', 'Marcenaria', 'Móveis', 'Estruturas de madeira']
    },
    {
      name: 'Cola universal multiuso',
      description: 'Cola versátil para múltiplas aplicações e materiais.',
      specs: 'Múltiplos materiais | Fácil aplicação',
      applications: ['Reparações gerais', 'Bricolage', 'Fixações diversas', 'Uso doméstico']
    },
    {
      name: 'Cola de azulejo / argamassa colante',
      description: 'Colas especializadas para assentamento de revestimentos.',
      specs: 'Várias classes | Uso interior/exterior',
      applications: ['Assentamento de azulejos', 'Cerâmicos', 'Pedra natural', 'Revestimentos']
    },
    {
      name: 'Acessórios para Aplicação',
      description: 'Ferramentas e acessórios para aplicação de colas e selantes.',
      specs: 'Vários tipos e medidas',
      applications: ['Aplicação profissional', 'Acabamentos precisos', 'Ferramentas auxiliares', 'Produtividade']
    },
    {
      name: 'Pistolas de silicone / aplicadores',
      description: 'Pistolas e aplicadores para silicones e selantes.',
      specs: 'Manuais e pneumáticas | Várias capacidades',
      applications: ['Aplicação de silicone', 'Trabalho profissional', 'Precisão', 'Eficiência']
    },
    {
      name: 'Bicos e espátulas',
      description: 'Bicos de aplicação e espátulas para acabamentos.',
      specs: 'Várias formas e tamanhos',
      applications: ['Acabamentos perfeitos', 'Aplicação precisa', 'Alisamento', 'Trabalhos de detalhe']
    },
    {
      name: 'Fitas de proteção e acabamento',
      description: 'Fitas para proteção de superfícies durante aplicação.',
      specs: 'Várias larguras | Fácil remoção',
      applications: ['Proteção de superfícies', 'Acabamentos limpos', 'Delimitação', 'Trabalhos precisos']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/send-quote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quoteForm)
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        alert('Pedido de orçamento para Colas, Selantes e Vedantes enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Colas, Selantes e Vedantes', quantity: '', message: '' });
      } else {
        alert('Erro ao enviar pedido. Por favor, tente novamente.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Erro ao enviar pedido. Por favor, contacte-nos diretamente.');
    });
  };

  const handleInputChange = (e) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00BFFF]/5 to-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-[#00BFFF] transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Catálogo
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00BFFF]">Colas</span>, Selantes e Vedantes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Produtos especializados para vedação, colagem e fixação em todas as aplicações da construção.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {colas.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="text-sm text-gray-500 mb-4">{product.specs}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Aplicações:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.applications.map((app, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Options Note */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-center text-gray-700 font-medium">
                E mais opções sob consulta
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Informações Técnicas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Produtos certificados</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Resistência comprovada</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Aplicação profissional</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Durabilidade garantida</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pedir Orçamento</h3>
              <p className="text-gray-600 mb-6">Receba uma proposta personalizada para colas e selantes</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={quoteForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={quoteForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={quoteForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="text"
                  name="quantity"
                  placeholder="Quantidade estimada"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Especifique o tipo de aplicação, materiais a colar/vedar, condições de uso..."
                  value={quoteForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                />
                
                <Button type="submit" className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white">
                  Solicitar Orçamento
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColasPage;