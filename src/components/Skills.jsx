import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import * as Icons from 'lucide-react';

const categoryIcons = {
  'Machine Learning': Icons.Brain,
  'Artificial Intelligence': Icons.Bot,
  'Software': Icons.Server,
  'DevOps / Tools': Icons.Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <h2 className="section-title mb-0">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="group relative">
              <Icons.Info className="w-5 h-5 text-text-muted cursor-help" />
              <div className="absolute left-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 w-64">
                <div className="bg-black border border-zinc-600 rounded-lg px-3 py-2 shadow-lg text-xs text-white leading-relaxed">
                  Scores are relative to each other and to my experience — no one can claim 5/5 in anything! :)
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => {
              const CategoryIcon = categoryIcons[category] || Icons.Sparkles;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.08, duration: 0.45 }}
                  className="glass rounded-2xl p-6 glass-hover"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-surface">
                      <CategoryIcon className="w-5 h-5 text-accent-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">{category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => {
                      const SkillIcon = Icons[skill.icon] || Icons.Code2;

                      return (
                        <span
                          key={skill.name}
                          className="group relative flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 transition-all duration-200 hover:border-accent-blue hover:bg-black cursor-default"
                        >
                          <SkillIcon className="w-4 h-4 text-accent-blue flex-shrink-0 transition-colors duration-200 group-hover:text-accent-cyan" />
                          <span className="text-sm text-text-primary transition-colors duration-200 group-hover:text-white font-medium">{skill.name}</span>
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                            <div className="flex items-center gap-1.5 bg-white border border-zinc-300 rounded-lg px-3 py-1.5 whitespace-nowrap shadow-lg">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full ${
                                    i <= (skill.level || 0)
                                      ? 'bg-accent-blue'
                                      : 'bg-zinc-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
