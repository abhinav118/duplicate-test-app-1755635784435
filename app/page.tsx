import { siteData, navigation } from '@/lib/data'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container text-center">
            <h1 className="text-5xl font-bold mb-4">Duplicate Test App</h1>
            <p className="text-xl opacity-90">Detect and manage duplicate entries efficiently</p>
          </div>
        </div>
<div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Grid content will be populated from data */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Featured Content</h3>
              <p className="text-gray-600">Dynamic content goes here</p>
            </div>
          </div>
        </div>
    </div>
  )
}