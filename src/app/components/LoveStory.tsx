import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Heart, Calendar, Music, Camera, Sparkles, MapPin, Clock, Phone, Star, Volume2, VolumeX, Sun, Moon, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LoveStory() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Contador de tempo em tempo real
  const [daysCount, setDaysCount] = useState(0);
  
  useEffect(() => {
    // Data do início do relacionamento (personalize aqui!)
    const startDate = new Date('2026-02-02'); // Exemplo: 14 de janeiro de 2024
    
    const calculateDays = () => {
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysCount(diffDays);
    };
    
    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60); // Atualiza a cada hora
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Efeito de coração seguindo o cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Nossa História de Amor ❤️',
        text: 'Confira nossa retrospectiva!',
        url: window.location.href,
      });
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF4B81', '#FF6B9D', '#9D4EDD', '#FFD60A'],
    });
  };

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.story-section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const timelineEvents = [
    {
      date: '25 Jun 2016',
      title: 'Nos Conhecemos',
      description: 'O dia em que nossos caminhos se \n cruzaram pela primeira vez no escoteiro',
      icon: Heart,
      color: '#FF4B81',
    },
    {
      date: '19 Out 2025',
      title: 'Primeiro Encontro',
      description: 'Nosso primeiro encontro especial CineBsb',
      icon: Calendar,
      color: '#9D4EDD',
    },
    {
      date: '19 Out 2025',
      title: 'Primeiro Beijo',
      description: 'O momento mágico que eu guardo no meu coração',
      icon: Heart,
      color: '#E63946',
    },
    {
      date: '2 Fev 2026',
      title: 'Pedido de Namoro',
      description: 'O dia mais feliz da minha vida, quando \n você disse sim para ser minha namorada',
      
      icon: Sparkles,
      color: '#FFD60A',
    },
  ];

  const stats = [
    { label: 'Dias Juntos', value: daysCount.toString(), icon: Calendar, gradient: 'from-[#FF4B81] to-[#FF6B9D]' },
    { label: 'Horas em Chamadas', value: '2,847', icon: Phone, gradient: 'from-[#9D4EDD] to-[#C77DFF]' },
    { label: 'Km Percorridos', value: '3,456', icon: MapPin, gradient: 'from-[#E63946] to-[#FF6B9D]' },
    { label: 'Fotos Tiradas', value: 'Infinitas', icon: Camera, gradient: 'from-[#FFD60A] to-[#F8DDA4]' },
    { label: 'Encontros', value: '67', icon: Star, gradient: 'from-[#A4133C] to-[#E63946]' },
    { label: 'Músicas Especiais', value: '42', icon: Music, gradient: 'from-[#9D4EDD] to-[#FF4B81]' },
  ];

