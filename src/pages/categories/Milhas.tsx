import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { Plane } from "lucide-react";

const Milhas = () => {
  useEffect(() => {
    document.title = "Milhas e Pontos - Maximize Suas Viagens com Menos Gastos";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aprenda a acumular milhas e pontos para viajar mais gastando menos. Dicas, estratégias e cursos para maximizar seus benefícios.');
    }
  }, []);

  const products = [
    {
      title: "Comunidade Milhas 3.0",
      description: "Entre na maior comunidade de acúmulo de milhas do Brasil. Aprenda as melhores estratégias para viajar gastando muito menos.",
      highlights: [
        "Estratégias de acúmulo comprovadas",
        "Comunidade ativa e colaborativa",
        "Dicas de promoções exclusivas",
        "Suporte especializado"
      ],
      ctaText: "Participar da Comunidade",
      primaryLink: "https://kiwify.app/ixrSBze?afid=U2Uv4XK5",
      secondaryLink: "https://kiwify.app/bXS0yyI?afid=U2Uv4XK5",
      category: "Milhas e Pontos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="article-content py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
              <Plane className="w-6 h-6 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Milhas e Pontos
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra como acumular milhas e pontos de forma inteligente para viajar mais gastando menos. 
            Estratégias comprovadas pelos maiores especialistas do Brasil.
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

export default Milhas;