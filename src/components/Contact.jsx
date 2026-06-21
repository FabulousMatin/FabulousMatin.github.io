import { motion } from 'framer-motion';
import { useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { Mail, MapPin, Phone, Github, Linkedin, CheckCircle, SendHorizontal } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  telegram: SendHorizontal,
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio message from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    }, 400);
  };

  return (
    <section id="contact" className="section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6">Let's connect</h3>

              <p className="text-text-secondary mb-8">
                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 glass rounded-xl glass-hover"
                >
                  <div className="p-3 rounded-lg bg-accent-purple/10">
                    <Mail className="w-5 h-5 text-accent-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Email</p>
                    <p className="text-white">{personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <div className="p-3 rounded-lg bg-accent-blue/10">
                    <Phone className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Phone</p>
                    <p className="text-white">{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <div className="p-3 rounded-lg bg-accent-cyan/10">
                    <MapPin className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Location</p>
                    <p className="text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-xl glass-hover"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5 text-text-secondary hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-surface/50 border border-border rounded-xl
                                 text-white placeholder-text-muted
                                 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple
                                 transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-surface/50 border border-border rounded-xl
                                 text-white placeholder-text-muted
                                 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple
                                 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-surface/50 border border-border rounded-xl
                                 text-white placeholder-text-muted resize-none
                                 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple
                                 transition-colors"
                      placeholder="Your message here..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Sent!
                      </>
                    ) : (
                      <>
                        <SendHorizontal className="w-5 h-5" />
                        Open Email
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
