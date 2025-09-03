import { Link } from "react-router-dom";
import { TrendingUp, Users, Award, Zap } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import CTAButton from "../components/CTAButton";

const Index = () => {
  const featuredProducts = [
    {
      title: "Fábrica de Comissões",
      description: "Método completo da Deborah Oliveira para gerar renda extra através de afiliados digitais. Aprenda as estratégias que já geraram milhões em comissões.",
      highlights: [
        "Estratégias de venda comprovadas",
        "Método passo a passo",
        "Suporte especializado",
        "Cases de sucesso reais"
      ],
      ctaText: "Começar Agora",
      primaryLink: "https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM",
      secondaryLink: "https://kiwify.app/8Rj75xp?afid=P8U9TjQM",
      category: "Marketing Digital",
      articleLink: "/fabrica-de-comissoes"
    },
    {
      title: "Shorts Virais",
      description: "Descubra como criar conteúdo viral no YouTube Shorts e monetizar suas criações. Técnicas utilizadas pelos maiores criadores de conteúdo.",
      highlights: [
        "Fórmulas de viralização",
        "Estratégias de monetização",
        "Templates prontos para usar",
        "Análise de algoritmos"
      ],
      ctaText: "Viralizar Agora",
      primaryLink: "https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky",
      secondaryLink: "https://kiwify.app/obq34JI?afid=HqmgdEky",
      category: "Marketing Digital",
      articleLink: "/shorts-virais"
    },
    {
      title: "700 Receitas de Bolos",
      description: "Coleção completa com as melhores receitas de bolos para vender e lucrar. Receitas testadas e aprovadas com custos calculados.",
      highlights: [
        "700 receitas testadas",
        "Cálculo de custos incluído",
        "Dicas de precificação",
        "Receitas exclusivas"
      ],
      ctaText: "Ver Receitas",
      primaryLink: "https://kiwify.app/Ae5oNZe?afid=eDWLErf4",
      secondaryLink: "https://kiwify.app/u9RYKjS?afid=eDWLErf4",
      category: "Receitas",
      articleLink: "/700-receitas-bolos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Descubra as <span className="text-primary">Melhores Oportunidades</span> do Brasil
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Cursos, produtos e métodos comprovados para impulsionar sua carreira e renda. 
            Analisamos e recomendamos apenas o que realmente funciona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="#produtos-destaque"
              text="Ver Oportunidades"
              variant="primary"
              size="lg"
            />
            <CTAButton 
              href="/categoria/marketing-digital"
              text="Marketing Digital"
              variant="accent"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">+50</h3>
              <p className="text-muted-foreground">Produtos Analisados</p>
            </div>
            <div className="text-center">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">+10k</h3>
              <p className="text-muted-foreground">Pessoas Ajudadas</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">98%</h3>
              <p className="text-muted-foreground">Satisfação</p>
            </div>
            <div className="text-center">
              <div className="bg-warning/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">24h</h3>
              <p className="text-muted-foreground">Suporte Rápido</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="produtos-destaque" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Selecionamos as melhores oportunidades para você começar a transformar sua vida hoje mesmo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/categoria/marketing-digital"
              className="btn-accent inline-flex items-center"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Explore por Categoria
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Marketing Digital", href: "/categoria/marketing-digital", count: "5 produtos" },
              { name: "Receitas", href: "/categoria/receitas", count: "2 produtos" },
              { name: "Milhas", href: "/categoria/milhas", count: "1 produto" },
              { name: "Negócios", href: "/categoria/negocios", count: "2 produtos" }
            ].map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
