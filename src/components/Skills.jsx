import { useState } from 'react';
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
  const firstCategory = Object.keys(skills)[0];
  const firstSkill = skills[firstCategory]?.[0];
  const [activeSkill, setActiveSkill] = useState(
    firstCategory && firstSkill ? `${firstCategory}:${firstSkill.name}` : ''
  );

  const activeCategory = activeSkill?.split(':')[0];
  const activeSkillName = activeSkill?.split(':')[1];
  const activeSkillItem = skills[activeCategory]?.find((skill) => skill.name === activeSkillName);
  const detail = activeSkillItem?.detail || 'Practical experience in this area.';

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
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>

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
                    <h3 className="text-lg font-semibold text-white">{category}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {skillList.map((skill) => {
                      const SkillIcon = Icons[skill.icon] || Icons.Code2;
                      const isActive = activeSkill === `${category}:${skill.name}`;

                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onMouseEnter={() => setActiveSkill(`${category}:${skill.name}`)}
                          onFocus={() => setActiveSkill(`${category}:${skill.name}`)}
                          onClick={() => setActiveSkill(`${category}:${skill.name}`)}
                          className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-left transition-all duration-200 ${
                            isActive
                              ? 'border-accent-blue bg-accent-blue/10 shadow-lg shadow-black/10 scale-[1.02]'
                              : 'border-border/50 bg-surface/70 hover:border-accent-blue/60 hover:bg-surface'
                          }`}
                        >
                          <SkillIcon className="w-4 h-4 text-accent-blue flex-shrink-0" />
                          <span className="text-sm text-text-primary truncate">{skill.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            key={activeSkill}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 glass rounded-2xl p-5 border border-border/60"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-2">Skill Detail</p>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-2 w-2 rounded-full bg-accent-blue" />
              <h3 className="text-lg font-semibold text-white">{activeSkillName}</h3>
            </div>
            <p className="text-sm text-text-secondary max-w-3xl">{detail}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
