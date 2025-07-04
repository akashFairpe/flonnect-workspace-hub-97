
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, TrendingUp, Chrome } from 'lucide-react';

export function TestimonialsHero() {
  return (
    <div className="text-center mb-12 sm:mb-16 max-w-5xl mx-auto">
      <Badge className="mb-4 sm:mb-6 bg-purple-100 text-purple-700 border-purple-200 text-xs sm:text-sm">
        Customer Testimonials
      </Badge>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
        Capture Authentic Customer<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Stories
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
        Easily Record and Share Customer Testimonials That Build Trust Using Flonnect's Webcam and Screen Recording Features.
      </p>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 mb-8 sm:mb-10 max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <p className="text-green-800 font-semibold text-sm sm:text-base">
            Proven Impact
          </p>
        </div>
        <p className="text-green-700 text-sm sm:text-base">
          Video testimonials can increase website traffic by 157%.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
          <Chrome className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Add to Chrome
        </Button>
        <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
          Start Free Trial
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
