import { motion } from 'framer-motion';
import { Target, Compass, Lightbulb, Globe, Star, Award, Film, Heart } from 'lucide-react';
type ObjetivesProps = {
  onNavigate: (page: string) => void;
};
export default function Objectives({ onNavigate }: ObjetivesProps) {
  const objectives = [
    {
      icon: Target,
      title: 'Transformação Social',
      description: 'Oferecer oportunidades reais de desenvolvimento para crianças e jovens em situação de vulnerabilidade social através da arte e cultura.',
    },
    {
      icon: Film,
      title: 'Educação Audiovisual',
      description: 'Proporcionar formação profissional em cinema, TV e produção audiovisual, capacitando jovens talentos para o mercado criativo.',
    },
    {
      icon: Lightbulb,
      title: 'Despertar Talentos',
      description: 'Identificar e desenvolver habilidades artísticas, criativas e técnicas, abrindo novos horizontes e possibilidades de futuro.',
    },
    {
      icon: Globe,
      title: 'Conexão Global',
      description: 'Criar uma rede solidária que conecta pessoas, causas e projetos através da arte, tecnologia e colaboração internacional.',
    },
  ];

  const values = [
    {
      icon: Star,
      title: 'Inclusão',
      value: 'Acreditamos que todos merecem oportunidades, independente de sua origem ou condição social.',
    },
    {
      icon: Heart,
      title: 'Solidariedade',
      value: 'Trabalhamos juntos para construir um mundo mais justo e acolhedor através da arte.',
    },
    {
      icon: Award,
      title: 'Excelência',
      value: 'Buscamos a qualidade em tudo que fazemos, oferecendo formação e experiências profissionais.',
    },
    {
      icon: Compass,
      title: 'Inovação',
      value: 'Utilizamos tecnologia e criatividade para transformar vidas e criar novas possibilidades.',
    },
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Objetivos e Valores
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conheça os pilares que guiam nosso trabalho e nossa missão de transformar vidas através da arte e educação.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos Objetivos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada ação que realizamos está alinhada com nossa missão de criar oportunidades e transformar realidades.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white shadow-lg">
                      <objective.icon size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {objective.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que norteiam cada decisão e cada projeto da Atacine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-6 shadow-lg">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-12 md:p-16 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Cada Criança Tem Uma Estrela Pronta Para Brilhar
            </h2>
            <p className="text-xl text-blue-800 max-w-2xl mx-auto leading-relaxed mb-8">
              Juntos, podemos acender essa luz e transformar sonhos em realidade através da arte e educação.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-700"
              onClick={() => onNavigate('contact')}
            >
              Faça Parte Dessa Missão
            </motion.button>

          </motion.div>
        </div>
      </section>
    </main>
  );
}
