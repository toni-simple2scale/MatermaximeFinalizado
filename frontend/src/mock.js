// Mock data for Matermaxime website

export const companyInfo = {
  name: "Matermaxime, Lda.",
  phone: "+351 21 123 4567",
  email: "geral@matermaxime.pt",
  address: "Rua dos Materiais, 123, 1234-567 Lisboa",
  whatsapp: "+351 91 123 4567",
  businessHours: {
    weekdays: "08:00 - 19:00",
    saturday: "09:00 - 13:00",
    sunday: "Encerrado"
  }
};

export const testimonials = [
  {
    id: 1,
    name: "João Silva",
    company: "Construções Silva & Filhos",
    rating: 5,
    text: "Excelente serviço! Sempre pontuais nas entregas e materiais de primeira qualidade. Já trabalho com a Matermaxime há mais de 10 anos.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Maria Santos",
    company: "MS Arquitetura",
    rating: 5,
    text: "Profissionais competentes e materiais de qualidade superior. O apoio técnico é excecional e sempre nos ajudam a encontrar as melhores soluções.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Pedro Costa",
    company: "Costa Empreiteiros",
    rating: 5,
    text: "Frota própria faz toda a diferença! Entregas sempre no horário combinado, mesmo em locais de difícil acesso. Recomendo vivamente.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Ana Rodrigues",
    company: "Obras & Renovações AR",
    rating: 5,
    text: "Atendimento personalizado e preços competitivos. A qualidade dos materiais é consistente e o serviço pós-venda é fantástico.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

export const certifications = [
  {
    id: 1,
    name: "ISO 9001",
    description: "Sistema de Gestão da Qualidade",
    year: "2020"
  },
  {
    id: 2,
    name: "CE Marking",
    description: "Conformidade Europeia",
    year: "2019"
  },
  {
    id: 3,
    name: "LNEC",
    description: "Laboratório Nacional de Engenharia Civil",
    year: "2021"
  }
];

export const faqData = [
  {
    id: 1,
    question: "Qual é o tempo de entrega dos materiais?",
    answer: "Normalmente garantimos entrega em 24 horas para a região de Lisboa. Para outras zonas, o tempo pode variar entre 48-72 horas dependendo da localização."
  },
  {
    id: 2,
    question: "Existe pedido mínimo?",
    answer: "Não temos pedido mínimo obrigatório, mas para entregas de pequenos volumes pode aplicar-se uma taxa de entrega. Consulte-nos para mais detalhes."
  },
  {
    id: 3,
    question: "Que formas de pagamento aceitam?",
    answer: "Aceitamos dinheiro, transferência bancária, multibanco e cartões de crédito/débito. Para clientes regulares, oferecemos também condições de pagamento a prazo."
  },
  {
    id: 4,
    question: "Fazem entregas ao fim de semana?",
    answer: "Entregas ao sábado são possíveis mediante agendamento prévio. Aos domingos não fazemos entregas, exceto em casos de extrema urgência com custo adicional."
  },
  {
    id: 5,
    question: "Têm stock permanente de todos os produtos?",
    answer: "Mantemos stock dos produtos mais procurados. Para produtos específicos ou grandes quantidades, recomendamos contacto prévio para garantir disponibilidade."
  },
  {
    id: 6,
    question: "Oferecem serviço de carga e descarga?",
    answer: "Sim, todos os nossos camiões incluem serviço de descarga. Para locais de difícil acesso ou necessidades especiais de movimentação, consulte-nos previamente."
  }
];

export const brandPartners = [
  { id: 1, name: "Cimpor", logo: "/api/placeholder/150/80" },
  { id: 2, name: "Secil", logo: "/api/placeholder/150/80" },
  { id: 3, name: "Weber", logo: "/api/placeholder/150/80" },
  { id: 4, name: "Sika", logo: "/api/placeholder/150/80" },
  { id: 5, name: "Cerame", logo: "/api/placeholder/150/80" },
  { id: 6, name: "Leca", logo: "/api/placeholder/150/80" },
  { id: 7, name: "Sotinco", logo: "/api/placeholder/150/80" },
  { id: 8, name: "Preceram", logo: "/api/placeholder/150/80" }
];

// Form submission handlers
export const handleQuoteSubmit = (formData) => {
  console.log('Quote request submitted:', formData);
  // Mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Orçamento solicitado com sucesso!' });
    }, 1000);
  });
};

export const handleContactSubmit = (formData) => {
  console.log('Contact form submitted:', formData);
  // Mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Mensagem enviada com sucesso!' });
    }, 1000);
  });
};

// WhatsApp integration
export const openWhatsApp = (message = "Olá! Gostaria de mais informações sobre os vossos materiais de construção.") => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};