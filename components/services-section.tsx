import React from "react"
import { Card } from '@/components/ui/card'
import { Plane, MapPin, Hotel, FileText, Users, Compass } from 'lucide-react'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    icon: <Compass size={32} />,
    title: 'Safari Experiences',
    description: 'Expertly curated safari packages ranging from 2-10 days, tailored to your interests and budget.',
    features: ['Game drives', 'Walking tours', 'Cultural visits'],
  },
  {
    icon: <MapPin size={32} />,
    title: 'Destination Guides',
    description: 'Comprehensive guides to Uganda\'s top destinations with insider tips and hidden gems.',
    features: ['Local expertise', 'Best practices', 'Hidden spots'],
  },
  {
    icon: <Hotel size={32} />,
    title: 'Accommodations',
    description: 'From luxury lodges to budget camps, we partner with the finest properties across Uganda.',
    features: ['Luxury stays', 'Mid-range', 'Budget-friendly'],
  },
  {
    icon: <Plane size={32} />,
    title: 'Travel Logistics',
    description: 'Hassle-free travel planning including flights, transfers, and transportation.',
    features: ['Flight booking', 'Airport transfers', 'Ground transport'],
  },
  {
    icon: <FileText size={32} />,
    title: 'Visa Assistance',
    description: 'Expert guidance through the visa application process with document support.',
    features: ['Applications', 'Documentation', 'Interviews'],
  },
  {
    icon: <Users size={32} />,
    title: 'Group Tours',
    description: 'Specially designed group packages for families, friends, and organizations.',
    features: ['Group rates', 'Team building', 'Custom itineraries'],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-foreground to-foreground/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-background">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-background/80 max-w-2xl mx-auto">
            Everything you need for an unforgettable Uganda experience, all in one place.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="bg-background border-border p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-primary">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
