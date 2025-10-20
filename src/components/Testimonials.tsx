import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Cliente Satisfeito",
      role: "Empresário",
      content: "Atendimento excepcional! Encontrei a proteção ideal para minha empresa com toda a transparência que eu precisava.",
      rating: 5,
    },
    {
      name: "Cliente Satisfeito",
      role: "Profissional Liberal",
      content: "A MS Consultoria entendeu minhas necessidades e me ofereceu a melhor solução. Recomendo!",
      rating: 5,
    },
    {
      name: "Cliente Satisfeito",
      role: "Família",
      content: "Segurança e tranquilidade para toda minha família. O atendimento personalizado fez toda a diferença.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O que dizem nossos clientes
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A confiança de quem já escolheu a MS Consultoria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl hover-lift animate-scale-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-12 h-12 text-secondary/30 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
