'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { MapPin, Users, AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface Destination {
  id: string
  name: string
  description: string
  highlights: string[]
  bestTime: string
  difficulty: string
  visitors: number
  image: string
}

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Bwindi Impenetrable Forest',
    description:
      'Home to nearly half of the world\'s mountain gorillas. Trek through misty forests and experience close encounters with these magnificent primates in their natural habitat.',
    highlights: ['Mountain gorillas', 'Rainforest trails', 'Local culture', 'Bird watching'],
    bestTime: 'June-August, December-January',
    difficulty: 'Challenging',
    visitors: 2500,
    image: '/mountain-gorillas.jpg',
  },
  {
    id: '2',
    name: 'Queen Elizabeth National Park',
    description:
      'Uganda\'s most visited national park featuring diverse wildlife including lions, elephants, buffalo, and over 600 bird species. Experience scenic boat cruises and thrilling game drives.',
    highlights: ['Wildlife diversity', 'Boat safaris', 'Game drives', 'Photography'],
    bestTime: 'Year-round',
    difficulty: 'Easy to Moderate',
    visitors: 5000,
    image: '/queen-elizabeth-park.jpg',
  },
  {
    id: '3',
    name: 'Rwenzori Mountains',
    description:
      'Africa\'s third-highest mountain range with snow-capped peaks, glacial valleys, and stunning alpine scenery. Perfect for adventure seekers and mountaineers.',
    highlights: ['Mountain climbing', 'Glaciers', 'Alpine lakes', 'Scenic views'],
    bestTime: 'June-September, December-January',
    difficulty: 'Challenging',
    visitors: 800,
    image: '/rwenzori-mountains.jpg',
  },
  {
    id: '4',
    name: 'Kibale Forest National Park',
    description:
      'A primate paradise hosting the largest concentration of chimpanzees in Uganda. Trek through pristine forest and track habituated chimp communities.',
    highlights: ['Chimpanzee trekking', 'Forest walks', 'Primates', 'Biodiversity'],
    bestTime: 'June-August, December-February',
    difficulty: 'Moderate',
    visitors: 3000,
    image: '/kibale-forest.jpg',
  },
  {
    id: '5',
    name: 'Murchison Falls National Park',
    description:
      'Dramatic waterfalls, vast savannas, and prolific wildlife viewing. One of Uganda\'s largest parks with abundant elephants, hippos, crocodiles, and bird species.',
    highlights: ['Murchison Falls', 'Boat trips', 'Game drives', 'Large herds'],
    bestTime: 'Year-round',
    difficulty: 'Easy to Moderate',
    visitors: 4000,
    image: '/murchison.jpg',
  },
  {
    id: '6',
    name: 'Lake Bunyonyi',
    description:
      'A picturesque crater lake surrounded by lush hills and islands. Perfect for relaxation, island hopping, and cultural immersion with local communities.',
    highlights: ['Island hopping', 'Scenic views', 'Water activities', 'Relaxation'],
    bestTime: 'Year-round',
    difficulty: 'Easy',
    visitors: 2000,
    image: '/lake-bunyonyi.jpg',
  },
]

export default function DestinationsPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Discover Uganda's Destinations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From misty rainforests to expansive savannas, explore the most remarkable places in Uganda.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-all group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{destination.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 mb-4 border-t border-border pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Best Time:</span>
                      <span className="font-semibold text-foreground">{destination.bestTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Difficulty:</span>
                      <span className="font-semibold text-foreground">{destination.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Annual Visitors:</span>
                      <span className="font-semibold text-foreground">
                        {destination.visitors.toLocaleString()}+
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/safaris"
                    className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded text-center font-semibold transition-colors"
                  >
                    View Safari Packages
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-border">
              <MapPin size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Strategic Locations</h3>
              <p className="text-muted-foreground">
                All our destinations are carefully selected for their unique ecosystems, wildlife diversity, and accessibility.
              </p>
            </Card>
            <Card className="p-8 border-border">
              <Users size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Expert Guides</h3>
              <p className="text-muted-foreground">
                Our experienced guides have deep local knowledge and genuine passion for sharing Uganda's natural wonders.
              </p>
            </Card>
            <Card className="p-8 border-border">
              <AlertCircle size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Safety First</h3>
              <p className="text-muted-foreground">
                All activities are conducted with the highest safety standards and environmental conservation practices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
