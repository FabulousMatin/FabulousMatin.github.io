import { motion } from 'framer-motion';
import { education, certifications, honors } from '../data/portfolio';
import { GraduationCap, Award, Trophy, Calendar, MapPin, ExternalLink } from 'lucide-react';

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
              <div>
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
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-1">{edu.institution}</h4>
                    <p className="text-accent-purple mb-3">{edu.degree}</p>

                    <div className="flex items-center gap-2 mb-5 text-sm">
                      <span className="text-text-muted">GPA:</span>
                      <span className="text-green-400 font-medium">{edu.gpa}</span>
                    </div>

                    <div className="space-y-3">
                      {edu.achievements.map((item) => (
                        <div key={`${item.role}-${item.course}`} className="rounded-xl bg-surface/70 border border-border/50 p-4">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-2 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-xs">{item.role}</span>
                            <span className="font-medium text-white">{item.course}</span>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-2 text-sm text-text-secondary">
                            <p>Instructor: {item.instructor}</p>
                            <p>Semesters: {item.semesters}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div>
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

                      <a
                        href={cert.validationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-accent-cyan hover:underline"
                      >
                        Validate certificate
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
