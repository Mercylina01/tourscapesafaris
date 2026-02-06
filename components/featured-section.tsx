import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Users, Calendar, TrendingUp } from 'lucide-react'

interface FeaturedItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  rating: number
  price?: string
  link: string
  tags: string[]
}

const featuredItems: FeaturedItem[] = [
  {
    id: '1',
    title: 'Mountain Gorilla Trek',
    category: 'Uganda - Exclusive',
    description: 'Meet endangered mountain gorillas in their natural habitat. A once-in-a-lifetime encounter in Bwindi Impenetrable Forest.',
    image: '/gorilla4.jpg',
    rating: 4.9,
    price: '$2,999',
    link: '/safaris',
    tags: ['3 Days', 'Guided Tour', 'Photography'],
  },
  {
    id: '2',
    title: 'East Africa Grand Safari',
    category: 'International',
    description: 'Experience Africa\'s most iconic destinations. Travel through Uganda, Kenya, and Tanzania with wildlife at every turn.',
    image: '/queen-elizabeth-park.jpg',
    rating: 4.9,
    price: '$5,499',
    link: '/international-tours',
    tags: ['14 Days', 'Multi-Country', 'Luxury'],
  },
  {
    id: '3',
    title: 'Luxury Safari Lodge',
    category: 'Premium Stay',
    description: 'Experience ultimate comfort with stunning views. World-class amenities and personal service await.',
    image: '/activities.jpg',
    rating: 4.9,
    price: '$450/night',
    link: '/accommodations',
    tags: ['5-Star', 'All-Inclusive', 'Spa'],
  },
]

export function FeaturedSection() {
  return (
    <section id="featured" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
            <TrendingUp size={16} className="text-primary" />
            <span className="text-primary text-sm font-semibold">Popular Packages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Experiences & Tours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked adventures from Uganda safaris to international tours. Explore the world with TourScape Safaris.
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Rating and Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(item.rating) ? 'fill-primary text-primary' : 'text-muted'}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground ml-2">{item.rating}</span>
                  </div>
                  {item.price && <span className="text-lg font-bold text-primary">{item.price}</span>}
                </div>

                {/* Button */}
                <Link href={item.link}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 flex gap-4 justify-center flex-wrap">
          <Link href="/safaris">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              View Uganda Safaris
            </Button>
          </Link>
          <Link href="/international-tours">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore International Tours
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
