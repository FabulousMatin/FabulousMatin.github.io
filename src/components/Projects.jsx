import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { Github, ExternalLink, X, PlayCircle } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const project = projects[0];

  return (
    <section id="projects" className="section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-pink/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Project</span>
          </h2>

          <button
            type="button"
            onClick={() => setActiveProject(project)}
            className="w-full text-left glass rounded-3xl p-8 glass-hover border border-border/60"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{project.name}</h3>
                <p className="text-text-secondary max-w-3xl">{project.description}</p>
              </div>
              <span className="p-3 rounded-full bg-surface border border-border/60">
                <PlayCircle className="w-5 h-5 text-accent-purple" />
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-surface text-xs text-text-muted border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm p-4 md:p-8 overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-5xl glass rounded-3xl border border-border/60 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 p-6 border-b border-border/60">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{activeProject.name}</h3>
                </div>
                <button type="button" onClick={() => setActiveProject(null)} className="p-2 rounded-full bg-surface hover:bg-surfaceLight">
                  <X className="w-5 h-5 text-text-primary" />
                </button>
              </div>

              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 p-6">
                <div className="space-y-6">
                  <div className="rounded-2xl border border-dashed border-border/70 bg-surface/40 min-h-64 p-4 text-sm text-text-muted">
                    Placeholder area for your hero image or screenshot.
                  </div>
                  <div className="rounded-2xl border border-dashed border-border/70 bg-surface/40 min-h-40 p-4 text-sm text-text-muted">
                    Placeholder area for GIFs, demos, or architecture diagrams.
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-text-muted mb-2">Overview</h4>
                    <p className="text-text-secondary leading-relaxed">{activeProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-text-muted mb-2">Details</h4>
                    <ul className="space-y-2">
                      {activeProject.details.map((item) => (
                        <li key={item} className="text-sm text-text-secondary leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-text-muted mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-surface text-xs text-text-muted border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
