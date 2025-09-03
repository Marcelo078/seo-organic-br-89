import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { ChefHat } from "lucide-react";

const Receitas = () => {
  useEffect(() => {
    document.title = "Receitas para Ganhar Dinheiro - Coleções Completas 2024";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'As melhores coleções de receitas para empreender. Receitas testadas, custos calculados e dicas para lucrar com confeitaria.');
    }
  }, []);

  const products = [
    {
      title: "700 Receitas de Bolos",
      description: "Coleção completa com receitas testadas de bolos para vender e lucrar. Inclui cálculo de custos, precificação e dicas de vendas para confeiteiras.",
      highlights: [
        "700 receitas testadas e aprovadas",
        "Planilha completa de custos",
        "Guia de precificação profissional",
        "Bônus: vídeos de técnicas especiais"
      ],
      ctaText: "Ver Receitas",
      primaryLink: "https://kiwify.app/Ae5oNZe?afid=eDWLErf4",
      secondaryLink: "https://kiwify.app/u9RYKjS?afid=eDWLErf4",
      category: "Confeitaria"
    },
    {
      title: "Método Delivery de Sucesso",
      description: "Aprenda como montar e escalar um negócio de delivery lucrativo. Estratégias para dominar o mercado local de comida.",
      highlights: [
        "Planejamento completo do negócio",
        "Estratégias de marketing local",
        "Gestão de custos e operações",
        "Cases de sucesso reais"
      ],
      ctaText: "Começar Delivery",
      primaryLink: "https://kiwify.app/LPGXVer?afid=Eq7whBMe",
      category: "Delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="w-8 h-8 text-accent" />
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">
              Receitas & Gastronomia
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Receitas para <span className="text-accent">Empreender</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme sua paixão pela culinária em uma fonte de renda. 
            Coleções completas de receitas testadas com custos calculados e estratégias de vendas.
          </p>
        </div>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Início
          </Link>
          <span className="text-muted-foreground">•</span>
          <span className="text-foreground font-medium">Receitas</span>
        </nav>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-card border border-border rounded-xl p-6">
            <div className="text-2xl font-bold text-accent">700+</div>
            <div className="text-muted-foreground">Receitas</div>
          </div>
          <div className="text-center bg-card border border-border rounded-xl p-6">
            <div className="text-2xl font-bold text-success">100%</div>
            <div className="text-muted-foreground">Testadas</div>
          </div>
          <div className="text-center bg-card border border-border rounded-xl p-6">
            <div className="text-2xl font-bold text-primary">R$ 5k+</div>
            <div className="text-muted-foreground">Lucro Médio</div>
          </div>
          <div className="text-center bg-card border border-border rounded-xl p-6">
            <div className="text-2xl font-bold text-warning">4.9★</div>
            <div className="text-muted-foreground">Avaliação</div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
            Por Que Empreender com Receitas?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🏠</span>
              </div>
              <h3 className="font-semibold mb-2">Trabalhe de Casa</h3>
              <p className="text-sm text-muted-foreground">
                Monte seu negócio na sua própria cozinha, sem investimento inicial alto.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2">Alta Lucratividade</h3>
              <p className="text-sm text-muted-foreground">
                Margem de lucro entre 60-80% em bolos e doces bem precificados.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📈</span>
              </div>
              <h3 className="font-semibold mb-2">Mercado Crescente</h3>
              <p className="text-sm text-muted-foreground">
                Setor de doces artesanais cresce 15% ao ano no Brasil.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Pronta para Começar Seu Negócio?
          </h2>
          <p className="text-muted-foreground mb-6">
            Explore outras oportunidades ou descubra mais produtos que podem te interessar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="btn-primary inline-flex items-center justify-center"
            >
              Ver Todas as Oportunidades
            </Link>
            <Link 
              to="/categoria/marketing-digital"
              className="btn-accent inline-flex items-center justify-center"
            >
              Marketing Digital
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Receitas;