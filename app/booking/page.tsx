'use client'

import React from "react"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface BookingFormData {
  fullName: string
  email: string
  phone: string
  packageType: string
  startDate: string
  endDate: string
  numberOfGuests: number
  accommodation: string
  specialRequests: string
}

export default function BookingPage() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    packageType: 'wildlife-safari',
    startDate: '',
    endDate: '',
    numberOfGuests: 1,
    accommodation: 'mid-range',
    specialRequests: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const packages = [
    { value: 'wildlife-safari', label: 'Wildlife Safari (3 days)', price: '$1,899' },
    { value: 'gorilla-trek', label: 'Gorilla Trekking (4 days)', price: '$2,499' },
    { value: 'cultural-tour', label: 'Cultural Tour (3 days)', price: '$1,599' },
    { value: 'adventure-combo', label: 'Adventure Combo (5 days)', price: '$3,299' },
    { value: 'luxury-safari', label: 'Luxury Safari (7 days)', price: '$4,899' },
  ]

  const accommodations = [
    { value: 'budget', label: 'Budget Lodges' },
    { value: 'mid-range', label: 'Mid-range Hotels' },
    { value: 'luxury', label: 'Luxury Resorts' },
    { value: 'camping', label: 'Adventure Camping' },
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'numberOfGuests' ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate form
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.startDate ||
      !formData.endDate
    ) {
      setError('Please fill in all required fields')
      return
    }

    if (new Date(formData.startDate) >= new Date(formData.endDate)) {
      setError('End date must be after start date')
      return
    }

    // Here you would normally send the booking to your backend
    console.log('[v0] Booking submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        packageType: 'wildlife-safari',
        startDate: '',
        endDate: '',
        numberOfGuests: 1,
        accommodation: 'mid-range',
        specialRequests: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-2">Book Your Safari Adventure</h1>
            <p className="text-lg opacity-90">Choose your perfect package and start your Uganda journey</p>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted ? (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Booking Received!</h2>
                <p className="text-lg text-foreground/70 mb-4">
                  Thank you, {formData.fullName}. We've received your booking request.
                </p>
                <p className="text-foreground/60 mb-6">
                  Our team will contact you at {formData.email} and {formData.phone} to confirm your booking and provide more details.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-foreground/70">
                    <strong>Need immediate assistance?</strong> Contact us on WhatsApp at{' '}
                    <a href="https://wa.me/256784606507" className="text-primary font-semibold hover:underline">
                      +256 784 606 507
                    </a>
                  </p>
                </div>
                <Button
                  onClick={() => (window.location.href = '/')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Back to Home
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="tourscape@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+256 700 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Number of Guests *
                      </label>
                      <input
                        type="number"
                        name="numberOfGuests"
                        min="1"
                        value={formData.numberOfGuests}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Trip Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Safari Package *
                      </label>
                      <select
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {packages.map((pkg) => (
                          <option key={pkg.value} value={pkg.value}>
                            {pkg.label} - {pkg.price}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Accommodation Type
                      </label>
                      <select
                        name="accommodation"
                        value={formData.accommodation}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {accommodations.map((acc) => (
                          <option key={acc.value} value={acc.value}>
                            {acc.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        End Date *
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Additional Information</h3>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Special Requests or Preferences
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about any special dietary needs, accessibility requirements, or other preferences..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-base py-3"
                  >
                    Complete Booking
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => (window.location.href = '/')}
                    className="px-8"
                  >
                    Cancel
                  </Button>
                </div>

                {/* Footer Note */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-foreground/70">
                  <p>
                    <strong>Note:</strong> This is an initial booking inquiry form. Our team will contact you within 24 hours to confirm availability, finalize pricing, and answer any questions.
                  </p>
                </div>
              </form>
            )}

            {/* Contact Alternative */}
            <div className="mt-12 bg-white rounded-lg p-8 border-2 border-primary text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Prefer Direct Contact?</h3>
              <p className="text-lg text-foreground/70 mb-6">
                Reach out to us directly for personalized assistance with your booking
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="https://wa.me/256784606507" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-secondary text-white hover:bg-secondary/90 px-8">
                    WhatsApp: +256 784 606 507
                  </Button>
                </a>
                <a href="tel:+256784606507">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                    Call: +256 784 606 507
                  </Button>
                </a>
                <a href="mailto:info@tourscape.org">
                  <Button variant="outline" className="px-8 bg-transparent">
                    Email: info@tourscape.org
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
