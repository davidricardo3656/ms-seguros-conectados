import { CheckCircle, UserCheck, FileSearch, Handshake, Headphones, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: UserCheck,
      title: "Atendimento Personalizado",
      description: "Consultoria exclusiva para entender suas necessidades específicas",
    },
    {
      icon: FileSearch,
      title: "Análise Gratuita",
      description: "Avaliação detalhada sem custos para identificar a melhor solução",
    },
    {
      icon: Handshake,
      title: "Parceiros Confiáveis",
      description: "Trabalhamos apenas com seguradoras sólidas e reconhecidas",
    },
    {
      icon: Headphones,
      title: "Suporte Humanizado",
      description: "Atendimento próximo e dedicado em todas as etapas",
    },
    {
      icon: TrendingUp,
      title: "Melhores Condições",
      description: "Negociamos as melhores taxas e coberturas do mercado",
    },
    {
      icon: CheckCircle,
      title: "Transparência Total",
      description: "Informações claras sobre coberturas, valores e processos",
    },
  ];

  return (
    <section id="beneficios" className="py-20 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptLTE2IDB2OGg4di04aC04em0xNiAxNnY4aDh2LThoLTh6bS0xNiAwdjhoOHYtOGgtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por que escolher a MS Consultoria?
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Diferenciais que fazem toda a diferença na sua experiência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover-lift animate-scale-in border border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4">
                <benefit.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/80 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
