import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function Location() {
  return (
    <section id="contact" className="py-24 bg-ink-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              Find <span className="text-gold-500">Us</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Located in the heart of Colombo, offering a premium grooming experience.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-ink-900 text-gold-500 border border-white/10 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl uppercase tracking-wide mb-2">Location</h4>
                  <p className="text-gray-400 leading-relaxed">
                    123 Galle Road,<br />
                    Colombo 03,<br />
                    Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-ink-900 text-gold-500 border border-white/10 rounded-full">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl uppercase tracking-wide mb-2">Opening Hours</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex justify-between w-48">
                      <span>Mon - Fri:</span>
                      <span className="text-white font-medium">9:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between w-48">
                      <span>Saturday:</span>
                      <span className="text-white font-medium">9:00 AM - 9:00 PM</span>
                    </li>
                    <li className="flex justify-between w-48">
                      <span>Sunday:</span>
                      <span className="text-white font-medium">10:00 AM - 6:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-ink-900 text-gold-500 border border-white/10 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl uppercase tracking-wide mb-2">Contact</h4>
                  <p className="text-gray-400 mb-1">
                    <a href="tel:+94112345678" className="hover:text-gold-500 transition-colors">+94 11 234 5678</a>
                  </p>
                  <p className="text-gray-400">
                    <a href="mailto:hello@raptorstudio.lk" className="hover:text-gold-500 transition-colors">hello@raptorstudio.lk</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[500px] w-full bg-ink-900 border border-white/10 relative overflow-hidden group">
            {/* Replace this div with an actual iframe for Google Maps */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
            <div className="absolute inset-0 bg-ink-900/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 bg-ink-900/80 backdrop-blur-sm border border-gold-500/30">
                <MapPin className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold uppercase tracking-widest mb-2">Raptor Studio</h3>
                <p className="text-gray-400 text-sm">Colombo 03, Sri Lanka</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-ink-900 font-bold uppercase tracking-widest text-xs transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
