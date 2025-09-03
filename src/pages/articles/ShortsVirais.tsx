import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAButton from "../../components/CTAButton";
import FAQ from "../../components/FAQ";
import { Play, TrendingUp, DollarSign, Eye } from "lucide-react";

const ShortsVirais = () => {
  useEffect(() => {
    document.title = "Shorts Virais - Fórmula Secreta para Viralizar no YouTube em 2024";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra as fórmulas secretas para criar Shorts virais no YouTube. Método comprovado usado pelos maiores criadores brasileiros.');
    }
  }, []);

  const faqItems = [
    {
      question: "Funciona mesmo para canal pequeno?",
      answer: "Sim! O método foi criado especialmente para quem está começando. Muitos alunos viralizaram com menos de 100 inscritos."
    },
    {
      question: "Preciso aparecer nos vídeos?",
      answer: "Não necessariamente! O curso ensina várias técnicas para criar conteúdo sem aparecer, usando apenas voz, textos e imagens."
    },
    {
      question: "Quanto tempo demora para viralizar?",
      answer: "Seguindo as fórmulas corretamente, alguns alunos conseguiram virais em menos de 7 dias. A consistência é fundamental."
    },
    {
      question: "Posso usar em qualquer nicho?",
      answer: "Sim! As fórmulas funcionam para qualquer nicho: entretenimento, educativo, negócios, lifestyle, etc."
    },
    {
      question: "Como vou monetizar os vídeos?",
      answer: "O curso ensina diversas formas: monetização do YouTube, afiliados, produtos próprios, consultorias e muito mais."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="article-content py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Marketing Digital
            </span>
            <span className="text-muted-foreground text-sm">• 6 min de leitura</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Shorts Virais: A Fórmula Secreta para Explodir no YouTube em 2024
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Descubra as estratégias exatas que os maiores criadores brasileiros usam para 
            conseguir milhões de visualizações e faturar alto com YouTube Shorts.
          </p>

          <div className="text-center mb-12">
            <CTAButton 
              href="https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky"
              text="🚀 Viralizar Agora"
              variant="success"
              size="lg"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Por Que 99% dos Criadores Nunca Conseguem Viralizar?
          </h2>
          
          <p className="mb-4">
            <strong>Você já se perguntou por que alguns vídeos explodem com milhões de views</strong> 
            enquanto outros, aparentemente similares, não passam de algumas centenas de visualizações?
          </p>
          
          <p className="mb-6">
            A verdade é que <strong>existe uma ciência por trás da viralização</strong>. 
            Não é sorte, não é acaso. São fórmulas específicas que poucos conhecem e aplicam corretamente.
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-destructive">
              ❌ Os Maiores Erros que Impedem a Viralização:
            </h3>
            <ul className="space-y-2">
              <li>• Não conhecer as "fórmulas de gancho" que prendem a atenção</li>
              <li>• Ignorar o algoritmo do YouTube e suas preferências</li>
              <li>• Criar conteúdo sem estratégia de engajamento</li>
              <li>• Não saber o momento certo para postar</li>
              <li>• Usar thumbnails e títulos que não convertem</li>
            </ul>
          </div>

          <div className="text-center">
            <CTAButton 
              href="https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky"
              text="Quero Conhecer as Fórmulas"
              variant="primary"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            O Método Shorts Virais: Resultados Comprovados
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center bg-card border border-border rounded-xl p-6">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">50M+</h3>
              <p className="text-muted-foreground">Views Gerados</p>
            </div>
            
            <div className="text-center bg-card border border-border rounded-xl p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">+1000</h3>
              <p className="text-muted-foreground">Alunos de Sucesso</p>
            </div>
            
            <div className="text-center bg-card border border-border rounded-xl p-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">R$ 100k+</h3>
              <p className="text-muted-foreground">Faturamento Alunos</p>
            </div>
          </div>

          <p className="mb-6">
            O <strong>método Shorts Virais</strong> é resultado de análise profunda de centenas de vídeos virais, 
            testes com algoritmo e descoberta dos padrões que realmente funcionam no YouTube brasileiro.
          </p>
          
          <div className="bg-success/10 border border-success/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-success">
              🎯 O Que Torna Este Método Único:
            </h3>
            <ul className="space-y-2">
              <li>• Fórmulas testadas e aprovadas pelo algoritmo atual</li>
              <li>• Templates prontos para usar em qualquer nicho</li>
              <li>• Estratégias de monetização desde o primeiro viral</li>
              <li>• Técnicas para manter o crescimento consistente</li>
              <li>• Sistema de criação em escala</li>
            </ul>
          </div>
        </section>

        <div className="text-center mb-12 bg-accent/5 border border-accent/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            ⚡ Transforme Seu Canal em Uma Máquina de Virais
          </h3>
          <p className="text-lg mb-6">
            Pare de criar conteúdo no escuro. <strong>Aprenda as fórmulas exatas</strong> 
            que garantem alta performance nos seus Shorts.
          </p>
          <CTAButton 
            href="https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky"
            text="Quero as Fórmulas Agora"
            variant="accent"
            size="lg"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            O Que Você Vai Encontrar no Curso
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Play className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Módulo 1: Fundamentos</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Como o algoritmo do YouTube realmente funciona</li>
                <li>• Análise completa de Shorts virais</li>
                <li>• Identificação do seu nicho perfeito</li>
                <li>• Configuração otimizada do canal</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Play className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Módulo 2: Criação</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• 15 fórmulas de roteiros virais</li>
                <li>• Técnicas de edição que prendem atenção</li>
                <li>• Criação sem aparecer no vídeo</li>
                <li>• Ferramentas gratuitas e pagas</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Play className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Módulo 3: Otimização</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Thumbnails que geram cliques</li>
                <li>• Títulos irresistíveis</li>
                <li>• Momento ideal para postar</li>
                <li>• Hashtags que funcionam</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Play className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Módulo 4: Monetização</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Múltiplas formas de monetizar</li>
                <li>• Estratégias de afiliados nos Shorts</li>
                <li>• Criação de produtos digitais</li>
                <li>• Escalonamento de resultados</li>
              </ul>
            </div>
          </div>

          <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-warning">
              🎁 Bônus Exclusivos do Curso:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-1 text-sm">
                <li>• Banco com 500+ ideias de conteúdo</li>
                <li>• Templates de roteiros prontos</li>
                <li>• Pack de músicas livres de direitos</li>
              </ul>
              <ul className="space-y-1 text-sm">
                <li>• Grupo VIP no Telegram</li>
                <li>• Lives mensais de atualização</li>
                <li>• Suporte por 6 meses</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Cases de Sucesso dos Nossos Alunos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-4">
                <div className="text-2xl font-bold text-success">2.3M visualizações</div>
                <div className="text-sm text-muted-foreground">em 1 semana</div>
              </div>
              <p className="mb-4 italic">
                "Aplicei a fórmula 7 e meu primeiro Shorts viralizou! 
                Eram só 200 inscritos, hoje tenho mais de 15k!"
              </p>
              <div className="font-semibold">— Ana Costa, Canal de Receitas</div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-4">
                <div className="text-2xl font-bold text-success">R$ 8.500</div>
                <div className="text-sm text-muted-foreground">em afiliados no primeiro mês</div>
              </div>
              <p className="mb-4 italic">
                "Nunca imaginei que poderia ganhar dinheiro assim. O método é simplesmente incrível!"
              </p>
              <div className="font-semibold">— Carlos Mendes, Canal de Tecnologia</div>
            </div>
          </div>
        </section>

        <section className="mb-12 text-center bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            🔥 Oferta Especial - Últimas Vagas!
          </h2>
          
          <p className="text-xl mb-6">
            O algoritmo muda constantemente. <strong>Quem aprender primeiro</strong> 
            sai na frente e domina o jogo. Não fique para trás!
          </p>
          
          <div className="space-y-4">
            <CTAButton 
              href="https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky"
              text="🎯 Garantir Minha Vaga"
              variant="success"
              size="lg"
            />
            <br />
            <CTAButton 
              href="https://kiwify.app/obq34JI?afid=HqmgdEky"
              text="Link Alternativo"
              variant="accent"
            />
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            ✅ Acesso vitalício • ✅ Garantia de 7 dias • ✅ Bônus inclusos
          </p>
        </section>

        <FAQ items={faqItems} />

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Sua Hora de Viralizar é Agora!
          </h3>
          <CTAButton 
            href="https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky"
            text="Começar Minha Jornada Viral"
            variant="primary"
            size="lg"
          />
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default ShortsVirais;