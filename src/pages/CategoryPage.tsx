import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import AdBanner from '../components/AdBanner'
import { getCategoryBySlug } from '../data/categories'
import * as Icons from 'lucide-react'

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const category = getCategoryBySlug(slug || '')

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <Link to="/" className="text-primary-600 hover:underline">← Back to Home</Link>
      </div>
    )
  }

  return (
    <>
      <SEOHead
        title={category.seoTitle}
        description={category.seoDescription}
        keywords={category.keywords}
        canonical={`https://rspeditor.in/category/${category.slug}`}
      />

      <div className="bg-gradient-to-br from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} text-white text-sm font-medium mb-4`}>
            {(() => {
              const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[category.icon]
              return IconComponent ? <IconComponent className="w-4 h-4" /> : null
            })()}
            {category.name}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">{category.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {category.keywords.map(kw => (
              <span key={kw} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                {kw}
              </span>
            ))}
          </div>

          {/* Category Top Ad */}
          <div className="mb-8">
            <AdBanner slot={`cat-${category.id}-top`} format="auto" className="min-h-[90px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {category.tools.map((tool, index) => {
              const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[tool.icon]
              return (
                <>
                  <Link
                    key={tool.id}
                    to={`/tool/${tool.slug}`}
                    className="group p-6 bg-white rounded-2xl border border-gray-200 card-hover"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                        {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                      </div>
                      {tool.isFree && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                          FREE
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-gray-500 mb-4">{tool.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {tool.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>

                  {/* Insert ad after 2nd tool */}
                  {index === 1 && (
                    <div key="ad-mid" className="sm:col-span-2">
                      <AdBanner slot={`cat-${category.id}-mid`} format="rectangle" className="min-h-[250px]" />
                    </div>
                  )}
                </>
              )
            })}
          </div>

          {/* Category Bottom Ad */}
          <div className="mt-8">
            <AdBanner slot={`cat-${category.id}-bottom`} format="auto" className="min-h-[90px]" />
          </div>
        </div>
      </div>
    </>
  )
}
