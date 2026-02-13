'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Award, Users, Globe, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Premium quality experiences and professional service standards',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supporting local communities and sustainable tourism practices',
    },
    {
      icon: Globe,
      title: 'Adventure',
      description: 'Unforgettable journeys through Uganda\'s natural wonders',
    },
    {
      icon: CheckCircle,
      title: 'Trust',
      description: 'Transparent pricing and reliable service you can depend on',
    },
  ]

  // Team array is kept but not used
  const team = [
    {
      name: 'Safari Guide',
      role: 'Lead Safari Expert',
      experience: '15+ years',
    },
    {
      name: 'Tour Operator',
      role: 'Operations Manager',
      experience: '10+ years',
    },
    {
      name: 'Travel Consultant',
      role: 'Bookings Specialist',
      experience: '8+ years',
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About TourScape Safaris</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Your gateway to authentic Uganda safari experiences and comprehensive travel services
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
                <p className="text-lg text-foreground/80 mb-4">
                  TourScape Safaris was founded with a passion for sharing the breathtaking beauty of Uganda with travelers from around the world. We believe in creating authentic, transformative experiences that connect people with nature and culture.
                </p>
                <p className="text-lg text-foreground/80 mb-4">
                  Starting as a small family-run operation, we've grown into a trusted name in Uganda tourism, while maintaining our commitment to personalized service and sustainable practices.
                </p>
                <p className="text-lg text-foreground/80">
                  Today, we offer comprehensive travel services including wildlife safaris, gorilla trekking, cultural tours, visa assistance, and luxury accommodations for all types of travelers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-lg font-semibold text-foreground mb-8">Successful Tours</p>
                <div className="text-4xl font-bold text-secondary mb-2">4.9★</div>
                <p className="text-lg font-semibold text-foreground">Guest Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <div key={idx} className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-foreground">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Uganda Safaris</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    Wildlife & Game Safaris
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    Mountain Gorilla Trekking
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    Cultural Tours
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    Adventure Activities
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Travel Services</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    Visa Assistance
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    Accommodation Booking
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    International Tours
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    24/7 Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section (commented out for now) */}
        {/*
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-foreground/70">{member.experience} in tourism</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Adventure?</h2>
            <p className="text-lg opacity-90 mb-8">
              Start planning your Uganda safari experience with us today
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/booking">
                <Button className="bg-white text-primary hover:bg-white/90">
                  Book Now
                </Button>
              </Link>
              <a href="https://wa.me/256784606507" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white/20 text-white border border-white hover:bg-white/30">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
