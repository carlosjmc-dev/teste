import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const benefits = [
    "Mais de 25 anos de experiência no mercado",
    "Equipe especializada e treinada",
    "Materiais de primeira qualidade",
    "Garantia em todos os serviços",
    "Atendimento personalizado",
    "Orçamento sem compromisso"
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Sobre Nós
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Silva Manutenção e Montagem
            </h2>
            <p className="text-gray-200 text-lg mb-6">
              Somos especialistas em devolver vida aos móveis de escritório. Com anos de experiência 
              e uma equipe altamente qualificada, oferecemos serviços de conserto, manutenção e 
              montagem para residências, escritórios e empresas.
            </p>
            <p className="text-gray-200 text-lg mb-8">
              Nossa missão é proporcionar qualidade, durabilidade e economia para nossos clientes, 
              transformando móveis desgastados em peças como novas, com acabamento profissional 
              e garantia de satisfação.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm text-gray-300">Anos de Experiência</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-sm text-gray-300">Clientes Atendidos</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">5000+</div>
              <div className="text-sm text-gray-300">Móveis Restaurados</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-gray-300">Satisfação</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
