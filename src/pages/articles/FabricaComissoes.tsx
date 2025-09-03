import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAButton from "../../components/CTAButton";
import FAQ from "../../components/FAQ";
import { CheckCircle, TrendingUp, DollarSign, Users } from "lucide-react";

const FabricaComissoes = () => {
  useEffect(() => {
    document.title = "Fábrica de Comissões por Deborah Oliveira - Como Ganhar R$ 5.000+ por Mês";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra o método da Deborah Oliveira que já ajudou milhares de pessoas a ganhar R$ 5.000+ por mês com afiliados. Estratégias comprovadas para 2024.');
    }
  }, []);

  const faqItems = [
    {
      question: "O que é a Fábrica de Comissões?",
      answer: "É um método completo desenvolvido pela Deborah Oliveira que ensina como ganhar dinheiro na internet através de marketing de afiliados, com estratégias comprovadas e testadas."
    },
    {
      question: "Preciso ter experiência prévia?",
      answer: "Não! O método foi desenvolvido para iniciantes, com passo a passo detalhado desde o básico até estratégias avançadas."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados podem aparecer em 30 dias, mas seguindo o método corretamente, muitos alunos relatam ganhos significativos em 60-90 dias."
    },
    {
      question: "Existe suporte disponível?",
      answer: "Sim! O curso inclui suporte direto com a equipe da Deborah e acesso a uma comunidade exclusiva de alunos."
    },
    {
      question: "O método funciona para qualquer nicho?",
      answer: "Sim, as estratégias ensinadas podem ser aplicadas em diversos nichos de mercado, desde que você siga o passo a passo corretamente."
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
            <span className="text-muted-foreground text-sm">• 8 min de leitura</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Fábrica de Comissões: Como Deborah Oliveira Ensina a Ganhar R$ 5.000+ por Mês
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Descubra o método que já transformou a vida de milhares de pessoas no Brasil, 
            ensinando estratégias reais de marketing de afiliados que realmente funcionam.
          </p>

          <div className="text-center mb-12">
            <CTAButton 
              href="https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM"
              text="🔥 Garantir Minha Vaga Agora"
              variant="success"
              size="lg"
            />
          </div>
        </div>

        {/* Problema */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            O Problema que Milhões de Brasileiros Enfrentam
          </h2>
          
          <p className="mb-4">
            <strong>Você já se sentiu frustrado tentando ganhar dinheiro na internet?</strong> Não está sozinho. 
            Milhões de brasileiros sonham em ter uma renda extra ou até mesmo trabalhar 100% online, 
            mas acabam se perdendo em meio a tantas informações desencontradas na internet.
          </p>
          
          <p className="mb-4">
            A verdade é que <strong>95% das pessoas que tentam ganhar dinheiro online falham</strong> porque:
          </p>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
              <span>Não têm um método estruturado para seguir</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
              <span>Seguem "gurus" que vendem ilusões sem fundamento</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
              <span>Não sabem escolher os produtos certos para promover</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
              <span>Não dominam as estratégias de tráfego e conversão</span>
            </li>
          </ul>

          <div className="text-center">
            <CTAButton 
              href="https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM"
              text="Quero Aprender o Método Correto"
              variant="primary"
            />
          </div>
        </section>

        {/* Solução */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            A Solução: Método Fábrica de Comissões
          </h2>
          
          <p className="mb-6">
            <strong>Deborah Oliveira</strong> é uma das maiores especialistas em marketing de afiliados do Brasil. 
            Com mais de 8 anos de experiência, ela já ajudou milhares de pessoas a saírem do zero e 
            construírem negócios digitais rentáveis.
          </p>
          
          <div className="bg-success/10 border border-success/20 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-success">
              📈 Resultados Comprovados da Deborah:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-success" />
                <span>Mais de R$ 10 milhões gerados em comissões</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-success" />
                <span>+50.000 alunos transformados</span>
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-success" />
                <span>Cases de alunos ganhando R$ 30k+ por mês</span>
              </li>
            </ul>
          </div>

          <p className="mb-6">
            O <strong>método Fábrica de Comissões</strong> é resultado de anos de testes, erros e acertos. 
            É um sistema completo que elimina as tentativas e erros, mostrando exatamente o que fazer 
            para construir uma máquina de vendas online.
          </p>
        </section>

        {/* CTA Meio */}
        <div className="text-center mb-12 bg-accent/5 border border-accent/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            🚀 Não Perca Esta Oportunidade Única!
          </h3>
          <p className="text-lg mb-6">
            Milhares de pessoas já transformaram suas vidas com este método. 
            <strong>Você será a próxima?</strong>
          </p>
          <CTAButton 
            href="https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM"
            text="Quero Começar Agora"
            variant="accent"
            size="lg"
          />
        </div>

        {/* Conteúdo do Método */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            O Que Você Vai Aprender na Fábrica de Comissões
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                🎯 Módulo 1: Fundamentos
              </h3>
              <ul className="space-y-2">
                <li>• Como escolher o nicho perfeito</li>
                <li>• Análise de produtos vencedores</li>
                <li>• Configuração de ferramentas essenciais</li>
                <li>• Mindset do afiliado de sucesso</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                📱 Módulo 2: Criação de Conteúdo
              </h3>
              <ul className="space-y-2">
                <li>• Templates de posts que convertem</li>
                <li>• Storytelling que vende</li>
                <li>• Criação de vídeos persuasivos</li>
                <li>• Design para não-designers</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                🚀 Módulo 3: Tráfego
              </h3>
              <ul className="space-y-2">
                <li>• Tráfego orgânico que funciona</li>
                <li>• Estratégias para redes sociais</li>
                <li>• Tráfego pago do zero ao avançado</li>
                <li>• Growth hacking comprovado</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                💰 Módulo 4: Conversão
              </h3>
              <ul className="space-y-2">
                <li>• Páginas de vendas que convertem</li>
                <li>• Técnicas de persuasão avançadas</li>
                <li>• Automação de vendas</li>
                <li>• Métricas e otimização</li>
              </ul>
            </div>
          </div>

          <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-warning">
              🎁 Bônus Exclusivos Inclusos:
            </h3>
            <ul className="space-y-2">
              <li>• Templates prontos para usar</li>
              <li>• Scripts de vendas testados</li>
              <li>• Comunidade VIP no Telegram</li>
              <li>• Mentorias ao vivo semanais</li>
              <li>• Certificado de conclusão</li>
            </ul>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            O Que os Alunos Estão Dizendo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="mb-4 italic">
                "Em 3 meses aplicando o método da Deborah, consegui minha primeira comissão de R$ 2.500. 
                Hoje, 8 meses depois, já tiro mais de R$ 15.000 por mês!"
              </p>
              <div className="font-semibold">— Maria Silva, São Paulo</div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="mb-4 italic">
                "Estava desempregado e desesperado. O método da Fábrica de Comissões mudou minha vida. 
                Hoje ganho mais como afiliado do que no meu antigo emprego!"
              </p>
              <div className="font-semibold">— João Santos, Rio de Janeiro</div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="mb-12 text-center bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            🔥 Oferta Especial - Por Tempo Limitado!
          </h2>
          
          <p className="text-xl mb-6">
            Esta é sua chance de aprender com quem realmente entende do assunto. 
            <strong>Não deixe essa oportunidade passar!</strong>
          </p>
          
          <div className="space-y-4">
            <CTAButton 
              href="https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM"
              text="🎯 Garantir Minha Vaga Agora"
              variant="success"
              size="lg"
            />
            <br />
            <CTAButton 
              href="https://kiwify.app/8Rj75xp?afid=P8U9TjQM"
              text="Link Alternativo"
              variant="accent"
            />
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Suporte completo
          </p>
        </section>

        {/* FAQ */}
        <FAQ items={faqItems} />

        {/* CTA Bottom */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Pronto para Transformar Sua Vida Financeira?
          </h3>
          <CTAButton 
            href="https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM"
            text="Começar Minha Jornada Agora"
            variant="primary"
            size="lg"
          />
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default FabricaComissoes;