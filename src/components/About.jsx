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

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-text-secondary leading-relaxed">
                {personalInfo.summary}
              </p>

              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Personal Profile</h3>
                <ul className="space-y-3">
                  {personalInfo.profile.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-text-muted">Location</span>
                    <span className="text-white">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-text-muted">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-accent-purple hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-text-muted">Birth Date</span>
                    <span className="text-white">{personalInfo.birthDate}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-text-muted">Website</span>
                    <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">
                      {personalInfo.website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Artificial Intelligence', 'System Design', 'Open Source', 'Research', 'Photography'].map((interest) => (
                    <span key={interest} className="px-4 py-2 bg-surface rounded-lg text-sm text-text-secondary">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
