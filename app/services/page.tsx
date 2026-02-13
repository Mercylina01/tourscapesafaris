'use client'

import React from "react"
import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  FileText,
  Plane,
  Heart,
  MapPin,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import Link from 'next/link'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
  button: string
}

const services: Service[] = [
  {
    icon: <FileText size={32} />,
    title: 'Visa Services',
    description:
      'Expert guidance through the visa application process with comprehensive document support and interview preparation.',
    details: [
      'Application form completion',
      'Document gathering assistance',
      'Photo requirements guidance',
      'Interview preparation',
      'Application tracking',
      'Express processing available',
    ],
    button: 'Learn More',
  },
  {
    icon: <Plane size={32} />,
    title: 'Flight Booking',
    description:
      'Seamless flight arrangements with partner airlines, ensuring optimal connections and competitive pricing.',
    details: [
      'International flights',
      'Domestic flights',
      'Flight combinations',
      'Luggage assistance',
      '24/7 support',
      'Travel insurance options',
    ],
    button: 'Book Flights',
  },
  {
    icon: <MapPin size={32} />,
    title: 'Ground Transportation',
    description:
      'Safe, reliable airport transfers and ground transportation throughout your Uganda adventure.',
    details: [
      'Airport pickups/dropoffs',
      'Inter-city transfers',
      'Private vehicles',
      'Professional drivers',
      'GPS tracking',
      'Emergency support',
    ],
    button: 'Arrange Transport',
  },
  {
    icon: <Heart size={32} />,
    title: 'Travel Insurance',
    description:
      'Comprehensive travel insurance coverage protecting your investment and health throughout your journey.',
    details: [
      'Medical coverage',
      'Trip cancellation',
      'Lost luggage coverage',
      'Emergency evacuation',
      'Adventure activities',
      '24/7 claims support',
    ],
    button: 'Get Insurance',
  },
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null)

  const handleServiceClick = (service: string) => {
    if (service === 'Learn More') {
      window.location.href = '/contact'
    } else if (service === 'Book Flights') {
      window.location.href = '/booking?service=flights'
    } else if (service === 'Arrange Transport') {
      window.location.href = '/booking?service=transport'
    } else if (service === 'Get Insurance') {
      window.location.href = '/booking?service=insurance'
    }
  }

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Complete Travel Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make your Uganda journey seamless, from visa applications to travel insurance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, idx) => (
              <Card key={idx} className="p-8 border-border hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground">
                      <CheckCircle size={18} className="text-primary flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handleServiceClick(service.button)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                >
                  {service.button}
                </Button>
              </Card>
            ))}
          </div>

          {/* Visa Service Details */}
          <Card className="p-8 border-border mb-16 bg-foreground/5">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Visa Service Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  Processing Times
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Standard: 2-4 weeks</li>
                  <li>Express: 1-2 weeks</li>
                  <li>Rush: 3-5 days</li>
                  <li>Same-day: Available (extra fees)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                  <FileText size={20} className="text-primary" />
                  Requirements
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Valid passport</li>
                  <li>Recent photos</li>
                  <li>Completed forms</li>
                  <li>Bank statements</li>
                  <li>Employment letter</li>
                  <li>Hotel bookings</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                  <AlertCircle size={20} className="text-primary" />
                  Visa Types
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Tourist (30/90 days)</li>
                  <li>Business (30 days)</li>
                  <li>Work permit</li>
                  <li>Residency</li>
                  <li>Multiple entry</li>
                  <li>Transit visa</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Pricing Table (commented out) */}
          {/*
          <Card className="p-8 border-border bg-foreground/5">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Service Pricing</h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-bold text-foreground">Service</th>
                    <th className="text-left py-3 font-bold text-foreground">Standard</th>
                    <th className="text-left py-3 font-bold text-foreground">Express</th>
                    <th className="text-left py-3 font-bold text-foreground">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: 'Visa Application', std: '$150', exp: '$250', prem: '$400' },
                    { service: 'Flight Booking', std: '$50', exp: 'Included', prem: 'Included' },
                    { service: 'Ground Transport', std: '$100', exp: '$150', prem: 'Included' },
                    { service: 'Travel Insurance', std: '$25', exp: '$35', prem: 'Included' },
                    { service: 'Tour Guiding', std: '$75/day', exp: '$100/day', prem: 'Included' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border/50">
                      <td className="py-3 text-foreground font-medium">{row.service}</td>
                      <td className="py-3 text-muted-foreground">{row.std}</td>
                      <td className="py-3 text-muted-foreground">{row.exp}</td>
                      <td className="py-3 text-primary font-semibold">{row.prem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          */}

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Plan Your Service Package?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact our team to discuss which services are right for your Uganda adventure.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg h-12 px-8">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
