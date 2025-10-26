import { Instagram, Mail, Heart } from 'lucide-react';

type FooterProps = {
  onNavigate: (page: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <img
              src="/image.png"
              alt="Logo Atacine"
              className="h-16 w-auto bg-white rounded-lg p-2"
            />
            <p className="text-blue-100 text-sm leading-relaxed">
              Transformando vidas através da arte, cultura e educação.
            </p>
          </div>

          {/* Navegação */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-300">Navegação</h3>
            <nav className="space-y-2" aria-label="Rodapé">
              <button
                onClick={() => onNavigate('home')}
                className="block text-blue-100 hover:text-white transition-colors text-sm"
              >
                Início
              </button>
              <button
                onClick={() => onNavigate('objectives')}
                className="block text-blue-100 hover:text-white transition-colors text-sm"
              >
                Objetivos e Valores
              </button>
              <button
                onClick={() => onNavigate('donations')}
                className="block text-blue-100 hover:text-white transition-colors text-sm"
              >
                Doações
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="block text-blue-100 hover:text-white transition-colors text-sm"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-300">Contato</h3>
            <div className="space-y-3">
              <a
                href="mailto:contato@atacine.org.br"
                className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors group"
                aria-label="Enviar e-mail para Atacine"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">contato@atacine.org.br</span>
              </a>
              <a
                href="https://instagram.com/atacine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors group"
                aria-label="Visitar Instagram da Atacine"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">@atacine</span>
              </a>
            </div>
          </div>
        </div>

        {/* Créditos / Rodapé */}
        <div className="mt-12 pt-8 border-t border-blue-700 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-blue-200 text-sm flex items-center justify-center space-x-2">
            <span>&copy; {new Date().getFullYear()} Atacine - Criança em Cena. Todos os direitos reservados.</span>
            <Heart size={16} className="text-amber-400 fill-current" />
          </p>
          
          {/* Seu crédito com logo */}
          <a
            href="https://andreconsultoriaweb.com" // coloque seu site
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
          >
            <img
              src="/logo.png" // coloque o caminho da sua logo
              alt="Logo do Desenvolvedor"
              className="h-20 w-auto"
            />
            <span className="text-sm">Desenvolvido por Andre Consultoria Web</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
