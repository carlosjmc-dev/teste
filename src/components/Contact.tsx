import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock, MessageCircle, Instagram, Mail } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5531993123194", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/silvamanutencaoe/?utm_source=qr&igsh=MXIzcGFsOTJqeG00OQ%3D%3D#", "_blank");
  };

  const handleLocationClick = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=R.+Cel.+Francisco+Antônio+Pereira,+134+-+Ressaca,+Contagem+-+MG,+32113-360", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:silvamanutencaomontagem@gmail.com";
  };

  const handlePhoneClick = () => {
    window.open("https://wa.me/5531984197238", "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Entre em Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso e descubra como podemos ajudar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-accent to-accent/90 text-white p-8 md:p-12 text-center mb-8">
            <MessageCircle className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Atendimento via WhatsApp</h3>
            <p className="text-white/90 text-lg mb-8">
              Entre em contato agora mesmo e receba seu orçamento personalizado
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-white text-accent hover:bg-white/90 text-lg px-8 py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              (31) 99312-3194
            </Button>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={handleWhatsAppClick}>
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Telefone</h4>
              <p className="text-muted-foreground">(31) 99312-3194</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={handlePhoneClick}>
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Telefone Alternativo</h4>
              <p className="text-muted-foreground">(31) 98419-7238</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={handleEmailClick}>
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">E-mail</h4>
              <p className="text-muted-foreground break-all">silvamanutencaomontagem@gmail.com</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={handleLocationClick}>
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Atendimento</h4>
              <p className="text-muted-foreground">Belo Horizonte e Região</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={handleInstagramClick}>
              <Instagram className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Instagram</h4>
              <p className="text-muted-foreground">@silvamanutencaoe</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Horário</h4>
              <p className="text-muted-foreground">Seg - Sex: 8h às 18h</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
