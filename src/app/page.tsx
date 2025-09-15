import { Footer } from '@/components/common/footer'
import { Navigation } from '@/components/common/navigation'
import { AboutSection } from './_sections/about-section'
import { ExperiencesSection } from './_sections/experiences-section'
import { GallerySection } from './_sections/gallery-section'
import { HeroSection } from './_sections/hero-section'
import { InfoSection } from './_sections/info-section'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ExperiencesSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  )
}
