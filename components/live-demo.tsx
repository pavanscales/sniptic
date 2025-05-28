"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Monitor, Palette, Download } from "lucide-react"

const themes = [
  { name: "Linear Dark", value: "linear-dark", bg: "bg-linear-900" },
  { name: "GitHub Dark", value: "github-dark", bg: "bg-gray-900" },
  { name: "One Dark Pro", value: "one-dark", bg: "bg-gray-800" },
  { name: "Dracula", value: "dracula", bg: "bg-purple-900" },
  { name: "Material Ocean", value: "material-ocean", bg: "bg-blue-900" },
]

const languages = [
  { name: "TypeScript", value: "typescript" },
  { name: "JavaScript", value: "javascript" },
  { name: "Python", value: "python" },
  { name: "Rust", value: "rust" },
  { name: "Go", value: "go" },
]

const codeExamples = {
  typescript: `interface User {
  id: string
  name: string
  email: string
  createdAt: Date
}

const createUser = async (data: Partial<User>): Promise<User> => {
  return {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    ...data
  } as User
}`,
  javascript: `function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

const sequence = Array.from({ length: 10 }, (_, i) => fibonacci(i))
console.log(sequence) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,
  python: `from typing import List, Optional

def quick_sort(arr: List[int]) -> List[int]:
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)`,
  rust: `use std::collections::HashMap;

#[derive(Debug, Clone)]
struct User {
    id: String,
    name: String,
    email: String,
}

impl User {
    fn new(name: String, email: String) -> Self {
        Self {
            id: uuid::Uuid::new_v4().to_string(),
            name,
            email,
        }
    }
}`,
  go: `package main

import (
    "context"
    "fmt"
    "sync"
    "time"
)

func worker(ctx context.Context, id int, jobs <-chan int, results chan<- int) {
    for {
        select {
        case job := <-jobs:
            fmt.Printf("Worker %d processing job %d\\n", id, job)
            time.Sleep(time.Second)
            results <- job * 2
        case <-ctx.Done():
            return
        }
    }
}`,
}

export function LiveDemo() {
  const [selectedTheme, setSelectedTheme] = useState("linear-dark")
  const [selectedLanguage, setSelectedLanguage] = useState("typescript")

  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-xl bg-green-500/10 ring-1 ring-green-500/20">
              <Monitor className="h-6 w-6 text-green-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">See it in action</h2>
          <p className="text-xl text-linear-300 leading-relaxed">
            Try different themes and languages to see the real-time preview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="space-y-8">
            <Card className="linear-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="h-5 w-5 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Customization</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-linear-300 mb-3 block">Language</label>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-linear-800 border-white/10">
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value} className="text-white hover:bg-white/10">
                          {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-linear-300 mb-3 block">Theme</label>
                  <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-linear-800 border-white/10">
                      {themes.map((theme) => (
                        <SelectItem key={theme.value} value={theme.value} className="text-white hover:bg-white/10">
                          {theme.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-sm font-medium text-linear-300 mb-3">Available Features</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/10 text-linear-300 border-white/20">
                      Auto-detection
                    </Badge>
                    <Badge variant="secondary" className="bg-white/10 text-linear-300 border-white/20">
                      Line numbers
                    </Badge>
                    <Badge variant="secondary" className="bg-white/10 text-linear-300 border-white/20">
                      Custom fonts
                    </Badge>
                    <Badge variant="secondary" className="bg-white/10 text-linear-300 border-white/20">
                      Export options
                    </Badge>
                    <Badge variant="secondary" className="bg-white/10 text-linear-300 border-white/20">
                      Window frames
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Preview */}
          <div className="space-y-6">
            <Card className="linear-card p-1 shadow-2xl">
              {/* Window Frame */}
              <div className="bg-linear-800 rounded-t-xl px-6 py-4 flex items-center gap-3 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-linear-300 text-sm font-medium ml-2">
                  snippet.
                  {selectedLanguage === "javascript"
                    ? "js"
                    : selectedLanguage === "typescript"
                      ? "ts"
                      : selectedLanguage === "python"
                        ? "py"
                        : selectedLanguage === "rust"
                          ? "rs"
                          : "go"}
                </div>
              </div>

              {/* Code Content */}
              <div className="bg-linear-900 rounded-b-xl p-8 font-mono text-sm overflow-x-auto">
                <pre className="text-linear-100 leading-relaxed">
                  <code>{codeExamples[selectedLanguage as keyof typeof codeExamples]}</code>
                </pre>
              </div>
            </Card>

            <div className="flex gap-3">
              <Button className="linear-button flex-1">
                <Download className="mr-2 h-4 w-4" />
                Export PNG
              </Button>
              <Button variant="outline" className="linear-button-secondary">
                SVG
              </Button>
              <Button variant="outline" className="linear-button-secondary">
                PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
