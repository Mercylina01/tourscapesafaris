// Database Models and Types for TourScape Safaris

export interface DestinationPlace {
  id: string
  name: string
  description: string
  image: string
  region: string
  highlights: string[]
  bestTimeToVisit: string
  difficulty: 'easy' | 'moderate' | 'challenging'
  createdAt: Date
}

export interface SafariExperience {
  id: string
  name: string
  description: string
  image: string
  duration: number // in days
  groupSize: number
  price: number
  inclusions: string[]
  activities: string[]
  destinations: string[] // array of destination IDs
  difficulty: 'easy' | 'moderate' | 'challenging'
  rating: number
  reviews: number
  createdAt: Date
}

export interface Accommodation {
  id: string
  name: string
  description: string
  image: string
  location: string
  type: 'luxury' | 'mid-range' | 'budget' | 'camping'
  pricePerNight: number
  amenities: string[]
  rating: number
  reviews: number
  capacity: number
  image3D?: string
  createdAt: Date
}

export interface VisaService {
  id: string
  destination: string
  processingTime: string
  cost: number
  requirements: string[]
  description: string
  documents: string[]
  createdAt: Date
}

export interface Booking {
  id: string
  userId?: string
  safariExperienceId: string
  accommodationId?: string
  visaServiceId?: string
  guestName: string
  guestEmail: string
  guestPhone: string
  numberOfGuests: number
  checkInDate: Date
  checkOutDate: Date
  totalPrice: number
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: Date
}

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  role: 'user' | 'admin'
  createdAt: Date
}
