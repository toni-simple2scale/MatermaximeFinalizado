import React from 'react';
import { Button } from './ui/button';
import { Building, Users, Truck, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20 mb-4">
            <Building className="h-4 w-4 text-[#00BFFF] mr-2" />
            <span className="text-sm font-medium text-[#00BFFF]">Sobre Nós</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            25 Anos a <span className="text-[#00BFFF]">Construir Confiança</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Matermaxime é uma empresa familiar que cresceu com o setor da construção, 
            mantendo sempre os valores de qualidade, compromisso e excelência no atendimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Company Story */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">A Nossa História</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#00BFFF] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Inícios (1999)</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Começámos como uma pequena empresa familiar, focada no fornecimento 
                      de materiais básicos para a região de Lisboa.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#00BFFF] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expansão (2005-2015)</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Investimos em frota própria e alargámos a gama de produtos, 
                      tornando-nos distribuidores oficiais de marcas reconhecidas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#00BFFF] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Modernização (2016-Hoje)</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Modernizámos processos, obtivemos certificações de qualidade 
                      e consolidamos a nossa posição como referência no setor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50">
                <Building className="h-8 w-8 text-[#00BFFF] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">25+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50">
                <Users className="h-8 w-8 text-[#00BFFF] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">1000+</div>
                <div className="text-sm text-gray-600">Clientes Ativos</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50">
                <Truck className="h-8 w-8 text-[#00BFFF] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-sm text-gray-600">Camiões Próprios</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50">
                <Award className="h-8 w-8 text-[#00BFFF] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">50k+</div>
                <div className="text-sm text-gray-600">Entregas Realizadas</div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <h4 className="font-bold text-gray-900 mb-3">Missão</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Fornecer materiais de construção de qualidade superior com serviço 
                excecional, contribuindo para o sucesso dos projetos dos nossos clientes.
              </p>
              <h4 className="font-bold text-gray-900 mb-3">Visão</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ser a empresa de referência no fornecimento de materiais de construção 
                na Grande Lisboa, reconhecida pela excelência e inovação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;