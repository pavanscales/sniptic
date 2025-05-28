"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Copy, Share2, Palette, Type, Layout, Monitor, ArrowLeft } from "lucide-react"
import Link from "next/link"

const languages = [
  "javascript",
  "typescript",
  "python",
  "rust",
  "go",
  "java",
  "cpp",
  "csharp",
  "php",
  "ruby",
  "swift",
  "kotlin",
  "dart",
  "html",
  "css",
  "sql",
  "bash",
]

const themes = [
  { name: "GitHub Dark", value: "github-dark", bg: "bg-gray-900" },
  { name: "GitHub Light", value: "github-light", bg: "bg-white" },
  { name: "One Dark Pro", value: "one-dark", bg: "bg-gray-800" },
  { name: "Dracula", value: "dracula", bg: "bg-purple-900" },
  { name: "Material Ocean", value: "material-ocean", bg: "bg-blue-900" },
  { name: "Nord", value: "nord", bg: "bg-slate-800" },
  { name: "Monokai", value: "monokai", bg: "bg-gray-900" },
  { name: "Solarized Dark", value: "solarized-dark", bg: "bg-slate-700" },
]

const fonts = [
  "Fira Code",
  "JetBrains Mono",
  "Source Code Pro",
  "Cascadia Code",
  "SF Mono",
  "Consolas",
  "Monaco",
  "Menlo",
]

const windowStyles = [
  { name: "macOS", value: "macos" },
  { name: "Windows", value: "windows" },
  { name: "Linux", value: "linux" },
  { name: "None", value: "none" },
]

