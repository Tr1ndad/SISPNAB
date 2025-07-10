import { SYSTEM_CONFIG } from "@/lib/config"

interface SystemHeaderProps {
  showMinistryLogo?: boolean
}

export function SystemHeader({ showMinistryLogo = true }: SystemHeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{SYSTEM_CONFIG.name}</h1>
              <p className="text-sm text-gray-600">{SYSTEM_CONFIG.description}</p>
            </div>
          </div>
          {showMinistryLogo && (
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium">Ministério da Cultura</p>
                <p className="text-xs text-gray-600">Governo Federal</p>
              </div>
              <div className="w-16 h-12 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">MinC</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
