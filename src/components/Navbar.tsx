import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-primary-600" />
            <span className="text-xl font-bold gradient-text">AI Editor RSP</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</Link>
            <Link to="/category/ai-photo-editor" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">AI Editor</Link>
            <Link to="/category/capcut-templates" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">CapCut</Link>
            <Link to="/category/background-remover" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Background</Link>
            <Link to="/category/festival-photo-editing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Festival</Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/category/ai-photo-editor" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>AI Photo Editor</Link>
            <Link to="/category/capcut-templates" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>CapCut Templates</Link>
            <Link to="/category/background-remover" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Background Remover</Link>
            <Link to="/category/festival-photo-editing" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Festival Editing</Link>
            <Link to="/category/trending-reels-editing" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Reels Editing</Link>
            <Link to="/category/aesthetic-photo-editing" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Aesthetic</Link>
            <Link to="/category/wedding-photo-editing" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Wedding</Link>
            <Link to="/category/vintage-photo-editing" className="block py-2 text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Vintage</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
