import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAButton from "../../components/CTAButton";
import FAQ from "../../components/FAQ";
import { ChefHat, DollarSign, Clock, BookOpen } from "lucide-react";

const ReceitasBolos = () => {
  useEffect(() => {
    document.title = "700 Receitas de Bolos Lucrativos - Guia Completo para Confeiteiras";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Coleção com 700 receitas testadas de bolos para vender e lucrar. Inclui cálculo de custos, precificação e dicas de vendas.');
    }
  }, []);

  const faqItems = [
    {
      question: "As receitas foram testadas?",
      answer: "Sim! Todas as 700 receitas foram testadas e aprovadas. Cada uma vem com foto do resultado final e dicas especiais."
    },
    {
      question: "Vem com cálculo de custos?",
      answer: "Sim! Cada receita inclui planilha com custos detalhados dos ingredientes e sugestão de preço de venda para garantir lucratividade."
    },
    {
      question: "Posso usar para vender?",
      answer: "Claro! O material foi criado especificamente para quem quer empreender no ramo de confeitaria e bolos sob encomenda."
    },
    {
      question: "Serve para iniciantes?",
      answer: "Perfeitamente! As receitas vêm com passo a passo detalhado, dicas técnicas e truques para garantir o sucesso."
    },
    {
      question: "Recebo atualizações?",
      answer: "Sim! Mensalmente adicionamos novas receitas e você recebe todas as atualizações gratuitamente."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="article-content py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
              Receitas
            </span>
            <span className="text-muted-foreground text-sm">• 7 min de leitura</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            700 Receitas de Bolos: O Guia Completo para Lucrar com Confeitaria
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Descubra a coleção mais completa de receitas de bolos do Brasil, 
            com custos calculados e estratégias para transformar sua paixão em renda.
          </p>

          <div className="text-center mb-12">
            <CTAButton 
              href="https://kiwify.app/Ae5oNZe?afid=eDWLErf4"
              text="🍰 Garantir Minhas Receitas"
              variant="accent"
              size="lg"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            O Sonho de Ganhar Dinheiro com Bolos
          </h2>
          
          <p className="mb-4">
            <strong>Você já imaginou transformar sua paixão por confeitaria em uma fonte de renda?</strong> 
            Milhares de brasileiras sonham em trabalhar de casa, fazendo bolos deliciosos e 
            lucrando com cada encomenda.
          </p>
          
          <p className="mb-6">
            Mas a realidade é que <strong>80% das confeiteiras iniciantes falham</strong> nos primeiros 6 meses porque:
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-destructive">
              ❌ Principais Problemas das Confeiteiras:
            </h3>
            <ul className="space-y-2">
              <li>• Não sabem calcular o preço correto de venda</li>
              <li>• Usam receitas que não dão certo</li>
              <li>• Não conhecem técnicas profissionais</li>
              <li>• Falta de variedade no cardápio</li>
              <li>• Não sabem como precificar o trabalho</li>
            </ul>
          </div>

          <p className="mb-6">
            <strong>E se você tivesse acesso a 700 receitas testadas</strong>, com custos já calculados 
            e preços de venda sugeridos? Sua vida mudaria completamente!
          </p>

          <div className="text-center">
            <CTAButton 
              href="https://kiwify.app/Ae5oNZe?afid=eDWLErf4"
              text="Quero Começar a Lucrar"
              variant="primary"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Por Que Esta Coleção é Única?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center bg-card border border-border rounded-xl p-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">700</h3>
              <p className="text-muted-foreground">Receitas Testadas</p>
            </div>
            
            <div className="text-center bg-card border border-border rounded-xl p-6">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground">100%</h3>
              <p className="text-muted-foreground">Custos Calculados</p>
            </div>
            
            <div className="text-center bg-card border border-border rounded-xl p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Pro</h3>
              <p className="text-muted-foreground">Técnicas Profissionais</p>
            </div>
            
            <div className="text-center bg-card border border-border rounded-xl p-6">
              <div className="bg-warning/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-xl font-bold text-foreground">24h</h3>
              <p className="text-muted-foreground">Acesso Imediato</p>
            </div>
          </div>

          <div className="bg-success/10 border border-success/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-success">
              🎯 O Que Torna Esta Coleção Especial:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>• Receitas organizadas por categoria</li>
                <li>• Fotos de cada bolo pronto</li>
                <li>• Planilha de custos em Excel</li>
                <li>• Dicas de decoração incluídas</li>
              </ul>
              <ul className="space-y-2">
                <li>• Técnicas de conservação</li>
                <li>• Variações de sabores</li>
                <li>• Receitas sem glúten e veganas</li>
                <li>• Suporte para dúvidas</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center mb-12 bg-accent/5 border border-accent/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            🎂 Transforme Sua Cozinha em um Negócio Lucrativo
          </h3>
          <p className="text-lg mb-6">
            Pare de chutar preços e usar receitas duvidosas. 
            <strong>Tenha em mãos um arsenal completo</strong> para dominar o mercado de bolos!
          </p>
          <CTAButton 
            href="https://kiwify.app/Ae5oNZe?afid=eDWLErf4"
            text="Quero Ser uma Confeiteira de Sucesso"
            variant="accent"
            size="lg"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            O Que Você Vai Encontrar na Coleção
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                🍰 Bolos Clássicos (200 receitas)
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• Bolo de cenoura com cobertura</li>
                <li>• Bolo de chocolate molhadinho</li>
                <li>• Bolo de fubá cremoso</li>
                <li>• Bolo de laranja simples</li>
                <li>• Bolo prestígio gourmet</li>
                <li>• E muito mais...</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                🎂 Bolos Decorados (150 receitas)
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• Bolos de aniversário temáticos</li>
                <li>• Naked cakes românticos</li>
                <li>• Bolos com flores comestíveis</li>
                <li>• Drip cakes coloridos</li>
                <li>• Bolos com pasta americana</li>
                <li>• E muito mais...</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                🧁 Cupcakes e Mini Bolos (200 receitas)
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• Cupcakes gourmet variados</li>
                <li>• Mini bolos para festas</li>
                <li>• Muffins doces e salgados</li>
                <li>• Brigadeiros gourmet</li>
                <li>• Cake pops decorados</li>
                <li>• E muito mais...</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                🌱 Especiais (150 receitas)
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• Bolos sem glúten</li>
                <li>• Opções veganas</li>
                <li>• Bolos diet e light</li>
                <li>• Receitas funcionais</li>
                <li>• Bolos para diabéticos</li>
                <li>• E muito mais...</li>
              </ul>
            </div>
          </div>

          <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-warning">
              🎁 Bônus Exclusivos Inclusos:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-1 text-sm">
                <li>• Planilha completa de custos</li>
                <li>• Guia de precificação</li>
                <li>• E-book "Como Vender Bolos"</li>
                <li>• Templates para redes sociais</li>
              </ul>
              <ul className="space-y-1 text-sm">
                <li>• Vídeos de técnicas especiais</li>
                <li>• Grupo VIP no WhatsApp</li>
                <li>• Certificado de confeiteira</li>
                <li>• Atualizações mensais grátis</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Depoimentos de Confeiteiras de Sucesso
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-4">
                <div className="text-2xl font-bold text-success">R$ 3.200</div>
                <div className="text-sm text-muted-foreground">lucro no primeiro mês</div>
              </div>
              <p className="mb-4 italic">
                "Com as receitas e os custos calculados, consegui precificar corretamente meus bolos. 
                Agora sei exatamente quanto lucro com cada encomenda!"
              </p>
              <div className="font-semibold">— Carla Santos, Confeiteira</div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-4">
                <div className="text-2xl font-bold text-success">50+</div>
                <div className="text-sm text-muted-foreground">encomendas por mês</div>
              </div>
              <p className="mb-4 italic">
                "A variedade de receitas me permitiu ter um cardápio completo. 
                Meus clientes sempre encontram algo novo e delicioso!"
              </p>
              <div className="font-semibold">— Rita Oliveira, Doces da Rita</div>
            </div>
          </div>
        </section>

        <section className="mb-12 text-center bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            🔥 Oferta Especial para Confeiteiras Empreendedoras!
          </h2>
          
          <p className="text-xl mb-6">
            Não perca tempo tentando adivinhar receitas e preços. 
            <strong>Tenha tudo pronto e comece a lucrar hoje mesmo!</strong>
          </p>
          
          <div className="space-y-4">
            <CTAButton 
              href="https://kiwify.app/Ae5oNZe?afid=eDWLErf4"
              text="🎯 Quero Ser uma Confeiteira de Sucesso"
              variant="success"
              size="lg"
            />
            <br />
            <CTAButton 
              href="https://kiwify.app/u9RYKjS?afid=eDWLErf4"
              text="Link Alternativo"
              variant="accent"
            />
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            ✅ Acesso imediato • ✅ Todas as 700 receitas • ✅ Bônus inclusos
          </p>
        </section>

        <FAQ items={faqItems} />

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Sua Jornada como Confeiteira Empreendedora Começa Agora!
          </h3>
          <CTAButton 
            href="https://kiwify.app/Ae5oNZe?afid=eDWLErf4"
            text="Garantir Minhas 700 Receitas"
            variant="primary"
            size="lg"
          />
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default ReceitasBolos;