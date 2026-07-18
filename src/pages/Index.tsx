import { GrainOverlay } from '@/components/GrainOverlay'
import { Header } from '@/components/shoaib/Header'
import { Hero } from '@/components/shoaib/Hero'
import { ServicesMenu } from '@/components/shoaib/ServicesMenu'
import { BookingSection } from '@/components/shoaib/BookingSection'
import { LocationMarquee } from '@/components/shoaib/LocationMarquee'
import { Footer } from '@/components/shoaib/Footer'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-black selection:text-white">
      <GrainOverlay />
      <Header />
      <main>
        <Hero />
        <ServicesMenu />
        <BookingSection />
        <LocationMarquee />
      </main>
      <Footer />
    </div>
  )
}
