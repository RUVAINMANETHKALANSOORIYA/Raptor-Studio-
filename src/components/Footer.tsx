import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="font-display text-3xl font-bold tracking-tighter text-white uppercase mb-6 inline-block">
              Raptor <span className="text-gold-500">Studio</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Colombo's premier unisex grooming and beauty studio. Look sharp, feel unstoppable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg uppercase tracking-widest mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-gold-500 transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-gold-500 transition-colors">Pricing</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-gold-500 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg uppercase tracking-widest mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Gents Grooming</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Ladies Styling</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Bridal Packages</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Color & Treatments</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Raptor Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
