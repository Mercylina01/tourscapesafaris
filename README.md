# TourScape Safaris - Uganda Tourism Website

A professional, fully-featured tourism website for Uganda safari experiences, accommodations, and travel services.

## Overview

TourScape Safaris is a modern, responsive web application built with Next.js that showcases premium safari experiences, touring destinations, luxury accommodations, and comprehensive travel services across Uganda.

## Features

### Public Pages

1. **Home / Landing Page** (`/`)
   - Hero section with stunning imagery
   - Featured safari experiences
   - Comprehensive services overview
   - Guest testimonials and reviews
   - Call-to-action sections

2. **Destinations** (`/destinations`)
   - Browse all major Uganda destinations
   - Detailed information on each location
   - Best times to visit
   - Difficulty levels
   - Annual visitor statistics

3. **Safari Experiences** (`/safaris`)
   - Filter by difficulty and price range
   - Detailed package descriptions
   - Activity breakdowns
   - Group size information
   - Professional ratings and reviews
   - Booking functionality

4. **Accommodations** (`/accommodations`)
   - Filter by type (Luxury, Mid-Range, Budget)
   - Filter by price range
   - Amenities listings
   - Guest capacity information
   - Location details
   - Booking interface

5. **Services** (`/services`)
   - Visa assistance
   - Flight booking
   - Ground transportation
   - Travel insurance
   - Pricing tables
   - Service details

6. **Gallery** (`/gallery`)
   - Interactive photo gallery with 3D showcase
   - Filterable by category
   - Lightbox modal viewer
   - Full-screen image exploration

7. **Contact** (`/contact`)
   - Contact form with validation
   - Business hours information
   - Multiple contact methods
   - Service inquiry options

8. **Admin Dashboard** (`/admin`)
   - Booking management
   - Statistics and analytics
   - Search functionality
   - Quick management panels

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── accommodations/
│   │   └── page.tsx            # Accommodations page
│   ├── admin/
│   │   └── page.tsx            # Admin dashboard
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── destinations/
│   │   └── page.tsx            # Destinations page
│   ├── gallery/
│   │   └── page.tsx            # Gallery page
│   ├── safaris/
│   │   └── page.tsx            # Safari experiences page
│   └── services/
│       └── page.tsx            # Services page
│
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer component
│   ├── hero-section.tsx        # Hero banner
│   ├── featured-section.tsx    # Featured experiences
│   ├── services-section.tsx    # Services overview
│   ├── testimonials-section.tsx # Guest reviews
│   ├── cta-section.tsx         # Call-to-action
│   └── gallery-showcase.tsx    # Photo gallery

├── lib/
│   ├── types.ts                # TypeScript interfaces for database models
│   └── utils.ts                # Utility functions

├── public/
│   ├── hero-safari.jpg         # Hero image
│   ├── queen-elizabeth-park.jpg # Destination image
│   ├── luxury-lodge.jpg        # Accommodation image
│   ├── mountain-gorillas.jpg   # Wildlife image
│   └── adventure-activities.jpg # Activities image

└── tailwind.config.ts          # Tailwind configuration
```

## Database Models

The application is structured with the following data models (ready for database integration):

### DestinationPlace
- id, name, description, image
- highlights, bestTimeToVisit, difficulty
- region, createdAt

### SafariExperience
- id, name, description, image
- duration, groupSize, price
- inclusions, activities, destinations
- difficulty, rating, reviews

### Accommodation
- id, name, description, image
- location, type, pricePerNight
- amenities, rating, reviews, capacity

### VisaService
- id, destination, processingTime, cost
- requirements, description, documents

### Booking
- id, userId, safariExperienceId
- guestName, guestEmail, guestPhone
- numberOfGuests, checkInDate, checkOutDate
- totalPrice, status

### User
- id, email, name, phone
- role (user/admin), createdAt

## Design System

### Color Palette
- **Primary**: #FF8500 (Orange - brand color)
- **Secondary**: #D65400 (Rust)
- **Background**: #F8F6F2 (Light Beige)
- **Foreground**: #1A1410 (Dark Brown)
- **Accent**: Used for highlights and CTAs

### Typography
- **Headings**: Geist (sans-serif)
- **Body**: Geist (sans-serif)

### Spacing & Layout
- Built with Tailwind CSS
- Mobile-first responsive design
- Maximum width containers (7xl)
- Consistent padding and gaps

## Technologies Used

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Icons**: lucide-react
- **Images**: Next.js Image optimization

## Getting Started

### Installation

```bash
# Using the shadcn CLI (recommended)
npx shadcn-cli@latest init

# Or clone and install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Adding Database Integration

To connect a database (Supabase, Neon, etc.), follow these steps:

1. Set up your database service
2. Create tables based on the models in `/lib/types.ts`
3. Implement API routes in `/app/api/`
4. Replace mock data with database queries
5. Add environment variables for database connection

## Deployment

The website is optimized for deployment on Vercel:

```bash
# Push to GitHub
git push

# Vercel automatically deploys on push
```

## Future Enhancements

- [ ] Database integration (Supabase/Neon)
- [ ] Real booking system with payment processing
- [ ] User authentication
- [ ] 3D tour previews
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Mobile app
- [ ] AI-powered recommendations
- [ ] Advanced analytics dashboard

## Contributing

To contribute to TourScape Safaris:

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

All rights reserved. TourScape Safaris © 2024.

## Support

For support or inquiries, contact:
- Email: info@tourscapesafaris.com
- Phone: +256 (0) 750 123 456
- Location: Kampala, Uganda

---

**Note**: This is a professionally designed tourism website ready for database integration and deployment. The mock data can be easily replaced with real data from your database service.
