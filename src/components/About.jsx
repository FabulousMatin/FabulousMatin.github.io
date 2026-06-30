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

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-text-primary mb-4">Soft Skills</h3>
              <ul className="space-y-3">
                {personalInfo.profile.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
