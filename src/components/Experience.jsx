import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data/portfolio';
import { Calendar, MapPin, Building2, ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section id="experience" className="section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Journey</span>
          </h2>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-3 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-cyan to-border" />

            <div className="space-y-8">
              {experience.map((exp, index) => {
                const expanded = openItem === index;

                return (
                  <motion.div
                    key={`${exp.company}-${exp.role}-${exp.period}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className="relative"
                  >
                    <div className="absolute -left-8 md:-left-12 top-7 flex items-center justify-center">
                      <span className="h-4 w-4 rounded-full bg-accent-blue ring-8 ring-background" />
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpenItem(expanded ? null : index)}
                      className="w-full text-left glass rounded-2xl p-6 glass-hover border border-border/50"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Building2 className="w-5 h-5 text-accent-blue" />
                            <h3 className="text-xl font-semibold text-text-primary">{exp.company}</h3>
                          </div>
                          <p className="text-accent-blue mb-2">{exp.role}</p>
                          <p className="text-sm text-text-secondary max-w-3xl">{exp.summary}</p>
                        </div>

                        <span className="flex-shrink-0 p-2 rounded-full bg-surface">
                          {expanded ? <ChevronUp className="w-4 h-4 text-text-primary" /> : <ChevronDown className="w-4 h-4 text-text-primary" />}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {(exp.highlights || []).map((item) => (
                          <span key={item} className="px-3 py-1 rounded-full bg-surface text-xs text-text-secondary border border-border/60">
                            {item}
                          </span>
                        ))}
                      </div>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-5 mt-5 border-t border-border/60">
                              <ul className="space-y-3">
                                {exp.achievements.map((achievement) => (
                                  <li key={achievement} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
