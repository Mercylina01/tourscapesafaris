# TourScape Safaris - Deployment Guide

## Overview

Your TourScape Safaris website is complete and ready for production deployment. This guide walks you through the deployment process.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Your project code downloaded or pushed to GitHub

## Deployment Options

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy from project directory**
   ```bash
   vercel
   ```

3. **Follow prompts**:
   - Link to GitHub project (recommended)
   - Set project name (e.g., "tourscape-safaris")
   - Choose production domain

4. **Your site is live** at your Vercel URL!

### Option 2: Deploy via GitHub + Vercel (Recommended)

1. **Create GitHub Repository**
   - Go to github.com/new
   - Create repository "tourscape-safaris"
   - Don't add README (we have one)

2. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TourScape Safaris website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/tourscape-safaris.git
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click Deploy

4. **Custom Domain (Optional)**
   - Go to project settings in Vercel
   - Add custom domain (e.g., tourscape-safaris.com)
   - Follow DNS instructions

### Option 3: Deploy via v0 "Publish" Button

1. Click the **"Publish"** button in v0 (top right)
2. Follow the authentication flow
3. Choose to create new Vercel project or use existing
4. Site deploys automatically
5. Get shareable production URL

## Post-Deployment Steps

### 1. Update Contact Information

The site currently has placeholder contact info in some areas. Update these files:

**Files to customize:**
- `/app/contact/page.tsx` - Already updated ✓
- `/components/footer.tsx` - Already updated ✓
- `/app/booking/page.tsx` - Already updated ✓
- `/app/about/page.tsx` - Add your specific team info

**Current Contact Info:**
- Phone/WhatsApp: +256 702 860 241 ✓
- Email: info@tourscape.org ✓
- Location: Seeta, Kampala, Uganda ✓

### 2. Set Up Email Integration

For booking confirmations and inquiries:

```bash
npm install nodemailer
# or
npm install resend  # Alternative: Resend email service
```

Create `/app/api/send-booking/route.ts`:
```typescript
// Send booking confirmation emails
// Send inquiry responses
```

### 3. Set Up Database (Optional)

Connect a database to store:
- Bookings
- User accounts
- Dynamic package content
- Contact submissions

**Recommended Options:**
- Supabase (built-in auth)
- Neon (PostgreSQL)
- MongoDB Atlas
- AWS DynamoDB

### 4. Add Analytics

Install and configure analytics:

```bash
npm install @vercel/analytics @vercel/web-vitals
```

Add to `/app/layout.tsx`:
```typescript
import { Analytics } from "@vercel/analytics/react"

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 5. Set Up Payment Processing (Optional)

For online bookings:

```bash
npm install stripe @stripe/stripe-js
```

**Guide**: Follow Stripe documentation for Next.js integration

### 6. Configure SEO

Update `/app/layout.tsx` metadata:

```typescript
export const metadata: Metadata = {
  title: 'TourScape Safaris | Premium Uganda Safari & Travel',
  description: 'Book authentic Uganda safaris, gorilla trekking, and international tours with professional guides',
  openGraph: {
    title: 'TourScape Safaris',
    description: 'Premium travel experiences in Uganda',
    type: 'website',
    url: 'https://your-domain.com',
    images: [{ url: '/hero-safari.jpg' }],
  },
}
```

### 7. Add Google Search Console

1. Go to search.google.com/search-console
2. Add your domain
3. Verify ownership
4. Submit sitemap.xml

### 8. Set Up SSL Certificate

Vercel provides free SSL by default ✓

### 9. Configure Custom Domain

**If using custom domain:**

1. In Vercel project settings, go to Domains
2. Add your custom domain
3. Update DNS records at your registrar
4. Nameserver examples:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

## Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@tourscape.org
NEXT_PUBLIC_CONTACT_PHONE=+256702860241
```

## Verification Checklist

After deployment, verify:

- [ ] Homepage loads without errors
- [ ] Navigation links work
- [ ] Booking form submits
- [ ] Contact form works
- [ ] WhatsApp links open correctly
- [ ] Images load properly
- [ ] Mobile responsive on all pages
- [ ] Forms validate correctly
- [ ] CTAs redirect to correct pages
- [ ] Footer information is correct
- [ ] Social media links work
- [ ] Site loads in < 3 seconds

## Testing Checklist

### Desktop Testing
- [ ] Chrome - Latest version
- [ ] Firefox - Latest version
- [ ] Safari - Latest version
- [ ] Edge - Latest version

### Mobile Testing
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet view
- [ ] Responsive menu

### Functionality Testing
- [ ] All pages load
- [ ] Navigation works
- [ ] Forms validate
- [ ] Booking form submits
- [ ] Links are clickable
- [ ] Images display
- [ ] Videos play (if added)
- [ ] Contact methods work

## Performance Optimization

### Current Performance
Your site includes:
- ✓ Image optimization (Next.js Image)
- ✓ CSS minification
- ✓ Code splitting
- ✓ Responsive design
- ✓ SEO tags

### Improve Further
```bash
# Analyze bundle size
npm run build
npm run analyze  # If you add bundle analyzer
```

## Monitoring

### Set Up Monitoring
1. Enable Vercel Analytics ✓
2. Monitor Core Web Vitals
3. Track error rates
4. Monitor deployment status

### Useful Vercel Features
- Automatic deploys on push
- Preview URLs for branches
- Rollback capability
- Analytics dashboard
- Error logging

## Troubleshooting

### Common Issues

**Issue: Images not loading**
- Solution: Check image paths in public folder
- Verify Image component src props

**Issue: WhatsApp links not working**
- Solution: Test on mobile device
- Verify phone number format: `+256702860241`

**Issue: Booking form not submitting**
- Solution: Check console for errors
- Verify form validation
- Check if database connected

**Issue: Site slow**
- Solution: Check Vercel analytics
- Optimize images
- Check for large dependencies

## Maintenance

### Regular Tasks
- Monitor error logs
- Update dependencies monthly
- Backup database (if used)
- Review analytics
- Update content as needed

### Update Dependencies
```bash
npm update
npm audit fix
```

## Support & Documentation

**Useful Links:**
- Vercel Docs: vercel.com/docs
- Next.js Docs: nextjs.org/docs
- GitHub Help: docs.github.com
- Tailwind Docs: tailwindcss.com/docs

## Next Steps

1. **Deploy** using Option 1, 2, or 3 above
2. **Customize** contact information if different
3. **Add** email/payment integration
4. **Test** all functionality
5. **Monitor** performance
6. **Launch** and promote!

## Support

For technical issues:
- Check Vercel dashboard
- Review deployment logs
- Consult documentation
- Open issue on GitHub (if applicable)

---

**Ready to Launch?**
1. Choose deployment option
2. Follow steps above
3. Verify functionality
4. Celebrate your live website! 🎉

Your TourScape Safaris website is production-ready. Good luck with your launch!
