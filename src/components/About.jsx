import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-text-secondary leading-relaxed max-w-4xl">
                {personalInfo.summary}
              </p>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
