import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Package, Paintbrush, Cog, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Conserto de Cadeiras",
    description: "Reparo de estruturas, rodízios, pistões e mecanismos de cadeiras de escritório"
  },
  {
    icon: Paintbrush,
    title: "Estofamento",
    description: "Troca completa ou parcial de estofamento com tecidos e couros de alta qualidade"
  },
  {
    icon: Package,
    title: "Montagem de Móveis",
    description: "Montagem profissional de móveis de escritório com precisão e agilidade"
  },
  {
    icon: Cog,
    title: "Manutenção Preventiva",
    description: "Inspeção e ajustes periódicos para prolongar a vida útil dos móveis"
  },
  {
    icon: Shield,
    title: "Reforço Estrutural",
    description: "Reforço e substituição de peças estruturais para garantir segurança"
  },
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description: "Coleta e entrega no local com prazos ágeis para sua comodidade"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            O Que Fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas para conserto, manutenção e montagem de móveis para escritório
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-accent transition-all hover:shadow-lg group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
