import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Shield, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const BanhoPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Banho',
    quantity: '',
    message: ''
  });

  const banho = [
    {
      name: 'Revestimentos',
      description: 'Azulejos e revestimentos cerâmicos para paredes e pavimentos de casa de banho.',
      specs: 'Várias cores, texturas e formatos | Cerâmica de alta qualidade',
      applications: ['Paredes de banho', 'Pavimentos', 'Zonas húmidas', 'Design de interiores']
    },
    {
      name: 'Banheiras & Duches',
      description: 'Banheiras e bases de duche em diversos materiais e estilos.',
      specs: 'Acrílico, resina, cerâmica | Vários tamanhos e modelos',
      applications: ['Casas de banho completas', 'Remodelações', 'Hotéis', 'Residências']
    },
    {
      name: 'Torneiras',
      description: 'Torneiras de alta qualidade para lavatórios, banheiras e duches.',
      specs: 'Marca Grohe e Ofa | Design moderno e clássico',
      applications: ['Lavatórios', 'Banheiras', 'Duches', 'Bidés']
    },
    {
      name: 'Móveis',
      description: 'Móveis de casa de banho incluindo armários, lavatórios suspensos e colunas.',
      specs: 'Vários acabamentos e dimensões | Resistente à humidade',
      applications: ['Arrumação', 'Lavatórios', 'Organização', 'Design de interiores']
    },
    {
      name: 'Sanitários',
      description: 'Sanitas, lavatórios, bidés e urinóis de qualidade superior.',
      specs: 'Porcelana vitrificada | Vários modelos',
      applications: ['Casas de banho', 'Lavabos', 'Instalações comerciais', 'Hotéis']
    },
    {
      name: 'Divisórias',
      description: 'Divisórias e cabines de duche em vidro temperado e perfis de alumínio.',
      specs: 'Vidro temperado | Perfis cromados ou pretos',
      applications: ['Duches', 'Separação de zonas', 'Banheiras', 'Design moderno']
    },
    {
      name: 'Toalheiros e Acessórios de Banho',
      description: 'Acessórios completos para casa de banho incluindo toalheiros, saboneteiras e suportes.',
      specs: 'Acabamentos cromados, pretos ou dourados | Marca Grohe e Ofa',
      applications: ['Toalheiros', 'Porta-rolos', 'Saboneteiras', 'Ganchos e suportes']
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
        alert('Pedido de orçamento para Banho enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Banho', quantity: '', message: '' });
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
            <span className="text-[#00BFFF]">Banho</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Soluções completas para casa de banho, desde revestimentos a acessórios de alta qualidade.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            {/* Brands Section */}
            <div className="mb-12 bg-gradient-to-r from-white to-blue-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-[#00BFFF] mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Representantes Oficiais</h3>
                </div>
                <p className="text-gray-600 mb-8">
                  Somos representantes oficiais das marcas líderes em equipamentos de banho
                </p>
                <div className="flex flex-wrap items-center justify-center gap-12">
                  {/* Ofa Logo */}
                  <div className="bg-white rounded-xl px-10 py-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_matermaxime-build-1/artifacts/8bdosq72_276135029_1616255798739234_3905959924822161885_n.png" 
                      alt="Ofa Logo" 
                      className="h-20 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none'}} className="text-2xl font-bold text-[#00BFFF]">Ofa</div>
                  </div>
                  
                  {/* Grohe Logo */}
                  <div className="bg-white rounded-xl px-10 py-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src="https://images.seeklogo.com/logo-png/52/1/grohe-logo-png_seeklogo-526423.png" 
                      alt="Grohe Logo" 
                      className="h-16 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none'}} className="text-2xl font-bold text-[#00BFFF]">Grohe</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  Qualidade garantida e suporte técnico especializado
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {banho.map((product, index) => (
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Características Técnicas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Produtos certificados</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Garantia das marcas</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Design moderno</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Durabilidade superior</span>
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
              <p className="text-gray-600 mb-6">Receba uma proposta personalizada para equipamento de banho</p>
              
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
                  placeholder="Especifique os produtos necessários, dimensões da casa de banho, estilo pretendido..."
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

export default BanhoPage;
