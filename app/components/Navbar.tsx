import { Zap } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-yellow-400" />
            <span className="font-bold text-xl">listmysite.io</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Pricing
            </a>
            <button
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}