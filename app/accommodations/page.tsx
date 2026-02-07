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
  pricePerNight: number // kept
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
    image: '/buhoma.jpg',
    description: 'Perched on the edge of Bwindi forest with stunning views and exceptional service.',
    amenities: ['Private rooms','Restaurant','Bar','Hot water','WiFi','Fireplace','Library','Walking trails'],
  },
  {
    id: '2',
    name: 'Kyaninga Lodge',
    location: 'Fort Portal',
    type: 'Mid-Range',
    pricePerNight: 280,
    rating: 4.7,
    reviews: 98,
    capacity: 30,
    image: '/kyaninga.jpg',
    description: 'Comfortable lodge perfect for exploring Kibale Forest and crater lakes.',
    amenities: ['Twin/Double rooms','Restaurant','Guide services','Hot showers','WiFi','Dining area','Lounge'],
  },
  {
    id: '3',
    name: 'Serena Hotel',
    location: 'Kampala',
    type: 'Mid-Range',
    pricePerNight: 200,
    rating: 4.6,
    reviews: 203,
    capacity: 50,
    image: '/serena.jpg',
    description: "Modern hotel in Uganda's capital with easy access to city attractions.",
    amenities: ['AC rooms','Restaurant','Bar','Conference','WiFi','Gym','Room service','Parking'],
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
    amenities: ['Tents','Shared bathrooms','Campfire','Guide services','Meals','Common area','Game drives'],
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
    image: '/bunyonyi.jpg',
    description: 'Waterfront luxury resort with island views and water activities.',
    amenities: ['Suites','Fine dining','Spa','Water sports','WiFi','Sunset deck','Library','Boats'],
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
    image: '/kibale-lodge.jpg',
    description: 'Sustainable eco-lodge with forest views and authentic experiences.',
    amenities: ['Chalets','Restaurant','Guide services','Forest walks','WiFi','Fireplace','Terrace'],
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
    image: '/mweya.jpg',
    description: 'Premier lodge with direct park access and excellent safari operations.',
    amenities: ['Spacious rooms','Dining hall','Bar','Safari office','WiFi','Garden','Lounge','Game drives'],
  },
  {
    id: '8',
    name: 'Kampala Hotels',
    location: 'Kampala City Center',
    type: 'Budget',
    pricePerNight: 45,
    rating: 4.4,
    reviews: 341,
    capacity: 60,
    image: '/logos.jpg',
    description: 'Social hostel perfect for budget travelers and backpackers.',
    amenities: ['Dorms/privates','Common kitchen','WiFi','Social events','Tours','Lounge','Laundry'],
  },
]

export default function AccommodationsPage() {
  const [selectedType, setSelectedType] = useState<string>('')

  // ✅ price filtering removed
  const filteredAccommodations = accommodations.filter(acc => {
    if (selectedType && acc.type !== selectedType) return false
    return true
  })

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Accommodations & Lodges</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From luxurious lodges to budget-friendly camps, find the perfect place to stay.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* Type Filter */}
          <div className="mb-12">
            <label className="block text-sm font-semibold mb-3">Type</label>
            <div className="flex gap-2">
              {['Luxury','Mid-Range','Budget'].map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(selectedType === type ? '' : type)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedType === type
                      ? 'bg-primary text-white'
                      : 'bg-muted'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map(acc => (
              <Card key={acc.id} className="overflow-hidden flex flex-col">
                <div className="relative h-56">
                  <Image src={acc.image} alt={acc.name} fill className="object-cover" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-1">{acc.name}</h3>

                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin size={14} /> {acc.location}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
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
                    <span className="text-sm font-semibold">
                      {acc.rating} ({acc.reviews})
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{acc.description}</p>

                  <div className="mb-4 flex-1">
                    <p className="text-xs font-semibold mb-2">Amenities:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {acc.amenities.slice(0, 4).map((a, i) => (
                        <div key={i} className="text-xs flex gap-1">
                          <Check size={12} className="text-primary" /> {a}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 pt-4 border-t text-sm flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    Capacity: {acc.capacity} guests
                  </div>

                  {/* ✅ PRICE REMOVED */}
                  <Button className="w-full bg-primary text-white">
                    Book Now
                  </Button>
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
