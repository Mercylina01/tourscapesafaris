'use client'

import React from "react"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  BarChart3,
  Users,
  Calendar,
  DollarSign,
  Edit,
  Trash2,
  Plus,
  Search,
  TrendingUp,
} from 'lucide-react'
import { useState } from 'react'

interface BookingItem {
  id: string
  guestName: string
  safari: string
  dates: string
  guests: number
  price: number
  status: 'pending' | 'confirmed' | 'cancelled'
}

interface StatsCard {
  title: string
  value: string
  change: string
  icon: React.ReactNode
}

const mockBookings: BookingItem[] = [
  {
    id: '1',
    guestName: 'Sarah Johnson',
    safari: 'Mountain Gorilla Trek',
    dates: 'Mar 15-18, 2024',
    guests: 2,
    price: 5998,
    status: 'confirmed',
  },
  {
    id: '2',
    guestName: 'Michael Chen',
    safari: 'Classic Uganda Safari',
    dates: 'Apr 2-7, 2024',
    guests: 4,
    price: 7596,
    status: 'pending',
  },
  {
    id: '3',
    guestName: 'Emma Williams',
    safari: 'Primates & Wilderness',
    dates: 'May 10-16, 2024',
    guests: 3,
    price: 7497,
    status: 'confirmed',
  },
]

const stats: StatsCard[] = [
  {
    title: 'Total Bookings',
    value: '127',
    change: '+12% from last month',
    icon: <Calendar size={24} />,
  },
  {
    title: 'Active Travelers',
    value: '485',
    change: '+8% this month',
    icon: <Users size={24} />,
  },
  {
    title: 'Revenue (MTD)',
    value: '$89,432',
    change: '+23% from last month',
    icon: <DollarSign size={24} />,
  },
  {
    title: 'Avg. Rating',
    value: '4.9★',
    change: '+0.1 this month',
    icon: <TrendingUp size={24} />,
  },
]

export default function AdminPage() {
  const [bookings, setBookings] = useState(mockBookings)
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.safari.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDeleteBooking = (id: string) => {
    setBookings(bookings.filter((b) => b.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <main>
      <Header />

      {/* Admin Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-2">Manage tours, bookings, and accommodations</p>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2">
              <Plus size={20} />
              New Booking
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <Card key={idx} className="p-6 border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-xs text-primary">{stat.change}</p>
              </Card>
            ))}
          </div>

          {/* Bookings Section */}
          <Card className="border-border">
            <div className="p-6 border-b border-border">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-2xl font-bold text-foreground">Recent Bookings</h2>
                <div className="w-full md:w-64 relative">
                  <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            </div>

            {/* Bookings Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      Guest Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      Safari Package
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      Dates
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      Guests
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-border/50 hover:bg-muted/30 transition">
                      <td className="px-6 py-4 text-foreground font-medium">{booking.guestName}</td>
                      <td className="px-6 py-4 text-foreground">{booking.safari}</td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">{booking.dates}</td>
                      <td className="px-6 py-4 text-foreground">{booking.guests}</td>
                      <td className="px-6 py-4 text-foreground font-semibold">${booking.price}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(
                            booking.status
                          )}`}
                        >
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-muted rounded transition">
                            <Edit size={16} className="text-primary" />
                          </button>
                          <button
                            onClick={() => handleDeleteBooking(booking.id)}
                            className="p-2 hover:bg-muted rounded transition"
                          >
                            <Trash2 size={16} className="text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredBookings.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">
                No bookings found matching your search.
              </div>
            )}
          </Card>

          {/* Quick Management Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 border-border">
              <h3 className="font-bold text-lg text-foreground mb-4">Manage Destinations</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Add, edit, or remove destination information and highlights.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Manage Destinations
              </Button>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="font-bold text-lg text-foreground mb-4">Manage Safaris</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Create and manage safari experience packages, pricing, and availability.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Manage Safaris
              </Button>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="font-bold text-lg text-foreground mb-4">Manage Accommodations</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Update lodge information, pricing, amenities, and availability.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Manage Accommodations
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
