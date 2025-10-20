import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappNumber = "5521982982492";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um atendimento da MS Consultoria em Seguros."
  );

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(21) 9 8298-2492",
      action: "tel:+5521982982492",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(21) 9 8298-2492",
      action: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 9h às 18h",
      action: null,
    },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atendê-lo. Fale conosco agora!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl hover-lift text-center animate-scale-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.content}</p>
                {item.action && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <a
                      href={item.action}
                      target={item.action.startsWith("http") ? "_blank" : undefined}
                      rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      Contatar
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="bg-card p-12 rounded-2xl shadow-lg text-center animate-fade-in border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Solicite um Atendimento Personalizado
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe está pronta para analisar suas necessidades e oferecer as melhores 
              soluções em seguros. Entre em contato conosco pelo WhatsApp ou telefone.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-bold text-lg px-8 py-6 shadow-gold"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Consultor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
