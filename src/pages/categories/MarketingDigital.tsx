import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { TrendingUp } from "lucide-react";

const MarketingDigital = () => {
  useEffect(() => {
    document.title = "Marketing Digital - Melhores Cursos e Métodos 2024";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra os melhores cursos de marketing digital do Brasil. Métodos comprovados para gerar renda online e construir seu negócio digital.');
    }
  }, []);

  const products = [
    {
      title: "Fábrica de Comissões",
      description: "Método completo da Deborah Oliveira para gerar renda através de marketing de afiliados. Estratégias comprovadas que já geraram milhões.",
      highlights: [
        "Método passo a passo para iniciantes",
        "Estratégias de tráfego orgânico e pago", 
        "Suporte especializado da equipe",
        "Cases de sucesso reais"
      ],
      ctaText: "Começar Agora",
      primaryLink: "https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM",
      secondaryLink: "https://kiwify.app/8Rj75xp?afid=P8U9TjQM",
      category: "Afiliados"
    },
    {
      title: "Shorts Virais",
      description: "Aprenda as fórmulas secretas para viralizar no YouTube Shorts. Técnicas utilizadas pelos maiores criadores de conteúdo brasileiro.",
      highlights: [
        "15 fórmulas de roteiros virais",
        "Técnicas de edição profissional",
        "Estratégias de monetização",
        "Banco com 500+ ideias"
      ],
      ctaText: "Viralizar Agora", 
      primaryLink: "https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky",
      secondaryLink: "https://kiwify.app/obq34JI?afid=HqmgdEky",
      category: "YouTube"
    },
    {
      title: "Influencer Milionário LEGACY",
      description: "Transforme-se em um influenciador de sucesso e monetize sua audiência. Estratégias avançadas para construir autoridade online.",
      highlights: [
        "Estratégias de personal branding",
        "Técnicas de engajamento",
        "Monetização de audiência",
        "Crescimento acelerado"
      ],
      ctaText: "Ser um Influencer",
      primaryLink: "https://kiwify.app/ge9QR3E?afid=alNgRff5",
      secondaryLink: "https://pay.kiwify.com.br/gFQbHBB?afid=alNgRff5", 
      category: "Influencer"
    },
    {
      title: "Super Presell",
      description: "Domine a arte das vendas online com técnicas de pré-venda que convertem. Aumente drasticamente suas conversões.",
      highlights: [
        "Técnicas de persuasão avançadas",
        "Scripts de vendas testados",
        "Páginas de alta conversão",
        "Automação de vendas"
      ],
      ctaText: "Dominar Vendas",
      primaryLink: "https://kiwify.app/qeDlA3h?afid=6Kybii5i",
      category: "Vendas"
    },
    {
      title: "Academia da Riqueza Digital", 
      description: "Construa múltiplas fontes de renda online. Um ecossistema completo para criar e escalar negócios digitais lucrativos.",
      highlights: [
        "Múltiplas fontes de renda",
        "Negócios escaláveis",
        "Mentoria especializada", 
        "Comunidade exclusiva"
      ],
      ctaText: "Entrar na Academia",
      primaryLink: "https://kiwify.app/Xoqjz5T?afid=JbfKYymn",
      category: "Negócios"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
              Marketing Digital
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Melhores Cursos de <span className="text-primary">Marketing Digital</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra os cursos e métodos mais eficazes para construir seu negócio online. 
            Selecionamos apenas produtos com resultados comprovados no mercado brasileiro.
          </p>
        </div>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Início
          </Link>
          <span className="text-muted-foreground">•</span>
          <span className="text-foreground font-medium">Marketing Digital</span>
        </nav>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-card border border-border rounded-xl p-6">
            <div className="text-2xl font-bold text-primary">5</div>
            <div className="text-muted-foreground">Produtos</div>
          </div>
          <div className="text-center bg-card border border-border rounded-xl p-6">
            <div className="text-2xl font-bold text-success">+10k</div>
            <div className="text-muted-foreground">Alunos</div>
          </div>
          <div className="text-center bg-card border border-border rounded-xl p-6">
            <div className="text-2xl font-bold text-accent">98%</div>
            <div className="text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center bg-card border border-border rounded-xl p-6">
            <div className="text-2xl font-bold text-warning">4.8★</div>
            <div className="text-muted-foreground">Avaliação</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Encontrou o Que Estava Procurando?
          </h2>
          <p className="text-muted-foreground mb-6">
            Explore outras categorias ou volte à página inicial para descobrir mais oportunidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="btn-primary inline-flex items-center justify-center"
            >
              Voltar ao Início
            </Link>
            <Link 
              to="/categoria/receitas"
              className="btn-accent inline-flex items-center justify-center"
            >
              Ver Receitas
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MarketingDigital;