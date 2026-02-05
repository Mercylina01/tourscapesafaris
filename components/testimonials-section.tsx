import { Card } from '@/components/ui/card'
import { Star, Users } from 'lucide-react'

interface Testimonial {
  name: string
  location: string
  content: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    content:
      'My mountain gorilla trekking experience was absolutely magical. The professionalism and care from the TourScape team made it unforgettable. Best investment ever!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    content:
      'From booking to return, everything was perfectly organized. The guides were knowledgeable, the accommodations luxurious, and the wildlife encounters exceeded expectations.',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    location: 'London, UK',
    content:
      'I came for the safaris but fell in love with Uganda. TourScape\'s local knowledge and attention to detail made our family trip truly special. Highly recommended!',
    rating: 5,
  },
  {
    name: 'David Martinez',
    location: 'Madrid, Spain',
    content:
      'The visa assistance was incredibly helpful and stress-free. Combined with their amazing safari packages, TourScape made my Uganda adventure seamless from start to finish.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Users size={16} className="text-primary" />
            <span className="text-primary text-sm font-semibold">Guest Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real adventurers who chose TourScape Safaris.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-8 border-border hover:shadow-lg transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
            <p className="text-muted-foreground mt-2">Happy Travelers</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">4.9★</p>
            <p className="text-muted-foreground mt-2">Average Rating</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">98%</p>
            <p className="text-muted-foreground mt-2">Recommend Us</p>
          </div>
        </div>
      </div>
    </section>
  )
}
