# TourScape Safaris - Feature Overview

## Complete Feature List

### 🏠 Home Page (`/`)
**Hero Section**
- Full-width background image with overlay
- Compelling headline and subheadline
- Dual CTA buttons (primary + secondary)
- Quick stats display (15+ destinations, 500+ travelers, 10 years experience)
- Scroll indicator

**Featured Experiences Section**
- 3-column grid of top safari packages
- Image with hover effects
- Star ratings (4.9★) with review count
- Price display
- Quick tags (duration, group type, photography)
- View details button

**Services Section**
- 6 service cards with icons
- Dark background for contrast
- Hover animations
- Feature list for each service
  - Safari Experiences
  - Destination Guides
  - Accommodations
  - Travel Logistics
  - Visa Assistance
  - Group Tours

**Testimonials Section**
- 4 guest reviews with 5-star ratings
- Guest location and credentials
- Quote-style layout
- Stats: 500+ travelers, 4.9★ rating, 98% recommend

**CTA Section**
- Gradient background (primary to secondary)
- Left: Value proposition + checklist
- Right: Quick inquiry form
  - Name, email, interested service
  - Form submission handling

**Footer**
- Company info
- Quick navigation links
- Contact information (phone, email, location)
- Social media links (Facebook, Instagram, Twitter)
- Copyright and legal links

---

### 🗺️ Destinations Page (`/destinations`)

**Page Header**
- Hero title and description
- Context-setting imagery

**Destination Cards** (6 total)
Each shows:
- High-quality destination image
- Destination name and description
- Highlights (4-8 per destination)
- Best time to visit
- Difficulty level (easy/moderate/challenging)
- Annual visitor statistics
- Link to safari packages

**Destinations Included:**
1. Bwindi Impenetrable Forest - Mountain gorillas, rainforest trails
2. Queen Elizabeth National Park - Wildlife diversity, boat safaris
3. Rwenzori Mountains - Mountain climbing, glaciers, alpine lakes
4. Kibale Forest National Park - Chimpanzee trekking, forest walks
5. Murchison Falls National Park - Waterfalls, large herds
6. Lake Bunyonyi - Island hopping, scenic views, water activities

**Info Section**
- Strategic locations card
- Expert guides card
- Safety first card

---

### 🦁 Safari Experiences Page (`/safaris`)

**Filtering System**
- Difficulty filter: Easy, Moderate, Challenging
- Price range filter: Budget, Mid-Range, Luxury

**Safari Package Cards** (6 packages)
Each displays:
- High-quality package image
- Star rating (4.8-5.0★) with review count
- Quick info grid:
  - Duration (3-10 days)
  - Max group size
  - Difficulty level
- Destination tags
- Inclusions checklist (5+ items)
- Price per person
- Request booking button

**Packages Offered:**
1. Mountain Gorilla Experience - 3 days, $2,999
2. Classic Uganda Safari - 5 days, $1,899
3. Primates & Wilderness - 6 days, $2,499
4. Adventure & Adrenaline - 7 days, $3,299
5. Luxury Escape Package - 4 days, $4,199
6. Complete Uganda - 10 days, $4,899

---

### 🏨 Accommodations Page (`/accommodations`)

**Filtering System**
- Type filter: Luxury, Mid-Range, Budget
- Price per night filter: Budget (<$150), Mid-Range ($150-400), Luxury (>$400)

**Accommodation Cards** (8 properties)
Each shows:
- Property image with type badge
- Location with map pin icon
- Star rating with review count
- Description
- Amenities grid (first 4 shown)
- Capacity information
- Price per night
- Book now button

**Properties Included:**
1. Buhoma Lodge - Luxury, $450/night, Bwindi
2. Fort Portal Safari Lodge - Mid-Range, $280/night
3. Kampala City Hotel - Mid-Range, $200/night
4. Murchison Falls Tented Camp - Budget, $120/night
5. Lake Bunyonyi Resort - Luxury, $520/night
6. Kibale Forest Eco-Lodge - Mid-Range, $350/night
7. Queen Elizabeth Lodge - Luxury, $480/night
8. Kampala Backpackers - Budget, $45/night

---

### 🎫 Services Page (`/services`)

**Services Grid** (4 main services)
Each detailed card includes:
- Large icon (32px, colored)
- Service title
- Full description
- Feature list (6 items)
- CTA button

**Services:**
1. **Visa Services**
   - Application form completion
   - Document gathering assistance
   - Photo requirements guidance
   - Interview preparation
   - Application tracking
   - Express processing available

2. **Flight Booking**
   - International flights
   - Domestic flights
   - Flight combinations
   - Luggage assistance
   - 24/7 support
   - Travel insurance options

3. **Ground Transportation**
   - Airport pickups/dropoffs
   - Inter-city transfers
   - Private vehicles
   - Professional drivers
   - GPS tracking
   - Emergency support

