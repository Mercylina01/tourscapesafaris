'use client'

import React from "react"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Send message via WhatsApp
    const message = `Hello TourScape Safaris,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/256702860241?text=${encodedMessage}`
    
    // Send email
    const mailtoLink = `mailto:info@tourscape.org?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email}, ${formData.phone})\n\n${formData.message}`)}`
    
    // Open both - email and WhatsApp
    window.open(mailtoLink)
    setTimeout(() => {
      window.open(whatsappLink, '_blank')
    }, 500)
    
    console.log('Message sent via email and WhatsApp:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our safari packages? Reach out to our team and we'll help you plan the perfect Uganda adventure.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <Card className="p-8 border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Phone & WhatsApp</h3>
              <a href="tel:+256702860241" className="text-muted-foreground hover:text-primary transition mb-1 block font-semibold">+256 702 860 241</a>
              <p className="text-muted-foreground text-sm">Available 24/7 for bookings & emergencies</p>
            </Card>

            <Card className="p-8 border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Email</h3>
              <a href="mailto:info@tourscape.org" className="text-muted-foreground hover:text-primary transition mb-1 block font-semibold">info@tourscape.org</a>
              <p className="text-muted-foreground text-sm">We respond within 24 hours</p>
            </Card>

            <Card className="p-8 border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Office Location</h3>
              <p className="text-muted-foreground text-sm font-semibold">
                Seeta, Kampala<br />
                Uganda, East Africa
              </p>
            </Card>
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>

              {submitted ? (
                <div className="bg-primary/10 border border-primary text-primary p-4 rounded-lg text-center">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+256 702 860 241"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select a subject</option>
                      <option value="safari">Safari Package Inquiry</option>
                      <option value="accommodation">Accommodation</option>
                      <option value="visa">Visa Services</option>
                      <option value="booking">Booking Question</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your Uganda adventure plans..."
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base">
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    We'll respond within 24 hours during business hours
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground mb-3">Or reach us on WhatsApp directly:</p>
                    <a href="https://wa.me/256702860241" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </form>
              )}
            </Card>

            {/* Info & Hours */}
            <div>
              <Card className="p-8 border-border mb-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Why Contact Us?</h2>
                <ul className="space-y-4">
                  {[
                    'Personalized itinerary planning',
                    'Expert advice on destinations',
                    'Visa assistance and guidance',
                    'Accommodation recommendations',
                    'Travel insurance quotes',
                    'Group package discounts',
                    'Flight booking support',
                    'Emergency 24/7 support',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8 border-border bg-foreground/5">
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={24} className="text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-foreground">Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Emergency Support:</strong> Available 24/7 for bookings in progress
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
