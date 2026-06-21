import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import * as Icons from 'lucide-react';

const iconMap = {
  brain: Icons.Brain,
  network: Icons.Network,
  gamepad2: Icons.Gamepad2,
  'git-branch': Icons.GitBranch,
  'tree-pine': Icons.TreePine,
  rays: Icons.Sparkles,
  bot: Icons.Bot,
  'file-search': Icons.FileSearch,
  eye: Icons.Eye,
  'message-square': Icons.MessageSquare,
  users: Icons.Users,
  cpu: Icons.Cpu,
  'code-2': Icons.Code2,
  'circle-dot': Icons.CircleDot,
  zap: Icons.Zap,
  coffee: Icons.Coffee,
  database: Icons.Database,
  layers: Icons.Layers,
  layout: Icons.Layout,
  'file-code': Icons.FileCode,
  palette: Icons.Palette,
  play: Icons.Play,
  triangle: Icons.Triangle,
  container: Icons.Container,
  cloud: Icons.Cloud,
  server: Icons.Server,
  'git-pull-request': Icons.GitPullRequest,
  terminal: Icons.Terminal,
  'git-merge': Icons.GitMerge,
};

const categoryColors = {
  'Machine Learning': 'from-violet-500/20 to-purple-500/20 border-violet-500/30',
  'Artificial Intelligence': 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  'Backend': 'from-emerald-500/20 to-green-500/20 border-emerald-500/30',
  'Frontend': 'from-orange-500/20 to-amber-500/20 border-orange-500/30',
  'DevOps / Tools': 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
};

const categoryIcons = {
  'Machine Learning': Icons.Brain,
  'Artificial Intelligence': Icons.Bot,
  'Backend': Icons.Server,
  'Frontend': Icons.Layout,
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
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => {
              const CategoryIcon = categoryIcons[category];
              const borderClass = categoryColors[category];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                  className={`glass rounded-2xl p-6 border bg-gradient-to-br ${borderClass} glass-hover`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-surface">
                      <CategoryIcon className="w-5 h-5 text-accent-purple" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {skillList.map((skill, index) => {
                      const SkillIcon = iconMap[skill.icon] || Icons.Code;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 0.3 }}
                          className="flex items-center gap-2 p-2 rounded-lg bg-surface/50 hover:bg-surface transition-colors"
                        >
                          <SkillIcon className="w-4 h-4 text-accent-purple flex-shrink-0" />
                          <span className="text-sm text-text-secondary truncate">{skill.name}</span>
                        </motion.div>
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
