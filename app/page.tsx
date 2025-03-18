import HeroSection from "@/components/home/HeroSection"
import BenefitsSection from "@/components/home/BenefitsSection"
import HowHarmonyWorksSection from "@/components/home/HowHarmonyWorksSection"
import FAQs from "@/components/home/FAQs"

/**
 * Home page for Harmony website with video background
 * Video extends behind the transparent navbar with a split layout design
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <HowHarmonyWorksSection />
      <FAQs />
    </>
  )
}