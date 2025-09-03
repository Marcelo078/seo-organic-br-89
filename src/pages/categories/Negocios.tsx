import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { Briefcase } from "lucide-react";

const Negocios = () => {
  useEffect(() => {
    document.title = "Negócios e Empreendedorismo - Construa Seu Império Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Métodos e estratégias para construir negócios lucrativos. Do zero ao primeiro milhão com técnicas comprovadas.');
    }
  }, []);

  const products = [
    {
      title: "Método Delivery de Sucesso",
      description: "Aprenda a montar e escalar um negócio de delivery lucrativo. Estratégias comprovadas para dominar o mercado local.",
      highlights: [
        "Sistema completo de delivery",
        "Estratégias de marketing local",
        "Gestão operacional eficiente",
        "Cases de sucesso reais"
      ],
      ctaText: "Começar Meu Delivery",
      primaryLink: "https://kiwify.app/LPGXVer?afid=Eq7whBMe",
      category: "Negócios"
    },
    {
      title: "Academia da Riqueza Digital",
      description: "Formação completa para construir riqueza no ambiente digital. Métodos testados para gerar múltiplas fontes de renda online.",
      highlights: [
        "Múltiplas fontes de renda",
        "Estratégias de investimento",
        "Negócios digitais escaláveis",
        "Mentorias exclusivas"
      ],
      ctaText: "Ingressar na Academia",
      primaryLink: "https://kiwify.app/Xoqjz5T?afid=JbfKYymn",
      category: "Negócios"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="article-content py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Negócios e Empreendedorismo
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Construa seu império digital com métodos comprovados. Negócios escaláveis, 
            estratégias de renda passiva e técnicas para dominar o mercado online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/"
            className="btn-accent inline-flex items-center"
          >
            ← Voltar ao Início
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Negocios;