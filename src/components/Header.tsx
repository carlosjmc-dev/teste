import { Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAdmin } = useAuth();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5531993123194", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-foreground">
          Silva <span className="text-accent">Manutenção e Montagem</span>
        </h1>
        
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("antes-depois")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Galeria
          </button>
          {isAdmin && (
            <Link to="/admin">
              <button className="text-foreground hover:text-accent transition-colors flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Admin
              </button>
            </Link>
          )}
        </div>

        <Button 
          onClick={handleWhatsAppClick}
          className="bg-accent hover:bg-accent/90 text-white"
        >
          <Phone className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Contato</span>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
