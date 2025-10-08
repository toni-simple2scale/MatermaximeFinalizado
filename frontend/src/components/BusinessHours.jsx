import React from 'react';
import { Clock, Phone, MapPin, Mail } from 'lucide-react';
import { companyInfo } from '../mock';

const BusinessHours = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Business Hours */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20 mb-6">
              <Clock className="h-4 w-4 text-[#00BFFF] mr-2" />
              <span className="text-sm font-medium text-[#00BFFF]">Horários de Funcionamento</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Estamos <span className="text-[#00BFFF]">Disponíveis</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Segunda a Sexta</span>
                  <span className="text-[#00BFFF] font-bold">{companyInfo.businessHours.weekdays}</span>
                </div>
                <p className="text-sm text-gray-600">Atendimento completo e entregas</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Sábado</span>
                  <span className="text-[#00BFFF] font-bold">{companyInfo.businessHours.saturday}</span>
                </div>
                <p className="text-sm text-gray-600">Atendimento e entregas (mediante agendamento)</p>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Contacto <span className="text-[#00BFFF]">Rápido</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gradient-to-r from-[#00BFFF]/5 to-blue-50 rounded-xl border border-[#00BFFF]/10">
                  <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-[#00BFFF]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Telefone Principal</div>
                    <div className="font-bold text-gray-900 text-lg">{companyInfo.phone}</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-[#00BFFF]/5 to-blue-50 rounded-xl border border-[#00BFFF]/10">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">WhatsApp</div>
                    <div className="font-bold text-gray-900 text-lg">{companyInfo.whatsapp}</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-[#00BFFF]/5 to-blue-50 rounded-xl border border-[#00BFFF]/10">
                  <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-[#00BFFF]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Email</div>
                    <div className="font-bold text-gray-900 text-lg">{companyInfo.email}</div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gradient-to-r from-[#00BFFF]/5 to-blue-50 rounded-xl border border-[#00BFFF]/10">
                  <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-6 w-6 text-[#00BFFF]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">Localizações</div>
                    <div className="font-bold text-gray-900 space-y-2">
                      <div>
                        <div className="text-sm text-[#00BFFF] font-semibold">Armazém:</div>
                        <div className="text-sm">Rua do Alto das Mastrontas Nº8, 2715-311 Almargem do Bispo</div>
                      </div>
                      <div>
                        <div className="text-sm text-[#00BFFF] font-semibold">Loja:</div>
                        <div className="text-sm">Avenida da Liberdade nº51B, 2715-311 - Pêro Pinheiro</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Fix import
import { MessageCircle } from 'lucide-react';

export default BusinessHours;