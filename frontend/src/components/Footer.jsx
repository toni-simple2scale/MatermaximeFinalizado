import React from 'react';
import { Button } from './ui/button';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { companyInfo, openWhatsApp } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Produtos', href: '#produtos' },
    { label: 'Frota', href: '#frota' },
    { label: 'Marcas Parceiras', href: '#marcas' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'FAQ', href: '#faq' }
  ];

  const services = [
    'Entrega 24h',
    'Orçamentos Grátis',
    'Apoio Técnico',
    'Frota Própria',
    'Materiais Certificados'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* WhatsApp CTA Bar */}
      <div className="bg-[#25D366] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-3 sm:mb-0">
              <div className="text-2xl mr-3">📱</div>
              <div>
                <div className="font-bold">Contacto Instantâneo via WhatsApp</div>
                <div className="text-sm text-green-100">Resposta rápida garantida!</div>
              </div>
            </div>
            <Button 
              onClick={() => openWhatsApp()}
              className="bg-white hover:bg-gray-100 text-[#25D366] font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Conversar Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_constructsupply/artifacts/eydx421z_MATERMAXIME-LOGO.png" 
                  alt="Matermaxime Logo" 
                  className="h-12 w-auto mr-3 filter brightness-0 invert"
                />
                <span className="text-xl font-bold">Matermaxime</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Mais de 25 anos a fornecer materiais de construção de qualidade 
                superior com entrega garantida em toda a região de Lisboa.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-[#00BFFF] p-3 rounded-full transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-[#00BFFF] p-3 rounded-full transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-[#00BFFF] p-3 rounded-full transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-[#00BFFF]">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-[#00BFFF] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-[#00BFFF]">Nossos Serviços</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-1 h-1 bg-[#00BFFF] rounded-full mr-3"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-[#00BFFF]">Contacte-nos</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#00BFFF] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">{companyInfo.phone}</div>
                    <div className="text-gray-400 text-sm">Segunda a Sexta: 08:00-19:00</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#00BFFF] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white">{companyInfo.email}</div>
                    <div className="text-gray-400 text-sm">Resposta em 24h</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#00BFFF] mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-white leading-relaxed">
                    {companyInfo.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © {currentYear} {companyInfo.name} - Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Termos de Serviço</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Contactos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;