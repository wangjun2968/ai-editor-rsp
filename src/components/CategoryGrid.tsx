import { Link } from 'react-router-dom'
import { categories } from '../data/categories'
import * as Icons from 'lucide-react'

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore AI Editing Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            8 categories of free AI-powered editing tools. From photo editing to video templates, find everything you need to create stunning content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[cat.icon]
            return (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="group relative p-6 bg-white rounded-2xl border border-gray-200 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cat.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">{cat.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary-600">
                  <span>{cat.tools.length} tools</span>
                  <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
