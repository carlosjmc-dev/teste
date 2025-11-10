import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Loader2 } from "lucide-react";

interface BeforeAfterPair {
  id: string;
  title: string;
  description: string | null;
  before: string;
  after: string;
}

const BeforeAfter = () => {
  const [items, setItems] = useState<BeforeAfterPair[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<{ src: string; alt: string }[]>([]);

  useEffect(() => {
    fetchBeforeAfter();
  }, []);

  const fetchBeforeAfter = async () => {
    try {
      // Fetch both before and after images
      const { data: beforeImages, error: beforeError } = await supabase
        .from("gallery_images")
        .select("*")
        .eq("category", "before_after_before")
        .order("display_order", { ascending: true });

      const { data: afterImages, error: afterError } = await supabase
        .from("gallery_images")
        .select("*")
        .eq("category", "before_after_after")
        .order("display_order", { ascending: true });

      if (beforeError) throw beforeError;
      if (afterError) throw afterError;

      // Pair up before and after images by display_order
      const pairs: BeforeAfterPair[] = [];
      const maxLength = Math.max(beforeImages?.length || 0, afterImages?.length || 0);
      
      for (let i = 0; i < maxLength; i++) {
        const before = beforeImages?.[i];
        const after = afterImages?.[i];
        
        if (before && after) {
          pairs.push({
            id: `${before.id}-${after.id}`,
            title: before.title,
            description: before.description,
            before: before.image_url,
            after: after.image_url,
          });
        }
      }

      setItems(pairs);
    } catch (error) {
      console.error("Error fetching before/after:", error);
    } finally {
      setLoading(false);
    }
  };

  const openLightbox = (dataIndex: number, imageType: 'before' | 'after') => {
    const item = items[dataIndex];
    const images = [
      { src: item.before, alt: `Antes - ${item.title}` },
      { src: item.after, alt: `Depois - ${item.title}` }
    ];
    setCurrentImages(images);
    setLightboxIndex(imageType === 'after' ? 1 : 0);
    setLightboxOpen(true);
  };

  if (loading) {
    return (
      <section id="antes-depois" className="py-24 bg-muted">
        <div className="container mx-auto px-4 flex justify-center items-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  return (
    <section id="antes-depois" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Resultados Comprovados
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Antes & Depois
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja a transformação completa que realizamos em móveis de escritório
          </p>
        </div>

        {items.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Nenhuma transformação disponível no momento.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {items.map((item, index) => (
              <Card key={item.id} className="overflow-hidden bg-card border-border hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative group cursor-pointer" onClick={() => openLightbox(index, 'before')}>
                    <img 
                      src={item.before} 
                      alt={`Antes - ${item.title}`}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-destructive text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Antes
                    </div>
                  </div>
                  <div className="relative group cursor-pointer" onClick={() => openLightbox(index, 'after')}>
                    <img 
                      src={item.after} 
                      alt={`Depois - ${item.title}`}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Depois
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
        slides={currentImages}
      />
    </section>
  );
};

export default BeforeAfter;
