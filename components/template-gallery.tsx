"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Download, Eye, ArrowLeft } from "lucide-react"
import Link from "next/link"

const templates = [
  {
    id: 1,
    name: "GitHub Dark Pro",
    description: "Professional dark theme inspired by GitHub",
    language: "javascript",
    theme: "github-dark",
    downloads: 1234,
    rating: 4.8,
    tags: ["dark", "professional", "github"],
    preview: 'function hello() {\n  console.log("Hello World!");\n}',
  },
  {
    id: 2,
    name: "Minimal Light",
    description: "Clean and minimal light theme",
    language: "typescript",
    theme: "minimal-light",
    downloads: 856,
    rating: 4.6,
    tags: ["light", "minimal", "clean"],
    preview: "interface User {\n  name: string;\n  email: string;\n}",
  },
  {
    id: 3,
    name: "Dracula Pro",
    description: "Beautiful purple theme with great contrast",
    language: "python",
    theme: "dracula",
    downloads: 2341,
    rating: 4.9,
    tags: ["dark", "purple", "contrast"],
    preview: "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)",
  },
  {
    id: 4,
    name: "Material Ocean",
    description: "Material Design inspired ocean theme",
    language: "rust",
    theme: "material-ocean",
    downloads: 567,
    rating: 4.7,
    tags: ["material", "blue", "ocean"],
    preview: 'fn main() {\n    println!("Hello, world!");\n}',
  },
  {
    id: 5,
    name: "Nord Terminal",
    description: "Arctic, north-bluish color palette",
    language: "go",
    theme: "nord",
    downloads: 789,
    rating: 4.5,
    tags: ["nord", "blue", "terminal"],
    preview: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
  },
  {
    id: 6,
    name: "One Dark Pro",
    description: "Atom's iconic One Dark theme",
    language: "javascript",
    theme: "one-dark",
    downloads: 1876,
    rating: 4.8,
    tags: ["dark", "atom", "popular"],
    preview: "const greet = (name) => {\n  return `Hello, ${name}!`;\n};",
  },
]

const languages = ["all", "javascript", "typescript", "python", "rust", "go", "java"]
const sortOptions = ["popular", "newest", "rating", "downloads"]

export function TemplateGallery() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesLanguage = selectedLanguage === "all" || template.language === selectedLanguage

    return matchesSearch && matchesLanguage
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white dark:bg-gray-900 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-semibold">Template Gallery</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Browse and use community-created snippet templates
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang === "all" ? "All Languages" : lang.charAt(0).toUpperCase() + lang.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <CardDescription className="mt-1">{template.description}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-yellow-600">
                    <Star className="h-4 w-4 fill-current" />
                    {template.rating}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-2">
                  {template.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                {/* Preview */}
                <div className="bg-gray-900 rounded-lg p-4 mb-4 font-mono text-sm overflow-hidden">
                  <pre className="text-gray-100 whitespace-pre-wrap text-xs">
                    <code>{template.preview}</code>
                  </pre>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span>{template.language}</span>
                  <span>{template.downloads.toLocaleString()} downloads</span>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Use Template
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No templates found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
