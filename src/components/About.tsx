import { Award, Heart, Shield, Users } from "lucide-react";

const About = () => {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Consultivo",
      description: "Analisamos suas necessidades para oferecer a solução mais adequada",
    },
    {
      icon: Users,
      title: "Suporte Personalizado",
      description: "Acompanhamento dedicado durante toda a jornada do cliente",
    },
    {
      icon: Shield,
      title: "Confiança e Transparência",
      description: "Informações claras e compromisso com seu bem-estar",
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Anos de expertise no mercado de seguros",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Sobre a MS Consultoria
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos uma empresa especializada em consultoria de seguros, dedicada a oferecer 
              proteção personalizada com um atendimento verdadeiramente consultivo. Trabalhamos 
              com as melhores soluções do mercado para pessoas físicas e empresas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl hover-lift animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
