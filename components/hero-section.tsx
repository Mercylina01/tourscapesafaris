"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
  "/hero-safari.jpg",
  "/eagle.jpg",
  "/safaris.jpg",
  "/hipo.jpg",
  "/rwenzori.jpg",
  "/elephant.jpg",
  "/croc.jpg",
  "/tiger.jpg",
  "/zebra.jpg",
  "/adventure-activities.jpg",
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Preload all images in the background
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Slideshow interval starts immediately
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden pt-16">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Uganda Safari ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0} // only first image prioritized
            quality={95}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center z-10">
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
              Immerse yourself in Africa&apos;s most spectacular wildlife
              experiences. From majestic gorillas to roaming elephants, we craft
              unforgettable journeys through Uganda&apos;s pristine landscapes.
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

      {/* Slideshow Dot Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentImage ? "bg-primary w-8" : "bg-white/50 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
