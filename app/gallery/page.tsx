import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryShowcase } from '@/components/gallery-showcase'

export default function GalleryPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Uganda in Pictures
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of stunning photographs showcasing Uganda's incredible wildlife, landscapes, and experiences.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryShowcase />
        </div>
      </section>

      <Footer />
    </main>
  )
}