export function SnippetEditor() {
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55`)

  const [settings, setSettings] = useState({
    language: "javascript",
    theme: "github-dark",
    font: "Fira Code",
    fontSize: [14],
    lineHeight: [1.5],
    padding: [32],
    borderRadius: [8],
    windowStyle: "macos",
    showLineNumbers: true,
    showBackground: true,
    ligatures: true,
    aspectRatio: "auto",
  })

  const updateSetting = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const selectedTheme = themes.find((t) => t.value === settings.theme)

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
            <h1 className="text-xl font-semibold">Snippet Editor</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Panel - Controls */}
        <div className="w-80 border-r bg-white dark:bg-gray-900 overflow-y-auto">
          <div className="p-6">
            <Tabs defaultValue="theme" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="theme" className="text-xs">
                  <Palette className="h-3 w-3" />
                </TabsTrigger>
                <TabsTrigger value="layout" className="text-xs">
                  <Layout className="h-3 w-3" />
                </TabsTrigger>
                <TabsTrigger value="typography" className="text-xs">
                  <Type className="h-3 w-3" />
                </TabsTrigger>
                <TabsTrigger value="frame" className="text-xs">
                  <Monitor className="h-3 w-3" />
                </TabsTrigger>
              </TabsList>

              <TabsContent value="theme" className="space-y-4 mt-4">
                <div>
                  <Label className="text-sm font-medium">Language</Label>
                  <Select value={settings.language} onValueChange={(value) => updateSetting("language", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang} value={lang}>
                          {lang.charAt(0).toUpperCase() + lang.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium">Theme</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {themes.map((theme) => (
                      <button
                        key={theme.value}
                        onClick={() => updateSetting("theme", theme.value)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          settings.theme === theme.value
                            ? "border-indigo-500 ring-2 ring-indigo-200"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className={`w-full h-8 rounded ${theme.bg} mb-2`}></div>
                        <div className="text-xs font-medium">{theme.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="layout" className="space-y-4 mt-4">
                <div>
                  <Label className="text-sm font-medium">Padding</Label>
                  <Slider
                    value={settings.padding}
                    onValueChange={(value) => updateSetting("padding", value)}
                    max={64}
                    min={8}
                    step={4}
                    className="mt-2"
                  />
                  <div className="text-xs text-gray-500 mt-1">{settings.padding[0]}px</div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Border Radius</Label>
                  <Slider
                    value={settings.borderRadius}
                    onValueChange={(value) => updateSetting("borderRadius", value)}
                    max={24}
                    min={0}
                    step={2}
                    className="mt-2"
                  />
                  <div className="text-xs text-gray-500 mt-1">{settings.borderRadius[0]}px</div>
                </div>

                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Line Numbers</Label>
                  <Switch
                    checked={settings.showLineNumbers}
                    onCheckedChange={(checked) => updateSetting("showLineNumbers", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Background</Label>
                  <Switch
                    checked={settings.showBackground}
                    onCheckedChange={(checked) => updateSetting("showBackground", checked)}
                  />
                </div>
              </TabsContent>

              <TabsContent value="typography" className="space-y-4 mt-4">
                <div>
                  <Label className="text-sm font-medium">Font Family</Label>
                  <Select value={settings.font} onValueChange={(value) => updateSetting("font", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {fonts.map((font) => (
                        <SelectItem key={font} value={font}>
                          {font}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium">Font Size</Label>
                  <Slider
                    value={settings.fontSize}
                    onValueChange={(value) => updateSetting("fontSize", value)}
                    max={24}
                    min={10}
                    step={1}
                    className="mt-2"
                  />
                  <div className="text-xs text-gray-500 mt-1">{settings.fontSize[0]}px</div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Line Height</Label>
                  <Slider
                    value={settings.lineHeight}
                    onValueChange={(value) => updateSetting("lineHeight", value)}
                    max={2.5}
                    min={1}
                    step={0.1}
                    className="mt-2"
                  />
                  <div className="text-xs text-gray-500 mt-1">{settings.lineHeight[0]}</div>
                </div>

                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Font Ligatures</Label>
                  <Switch
                    checked={settings.ligatures}
                    onCheckedChange={(checked) => updateSetting("ligatures", checked)}
                  />
                </div>
              </TabsContent>

              <TabsContent value="frame" className="space-y-4 mt-4">
                <div>
                  <Label className="text-sm font-medium">Window Style</Label>
                  <Select value={settings.windowStyle} onValueChange={(value) => updateSetting("windowStyle", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {windowStyles.map((style) => (
                        <SelectItem key={style.value} value={style.value}>
                          {style.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium">Aspect Ratio</Label>
                  <Select value={settings.aspectRatio} onValueChange={(value) => updateSetting("aspectRatio", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto</SelectItem>
                      <SelectItem value="square">Square (1:1)</SelectItem>
                      <SelectItem value="landscape">Landscape (16:9)</SelectItem>
                      <SelectItem value="portrait">Portrait (9:16)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Center - Code Editor */}
        <div className="flex-1 flex flex-col">
          <div className="border-b p-4 bg-white dark:bg-gray-900">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{settings.language}</Badge>
              <Badge variant="outline">{selectedTheme?.name}</Badge>
              <Badge variant="outline">{settings.font}</Badge>
            </div>
          </div>

          <div className="flex-1 p-6">
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here..."
              className="w-full h-full font-mono resize-none"
              style={{ fontSize: `${settings.fontSize[0]}px` }}
            />
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-96 border-l bg-gray-50 dark:bg-gray-800 p-6">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Live Preview</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Real-time preview of your snippet</p>
          </div>

          <Card className="p-1 shadow-xl">
            {settings.windowStyle !== "none" && (
              <div className="bg-gray-700 rounded-t-lg px-4 py-2 flex items-center gap-2">
                {settings.windowStyle === "macos" && (
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                )}
                <div className="text-gray-300 text-sm ml-2">
                  snippet.{settings.language === "javascript" ? "js" : settings.language}
                </div>
              </div>
            )}

            <div
              className={`${selectedTheme?.bg} ${settings.windowStyle === "none" ? "rounded-lg" : "rounded-b-lg"} font-mono overflow-x-auto`}
              style={{
                padding: `${settings.padding[0]}px`,
                fontSize: `${settings.fontSize[0]}px`,
                lineHeight: settings.lineHeight[0],
                borderRadius: settings.windowStyle === "none" ? `${settings.borderRadius[0]}px` : undefined,
              }}
            >
              <pre className="text-gray-100 whitespace-pre-wrap">
                <code>{code}</code>
              </pre>
            </div>
          </Card>

          <div className="mt-4 space-y-2">
            <Button className="w-full" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export PNG
            </Button>
            <Button className="w-full" variant="outline">
              Export SVG
            </Button>
            <Button className="w-full" variant="outline">
              Export PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
