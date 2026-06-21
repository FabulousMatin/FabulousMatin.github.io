import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, SendHorizontal } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import personalImage from '../../personal-image.jpeg';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  telegram: SendHorizontal,
};

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="text-text-primary">{personalInfo.name}</span>
              <span className="gradient-text"> {personalInfo.surname}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-text-secondary mb-6"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Get in touch
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-full transition-all duration-300 hover:border-accent-purple/50 hover:shadow-lg hover:shadow-accent-purple/20"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5 text-text-secondary hover:text-text-primary" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-purple/20 via-accent-blue/10 to-accent-cyan/20 blur-2xl" />
            <div className="relative glass rounded-[2rem] p-4 shadow-2xl shadow-black/20">
              <div className="overflow-hidden rounded-[1.5rem] border border-border/50">
                <img
                  src={personalImage}
                  alt="Matin Bazrafshan"
                  className="h-[520px] w-full object-cover object-center"
                  loading="eager"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-text-muted">Matin Bazrafshan</p>
                  <p className="text-base text-text-primary font-medium">ML/AI Software Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 glass rounded-full animate-bounce"
        aria-label="Scroll to about"
      >
        <ChevronDown className="w-5 h-5 text-text-secondary" />
      </motion.button>
    </section>
  );
}
