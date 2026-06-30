import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolio';
import { Heart, SendHorizontal, Github, Linkedin, Mail } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  telegram: SendHorizontal,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#" className="text-2xl font-bold gradient-text">
              {personalInfo.fullName}
            </a>
            <p className="text-text-muted text-sm mt-1">
              {personalInfo.title}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-4 h-4" />
                  {link.name}
                </a>
              );
            })}
          </motion.div>


        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-text-muted text-sm">
            &copy; {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
