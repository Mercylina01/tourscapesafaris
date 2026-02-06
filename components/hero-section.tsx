"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const heroImages = [
  "/hero-safari.jpg",
  "/eagle.jpg",
  "/safaris.jpg",
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden pt-16">
      {/* Background Slideshow */}
      {heroImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Uganda Safari Background ${index + 1}`}
          fill
          className={`object-cover brightness-75 absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          }`}
          priority={index === 0} // Only the first image is high priority
        />
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">
                Experience Luxury Safari Adventures
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover the Magic of Uganda
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
              Immerse yourself in Africa's most spectacular wildlife experiences. From majestic gorillas to roaming elephants, we craft unforgettable journeys through Uganda's pristine landscapes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/safaris">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-12 px-8 flex items-center gap-2">
                  Explore Safaris
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="#featured">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg h-12 px-8 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">15+</span>
                <span className="text-white/80 text-sm">Destinations</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">500+</span>
                <span className="text-white/80 text-sm">Happy Travelers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">10yrs</span>
                <span className="text-white/80 text-sm">Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
