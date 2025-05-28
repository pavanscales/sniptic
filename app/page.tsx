import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LiveDemo } from "@/components/live-demo"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <div className="min-h-screen linear-bg">
      <Hero />
      <Features />
      <LiveDemo />
      <CTA />
    </div>
  )
}
