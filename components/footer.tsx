import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                T
              </div>
              TourScape Safaris
            </h3>
            <p className="text-sm opacity-80">
              Experience the magic of Uganda with our premium safari experiences and travel services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations" className="opacity-80 hover:opacity-100 transition">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/safaris" className="opacity-80 hover:opacity-100 transition">
                  Safari Packages
                </Link>
              </li>
              <li>
                <Link href="/accommodations" className="opacity-80 hover:opacity-100 transition">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+256702860241" className="hover:opacity-100 opacity-80 transition">
                  +256 702 860 241
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@tourscape.org" className="hover:opacity-100 opacity-80 transition">
                  info@tourscape.org
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <a href="https://maps.google.com/?q=Seeta+Kampala+Uganda" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-80 transition">
                  Seeta, Kampala, Uganda
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.tiktok.com/@tourscape" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-full opacity-80 hover:opacity-100 transition" title="TikTok @tourscape">
                <Twitter size={18} className="text-foreground" />
              </a>
              <a href="https://www.instagram.com/tourscape" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-full opacity-80 hover:opacity-100 transition" title="Instagram @tourscape">
                <Instagram size={18} className="text-foreground" />
              </a>
              <a href="https://wa.me/256702860241" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-full opacity-80 hover:opacity-100 transition" title="WhatsApp">
                <Phone size={18} className="text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; 2024 TourScape Safaris. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:opacity-100 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:opacity-100 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
