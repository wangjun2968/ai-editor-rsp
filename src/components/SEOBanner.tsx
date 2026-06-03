import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

export default function SEOBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary-600 to-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Free AI Photo Editor & Video Templates
          </h2>
          <p className="text-primary-100">
            Explore all our AI-powered editing categories
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-primary-100 text-sm">
            Popular searches:{" "}
            {categories.flatMap(c => c.keywords).slice(0, 12).map((kw, i, arr) => (
              <span key={kw}>
                <Link 
                  to={`/category/${categories.find(c => c.keywords.includes(kw))?.slug || ''}`}
                  className="hover:text-white underline underline-offset-2"
                >
                  {kw}
                </Link>
                {i < arr.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
