'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapPin, Clock, Users, Star } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function InternationalToursPage() {
  const [filter, setFilter] = useState<'all' | 'africa' | 'middle-east' | 'europe'>('all')

  const tours = [
    {
      id: 1,
      name: 'East Africa Grand Safari',
      region: 'africa',
      countries: ['Uganda', 'Kenya', 'Tanzania'],
      duration: 14,
      groupSize: '4-8 people',
      price: 5499,
      image: '/kenya.jpg',
      highlights: ['Serengeti Migration', 'Mount Kilimanjaro', 'Gorilla Trekking', 'Beach Relaxation'],
      rating: 4.9,
      reviews: 48,
    },
    {
      id: 2,
      name: 'Southern Africa Explorer',
      region: 'africa',
      countries: ['Botswana', 'Zimbabwe', 'South Africa'],
      duration: 12,
      groupSize: '4-8 people',
      price: 4899,
      image: '/south-africa.jpg',
      highlights: ['Victoria Falls', 'Safari Parks', 'Wine Tasting', 'Adventure Activities'],
      rating: 4.8,
      reviews: 35,
    },
    {
      id: 3,
      name: 'Egypt Wonders & Nile Cruise',
      region: 'middle-east',
      countries: ['Egypt'],
      duration: 10,
      groupSize: '6-12 people',
      price: 2899,
      image: '/eygpt.jpg',
      highlights: ['Pyramids of Giza', 'Luxor Temples', 'Nile River Cruise', 'Cairo Market Tour'],
      rating: 4.7,
      reviews: 52,
    },
    {
      id: 4,
      name: 'Dubai & Arabian Luxury',
      region: 'middle-east',
      countries: ['UAE', 'Oman'],
      duration: 8,
      groupSize: '2-10 people',
      price: 3299,
      image: '/dubai.jpg',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Wadi Adventure', 'Luxury Shopping'],
      rating: 4.6,
      reviews: 41,
    },
    {
      id: 5,
      name: 'European Cultural Trail',
      region: 'europe',
      countries: ['Italy', 'France', 'Spain'],
      duration: 16,
      groupSize: '4-10 people',
      price: 6299,
      image: '/italy.jpg',
      highlights: ['Colosseum Rome', 'Eiffel Tower', 'Sagrada Familia', 'Wine Regions'],
      rating: 4.8,
      reviews: 63,
    },
    {
      id: 6,
      name: 'Alpine Adventure Europe',
      region: 'europe',
      countries: ['Switzerland', 'Austria', 'Germany'],
      duration: 12,
      groupSize: '4-8 people',
      price: 5899,
      image: '/swizz.jpg',
      highlights: ['Swiss Alps', 'Mountain Railways', 'Bavarian Villages', 'Lake Views'],
      rating: 4.9,
      reviews: 44,
    },
  ]

  const filteredTours = filter === 'all' ? tours : tours.filter((tour) => tour.region === filter)

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">International Tours</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Explore the world with TourScape Safaris. From African adventures to European cultural experiences
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-background border-b border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {['all', 'africa', 'middle-east', 'europe'].map((region) => (
                <button
                  key={region}
                  onClick={() => setFilter(region as any)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    filter === region
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-white text-foreground border border-border hover:bg-muted'
                  }`}
                >
                  {region === 'all'
                    ? 'All Tours'
                    : region.charAt(0).toUpperCase() + region.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
                <div key={tour.id} className="bg-background rounded-lg overflow-hidden hover:shadow-xl transition border border-border">
                  {/* Image */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-t-lg"
                      priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                      <div className="text-center text-white">
                        <MapPin size={32} className="mx-auto mb-1" />
                        <p className="text-sm font-semibold">{tour.countries.join(', ')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{tour.name}</h3>

                    <div className="space-y-2 mb-4 text-sm text-foreground/70">
                      <div className="flex gap-2 items-center">
                        <Clock size={16} className="text-primary" />
                        <span>{tour.duration} Days</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Users size={16} className="text-primary" />
                        <span>{tour.groupSize}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span>{tour.rating} ({tour.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-foreground/60 mb-2">Highlights:</p>
                      <div className="flex flex-wrap gap-1">
                        {tour.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-foreground/60">From</p>
                          <p className="text-2xl font-bold text-primary">${tour.price.toLocaleString()}</p>
                        </div>
                        <Link href="/booking">
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find Your Destination?</h2>
            <p className="text-lg opacity-90 mb-8">
              We offer customized tour packages tailored to your preferences. Contact us for a personalized itinerary.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://wa.me/256784606507" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-primary hover:bg-white/90">
                  WhatsApp Us
                </Button>
              </a>
              <Link href="/contact">
                <Button className="bg-white/20 text-white border border-white hover:bg-white/30">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
