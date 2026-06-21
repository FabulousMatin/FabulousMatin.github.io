import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan" />

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-8 md:pl-0 mb-12 last:mb-0"
              >
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-accent-purple border-4 border-background shadow-lg shadow-accent-purple/30" />

                <div className="md:w-[calc(50%-2rem)] md:ml-auto">
                  <div className="glass rounded-2xl p-6 glass-hover">
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-accent-purple" />
                      <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                    </div>

                    <p className="text-accent-purple mb-4">{exp.role}</p>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <ChevronRight className="w-4 h-4 text-accent-purple mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
