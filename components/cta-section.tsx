import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Phone } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready for Your Adventure?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Start planning your dream safari experience today. Our expert team is ready to craft the perfect itinerary just for you.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Expert local guides with 10+ years experience',
                'Personalized itineraries tailored to your interests',
                '24/7 support throughout your journey',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-primary-foreground">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/safaris">
                <Button className="bg-white text-primary hover:bg-white/90 text-lg h-12 px-8 flex items-center gap-2">
                  Explore Safaris
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg h-12 px-8 flex items-center gap-2 bg-transparent"
                >
                  <Phone size={20} />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Quick Contact */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">Quick Inquiry</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-primary-foreground text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-primary-foreground text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-primary-foreground text-sm font-medium mb-2">
                  Interested In
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40">
                  <option className="bg-foreground text-foreground">Select an option</option>
                  <option className="bg-foreground text-foreground">Safari Package</option>
                  <option className="bg-foreground text-foreground">Accommodation</option>
                  <option className="bg-foreground text-foreground">Visa Services</option>
                  <option className="bg-foreground text-foreground">Group Tour</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-2 rounded-lg transition-colors mt-6"
              >
                Send Inquiry
              </button>
            </form>

            <p className="text-primary-foreground/70 text-xs mt-4 text-center">
              We&apos;ll respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
