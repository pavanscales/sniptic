import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-32 lg:px-8">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-white">Snippet</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-linear-300 hover:text-white transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="/templates" className="text-linear-300 hover:text-white transition-colors text-sm font-medium">
              Templates
            </Link>
            <Link href="#pricing" className="text-linear-300 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link href="#docs" className="text-linear-300 hover:text-white transition-colors text-sm font-medium">
              Docs
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-linear-300 hover:text-white hover:bg-white/10">
              Log in
            </Button>
            <Link href="/editor">
              <Button size="sm" className="linear-button">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl text-center pt-16">
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="relative rounded-full px-4 py-2 text-sm leading-6 text-linear-300 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-200">
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              Advanced syntax highlighting & themes
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-in">
          Build stunning{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            code snippets
          </span>
        </h1>

        <p className="text-xl leading-relaxed text-linear-300 max-w-2xl mx-auto mb-12 animate-fade-in">
          Create beautiful, shareable code snippets with advanced customization. Multi-language support, dozens of
          themes, and professional export options.
        </p>

        <div className="flex items-center justify-center gap-4 animate-fade-in">
          <Link href="/editor">
            <Button size="lg" className="linear-button text-base px-8 py-3 h-auto">
              Start creating
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/templates">
            <Button variant="outline" size="lg" className="linear-button-secondary text-base px-8 py-3 h-auto">
              Browse templates
            </Button>
          </Link>
        </div>

        {/* Floating code preview */}
        <div className="mt-20 relative">
          <div className="linear-card p-1 max-w-2xl mx-auto">
            <div className="bg-linear-900 rounded-lg overflow-hidden">
              <div className="bg-linear-800 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-linear-400 text-sm ml-4">snippet.tsx</div>
              </div>
              <div className="p-6 font-mono text-sm text-left">
                <pre className="text-linear-100">
                  <code>{`function createSnippet() {
  const snippet = {
    language: 'typescript',
    theme: 'linear-dark',
    beautiful: true
  }
  
  return snippet
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