const moments = [
    {
      title: 'Nosso Primeiro Jantar',
      description: 'Quando fizemos pastel juntooos!',
      image: 'public/img/janta.jpeg',
      color: '#FF4B81',
    },
    {
      title: 'Carnaval juntos',
      description: 'Casal mais gay do mundo',
      image: 'public/img/carnaval.jpeg',
      color: '#9D4EDD',
    },
    {
      title: 'Festa da Isa',
      description: 'Te busuquei no aeroporto pela primeira vez',
      image: 'public/img/isa.jpeg',
      color: '#E63946',
    },
    {
      title: 'Dates no prédio',
      description: 'Uma para representar os varios dates que tivemos no prédio',
      image: '/public/img/date.jpeg',
      color: '#FFD60A',
    },
  ];

  const playlist = [
    { title: 'Love Of My Life', artist: 'Quenn', cover: '🎵', duration: '3:24' },
    { title: 'Foi assim', artist: 'Sotam', cover: '🎶', duration: '2:27' },
    { title: 'Escolhi Você', artist: 'Almar', cover: '🎵', duration: '2:12' },
    { title: 'Arerê', artist: 'Ivete Sangalo', cover: '💕', duration: '5:02' },
    { title: 'Olha', artist: 'Maria Betnhânia', cover: '🎶', duration: '3:52' },
  ];

 const loveNotes = [
  'Seu sorriso ilumina até os meus dias mais difíceis',
  'A forma como você me faz sentir em casa',
  'Seu abraço que sempre acalma meu coração',
  'Sua risada, que é uma das minhas músicas favoritas',
  'Como você consegue me entender sem eu dizer uma palavra',
  'Seu jeito carinhoso comigo',
  'As nossas conversas que nunca acabam',
  'Como você torna qualquer momento especial',
  'Seu olhar que me deixa completamente apaixonado',
  'A maneira como você cuida de mim',
  'Seu coração enorme e cheio de amor',
  'Como você me inspira a ser alguém melhor',
  'Nossos momentos de silêncio confortável',
  'As suas mensagens de bom dia',
  'A felicidade que sinto quando vejo seu nome na tela',
  'Seu jeito único de enxergar o mundo',
  'Como você me apoia em tudo',
  'Os nossos planos para o futuro',
  'As memórias que estamos construindo juntos',
  'Seu jeitinho quando está com vergonha',
  'As nossas piadas internas',
  'O jeito que você segura minha mão',
  'Como você transforma dias comuns em lembranças especiais',
  'Sua determinação para conquistar seus objetivos',
  'O brilho dos seus olhos quando está feliz',
  'Seu carinho nos pequenos detalhes',
  'A paz que sinto ao seu lado',
  'A confiança que construímos juntos',
  'Como você faz meu coração acelerar até hoje',
  'O fato de que, entre bilhões de pessoas, encontrei você',
];

   const dreams = [
    { title: 'Viajar para a Itália', icon: '🍕', color: '#FF4B81' },
    { title: 'Morar Juntos', icon: '🏡', color: '#9D4EDD' },
    { title: 'Conhecer o mundo juntos', icon: '🌏', color: '#FFD60A' },
    { title: 'Ter uma Família linda', icon: '👨‍👩‍👧‍👦', color: '#E63946' },
    { title: 'Fazer faculdade juntos', icon: '🎓', color: '#A4133C' },
    { title: 'Viver juntos para sempre', icon: '❤️', color: '#C77DFF' },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#FFF5F7] to-white dark:from-[#1A0A1E] dark:to-[#2A1A2E] transition-colors duration-500">
      {/* Cursor Heart Effect */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50 hidden md:block"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <Heart className="w-full h-full text-[#FF4B81] opacity-30 fill-current" />
      </motion.div>

      {/* Header Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30"
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-purple-600" />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleShare}
          className="p-3 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30"
        >
          <Share2 className="w-5 h-5 text-[#FF4B81]" />
        </motion.button>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4B81] via-[#9D4EDD] to-[#FFD60A] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="story-section min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B81]/20 via-[#9D4EDD]/20 to-[#FFD60A]/20" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, #FF4B81 0%, transparent 50%), radial-gradient(circle at 80% 80%, #9D4EDD 0%, transparent 50%)',
              backgroundSize: '100% 100%',
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 1, bounce: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-[#FF4B81] shadow-2xl">
              <img
                src="/img/nos.jpeg"
                alt="Casal"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-[#FF4B81] via-[#9D4EDD] to-[#FFD60A] bg-clip-text text-transparent"
            style={{ fontWeight: 700 }}
          >
            Sávio & Bea
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
          >
            Nossa história em números, memórias e momentos inesquecíveis
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(1)}
            className="px-12 py-4 bg-gradient-to-r from-[#FF4B81] to-[#9D4EDD] text-white rounded-full text-lg shadow-2xl hover:shadow-[#FF4B81]/50 transition-all"
          >
            Começar Retrospectiva ❤️
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#FF4B81] rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#FF4B81] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="story-section min-h-screen py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-[#FF4B81] to-[#9D4EDD] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Nossa História
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">A linha do tempo dos nossos momentos mais especiais</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF4B81] via-[#9D4EDD] to-[#FFD60A] hidden md:block" />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 whitespace-pre-line ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/80 dark:bg-[#2A1A2E]/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{event.date}</div>
                    <h3 className="text-2xl mb-2" style={{ color: event.color, fontWeight: 600 }}>{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{event.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: event.color }}
                  >
                    <event.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="story-section min-h-screen py-20 px-4 bg-gradient-to-br from-[#FF4B81]/10 to-[#9D4EDD]/10 dark:from-[#FF4B81]/5 dark:to-[#9D4EDD]/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-[#FF4B81] to-[#9D4EDD] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Nossos Números
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Estatísticas do nosso amor</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 dark:bg-[#2A1A2E]/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-5xl mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} style={{ fontWeight: 700 }}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moments Gallery */}
      <section className="story-section min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-[#FF4B81] to-[#9D4EDD] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Melhores Momentos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">As memórias que guardamos no coração</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer h-80"
              >
                <img src={moment.image} alt={moment.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>{moment.title}</h3>
                  <p className="text-white/80">{moment.description}</p>
                </div>
                <motion.div
                  className="absolute top-4 right-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Heart className="w-8 h-8 text-white fill-current" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 75, 129, 0.8))' }} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="story-section min-h-screen py-20 px-4 bg-gradient-to-br from-[#9D4EDD]/10 to-[#FF4B81]/10 dark:from-[#9D4EDD]/5 dark:to-[#FF4B81]/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-[#9D4EDD] to-[#FF4B81] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Nossas Músicas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">A trilha sonora do nosso amor</p>
          </motion.div>

          <div className="space-y-4">
            {playlist.map((song, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white/80 dark:bg-[#2A1A2E]/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 flex items-center gap-4 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#9D4EDD] to-[#FF4B81] flex items-center justify-center text-3xl">
                  {song.cover}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-1" style={{ fontWeight: 600 }}>{song.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{song.artist}</p>
                </div>
                <div className="text-gray-500 dark:text-gray-400">{song.duration}</div>
                <Music className="w-6 h-6 text-[#9D4EDD]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Notes */}
      <section className="story-section min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-[#E63946] to-[#FF4B81] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Coisas que Eu Amo em Você
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Todas as razões pelas quais te amo</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loveNotes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-[#FF4B81]/20 to-[#9D4EDD]/20 dark:from-[#FF4B81]/10 dark:to-[#9D4EDD]/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-[#FF4B81]/30"
              >
                <Heart className="w-6 h-6 text-[#FF4B81] mb-3 fill-current" />
                <p className="text-lg text-gray-700 dark:text-gray-300">{note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dreams Section */}
      <section className="story-section min-h-screen py-20 px-4 bg-gradient-to-br from-[#FFD60A]/10 to-[#9D4EDD]/10 dark:from-[#FFD60A]/5 dark:to-[#9D4EDD]/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-[#FFD60A] to-[#9D4EDD] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Nosso Futuro
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Os sonhos que queremos realizar juntos</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dreams.map((dream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/80 dark:bg-[#2A1A2E]/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 text-center"
              >
                <div className="text-6xl mb-4">{dream.icon}</div>
                <h3 className="text-xl" style={{ fontWeight: 600, color: dream.color }}>{dream.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Surprise Message */}
      <section className="story-section min-h-screen py-20 px-4 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B81] via-[#9D4EDD] to-[#FFD60A] opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => {
            setShowSurprise(true);
            triggerConfetti();
          }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Heart className="w-24 h-24 mx-auto mb-8 text-[#FF4B81] fill-current" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-8 bg-gradient-to-r from-[#FF4B81] via-[#9D4EDD] to-[#FFD60A] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Para Você, Meu Amor
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showSurprise ? 1 : 0 }}
            transition={{ delay: 1 }}
            className="bg-white/90 dark:bg-[#2A1A2E]/90 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/30"
          >
            <p className="text-2xl md:text-3xl mb-6 text-gray-800 dark:text-gray-200 leading-relaxed">
              Cada dia ao seu lado é um presente especial. 
              Obrigado por fazer parte da minha vida e por 
              tornar cada momento inesquecível. 
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Te amo hoje, amanhã e sempre! ❤️
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showSurprise ? 1 : 0, y: showSurprise ? 0 : 20 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              triggerConfetti();
              setTimeout(() => scrollToSection(0), 500);
            }}
            className="mt-8 px-12 py-4 bg-gradient-to-r from-[#FF4B81] to-[#9D4EDD] text-white rounded-full text-lg shadow-2xl"
          >
            Ver Novamente ❤️
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
