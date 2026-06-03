import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Wand2, Image, Film } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-28">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">100% Free AI Tools for Creators</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block text-gray-900">Free AI Photo Editor</span>
            <span className="block gradient-text mt-2">& Reels Template Hub</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            Remove backgrounds, enhance photos, create CapCut templates, and edit festival photos — 
            all with AI. No signup required. Start creating in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/category/ai-photo-editor" className="btn-primary inline-flex items-center justify-center gap-2">
              <Wand2 className="w-5 h-5" />
              Start Editing
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/category/capcut-templates" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Film className="w-5 h-5" />
              CapCut Templates
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Image className="w-4 h-4 text-primary-500" />
              <span>Background Remover</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-500" />
              <span>AI Enhancer</span>
            </div>
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-primary-500" />
              <span>Reels Templates</span>
            </div>
            <div className="flex items-center gap-2">
              <Wand2 className="w-4 h-4 text-accent-500" />
              <span>Festival Effects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
