import { motion } from 'motion/react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export function Booking() {
  return (
    <section id="booking" className="py-24 bg-ink-900 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Secure Your <span className="text-gold-500">Spot</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Book your appointment now. Walk-ins welcome, but appointments are prioritized.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-ink-800 p-8 md:p-10 border border-white/10"
          >
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-gold-500" />
              Request Appointment
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-ink-900 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-ink-900 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="077 123 4567"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Select Service</label>
                <select
                  id="service"
                  className="w-full bg-ink-900 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                  required
                >
                  <option value="" disabled selected>Choose a service...</option>
                  <optgroup label="Gents">
                    <option value="gents-haircut">Precision Haircut</option>
                    <option value="gents-beard">Beard Styling</option>
                    <option value="gents-color">Hair Coloring</option>
                  </optgroup>
                  <optgroup label="Ladies">
                    <option value="ladies-styling">Signature Styling</option>
                    <option value="ladies-keratin">Keratin Treatment</option>
                    <option value="ladies-color">Color & Highlights</option>
                  </optgroup>
                  <optgroup label="Packages">
                    <option value="pkg-executive">The Executive</option>
                    <option value="pkg-glowup">Glow Up</option>
                  </optgroup>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    className="w-full bg-ink-900 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Preferred Time</label>
                  <select
                    id="time"
                    className="w-full bg-ink-900 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                    required
                  >
                    <option value="" disabled selected>Select time...</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-ink-900 font-bold uppercase tracking-widest transition-colors mt-4"
              >
                Submit Request
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                We will contact you shortly to confirm your appointment.
              </p>
            </form>
          </motion.div>

          {/* Direct Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="mb-10">
              <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-4">Need it faster?</h3>
              <p className="text-gray-400 text-lg">
                Skip the form and book directly via WhatsApp or give us a call. Our team is ready to assist you instantly.
              </p>
            </div>
            
            <div className="space-y-6">
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="p-4 bg-[#25D366] text-white rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-1">WhatsApp Us</h4>
                  <p className="text-[#25D366] font-medium">+94 77 123 4567</p>
                </div>
              </a>
              
              <a
                href="tel:+94112345678"
                className="flex items-center gap-6 p-6 bg-ink-800 border border-white/10 hover:border-gold-500/50 transition-colors group"
              >
                <div className="p-4 bg-ink-900 text-gold-500 border border-white/10 rounded-full group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-1">Call the Studio</h4>
                  <p className="text-gold-500 font-medium">+94 11 234 5678</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
