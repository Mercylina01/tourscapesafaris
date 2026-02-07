'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Star, Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface SafariPackage {
  id: string
  name: string
  duration: number
  groupSize: number
  price: number // kept for future use
  image: string
  destinations: string[]
  activities: string[]
  inclusions: string[]
  difficulty: string
  rating: number
  reviews: number
}

const safariPackages: SafariPackage[] = [
  {
    id: '1',
    name: 'Mountain Gorilla Experience',
    duration: 3,
    groupSize: 8,
    price: 2999,
    image: '/gorilla3.jpg',
    destinations: ['Bwindi Impenetrable Forest', 'Lake Bunyonyi'],
    activities: ['Gorilla trekking', 'Forest walks', 'Cultural visit'],
    inclusions: [
      'Expert guide',
      'All park fees',
      'Meals and drinks',
      'Accommodation',
      'Airport transfers',
    ],
    difficulty: 'Challenging',
    rating: 4.9,
    reviews: 128,
  },
  {
    id: '2',
    name: 'Classic Uganda Safari',
    duration: 5,
    groupSize: 12,
    price: 1899,
    image: '/queen-elizabeth-park.jpg',
    destinations: ['Queen Elizabeth National Park', 'Lake Kazinga'],
    activities: ['Game drives', 'Boat safari', 'Bird watching', 'Photography'],
    inclusions: [
      'Professional guide',
      'All meals',
      'Lodge accommodation',
      'Park entrance',
      'Activities',
    ],
    difficulty: 'Easy',
    rating: 4.8,
    reviews: 256,
  },
  {
    id: '3',
    name: 'Primates & Wilderness',
    duration: 6,
    groupSize: 10,
    price: 2499,
    image: '/safari-wildlife1.jpg',
    destinations: ['Kibale Forest', 'Queen Elizabeth NP', 'Crater Lakes'],
    activities: ['Chimp trekking', 'Game drives', 'Nature walks', 'Scenic hikes'],
    inclusions: [
      'Experienced guide',
      'All meals',
      'Quality lodges',
      'Park fees',
      'Transportation',
    ],
    difficulty: 'Moderate',
    rating: 4.9,
    reviews: 184,
  },
]

export default function SafarisPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('')

  // ✅ Price filtering disabled (logic preserved)
  const filteredPackages = safariPackages.filter((pkg) => {
    if (selectedDifficulty && pkg.difficulty !== selectedDifficulty) return false
    return true
  })

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Safari Experience Packages
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated adventures designed to showcase Uganda&apos;s incredible wildlife and landscapes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Difficulty Filter (price filter removed) */}
          <div className="mb-12">
            <label className="block text-sm font-semibold mb-3 text-foreground">
              Difficulty
            </label>
            <div className="flex flex-wrap gap-2">
              {['Easy', 'Moderate', 'Challenging'].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedDifficulty(selectedDifficulty === level ? '' : level)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedDifficulty === level
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {pkg.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(pkg.rating)
                              ? 'fill-primary text-primary'
                              : 'text-muted'
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {pkg.rating} ({pkg.reviews} reviews)
                    </span>
                  </div>

                  {/* Destinations */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">
                      Destinations:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.destinations.slice(0, 2).map((dest, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="mb-6 flex-1">
                    <p className="text-xs font-semibold text-foreground mb-2">
                      Includes:
                    </p>
                    <ul className="space-y-1">
                      {pkg.inclusions.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                          <Check size={12} className="text-primary" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button ONLY (price removed) */}
                  <Link href={`/booking?package=${pkg.id}&name=${encodeURIComponent(pkg.name)}`}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Request Booking
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
