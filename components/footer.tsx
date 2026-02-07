import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div>
            <div className="mb-4">
              <Image
                src="/tourscape-logo.png"
                alt="Tourscape Safaris"
                width={180}
                height={80}
                className="h-auto w-44"
              />
            </div>
            <p className="text-sm opacity-80">
              Experience the magic of Uganda with our premium safari experiences and travel services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations" className="opacity-80 hover:opacity-100 hover:text-primary transition">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/safaris" className="opacity-80 hover:opacity-100 hover:text-primary transition">
                  Safari Packages
                </Link>
              </li>
              <li>
                <Link href="/accommodations" className="opacity-80 hover:opacity-100 hover:text-primary transition">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="opacity-80 hover:opacity-100 hover:text-primary transition">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:+256702860241" className="hover:opacity-100 hover:text-primary opacity-80 transition">
                  +256 784 606507
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:info@tourscape.org" className="hover:opacity-100 hover:text-primary opacity-80 transition">
                  info@tourscape.org
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <a 
                  href="https://maps.google.com/?q=Seeta+Kampala+Uganda" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-100 hover:text-primary opacity-80 transition"
                >
                  Seeta, Kampala, Uganda
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.tiktok.com/@tourscape" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-primary rounded-full hover:bg-primary/90 transition transform hover:scale-110" 
                title="TikTok @tourscape"
              >
                <svg 
                  className="w-5 h-5 text-foreground" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/tourscape" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-primary rounded-full hover:bg-primary/90 transition transform hover:scale-110" 
                title="Instagram @tourscape"
              >
                <Instagram size={20} className="text-foreground" />
              </a>
              <a 
                href="https://wa.me/256702860241" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-primary rounded-full hover:bg-primary/90 transition transform hover:scale-110" 
                title="WhatsApp"
              >
                <Phone size={20} className="text-foreground" />
              </a>
            </div>
            <p className="text-xs mt-4 opacity-70">
              Connect with us for safari updates and travel tips!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; 2024 TourScape Safaris. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:opacity-100 hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:opacity-100 hover:text-primary transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
