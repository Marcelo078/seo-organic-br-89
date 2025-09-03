const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Oportunidades Brasil
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Seu portal de confiança para descobrir as melhores oportunidades de crescimento profissional e pessoal no Brasil. 
              Analisamos e apresentamos produtos, cursos e métodos que realmente funcionam.
            </p>
            <p className="text-sm text-muted-foreground">
              Este site contém links de afiliados. Podemos receber uma comissão por compras realizadas através dos nossos links, 
              sem custo adicional para você.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li><a href="/categoria/marketing-digital" className="text-muted-foreground hover:text-primary transition-colors">Marketing Digital</a></li>
              <li><a href="/categoria/receitas" className="text-muted-foreground hover:text-primary transition-colors">Receitas</a></li>
              <li><a href="/categoria/milhas" className="text-muted-foreground hover:text-primary transition-colors">Milhas</a></li>
              <li><a href="/categoria/negocios" className="text-muted-foreground hover:text-primary transition-colors">Negócios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Informações</h4>
            <ul className="space-y-2">
              <li><a href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="/contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              <li><a href="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="/termos" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Oportunidades Brasil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;