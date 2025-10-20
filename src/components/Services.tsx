import { Car, Shield, Heart, Smile, User, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Seguro Automotivo",
      description: "Proteção completa para seu veículo com coberturas personalizadas e assistência 24h.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Proteção Veicular",
      description: "Alternativa econômica com proteção eficiente para seu automóvel.",
      gradient: "from-primary to-primary-light",
    },
    {
      icon: Heart,
      title: "Plano de Saúde",
      description: "Acesso a rede credenciada de qualidade para cuidar da sua saúde e da sua família.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Smile,
      title: "Plano Odontológico",
      description: "Cuidados dentários completos com cobertura nacional.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: User,
      title: "Seguro de Vida",
      description: "Tranquilidade e proteção financeira para quem você ama.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Flower2,
      title: "Assistência Funeral",
      description: "Suporte completo em momentos difíceis, com dignidade e respeito.",
      gradient: "from-purple-500 to-indigo-600",
    },
  ];

  const handleContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em seguros para proteger você e o que é importante
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden hover-lift animate-scale-in border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white`}>
                <service.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  onClick={handleContact}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white font-semibold"
                >
                  Solicitar Atendimento
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
