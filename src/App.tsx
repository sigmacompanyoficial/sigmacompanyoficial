import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Brain, 
  Mail, 
  Instagram, 
  Github, 
  Code, 
  Smartphone, 
  Cloud, 
  Zap, 
  Users, 
  Trophy, 
  Star,
  Sun,
  Moon,
  MessageCircle,
  X,
  Minus,
  Send,
  Gamepad2,
  Download,
  Globe,
  Shield,
  Rocket,
  ChevronRight,
  Play,
  ExternalLink
} from 'lucide-react';
import { useTranslation } from './hooks/useTranslation';
import LanguageSelector from './components/LanguageSelector';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiMinimized, setAiMinimized] = useState(false);
  const [aiMessages, setAiMessages] = useState([]);
  const [aiInput, setAiInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  
  const { t, tArray } = useTranslation();

  useEffect(() => {
    setAiMessages([
      { type: 'bot', text: t('aiGreeting') }
    ]);
  }, [t]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleAiSubmit = async (e) => {
    e.preventDefault();
    if (!aiInput.trim()) return;

    const userMessage = aiInput.trim();
    setAiMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setAiInput('');
    setAiLoading(true);

    try {
      const botMessage = { type: 'bot', text: '⏳ Pensando...' };
      setAiMessages(prev => [...prev, botMessage]);

      if (window.puter && window.puter.ai) {
        const stream = await window.puter.ai.chat(userMessage, { 
          model: "gpt-4o", 
          stream: true 
        });
        
        let responseText = '';
        for await (const parte of stream) {
          if (parte?.text) {
            responseText += parte.text;
            setAiMessages(prev => {
              const newMessages = [...prev];
              newMessages[newMessages.length - 1] = { type: 'bot', text: responseText };
              return newMessages;
            });
          }
        }
      } else {
        setTimeout(() => {
          setAiMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { 
              type: 'bot', 
              text: 'Hola! Soy Sigma AI Beta. Actualmente estoy en desarrollo. ¡Pronto tendré capacidades completas de IA!' 
            };
            return newMessages;
          });
        }, 1500);
      }
    } catch (error) {
      setAiMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { 
          type: 'bot', 
          text: 'Lo siento, hay un problema con la conexión. ¡Pronto estaré completamente funcional!' 
        };
        return newMessages;
      });
    }
    
    setAiLoading(false);
  };

  const products = [
    {
      id: 'sigmagames',
      name: 'SigmaGames',
      status: t('available'),
      statusColor: 'bg-green-500',
      icon: <Gamepad2 className="w-8 h-8" />,
      description: t('sigmaGamesDesc'),
      features: tArray('sigmaGamesFeatures'),
      tech: ['HTML5', 'JavaScript', 'WebGL', 'Canvas API'],
      rating: '4.8',
      category: 'Web Gaming'
    },
    {
      id: 'sigmaai',
      name: 'Sigma AI',
      status: 'Septiembre 2025',
      statusColor: 'bg-blue-500',
      icon: <Brain className="w-8 h-8" />,
      description: t('sigmaAiDesc'),
      features: tArray('sigmaAiFeatures'),
      tech: ['GPT-4o', 'Machine Learning', 'NLP', 'Cloud Computing'],
      launchDate: 'Septiembre 2025',
      category: 'Inteligencia Artificial'
    }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center animate-pulse">
              <img 
                src="https://www.djposaxa.ct.ws/Fotos/Logo%20sigma%20company%20peque%C3%B1opeg.jpeg" 
                alt="Sigma Company Logo" 
                className="w-16 h-16 rounded-xl object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Sigma Company
          </h1>
          <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-loading"></div>
          </div>
          <p className="text-gray-300 mt-4 animate-fade-in-up delay-500">
            {t('loadingText')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md border-b transition-all duration-300 ${
        darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://www.djposaxa.ct.ws/Fotos/Logo%20sigma%20company%20peque%C3%B1opeg.jpeg" 
                  alt="Sigma Company Logo" 
                  className="w-8 h-8 rounded-lg object-cover"
                />
              </div>
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Sigma Company
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className={`hover:text-purple-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('home')}
              </a>
              <a href="#productos" className={`hover:text-purple-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('products')}
              </a>
              <a href="#contacto" className={`hover:text-purple-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('contact')}
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <LanguageSelector darkMode={darkMode} />
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
                {t('heroTitle')}
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up delay-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
              <button 
                onClick={() => document.getElementById('productos').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('exploreProducts')}
              </button>
              <button 
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-4 border-2 border-purple-500 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}
              >
                {t('contactUs')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, number: '10K+', label: t('activeUsers') },
              { icon: <Gamepad2 className="w-8 h-8" />, number: '100+', label: t('availableGames') },
              { icon: <Trophy className="w-8 h-8" />, number: '4.8★', label: t('rating') },
              { icon: <Rocket className="w-8 h-8" />, number: '2', label: t('activeProducts') }
            ].map((stat, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-700/30' : 'bg-white/30'
              }`}>
                <div className="text-purple-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.number}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('ourProducts')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('productsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`group cursor-pointer p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50' 
                    : 'bg-white/50 border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {product.name}
                </h3>
                
                <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {product.rating && (
                      <>
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {product.rating}
                        </span>
                      </>
                    )}
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {product.category}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('technologiesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Code className="w-8 h-8" />, name: tArray('techStack')[0], color: 'from-blue-500 to-cyan-500' },
              { icon: <Smartphone className="w-8 h-8" />, name: tArray('techStack')[1], color: 'from-green-500 to-emerald-500' },
              { icon: <Brain className="w-8 h-8" />, name: tArray('techStack')[2], color: 'from-purple-500 to-pink-500' },
              { icon: <Cloud className="w-8 h-8" />, name: tArray('techStack')[3], color: 'from-orange-500 to-red-500' }
            ].map((tech, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center ${
                  darkMode ? 'bg-gray-700/30' : 'bg-white/50'
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center text-white`}>
                  {tech.icon}
                </div>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('contactTitle')}
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('contactSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-3xl backdrop-blur-sm ${
              darkMode ? 'bg-gray-800/50' : 'bg-white/50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {t('contactInfo')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      sigmacompanyoficial@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Instagram</p>
                    <a 
                      href="https://instagram.com/sigmagamesoficial" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-600 transition-colors"
                    >
                      @sigmagamesoficial
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</p>
                    <a 
                      href="https://github.com/sigmacompanyoficial" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-600 transition-colors"
                    >
                      @sigmacompanyoficial
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl backdrop-blur-sm ${
              darkMode ? 'bg-gray-800/50' : 'bg-white/50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {t('sendMessage')}
              </h3>
              
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const subject = encodeURIComponent(formData.get('subject'));
                const message = encodeURIComponent(formData.get('message'));
                window.open(`mailto:sigmacompanyoficial@gmail.com?subject=${subject}&body=${message}`);
              }}>
                <input
                  type="text"
                  name="subject"
                  placeholder={t('subject')}
                  required
                  className={`w-full p-4 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder={t('message')}
                  required
                  className={`w-full p-4 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('sendBtn')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${
        darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://www.djposaxa.ct.ws/Fotos/Logo%20sigma%20company%20peque%C3%B1opeg.jpeg" 
                  alt="Sigma Company Logo" 
                  className="w-8 h-8 rounded-lg object-cover"
                />
              </div>
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Sigma Company
              </span>
            </div>
            <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('footerText')}
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              {t('copyright')}
            </p>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white">
                  {selectedProduct.icon}
                </div>
                <div>
                  <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedProduct.name}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${selectedProduct.statusColor}`}>
                    {selectedProduct.status}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className={`p-2 rounded-xl transition-colors ${
                  darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {selectedProduct.description}
            </p>

            <div className="mb-8">
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {t('mainFeatures')}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {t('technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.tech.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {selectedProduct.id === 'sigmagames' && (
              <div className="flex justify-center">
                <button 
                  onClick={() => window.open('https://www.sigmagames.ct.ws', '_blank')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  <span>{t('goToSigmaGames')}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            )}

            {selectedProduct.id === 'sigmaai' && (
              <div className={`p-4 rounded-xl mb-6 ${
                darkMode ? 'bg-blue-900/20 border border-blue-500/30' : 'bg-blue-50 border border-blue-200'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  <Rocket className="w-5 h-5 text-blue-500" />
                  <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {t('nextLaunch')}
                  </span>
                </div>
                <p className={`${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  {t('launchText')} {selectedProduct.launchDate}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* AI Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!aiChatOpen ? (
          <button
            onClick={() => setAiChatOpen(true)}
            className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        ) : (
          <div className={`w-80 h-96 rounded-2xl shadow-2xl overflow-hidden ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            {!aiMinimized ? (
              <>
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Brain className="w-6 h-6 text-white" />
                    <div>
                      <h3 className="font-semibold text-white">Sigma AI Beta</h3>
                      <p className="text-xs text-purple-100">{t('aiAssistant')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setAiMinimized(true)}
                      className="p-1 hover:bg-white/20 rounded transition-colors"
                    >
                      <Minus className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={() => setAiChatOpen(false)}
                      className="p-1 hover:bg-white/20 rounded transition-colors"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="h-64 overflow-y-auto p-4 space-y-4">
                  {aiMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                            : darkMode
                            ? 'bg-gray-700 text-gray-200'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  ))}
                  {aiLoading && (
                    <div className="flex justify-start">
                      <div className={`p-3 rounded-2xl ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-100'
                      }`}>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <form onSubmit={handleAiSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={aiInput}
                      onChange={(e) => setAiInput(e.target.value)}
                      placeholder={t('aiPlaceholder')}
                      className={`flex-1 p-2 rounded-xl border text-sm transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      disabled={aiLoading}
                    />
                    <button
                      type="submit"
                      disabled={aiLoading || !aiInput.trim()}
                      className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div 
                onClick={() => setAiMinimized(false)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 cursor-pointer hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-white" />
                    <span className="text-white font-medium text-sm">Sigma AI Beta</span>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;