import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Truck, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgregadosPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Agregados',
    quantity: '',
    message: ''
  });

  const agregados = [
    {
      name: 'Areia do Rio',
      description: 'Areia natural extraída de leito de rio, ideal para diversas aplicações.',
      specs: 'Origem natural | Granulometria variada',
      applications: ['Betão', 'Argamassas', 'Construção geral', 'Obras hidráulicas']
    },
    {
      name: 'Areia Branca',
      description: 'Areia de cor branca para acabamentos especiais e decorativos.',
      specs: 'Cor branca | Granulometria fina',
      applications: ['Acabamentos decorativos', 'Rebocos especiais', 'Argamassas claras', 'Paisagismo']
    },
    {
      name: 'Areia Amarela',
      description: 'Areia de cor amarela para construção e acabamentos.',
      specs: 'Cor amarela | Granulometria média',
      applications: ['Construção geral', 'Betão', 'Argamassas', 'Pavimentações']
    },
    {
      name: 'Saibro',
      description: 'Material natural com mistura de areia e argila.',
      specs: 'Mistura natural | Compactação excelente | Densidade: 1.7 t/m³',
      applications: ['Pavimentos rurais', 'Caminhos', 'Aterros', 'Regularização de terrenos']
    },
    {
      name: 'Brita 1',
      description: 'Pedra britada de primeira qualidade para betão estrutural.',
      specs: 'Granulometria: 5-15mm | Densidade: 1.5 t/m³',
      applications: ['Betão estrutural', 'Pavimentos', 'Drenagem', 'Filtros']
    },
    {
      name: 'Brita 2',
      description: 'Pedra britada para aplicações de maior calibre.',
      specs: 'Granulometria: 15-25mm | Densidade: 1.5 t/m³',
      applications: ['Betão pesado', 'Fundações', 'Aterros', 'Drenagem pesada']
    },
    {
      name: 'Brita 3',
      description: 'Pedra britada de calibre maior para aplicações específicas.',
      specs: 'Granulometria: 25-50mm | Densidade: 1.5 t/m³',
      applications: ['Drenagem pesada', 'Aterros especiais', 'Obras portuárias', 'Filtros industriais']
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
        alert('Pedido de orçamento para Agregados enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Agregados', quantity: '', message: '' });
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
            <span className="text-[#00BFFF]">Agregados</span> para Construção
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Areias, britas e cascalho de diferentes granulometrias para todas as aplicações construtivas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {agregados.map((product, index) => (
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
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Garantia de Qualidade</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Controlo de qualidade rigoroso</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Origem controlada</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrega e Serviços</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Entrega em 24-48h</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Várias capacidades de camiões</span>
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
              <p className="text-gray-600 mb-6">Receba uma proposta personalizada para agregados</p>
              
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
                  placeholder="Quantidade estimada (m³)"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Detalhes do projeto e tipo de agregados necessários..."
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

export default AgregadosPage;