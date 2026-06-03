import { Link } from 'react-router-dom'
import { categories } from '../data/categories'
import * as Icons from 'lucide-react'

export default function PopularTools() {
  const popularTools = categories.flatMap(cat =>
    cat.tools.slice(0, 2).map(tool => ({ ...tool, category: cat }))
  )

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most-used AI editing tools. Try them now — no signup needed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTools.map((tool) => {
            const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[tool.icon]
            return (
              <Link
                key={tool.id}
                to={`/tool/${tool.slug}`}
                className="group p-6 bg-white rounded-2xl border border-gray-200 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.category.gradient} flex items-center justify-center`}>
                    {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
                  </div>
                  {tool.isFree && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      FREE
                    </span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{tool.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tool.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
