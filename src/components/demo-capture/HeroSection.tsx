
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, TrendingUp, Download } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="text-center mb-12 sm:mb-16 max-w-5xl mx-auto">
      <Badge className="mb-4 sm:mb-6 bg-purple-100 text-purple-700 border-purple-200 text-xs sm:text-sm">
        Interactive Demo Capture
      </Badge>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
        Create Seamless Onboarding<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          for your Software
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
        Onboarding Made Simple. Create Engaging Videos to Guide Your Users Through Your Software with Flonnect Screen Recorder.
      </p>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 mb-8 sm:mb-10 max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <p className="text-green-800 font-semibold text-sm sm:text-base">
            Proven Results
          </p>
        </div>
        <p className="text-green-700 text-sm sm:text-base">
          Retention rates increased by up to 50% with effective onboarding.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
          Start Creating Demos
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
        </Button>
        <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
          Watch Demo
          <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
        </Button>
      </div>
      
      {/* Download Links Section */}
      <div className="mt-8 sm:mt-10 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a 
            href="#chrome-extension" 
            className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow"
          >
            <Download className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium">Chrome Extension</span>
          </a>
          <a 
            href="#desktop-mac" 
            className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow"
          >
            <Download className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Desktop (Mac)</span>
          </a>
          <a 
            href="#desktop-windows" 
            className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow"
          >
            <Download className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">Desktop (Windows)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
