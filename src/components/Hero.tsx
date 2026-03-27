import { motion } from 'motion/react';
import { Star, Users, CalendarCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-900 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
          alt="Premium Salon Interior"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/3 lg:w-3/5 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1] uppercase">
              Look Sharp.<br />
              <span className="text-gold-500 italic font-serif tracking-normal lowercase">Feel</span> Unstoppable.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl font-light">
              Colombo's premier unisex grooming and beauty studio. Expert stylists, premium products, and a transformation that speaks for itself.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-ink-900 uppercase tracking-widest bg-gold-500 hover:bg-gold-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Now
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white uppercase tracking-widest border border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                View Services
              </a>
            </div>
            
            <div className="mt-8">
              <p className="text-sm font-semibold text-gold-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Limited slots available today
              </p>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden md:flex flex-col gap-6 w-full md:w-1/3 items-end"
        >
          <div className="bg-ink-800/80 backdrop-blur-sm border border-white/10 p-6 w-64 transform translate-x-4 hover:translate-x-0 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-gold-500/20 text-gold-500">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl">4.9/5</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Google Reviews</p>
              </div>
            </div>
          </div>
          
          <div className="bg-ink-800/80 backdrop-blur-sm border border-white/10 p-6 w-64 transform -translate-x-4 hover:translate-x-0 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-gold-500/20 text-gold-500">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl">5,000+</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="bg-ink-800/80 backdrop-blur-sm border border-white/10 p-6 w-64 transform translate-x-8 hover:translate-x-0 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-gold-500/20 text-gold-500">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl">10+</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
