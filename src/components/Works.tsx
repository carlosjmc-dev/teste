import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Loader2 } from "lucide-react";

interface WorkImage {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
}

const Works = () => {
  const [works, setWorks] = useState<WorkImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    try {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .eq("category", "works")
        .order("display_order", { ascending: true });

      if (error) throw error;
      setWorks(data || []);
    } catch (error) {
      console.error("Error fetching works:", error);
    } finally {
      setLoading(false);
    }
  };

  const lightboxSlides = works.map(work => ({
    src: work.image_url,
    alt: work.title
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (loading) {
    return (
      <section id="trabalhos" className="py-24 bg-background">
        <div className="container mx-auto px-4 flex justify-center items-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  return (
    <section id="trabalhos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Nosso Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Trabalhos Realizados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira alguns dos nossos serviços de manutenção e conserto
          </p>
        </div>

        {works.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Nenhum trabalho disponível no momento.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {works.map((work, index) => (
              <Card key={work.id} className="overflow-hidden bg-card border-border hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative group cursor-pointer" onClick={() => openLightbox(index)}>
                  <img 
                    src={work.image_url} 
                    alt={work.title}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{work.title}</h3>
                  <p className="text-muted-foreground text-sm">{work.description}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </section>
  );
};

export default Works;
