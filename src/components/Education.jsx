import { motion } from 'framer-motion';
import { education, certifications, honors } from '../data/portfolio';
import { GraduationCap, Award, Trophy, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-surface">
                    <GraduationCap className="w-5 h-5 text-accent-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>

                {education.map((edu, index) => (
                  <div key={index} className="glass rounded-2xl p-6 glass-hover">
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-1">{edu.institution}</h4>
                    <p className="text-accent-purple mb-3">{edu.degree}</p>

                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <span className="text-text-muted">GPA:</span>
                      <span className="text-green-400 font-medium">{edu.gpa}</span>
                    </div>

                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <ChevronRight className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-surface">
                    <Award className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Certifications</h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="glass rounded-xl p-4 glass-hover">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-medium text-white mb-1">{cert.name}</h4>
                          <p className="text-sm text-text-muted">{cert.issuer}</p>
                        </div>
                        <span className="text-xs text-accent-purple bg-accent-purple/10 px-2 py-1 rounded-full">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-surface">
                  <Trophy className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white">Honors & Awards</h3>
              </div>

              <div className="space-y-4">
                {honors.map((honor, index) => (
                  <div key={index} className="glass rounded-2xl p-6 glass-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20">
                        <Trophy className="w-6 h-6 text-accent-purple" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="font-semibold text-white">{honor.title}</h4>
                          <span className="text-xs text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded-full">
                            {honor.date}
                          </span>
                        </div>
                        <p className="text-sm text-accent-purple mb-2">{honor.issuer}</p>
                        <p className="text-sm text-text-secondary">{honor.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
