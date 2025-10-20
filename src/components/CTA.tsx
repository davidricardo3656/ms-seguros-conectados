import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const whatsappNumber = "5521982982492";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um atendimento da MS Consultoria em Seguros."
  );

  return (
    <section className="py-20 gradient-gold relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptLTE2IDB2OGg4di04aC04em0xNiAxNnY4aDh2LThoLTh6bS0xNiAwdjhoOHYtOGgtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Pronto para garantir sua proteção?
          </h2>
          
          <p className="text-xl text-primary/80 mb-8 leading-relaxed">
            Fale agora com um consultor especializado e receba atendimento personalizado pelo WhatsApp. 
            Estamos prontos para encontrar a melhor solução para você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary-dark font-bold text-lg px-8 py-6 shadow-lg"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg px-8 py-6"
            >
              <a href="tel:+5521982982492" className="inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
