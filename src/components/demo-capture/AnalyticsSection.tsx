
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MousePointer } from 'lucide-react';

export function AnalyticsSection() {
  return (
    <section className="mb-16 sm:mb-20">
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-xl">
        <CardContent className="p-8 sm:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <MousePointer className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium text-sm">Step-by-Step Guide Creation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Create Professional Step-by-Step Guides and Demos
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Using our Extension and Application, Create Comprehensive Step-by-Step Guides and Interactive Demos for Better User Onboarding and Training.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-2">Extension</div>
                <div className="text-sm text-gray-600">Browser-based Capture</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-2">Desktop App</div>
                <div className="text-sm text-gray-600">Full Screen Recording</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-2">HTML Demos</div>
                <div className="text-sm text-gray-600">Interactive Guides</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
