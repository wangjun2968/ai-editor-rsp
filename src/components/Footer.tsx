import { Link } from 'react-router-dom'
import { Sparkles, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary-400" />
              <span className="text-lg font-bold text-white">AI Editor RSP</span>
            </Link>
            <p className="text-sm text-gray-400">
              Free AI-powered photo editing tools and CapCut templates for creators worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/ai-photo-editor" className="hover:text-primary-400 transition-colors">AI Photo Editor</Link></li>
              <li><Link to="/category/background-remover" className="hover:text-primary-400 transition-colors">Background Remover</Link></li>
              <li><Link to="/category/capcut-templates" className="hover:text-primary-400 transition-colors">CapCut Templates</Link></li>
              <li><Link to="/category/festival-photo-editing" className="hover:text-primary-400 transition-colors">Festival Editing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/trending-reels-editing" className="hover:text-primary-400 transition-colors">Reels Editing</Link></li>
              <li><Link to="/category/aesthetic-photo-editing" className="hover:text-primary-400 transition-colors">Aesthetic</Link></li>
              <li><Link to="/category/wedding-photo-editing" className="hover:text-primary-400 transition-colors">Wedding</Link></li>
              <li><Link to="/category/vintage-photo-editing" className="hover:text-primary-400 transition-colors">Vintage</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p> {new Date().getFullYear()} AI Editor RSP. All tools are free to use.</p>
        </div>
      </div>
    </footer>
  )
}
