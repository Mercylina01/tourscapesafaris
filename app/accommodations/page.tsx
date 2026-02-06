'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Star, MapPin, Users, Check } from 'lucide-react'
import { useState } from 'react'

interface Accommodation {
  id: string
  name: string
  location: string
  type: string
  pricePerNight: number
  rating: number
  reviews: number
  amenities: string[]
  capacity: number
  image: string
  description: string
}

const accommodations: Accommodation[] = [
  {
    id: '1',
    name: 'Buhoma Lodge',
    location: 'Bwindi, Near Gorilla Forest Camp',
    type: 'Luxury',
    pricePerNight: 450,
    rating: 4.9,
    reviews: 156,
    capacity: 20,
    image: '/luxury-lodge.jpg',
    description: 'Perched on the edge of Bwindi forest with stunning views and exceptional service.',
    amenities: [
      'Private rooms',
      'Restaurant',
      'Bar',
      'Hot water',
      'WiFi',
      'Fireplace',
      'Library',
      'Walking trails',
    ],
  },
  {
    id: '2',
    name: 'Fort Portal Safari Lodge',
    location: 'Fort Portal',
    type: 'Mid-Range',
    pricePerNight: 280,
    rating: 4.7,
    reviews: 98,
    capacity: 30,
    image: '/luxury-lodge.jpg',
    description: 'Comfortable lodge perfect for exploring Kibale Forest and crater lakes.',
    amenities: [
      'Twin/Double rooms',
      'Restaurant',
      'Guide services',
      'Hot showers',
      'WiFi',
      'Dining area',
      'Lounge',
    ],
  },
  {
    id: '3',
    name: 'Kampala Serena Hotel',
    location: 'Kampala',
    type: 'Mid-Range',
    pricePerNight: 200,
    rating: 4.6,
    reviews: 203,
    capacity: 50,
    image: '/luxury-lodge.jpg',
    description: 'Modern hotel in Uganda\'s capital with easy access to city attractions.',
    amenities: [
      'AC rooms',
      'Restaurant',
      'Bar',
      'Conference',
      'WiFi',
      'Gym',
      'Room service',
      'Parking',
    ],
  },
  {
    id: '4',
    name: 'Murchison Falls Tented Camp',
    location: 'Murchison Falls National Park',
    type: 'Budget',
    pricePerNight: 120,
    rating: 4.5,
    reviews: 142,
    capacity: 40,
    image: '/tents.jpg',
    description: 'Authentic safari experience with comfortable tent accommodation.',
    amenities: [
      'Tents',
      'Shared bathrooms',
      'Campfire',
      'Guide services',
      'Meals',
      'Common area',
      'Game drives',
    ],
  },
  {
    id: '5',
    name: 'Lake Bunyonyi Resort',
    location: 'Lake Bunyonyi',
    type: 'Luxury',
    pricePerNight: 520,
    rating: 4.9,
    reviews: 124,
    capacity: 25,
    image: '/luxury-lodge.jpg',
    description: 'Waterfront luxury resort with island views and water activities.',
    amenities: [
      'Suites',
      'Fine dining',
      'Spa',
      'Water sports',
      'WiFi',
      'Sunset deck',
      'Library',
      'Boats',
    ],
  },
  {
    id: '6',
    name: 'Kibale Forest Eco-Lodge',
    location: 'Kibale Forest National Park',
    type: 'Mid-Range',
    pricePerNight: 350,
    rating: 4.8,
    reviews: 89,
    capacity: 20,
    image: '/adventure-activities.jpg',
    description: 'Sustainable eco-lodge with forest views and authentic experiences.',
    amenities: [
      'Chalets',
      'Restaurant',
      'Guide services',
      'Forest walks',
      'WiFi',
      'Fireplace',
      'Terrace',
    ],
  },
  {
    id: '7',
    name: 'Queen Elizabeth Lodge',
    location: 'Queen Elizabeth National Park',
    type: 'Luxury',
    pricePerNight: 480,
    rating: 4.9,
    reviews: 167,
    capacity: 35,
    image: '/luxury-lodge.jpg',
    description: 'Premier lodge with direct park access and excellent safari operations.',
    amenities: [
      'Spacious rooms',
      'Dining hall',
      'Bar',
      'Safari office',
      'WiFi',
      'Garden',
      'Lounge',
      'Game drives',
    ],
  },
  {
    id: '8',
    name: 'Kampala Backpackers',
    location: 'Kampala City Center',
    type: 'Budget',
    pricePerNight: 45,
    rating: 4.4,
    reviews: 341,
    capacity: 60,
    image: '/adventure-activities.jpg',
    description: 'Social hostel perfect for budget travelers and backpackers.',
    amenities: [
      'Dorms/privates',
      'Common kitchen',
      'WiFi',
      'Social events',
      'Tours',
      'Lounge',
      'Laundry',
    ],
  },
]

export default function AccommodationsPage() {
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedPrice, setSelectedPrice] = useState<string>('')

  const filteredAccommodations = accommodations.filter((acc) => {
    if (selectedType && acc.type !== selectedType) return false
    if (selectedPrice === 'budget' && acc.pricePerNight > 150) return false
    if (selectedPrice === 'mid' && (acc.pricePerNight < 150 || acc.pricePerNight > 400)) return false
    if (selectedPrice === 'luxury' && acc.pricePerNight < 400) return false
    return true
  })

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Accommodations & Lodges
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From luxurious lodges to budget-friendly camps, find the perfect place to stay during your Uganda adventure.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12 flex flex-col md:flex-row gap-6">
            <div>
              <label className="block text-sm font-semibold mb-3 text-foreground">Type</label>
              <div className="flex flex-wrap gap-2">
                {['Luxury', 'Mid-Range', 'Budget'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(selectedType === type ? '' : type)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedType === type
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-foreground">Price per Night</label>
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

          {/* Accommodations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((acc) => (
              <Card key={acc.id} className="overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={acc.image || "/placeholder.svg"}
                    alt={acc.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {acc.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-1 text-foreground">{acc.name}</h3>

                  <div className="flex items-center gap-1 mb-3 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    {acc.location}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(acc.rating)
                              ? 'fill-primary text-primary'
                              : 'text-muted'
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {acc.rating} ({acc.reviews})
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{acc.description}</p>

                  {/* Amenities */}
                  <div className="mb-4 flex-1">
                    <p className="text-xs font-semibold text-foreground mb-2">Amenities:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {acc.amenities.slice(0, 4).map((amenity, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                          <Check size={12} className="text-primary flex-shrink-0" />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capacity */}
                  <div className="mb-4 pb-4 border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Users size={16} className="text-primary" />
                      <span>Capacity: {acc.capacity} guests</span>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-primary">${acc.pricePerNight}</span>
                      <span className="text-muted-foreground">per night</span>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Book Now
                    </Button>
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
