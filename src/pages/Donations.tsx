import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, QrCode, X, Info } from 'lucide-react';
type DonationsProps = {
  onNavigate: (page: string) => void;
};

export default function Donations({ onNavigate }: DonationsProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-400 rounded-full mb-6 shadow-xl">
              <Heart size={40} className="text-blue-900 fill-current" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Apoie Nossa Causa
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Sua contribuição ajuda a transformar vidas e construir um futuro melhor para crianças e jovens através da arte e educação.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Sua Doação Faz a Diferença
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada contribuição nos ajuda a construir o Grande Estúdio de Cinema Social, oferecer oficinas, equipamentos e oportunidades reais para crianças e jovens desenvolverem seus talentos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Infraestrutura',
                description: 'Construção e equipamento do estúdio de cinema social',
                icon: '🎬',
              },
              {
                title: 'Oficinas',
                description: 'Cursos e workshops de produção audiovisual para jovens',
                icon: '📚',
              },
              {
                title: 'Oportunidades',
                description: 'Bolsas e projetos para desenvolver novos talentos',
                icon: '⭐',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Doe Agora</h2>
              <p className="text-blue-100">Sua generosidade transforma vidas</p>
            </div>

            <div className="p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <QrCode size={48} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                    QR Code Pix
                  </h3>
                  <div className="bg-white border-4 border-blue-600 rounded-lg p-6 mb-6 aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <QrCode size={120} className="text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-500">QR Code será disponibilizado em breve</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="flex items-start space-x-2">
                      <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-900">
                        Para garantir a segurança e transparência, estamos finalizando nosso sistema de doações Pix institucional.
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(true)}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 py-4 rounded-xl font-bold text-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-300"
                >
                  Quero Ajudar
                </motion.button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Todas as doações são destinadas exclusivamente aos projetos da Atacine
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-lg p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Fechar modal"
                >
                  <X size={24} />
                </button>
                <h3 className="text-2xl font-bold">Sistema de Doações</h3>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <Info size={32} className="text-amber-600" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 text-center mb-4">
                  Em Breve!
                </h4>

                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Estamos finalizando nosso sistema de doações diretas para garantir total segurança e transparência. Em breve, você poderá contribuir diretamente através do Pix institucional.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-900 text-center">
                    <strong>Quer ajudar agora?</strong><br />
                    Entre em contato pelo formulário de contato e saiba como você pode contribuir.
                  </p>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowModal(false);
                      onNavigate('contact');
                    }}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Entrar em Contato
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowModal(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300"
                  >
                    Fechar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
