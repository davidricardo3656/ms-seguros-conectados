import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = "5521982982492";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um atendimento da MS Consultoria em Seguros."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 animate-pulse" />
      <span
        className={`font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isHovered ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        Fale Conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
