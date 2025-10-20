import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative gradient-hero min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptLTE2IDB2OGg4di04aC04em0xNiAxNnY4aDh2LThoLTh6bS0xNiAwdjhoOHYtOGgtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-8 animate-scale-in">
            <Shield className="w-10 h-10 text-secondary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Consultoria especializada para proteger o que realmente importa
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Soluções inteligentes em seguros para você, sua família e seu patrimônio
          </p>
          
          <p className="text-lg text-secondary font-semibold mb-8 italic">
            Entendendo para atender.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-bold text-lg px-8 py-6 shadow-gold hover-gold"
            >
              Solicitar Atendimento
            </Button>
            <Button
              onClick={() => {
                const element = document.querySelector("#servicos");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-bold text-lg px-8 py-6 shadow-gold hover-gold"
            >
              Conhecer Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
