// Mock data for Matermaxime website

export const companyInfo = {
  name: "Matermaxime, Lda.",
  phone: "+351 21 927 9178",
  mobile: "+351 913 684 059",
  email: "matermaxime.gomes.j@gmail.com",
  address: "Armazém: Rua do Alto das Mastrontas Nº8, 2715-311 Almargem do Bispo\nLoja: Avenida da Liberdade nº51B, 2715-311 - Pêro Pinheiro",
  whatsapp: "+351 913 684 059",
  businessHours: {
    weekdays: {
      warehouse: "08:00 - 19:00",
      store: "08:30 - 12:30 | 14:30 - 18:30"
    },
    saturday: "09:00 - 13:00"
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
    answer: "Não temos pedido mínimo obrigatório, mas cargas não completas podem ter custos de transporte mais elevados. Consulte-nos para mais detalhes."
  },
  {
    id: 3,
    question: "Que formas de pagamento aceitam?",
    answer: "Aceitamos dinheiro, transferência bancária, multibanco e cartões de crédito/débito. Para clientes regulares, oferecemos também condições de pagamento a prazo. Sob consulta."
  },
  {
    id: 4,
    question: "Fazem entregas ao fim de semana?",
    answer: "Entregas ao sábado são possíveis mediante agendamento prévio."
  },
  {
    id: 5,
    question: "Têm stock permanente de todos os produtos?",
    answer: "Mantemos stock dos produtos mais procurados. Para produtos específicos ou grandes quantidades, recomendamos contacto prévio para garantir disponibilidade."
  },
  {
    id: 6,
    question: "Oferecem serviço de carga e descarga?",
    answer: "Sim, contamos com camiões capacitados para serviço de descarga/carga. Para locais de difícil acesso ou necessidades especiais de movimentação, consulte-nos previamente."
  }
];

export const brandPartners = [
  { 
    id: 1, 
    name: "Artebel", 
    logo: "https://customer-assets.emergentagent.com/job_constructsupply/artifacts/dv81cl0h_ARTEBEL%20FINAL.png" 
  },
  { 
    id: 2, 
    name: "Prismacer", 
    logo: "https://customer-assets.emergentagent.com/job_constructsupply/artifacts/j5sxzbsi_PRISMACER%20FINAL.png" 
  },
  { 
    id: 3, 
    name: "Kerakoll", 
    logo: "https://customer-assets.emergentagent.com/job_constructsupply/artifacts/c25otyzm_KERAKOLL%20FINAL.png" 
  },
  { 
    id: 4, 
    name: "Cofan", 
    logo: "https://customer-assets.emergentagent.com/job_constructsupply/artifacts/do1x43d1_COGAN%20FINAL.png" 
  },
  { 
    id: 5, 
    name: "Preceram", 
    logo: "https://customer-assets.emergentagent.com/job_constructsupply/artifacts/t5dqm8zs_PRECERAM%20FINAL.png" 
  },
  { 
    id: 6, 
    name: "COS", 
    logo: "https://customer-assets.emergentagent.com/job_constructsupply/artifacts/z428i84z_COS%20FINAL.png" 
  },
  { 
    id: 7, 
    name: "Fassa Bortolo", 
    logo: "https://customer-assets.emergentagent.com/job_constructsupply/artifacts/9o80rrnj_FASSA%20BARTOLO%20FINAL.png" 
  },
  { 
    id: 8, 
    name: "Secil", 
    logo: "https://customer-assets.emergentagent.com/job_constructsupply/artifacts/p7lg0f8j_SECIL_Logo.png" 
  }
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