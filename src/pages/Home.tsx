import { motion } from 'framer-motion';
import { Sparkles, Film, Users, Heart } from 'lucide-react';
type HomeProps = {
  onNavigate: (page: string) => void;
};

export default function Home({ onNavigate }: HomeProps) {
  return (
    <main className="min-h-screen">
      {/* Seção Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="inline-flex items-center space-x-2 bg-amber-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  <Sparkles size={16} />
                  <span>Transformando vidas através da arte</span>
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Acenda a <span className="text-amber-300">estrela</span> que existe em cada criança
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Um estúdio de cinema social criado para oferecer oportunidades reais de aprendizado, expressão e transformação através da arte e educação.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-300 transition-colors shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                  Quero Ajudar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                  Saiba Mais
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
                <img
                  src="/image.png"
                  alt="Logo Atacine - Criança em Cena: Um estúdio seguro e aberto a todos"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-400/20 rounded-2xl blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Propósito */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Nosso Propósito
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Atacine – Criança em Cena é um estúdio de cinema social criado para transformar vidas através da arte, cultura e educação.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              icon: Film,
              title: 'Grande Estúdio de Cinema Social',
              description: 'Um espaço completo onde crianças e jovens participam de oficinas, gravações e produções audiovisuais profissionais.',
              color: 'blue',
            },
            {
              icon: Users,
              title: 'Oportunidades Reais',
              description: 'Oferecemos aprendizado prático e expressão artística, despertando talentos e abrindo caminhos para o futuro.',
              color: 'amber',
            },
            {
              icon: Heart,
              title: 'Arte e Solidariedade',
              description: 'Acreditamos que cada criança tem uma estrela pronta para brilhar. Queremos acender essa luz através da arte.',
              color: 'blue',
            }].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${item.color}-100 text-${item.color}-600 mb-6`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Futuro / Transformação */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 md:p-16 text-white text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O Futuro da Atacine
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Após o estúdio estar funcionando, será lançada uma <strong>rede social solidária global</strong>, conectando pessoas e causas por meio da arte e tecnologia.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                className="bg-amber-400 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-300 transition-colors shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300"
                onClick={() => onNavigate('contact')}
              >
                Faça Parte Dessa Transformação
              </button>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NOVAS SEÇÕES FUTURAS */}

      {/* 1️⃣ Depoimentos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Depoimentos (em breve)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aqui vamos colocar histórias reais de transformação. Por enquanto, essa seção será preenchida no futuro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Galeria de fotos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Galeria (em breve)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fotos dos projetos e oficinas serão exibidas aqui futuramente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Parceiros / Patrocinadores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Parceiros (em breve)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Logos e informações dos parceiros serão adicionados no futuro.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
