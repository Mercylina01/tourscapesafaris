'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Star, Calendar, Users, MapPin, Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface SafariPackage {
  id: string
  name: string
  duration: number
  groupSize: number
  price: number
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
  {
    id: '4',
    name: 'Adventure & Adventure',
    duration: 7,
    groupSize: 6,
    price: 4000,
    image: '/rwenzori.jpg',
    destinations: ['Rwenzori Mountains', 'Murchison Falls', 'Kidepo Valley'],
    activities: ['Mountain climbing', 'Rock climbing', 'White water rafting'],
    inclusions: [
      'Expert guides',
      'All equipment',
      'Meals',
      'Camping/lodge stay',
      'Insurance',
    ],
    difficulty: 'Challenging',
    rating: 4.9,
    reviews: 96,
  },
  {
    id: '5',
    name: 'Luxury Escape Package',
    duration: 4,
    groupSize: 4,
    price: 4199,
    image: '/crater-lakes.jpg',
    destinations: ['Crater Lakes', 'Lake Kivu', 'Exclusive lodges'],
    activities: ['Spa treatments', 'Gourmet dining', 'Scenic flights', 'Private tours'],
    inclusions: [
      'Private guide',
      'Luxury lodges',
      'Gourmet meals',
      'Spa services',
      'Private transport',
    ],
    difficulty: 'Easy',
    rating: 4.9,
    reviews: 73,
  },
  {
    id: '6',
    name: 'Complete Uganda',
    duration: 10,
    groupSize: 8,
    price: 4899,
    image: '/white-water-rafting.jpg',
    destinations: ['All major destinations', 'Multiple national parks'],
    activities: ['All activities included', 'Cultural experiences', 'Wildlife'],
    inclusions: [
      'Expert guides',
      'All meals',
      'Premium lodges',
      'All fees',
      'Flights',
    ],
    difficulty: 'Moderate',
    rating: 5.0,
    reviews: 142,
  },

  {
    id: '7',
    name: 'Traditional Experience',
    duration: 0,
    groupSize: 0,
    price: 500,
    image: '/traditional-safari.jpg',
    destinations: ['Tailored to your interests'],
    activities: ['Transportation', 'Guided tours', 'Custom activities'],
    inclusions: [
      'Personalized planning',
      'Dedicated guide',
      'Flexible accommodations',
      'Custom activities',
      '24/7 support',
    ],
    difficulty: 'budget',
    rating: 5.0,
    reviews: 58,
  },

  {
    id: '8',
    name: 'Budget Safari',
    duration: 0,
    groupSize: 0,
    price: 500,
    image: '/budget-safari.jpg',
    destinations: ['kalangala', 'jinga'],
    activities: ['Fully customizable itinerary'],
    inclusions: [
      'Affordable accommodations',
      'Group tours',
      'Basic meals',
      'Shared transport',
      'Local guides',
    ],
    difficulty: 'budget',
    rating: 4.8,
    reviews: 112,
  },

  {
    id: '9',
    name: 'Luxury Safari',
    duration: 0,
    groupSize: 0,
    price: 3600,
    image: '/luxury-safari.jpg',
    destinations: ['Exclusive lodges', 'Private reserves'],
    activities: ['Tailored experiences', 'Private guides'],
    inclusions: [
      'Luxury accommodations',
      'Private tours',
      'Gourmet meals',
      'Personalized services',  
      'Exclusive access',
    ],
    difficulty: 'luxury',
    rating: 5.0,
    reviews: 64,  
  },     
  


]

export default function SafarisPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('')
  const [selectedPrice, setSelectedPrice] = useState<string>('')

  const filteredPackages = safariPackages.filter((pkg) => {
    if (selectedDifficulty && pkg.difficulty !== selectedDifficulty) return false
    if (selectedPrice === 'budget' && pkg.price < 1000) return false
    if (selectedPrice === 'mid' && (pkg.price < 1000 || pkg.price > 3500)) return false
    if (selectedPrice === 'luxury' && pkg.price < 3500) return false
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
            Carefully curated adventures designed to showcase Uganda's incredible wildlife and landscapes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12 flex flex-col md:flex-row gap-6">
            <div>
              <label className="block text-sm font-semibold mb-3 text-foreground">Difficulty</label>
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

            <div>
              <label className="block text-sm font-semibold mb-3 text-foreground">Price Range</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Budget', value: 'budget' },
                  { label: 'Mid-Range', value: 'mid' },
                  { label: 'Luxury', value: 'luxury' },
                ].map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setSelectedPrice(selectedPrice === range.value ? '' : range.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedPrice === range.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{pkg.name}</h3>

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

                  {/* Quick Info */}
                  <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-border">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{pkg.duration}</p>
                      <p className="text-xs text-muted-foreground">Days</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{pkg.groupSize}</p>
                      <p className="text-xs text-muted-foreground">Max Group</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-foreground">{pkg.difficulty}</p>
                      <p className="text-xs text-muted-foreground">Level</p>
                    </div>
                  </div>

                  {/* Destinations */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Destinations:</p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.destinations.slice(0, 2).map((dest, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="mb-6 flex-1">
                    <p className="text-xs font-semibold text-foreground mb-2">Includes:</p>
                    <ul className="space-y-1">
                      {pkg.inclusions.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                          <Check size={12} className="text-primary" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and Button */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-primary">${pkg.price}</span>
                      <span className="text-muted-foreground">per person</span>
                    </div>
                    <Link href={`/booking?package=${pkg.id}&name=${encodeURIComponent(pkg.name)}`}>
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Request Booking
                      </Button>
                    </Link>
                  </div>
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
