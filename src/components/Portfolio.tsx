import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const portfolioItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop', alt: 'Gents Fade Haircut' },
  { id: 2, src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop', alt: 'Ladies Balayage' },
  { id: 3, src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop', alt: 'Beard Trim' },
  { id: 4, src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop', alt: 'Bridal Makeup' },
  { id: 5, src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop', alt: 'Gents Styling' },
  { id: 6, src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&auto=format&fit=crop', alt: 'Ladies Color' },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-ink-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              Our <span className="text-gold-500">Work</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              Real transformations. Real confidence. See what we can do for you.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-white transition-colors uppercase tracking-widest font-bold text-sm"
          >
            <Instagram className="w-5 h-5" />
            Follow @RaptorStudio
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest border border-white/30 px-6 py-3 backdrop-blur-sm">
                  {item.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
