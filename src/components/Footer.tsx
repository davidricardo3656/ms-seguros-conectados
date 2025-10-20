import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Slogan */}
          <div className="text-center md:text-left">
            <img src={logo} alt="MS Consultoria" className="h-16 w-auto mb-4 mx-auto md:mx-0" />
            <p className="text-secondary font-semibold text-lg italic mb-2">
              Entendendo para atender.
            </p>
            <p className="text-white/80 text-sm">
              Consultoria especializada em seguros
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4 text-secondary">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Início", "Sobre", "Serviços", "Benefícios", "Contato"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações da Empresa */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-lg mb-4 text-secondary">Informações</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <p className="font-semibold text-white">MS Consultoria em Seguros</p>
              <p>CNPJ: 18.789.709/0001-83</p>
              <p>WhatsApp: (21) 9 8298-2492</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center text-white/80 text-sm">
            <p>© {currentYear} MS Consultoria em Seguros. Todos os direitos reservados.</p>
            <p className="mt-2">
              Desenvolvido com <span className="text-secondary">♥</span> para proteger o que importa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
