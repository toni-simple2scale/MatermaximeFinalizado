import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../mock';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20 mb-4">
            <Star className="h-4 w-4 text-[#00BFFF] mr-2 fill-current" />
            <span className="text-sm font-medium text-[#00BFFF]">Testemunhos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Dizem os Nossos <span className="text-[#00BFFF]">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A confiança dos nossos clientes é o nosso maior património. 
            Veja o que dizem sobre a nossa qualidade e serviço.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-[#00BFFF]/20 transform hover:-translate-y-2"
            >
              {/* Quote */}
              <div className="mb-6">
                <div className="text-6xl text-[#00BFFF]/20 leading-none mb-4">“</div>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  {testimonial.text}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star 
                    key={index} 
                    className="h-5 w-5 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00BFFF]/20 to-blue-200 rounded-full flex items-center justify-center mr-4">
                  <div className="text-[#00BFFF] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section with Map */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Stats Grid */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Números que Falam por Si</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00BFFF] mb-2">1000+</div>
                  <div className="text-gray-600 font-medium">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00BFFF] mb-2">25+</div>
                  <div className="text-gray-600 font-medium">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00BFFF] mb-2">50k+</div>
                  <div className="text-gray-600 font-medium">Entregas Realizadas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00BFFF] mb-2">99%</div>
                  <div className="text-gray-600 font-medium">Taxa de Satisfação</div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Visite-nos</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.1234567890123!2d-9.2345678901234567!3d38.8765432109876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20do%20Alto%20das%20Mastrontas%208%2C%202715-311%20Almargem%20do%20Bispo!5e0!3m2!1spt!2spt!4v1234567890123"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Armazém Matermaxime"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm font-semibold text-[#00BFFF]">Armazém</div>
                <div className="text-sm text-gray-600">Rua do Alto das Mastrontas Nº8</div>
                <div className="text-sm text-gray-600">2715-311 Almargem do Bispo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;