4. **Travel Insurance**
   - Medical coverage
   - Trip cancellation
   - Lost luggage coverage
   - Emergency evacuation
   - Adventure activities
   - 24/7 claims support

**Detailed Sections**
- Visa processing times and requirements
- Visa types available
- Pricing table comparing Standard/Express/Premium

---

### 📷 Gallery Page (`/gallery`)

**Interactive Features**
- Category filter buttons: All, Wildlife, Landscapes, Accommodations, Activities
- Grid display of all images
- Hover overlay with zoom icon
- Click to open full lightbox

**Lightbox Features**
- Full-screen image viewing
- Left/right navigation arrows
- Thumbnail progress indicators
- Image title, description, category
- Position counter (1/5)
- Close button
- Click outside to close

**Gallery Images** (5 shown, extensible)
- Mountain Gorilla Family
- Sunrise Over Savanna
- Luxury Safari Lodge
- Adventure Activities
- Wildlife Diversity

---

### 📧 Contact Page (`/contact`)

**Contact Information Cards**
- Phone card: +256 (0) 750 123 456, Mon-Sat 9AM-5PM
- Email card: info@tourscapesafaris.com, 24-hour response
- Office card: Kampala, Uganda

**Contact Form**
- Full name (required)
- Email (required)
- Phone (optional)
- Subject dropdown:
  - Safari Package Inquiry
  - Accommodation
  - Visa Services
  - Booking Question
  - General Inquiry
- Message textarea (required)
- Submit button
- Success message feedback

**Additional Info**
- Why contact us list (8 reasons)
- Business hours display
- Emergency support note

---

### 👨‍💼 Admin Dashboard (`/admin`)

**Statistics Cards** (4 key metrics)
- Total Bookings: 127 (+12% trend)
- Active Travelers: 485 (+8% trend)
- Revenue (MTD): $89,432 (+23% trend)
- Average Rating: 4.9★ (+0.1 trend)

**Booking Management**
- Search bar with real-time filtering
- Sortable table with columns:
  - Guest Name
  - Safari Package
  - Dates
  - Number of Guests
  - Amount ($)
  - Status (Confirmed/Pending/Cancelled)
  - Actions (Edit, Delete)
- Status-based color coding
- Edit and delete functionality

**Quick Management Sections**
- Manage Destinations button
- Manage Safaris button
- Manage Accommodations button

**Sample Data** (3 sample bookings)

---

## 🎨 Design System

### Color Palette
- **Primary (Orange)**: #FF8500 - Main brand color for CTAs and highlights
- **Secondary (Rust)**: #D65400 - Complementary color
- **Background**: #F8F6F2 - Light beige, warm base
- **Foreground**: #1A1410 - Dark brown for text
- **Muted**: #E6E2DC - Neutral for backgrounds
- **Border**: #D1CCCA - Subtle dividers

### Typography
- **Font Family**: Geist (sans-serif throughout)
- **Headings**: Bold, ranging from 2xl to 6xl
- **Body**: Regular weight, 1rem with line-height 1.6

### Spacing
- **Padding**: 4px, 8px, 12px, 16px, 24px, 32px (Tailwind scale)
- **Max Width**: 7xl (80rem) for content containers
- **Gaps**: 4px to 12px between elements

---

## 🔗 Navigation Structure

```
Home (/)
├── Destinations (/destinations)
├── Safaris (/safaris)
├── Accommodations (/accommodations)
├── Gallery (/gallery)
├── Services (/services)
│   ├── Visa Services
│   ├── Flight Booking
│   ├── Ground Transportation
│   └── Travel Insurance
├── Contact (/contact)
└── Admin (/admin)
```

---

## ⚡ Interactive Features

✅ **Filters & Search**
- Safari difficulty and price filtering
- Accommodation type and price filtering
- Contact form search
- Admin booking search with real-time filtering

✅ **Animations**
- Image hover zoom effects
- Button state transitions
- Icon animations on cards
- Smooth scrolling

✅ **Forms**
- Contact form with validation
- Admin form for new bookings
- Quick inquiry form in CTA section

✅ **Modal/Lightbox**
- Full-screen gallery viewer
- Image navigation
- Category-based filtering

✅ **Responsive Design**
- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Touch-friendly interactions

---

## 📊 Data Structures

All data is mock and can be replaced with database queries. See `/lib/types.ts` for TypeScript interfaces.

**Total Mock Data:**
- 6 Destinations
- 6 Safari Packages
- 8 Accommodations
- 4 Services
- 4 Testimonials
- 5 Gallery Images
- 3 Admin Bookings

---

## 🚀 Ready for

- ✅ Production deployment
- ✅ Database integration
- ✅ Payment processing
- ✅ User authentication
- ✅ Email marketing
- ✅ Analytics integration
- ✅ Multi-language support
- ✅ Mobile app expansion

---

**This is a complete, professional-grade tourism website ready for your Uganda safari business!**
