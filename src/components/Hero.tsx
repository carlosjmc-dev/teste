import { Button } from "@/components/ui/button";
import { Phone, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5531993123194", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <Wrench className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Especialistas em Móveis de Escritório
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Devolvemos Vida aos Seus{" "}
            <span className="text-accent">Móveis</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl animate-fade-in">
            Conserto, manutenção e montagem profissional de móveis para escritório. 
            Qualidade e durabilidade para seu ambiente de trabalho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white/20 bg-white/10 hover:bg-white/20 text-white text-lg px-8 py-6 backdrop-blur-sm"
            >
              Conheça os Serviços
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">25+</div>
              <div className="text-sm text-gray-400">Anos de Experiência</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">5000+</div>
              <div className="text-sm text-gray-400">Móveis Restaurados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-gray-400">Satisfação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
