import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Kavindu Perera',
    role: 'Entrepreneur',
    text: 'Found my permanent spot in Colombo. The attention to detail is unmatched, and the vibe is exactly what I was looking for. Highly recommend the executive facial.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Shenali Fernando',
    role: 'Fashion Influencer',
    text: 'Raptor Studio completely transformed my hair. The color correction was flawless, and the keratin treatment left it feeling like silk. Best salon experience ever.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dilshan Silva',
    role: 'Software Engineer',
    text: 'Clean, professional, and they actually listen to what you want. The fade was sharp, and the beard trim was on point. Will definitely be back.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-ink-900 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Client <span className="text-gold-500">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-ink-800 p-8 border border-white/5 relative group hover:border-gold-500/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-gold-500/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-bold text-lg uppercase tracking-wide text-white">{testimonial.name}</h4>
                <p className="text-gold-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
