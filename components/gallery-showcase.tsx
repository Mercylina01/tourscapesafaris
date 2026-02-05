'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface GalleryImage {
  id: string
  title: string
  description: string
  image: string
  category: string
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Mountain Gorilla Family',
    description: 'A family of endangered mountain gorillas in their natural habitat at Bwindi Forest.',
    image: '/mountain-gorillas.jpg',
    category: 'Wildlife',
  },
  {
    id: '2',
    title: 'Sunrise Over Savanna',
    description: 'Golden sunrise lighting up the vast Queen Elizabeth National Park landscape.',
    image: '/queen-elizabeth-park.jpg',
    category: 'Landscapes',
  },
  {
    id: '3',
    title: 'Luxury Safari Lodge',
    description: 'Premium accommodation with stunning views overlooking the African wilderness.',
    image: '/luxury-lodge.jpg',
    category: 'Accommodations',
  },
  {
    id: '4',
    title: 'Adventure Activities',
    description: 'Thrilling water sports and adventure activities at crater lakes.',
    image: '/adventure-activities.jpg',
    category: 'Activities',
  },
  {
    id: '5',
    title: 'Wildlife Diversity',
    description: 'Elephants, zebras, and wildebeest in their natural ecosystem.',
    image: '/safari-wildlife1.jpg',
    category: 'Wildlife',
  },
  {
    id: '6',
    title: 'Murchison Falls',
    description: 'Powerful waterfall cascade where the Nile River rushes through a narrow gorge.',
    image: '/murchison-falls.jpg',
    category: 'Landscapes',
  },
  {
    id: '7',
    title: 'Cultural Experience',
    description: 'Traditional Baganda people sharing authentic cultural ceremonies and traditions.',
    image: '/cultural-tour.jpg',
    category: 'Cultural',
  },
  {
    id: '8',
    title: 'Crater Lakes',
    description: 'Pristine turquoise crater lakes surrounded by lush volcanic vegetation.',
    image: '/crater-lakes.jpg',
    category: 'Landscapes',
  },
  {
    id: '9',
    title: 'Eco-Lodge Stay',
    description: 'Sustainable luxury accommodation blending with the natural environment.',
    image: '/eco-lodge.jpg',
    category: 'Accommodations',
  },
  {
    id: '10',
    title: 'White Water Rafting',
    description: 'Exciting Nile River rafting adventure for adrenaline seekers.',
    image: '/white-water-rafting.jpg',
    category: 'Activities',
  },
]

export function GalleryShowcase() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const categories = ['All', ...new Set(galleryImages.map((img) => img.category))]

  const filteredImages =
    selectedCategory === '' || selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length)
    setSelectedImage(filteredImages[(currentIndex + 1) % filteredImages.length])
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
    setSelectedImage(filteredImages[(currentIndex - 1 + filteredImages.length) % filteredImages.length])
  }

  const openImage = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  return (
    <>
      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category === 'All' ? '' : category)
              setCurrentIndex(0)
              setSelectedImage(null)
            }}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              (category === 'All' && selectedCategory === '') ||
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredImages.map((image, index) => (
          <Card
            key={image.id}
            className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
            onClick={() => openImage(image, index)}
          >
            <div className="relative h-64 overflow-hidden bg-muted">
              <Image
                src={image.image || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Maximize2 size={32} className="text-white" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-foreground mb-1">{image.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>
              <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                {image.category}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Image */}
            <div className="relative h-96 md:h-[500px] mb-6">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-white mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                  <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded inline-block mt-2">
                    {selectedImage.category}
                  </span>
                </div>
                <p className="text-sm text-white/60">
                  {currentIndex + 1} / {filteredImages.length}
                </p>
              </div>
              <p className="text-white/80">{selectedImage.description}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {filteredImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx)
                      setSelectedImage(filteredImages[idx])
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-primary w-8' : 'bg-white/40 w-2'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
