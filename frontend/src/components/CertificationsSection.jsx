import React from 'react';
import { Button } from './ui/button';
import { Shield, Award, Users, Target } from 'lucide-react';
import { certifications } from '../mock';

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20 mb-4">
            <Shield className="h-4 w-4 text-[#00BFFF] mr-2" />
            <span className="text-sm font-medium text-[#00BFFF]">Qualidade e Certificações</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Compromisso com a <span className="text-[#00BFFF]">Excelência</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos certificados pelas principais entidades do setor, 
            garantindo que todos os nossos produtos e serviços cumprem os mais altos padrões de qualidade.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#00BFFF]/20 transform hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-[#00BFFF]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              <div className="inline-flex items-center px-3 py-1 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20">
                <span className="text-sm font-medium text-[#00BFFF]">Certificado desde {cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;