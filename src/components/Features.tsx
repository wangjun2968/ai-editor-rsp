import { Zap, Shield, Globe, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'AI-powered tools deliver results in seconds. No waiting, no queues.',
  },
  {
    icon: Shield,
    title: '100% Free',
    description: 'All tools are completely free to use. No hidden fees, no subscriptions.',
  },
  {
    icon: Globe,
    title: 'No Signup Required',
    description: 'Start editing immediately. No account creation or login needed.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Works perfectly on mobile devices. Edit photos on the go.',
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AI Editor RSP</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Designed for creators who need fast, free, and powerful editing tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <div className="w-14 h-14 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
