import { motion } from 'motion/react';
import { Scissors, Sparkles, Droplet, Paintbrush } from 'lucide-react';

const gentsServices = [
  { name: 'Precision Haircut', desc: 'Tailored cuts with hot towel finish.', price: 'LKR 2,500', icon: Scissors },
  { name: 'Beard Styling', desc: 'Sculpting, trimming, and line-ups.', price: 'LKR 1,500', icon: Scissors },
  { name: 'Hair Coloring', desc: 'Full color, highlights, or grey blending.', price: 'From LKR 4,000', icon: Paintbrush },
  { name: 'Executive Facial', desc: 'Deep cleanse and rejuvenation.', price: 'LKR 5,500', icon: Sparkles },
];

const ladiesServices = [
  { name: 'Signature Styling', desc: 'Blowouts, updos, and custom styles.', price: 'From LKR 3,500', icon: Scissors },
  { name: 'Keratin Treatment', desc: 'Smooth, frizz-free, radiant hair.', price: 'From LKR 15,000', icon: Droplet },
  { name: 'Color & Highlights', desc: 'Balayage, ombré, and vibrant colors.', price: 'From LKR 8,000', icon: Paintbrush },
  { name: 'Bridal Packages', desc: 'Complete hair and makeup for your big day.', price: 'Custom', icon: Sparkles },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-ink-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Our <span className="text-gold-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Premium grooming and beauty treatments tailored for the modern individual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gents */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <h3 className="font-display text-3xl font-bold uppercase tracking-tight">Gents</h3>
              <div className="h-px bg-gold-500 flex-grow ml-4"></div>
            </div>
            <div className="space-y-6">
              {gentsServices.map((service, idx) => (
                <motion.div 
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-start justify-between p-6 bg-ink-900 border border-white/5 hover:border-gold-500/50 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-ink-800 text-gold-500 group-hover:bg-gold-500 group-hover:text-ink-900 transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{service.name}</h4>
                      <p className="text-gray-400 text-sm">{service.desc}</p>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end justify-between h-full">
                    <span className="font-display font-bold text-gold-500">{service.price}</span>
                    <a href="#booking" className="text-xs uppercase tracking-widest font-bold mt-4 hover:text-gold-500 transition-colors">
                      Book Now &rarr;
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ladies */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <h3 className="font-display text-3xl font-bold uppercase tracking-tight">Ladies</h3>
              <div className="h-px bg-gold-500 flex-grow ml-4"></div>
            </div>
            <div className="space-y-6">
              {ladiesServices.map((service, idx) => (
                <motion.div 
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-start justify-between p-6 bg-ink-900 border border-white/5 hover:border-gold-500/50 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-ink-800 text-gold-500 group-hover:bg-gold-500 group-hover:text-ink-900 transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{service.name}</h4>
                      <p className="text-gray-400 text-sm">{service.desc}</p>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end justify-between h-full">
                    <span className="font-display font-bold text-gold-500">{service.price}</span>
                    <a href="#booking" className="text-xs uppercase tracking-widest font-bold mt-4 hover:text-gold-500 transition-colors">
                      Book Now &rarr;
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-ink-900 uppercase tracking-widest bg-gold-500 hover:bg-gold-400 transition-all duration-300"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
