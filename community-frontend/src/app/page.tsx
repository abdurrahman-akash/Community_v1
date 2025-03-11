import { Footer,Hero } from "@/components"
import AboutusSection from "@/components/sections/aboutus/Aboutus"
import ReviewSection from "@/components/sections/review/Review"

function Home() {
  return (
    <main>
        <Hero />
        <AboutusSection />
        <ReviewSection />
        <Footer />
    </main>
  )
}

export default Home