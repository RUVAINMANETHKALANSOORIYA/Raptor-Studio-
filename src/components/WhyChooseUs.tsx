import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, TrendingUp, UserCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Expert Stylists',
    desc: 'Our team consists of award-winning professionals trained in the latest global trends.',
    icon: UserCheck,
  },
  {
    title: 'Premium Products',
    desc: 'We use only top-tier, salon-exclusive brands to ensure the best care for your hair and skin.',
    icon: Sparkles,
  },
  {
    title: 'Strict Hygiene',
    desc: 'Impeccable cleanliness and sanitized tools for every single client, guaranteed.',
    icon: ShieldCheck,
  },
  {
    title: 'Personalized Looks',
    desc: 'We don’t just cut hair; we design a look that complements your face shape and lifestyle.',
    icon: TrendingUp,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-ink-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Why Choose <span className="text-gold-500">Raptor</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the difference of a truly premium grooming studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-ink-800 border border-white/5 hover:border-gold-500/30 transition-all duration-300 group text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ink-900 text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
