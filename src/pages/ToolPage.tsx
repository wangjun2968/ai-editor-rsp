import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Sparkles, Upload, Image, Download, Wand2 } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { getToolBySlug, getCategoryByToolSlug } from '../data/categories'
import * as Icons from 'lucide-react'

export default function ToolPage() {
  const { slug } = useParams<{ slug: string }>()
  const tool = getToolBySlug(slug || '')
  const category = getCategoryByToolSlug(slug || '')

  if (!tool || !category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Tool Not Found</h1>
        <Link to="/" className="text-primary-600 hover:underline">← Back to Home</Link>
      </div>
    )
  }

  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[tool.icon]

  return (
    <>
      <SEOHead
        title={tool.seoTitle}
        description={tool.seoDescription}
        keywords={[...tool.tags, ...category.keywords]}
        canonical={`https://rspeditor.in/tool/${tool.slug}`}
      />

      <div className="bg-gradient-to-br from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link to={`/category/${category.slug}`} className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {category.name}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tool Info */}
            <div className="lg:col-span-1">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6`}>
                {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{tool.name}</h1>
              <p className="text-gray-600 mb-6">{tool.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {tool.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              {tool.isFree && (
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <Sparkles className="w-5 h-5" />
                  100% Free — No signup required
                </div>
              )}
            </div>

            {/* Upload Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center hover:border-primary-400 transition-colors cursor-pointer">
                <div className="w-20 h-20 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                  <Upload className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload your photo</h3>
                <p className="text-gray-500 mb-6">Drag and drop or click to browse. Supports JPG, PNG, WEBP.</p>
                <button className="btn-primary inline-flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Choose Photo
                </button>
              </div>

              {/* How to use */}
              <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">How to use</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="w-10 h-10 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-3">
                      <Upload className="w-5 h-5 text-primary-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">1. Upload</h4>
                    <p className="text-sm text-gray-500">Select your photo</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-10 h-10 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-3">
                      <Wand2 className="w-5 h-5 text-primary-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">2. AI Process</h4>
                    <p className="text-sm text-gray-500">Our AI works instantly</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-10 h-10 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-3">
                      <Download className="w-5 h-5 text-primary-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">3. Download</h4>
                    <p className="text-sm text-gray-500">Get your result</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
