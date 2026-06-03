import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-6xl font-medium text-[var(--text-h)]">404</h1>
      <p className="mt-4 text-lg opacity-70">Page not found</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors"
      >
        <Home size={18} />
        Go Home
      </Link>
    </div>
  )
}
