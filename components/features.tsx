import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Palette,
  Languages,
  Download,
  Monitor,
  Type,
  Layers,
  Accessibility,
  Users,
  Zap,
  Sparkles,
  ImageIcon,
} from "lucide-react"

const features = [
  {
    icon: Languages,
    title: "Multi-language support",
    description: "Auto-detection for 100+ programming languages with intelligent syntax highlighting.",
    color: "text-blue-400",
  },
  {
    icon: Palette,
    title: "Beautiful themes",
    description: "Curated collection of themes inspired by VSCode, GitHub, One Dark, and more.",
    color: "text-purple-400",
  },
  {
    icon: Layers,
    title: "Precise controls",
    description: "Fine-tune every aspect with advanced layout controls and spacing options.",
    color: "text-green-400",
  },
  {
    icon: Monitor,
    title: "Window frames",
    description: "Multiple frame styles with custom backgrounds, shadows, and traffic lights.",
    color: "text-orange-400",
  },
  {
    icon: Type,
    title: "Typography mastery",
    description: "Premium coding fonts with ligature support and precise spacing controls.",
    color: "text-pink-400",
  },
  {
    icon: Download,
    title: "Export anywhere",
    description: "Download as PNG, SVG, or PDF with configurable quality and transparency.",
    color: "text-cyan-400",
  },
  {
    icon: Zap,
    title: "Real-time preview",
    description: "Instant updates with smooth animations and responsive design.",
    color: "text-yellow-400",
  },
  {
    icon: Users,
    title: "Community driven",
    description: "Browse and share snippet styles with the community marketplace.",
    color: "text-indigo-400",
  },
  {
    icon: Accessibility,
    title: "Accessible by design",
    description: "High contrast themes, keyboard navigation, and screen reader support.",
    color: "text-emerald-400",
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-xl bg-purple-500/10 ring-1 ring-purple-500/20">
              <Sparkles className="h-6 w-6 text-purple-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Everything you need</h2>
          <p className="text-xl text-linear-300 leading-relaxed">
            Professional-grade features for developers, designers, and content creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="linear-card hover:bg-white/10 transition-all duration-300 group animate-fade-in border-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    {feature.icon === Image ? (
                      <ImageIcon className={`h-5 w-5 ${feature.color}`} />
                    ) : (
                      <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    )}
                  </div>
                  <CardTitle className="text-lg text-white font-semibold">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-linear-300 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
