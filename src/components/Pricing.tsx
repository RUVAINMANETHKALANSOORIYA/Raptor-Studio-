import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'The Executive',
    target: 'Gents',
    price: 'LKR 8,500',
    desc: 'The ultimate grooming experience for the modern man.',
    features: ['Precision Haircut & Wash', 'Beard Sculpting & Hot Towel', 'Deep Cleansing Facial', 'Scalp Massage'],
    popular: true,
  },
  {
    name: 'Glow Up',
    target: 'Ladies',
    price: 'LKR 12,000',
    desc: 'Refresh your look with our signature styling package.',
    features: ['Signature Haircut & Wash', 'Blowdry & Styling', 'Express Facial', 'Eyebrow Threading'],
    popular: false,
  },
  {
    name: 'Bridal Elegance',
    target: 'Bridal',
    price: 'Custom',
    desc: 'Complete hair and makeup for your special day.',
    features: ['Trial Hair & Makeup', 'On-site Styling', 'Premium Products', 'Touch-up Kit'],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-ink-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Exclusive <span className="text-gold-500">Packages</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Curated experiences designed for maximum value and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 bg-ink-900 border ${pkg.popular ? 'border-gold-500' : 'border-white/10'} flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-ink-900 px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <span className="text-gold-500 text-sm font-bold uppercase tracking-widest">{pkg.target}</span>
                <h3 className="font-display text-3xl font-bold mt-2 mb-4">{pkg.name}</h3>
                <p className="text-gray-400 text-sm">{pkg.desc}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-display font-bold">{pkg.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#booking"
                className={`w-full py-4 text-center font-bold uppercase tracking-widest transition-colors ${
                  pkg.popular
                    ? 'bg-gold-500 hover:bg-gold-400 text-ink-900'
                    : 'border border-white/30 hover:bg-white/10 text-white'
                }`}
              >
                Book Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
