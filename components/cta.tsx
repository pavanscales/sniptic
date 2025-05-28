import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="linear-card p-12 md:p-16">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-xl bg-purple-500/10 ring-1 ring-purple-500/20">
              <Sparkles className="h-8 w-8 text-purple-400" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to create beautiful code snippets?
          </h2>

          <p className="text-xl text-linear-300 leading-relaxed max-w-2xl mx-auto mb-12">
            Join thousands of developers who trust our snippet generator for their content creation needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/editor">
              <Button size="lg" className="linear-button text-base px-8 py-4 h-auto w-full sm:w-auto">
                Start creating
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="linear-button-secondary text-base px-8 py-4 h-auto w-full sm:w-auto"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-linear-400">Free to use • Open source • No signup required</p>
          </div>
        </div>
      </div>
    </section>
  )
}
