import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL as string, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Não foi possível enviar sua mensagem. Por favor, tente novamente.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <Mail size={40} className="text-blue-900" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tem dúvidas, sugestões ou quer saber como pode ajudar? Estamos aqui para ouvir você!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* SEÇÃO DE INFORMAÇÕES */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vamos Conversar?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Preencha o formulário ao lado e entraremos em contato o mais breve possível. Sua mensagem é muito importante para nós!
              </p>

              <div className="space-y-6">
                {/* E-mail */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
                    <a
                      href="mailto:contato@atacine.org.br"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      contato@atacine.org.br
                    </a>
                  </div>
                </motion.div>

                {/* Celular */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Phone size={24} className="text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Celular</h3>
                    <a
                      href="tel:+55189981930323"
                      className="text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      +55 18 98193-0323
                    </a>
                  </div>
                </motion.div>

                {/* Localização */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Localização</h3>
                    <p className="text-gray-600">
                      Em breve teremos nosso Grande Estúdio de Cinema Social
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* FORMULÁRIO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envie sua Mensagem
                </h2>

                {status === 'success' ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                      <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Obrigado por entrar em contato. Responderemos em breve!
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nome */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                        placeholder="Seu nome"
                      />
                    </div>

                    {/* E-mail */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                        placeholder="seu@email.com"
                      />
                    </div>

                    {/* Celular */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Celular
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none"
                        placeholder="+55 18 98193-0323"
                      />
                    </div>

                    {/* Mensagem */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                        placeholder="Como podemos ajudar você?"
                      />
                    </div>

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg"
                      >
                        <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
                        <p className="text-sm text-red-800">{errorMessage}</p>
                      </motion.div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center space-x-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Enviar Mensagem</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center">
                      Ao enviar, você concorda em receber comunicações da Atacine.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
