import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Truck, Shield, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { openWhatsApp } from '../mock';

const FerroPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Ferro de Construção',
    quantity: '',
    message: ''
  });

  const ferros = [
    {
      name: 'Varão Ø6mm',
      description: 'Varão de ferro nervurado para armaduras leves e estribos.',
      specs: 'Diâmetro: 6mm | Comprimento: 12m | Peso: 2.22kg por vara',
      applications: ['Estribos', 'Armaduras leves', 'Malhas de distribuição', 'Elementos secundários']
    },
    {
      name: 'Varão Ø8mm', 
      description: 'Varão de aço para armaduras estruturais de pequeno porte.',
      specs: 'Diâmetro: 8mm | Comprimento: 12m | Peso: 3.95kg por vara',
      applications: ['Lajes', 'Vigas pequenas', 'Pilares', 'Armaduras principais']
    },
    {
      name: 'Varão Ø10mm',
      description: 'Varão estrutural para elementos de betão armado.',
      specs: 'Diâmetro: 10mm | Comprimento: 12m | Peso: 6.17kg por vara',
      applications: ['Lajes estruturais', 'Vigas', 'Pilares', 'Fundações']
    },
    {
      name: 'Varão Ø12mm',
      description: 'Varão de alta resistência para estruturas principais.',
      specs: 'Diâmetro: 12mm | Comprimento: 12m | Peso: 8.89kg por vara', 
      applications: ['Estruturas principais', 'Fundações pesadas', 'Vigas principais', 'Pilares estruturais']
    },
    {
      name: 'Rede Electrossoldada',
      description: 'Malha de aço soldada para lajes e pavimentos.',
      specs: 'Malha: 15x15cm | Ø6mm | Dimensões: 2.4x6m | Peso: ~25kg por painel',
      applications: ['Lajes', 'Pavimentos industriais', 'Estradas', 'Reforços estruturais']
    },
    {
      name: 'Varão Ø16mm',
      description: 'Varão de grande diâmetro para estruturas pesadas.',
      specs: 'Diâmetro: 16mm | Comprimento: 12m | Peso: 15.77kg por vara',
      applications: ['Grandes estruturas', 'Pontes', 'Edifícios industriais', 'Fundações especiais']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pedido de orçamento para Ferro de Construção enviado com sucesso!');
    setQuoteForm({ name: '', phone: '', email: '', product: 'Ferro de Construção', quantity: '', message: '' });
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
            <span className="text-[#00BFFF]">Ferro</span> de Construção
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Varão de ferro de alta resistência em diferentes diâmetros para todas as aplicações estruturais.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {ferros.map((product, index) => (
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

            {/* Additional Info */}
            <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Normas e Certificações</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">NP EN 10080 (Aço para betão armado)</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Classe A500 NR SD</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Certificação CE</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">LNEC aprovado</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Serviços Complementares</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Corte à medida</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Dobragem de estribos</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Preparação de armaduras</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Cálculo de quantidades</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Table */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Tabela Técnica Resumida</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Diâmetro</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Peso/metro</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Área secção</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aplicação típica</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr><td className="px-4 py-3 text-sm text-gray-900">Ø6mm</td><td className="px-4 py-3 text-sm text-gray-500">0.222 kg/m</td><td className="px-4 py-3 text-sm text-gray-500">0.28 cm²</td><td className="px-4 py-3 text-sm text-gray-500">Estribos</td></tr>
                      <tr><td className="px-4 py-3 text-sm text-gray-900">Ø8mm</td><td className="px-4 py-3 text-sm text-gray-500">0.395 kg/m</td><td className="px-4 py-3 text-sm text-gray-500">0.50 cm²</td><td className="px-4 py-3 text-sm text-gray-500">Lajes</td></tr>
                      <tr><td className="px-4 py-3 text-sm text-gray-900">Ø10mm</td><td className="px-4 py-3 text-sm text-gray-500">0.617 kg/m</td><td className="px-4 py-3 text-sm text-gray-500">0.79 cm²</td><td className="px-4 py-3 text-sm text-gray-500">Vigas/Pilares</td></tr>
                      <tr><td className="px-4 py-3 text-sm text-gray-900">Ø12mm</td><td className="px-4 py-3 text-sm text-gray-500">0.888 kg/m</td><td className="px-4 py-3 text-sm text-gray-500">1.13 cm²</td><td className="px-4 py-3 text-sm text-gray-500">Estrutural</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pedir Orçamento</h3>
              <p className="text-gray-600 mb-6">Especifique as quantidades e diâmetros necessários</p>
              
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
                  placeholder="Quantidade (kg ou toneladas)"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Especifique diâmetros, comprimentos, se precisa de corte ou dobragem..."
                  value={quoteForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                />
                
                <Button type="submit" className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white">
                  Solicitar Orçamento
                </Button>
                
                <Button
                  type="button"
                  onClick={() => openWhatsApp('Olá! Gostaria de mais informações sobre ferro de construção.')}
                  className="w-full bg-[#25D366] hover:bg-[#1da851] text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </form>

              {/* Quick Calculator */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Calculadora Rápida</h4>
                <p className="text-xs text-gray-600 mb-2">Peso aproximado por m² de laje (Ø8mm):</p>
                <div className="text-sm text-gray-700">
                  <div>Malha 15x15cm: ~7 kg/m²</div>
                  <div>Malha 20x20cm: ~4 kg/m²</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FerroPage;