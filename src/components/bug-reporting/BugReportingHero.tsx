
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bug, Chrome, Download, ArrowRight } from 'lucide-react';

export function BugReportingHero() {
  return (
    <div className="text-center mb-12 sm:mb-16 max-w-5xl mx-auto">
      <Badge className="mb-4 sm:mb-6 bg-red-100 text-red-700 border-red-200 text-xs sm:text-sm">
        <Bug className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
        Bug Reporting Tool
      </Badge>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
        Report Bugs Faster<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
          with Precision and Clarity
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
        Flonnect Bug Reporting simplifies bug tracking with powerful screenshot and video recording tools, helping teams identify, report, and resolve issues seamlessly.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10">
        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
          <Chrome className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Add to Chrome
        </Button>
        <Button size="lg" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
          Start Free Trial
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
        </Button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-8 sm:mb-10 max-w-lg mx-auto">
        <p className="text-blue-800 font-semibold text-sm sm:text-base mb-2">
          Quality Demo Videos lead to 69% of consumers buying your products
        </p>
      </div>

      {/* Available Platforms Section */}
      <div className="mt-8 sm:mt-10 text-center">
        <p className="text-sm text-gray-600 mb-4">Available Platforms</p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a 
            href="#chrome-extension" 
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-sm font-medium"
          >
            <Chrome className="w-4 h-4 text-blue-600" />
            Chrome Extension
          </a>
          <a 
            href="#desktop-mac" 
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-sm font-medium"
          >
            <Download className="w-4 h-4 text-gray-600" />
            Desktop (Mac)
          </a>
          <a 
            href="#desktop-windows" 
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-sm font-medium"
          >
            <Download className="w-4 h-4 text-blue-500" />
            Desktop (Windows)
          </a>
        </div>
      </div>
    </div>
  );
}
