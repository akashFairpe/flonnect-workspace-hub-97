
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Video, CheckCircle, Play, Network, Pen, Bug } from 'lucide-react';

export function BugReportingModes() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Track and Manage Bugs with Comprehensive Data
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Stop wasting time with vague bug reports. Use Flonnect Bug Reporting to capture detailed images and videos, automatically log network requests, record API failures, and annotate issues with precision tools.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Image Bug Mode */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Camera className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Image Bug – Capture Visual Issues Instantly</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Capture precise screenshots of the issue with full page context.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Add visual highlights, arrows, text annotations, and drawings for clarity.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Record all network activity at the moment of capture including failed API calls.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Share directly with your team for quick resolution with complete context.</span>
              </div>
            </div>
            
            <div className="bg-white/60 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Network className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Network Tab Recording – See What Failed</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Automatically capture all XHR requests, fetch calls, and API responses.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Identify failed requests with status codes (404, 500, etc.) and error messages.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>View request headers, payloads, and response data for complete debugging context.</span>
                </div>
              </div>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Play className="w-4 h-4 mr-2" />
              Take A Product Tour
            </Button>
          </CardContent>
        </Card>

        {/* Video Bug Mode */}
        <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <Video className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Video Bug – Mark and Record Bugs with Precision</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Record video bugs with the ability to mark key timestamps and moments.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Highlight where issues occur during playback with visual annotations.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Continuous network monitoring throughout the entire recording session.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Provide developers with clear context and step-by-step reproduction.</span>
              </div>
            </div>
            
            <div className="bg-white/60 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Pen className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-gray-900">Advanced Annotation Tools – Make Issues Crystal Clear</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Add arrows, callouts, and highlights to draw attention to specific issues.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Insert text boxes with detailed explanations and context.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Use drawing tools to circle problems and mark exact locations.</span>
                </div>
              </div>
            </div>
            
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Play className="w-4 h-4 mr-2" />
              Take A Product Tour
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Network Recording Details Section */}
      <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 shadow-2xl mb-8">
        <CardContent className="p-8 sm:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Bug className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">Complete Network Debugging</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Never Miss a Failed API Call Again
            </h2>
            <p className="text-indigo-100 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
              Flonnect automatically captures all network activity, giving you complete visibility into what's happening behind the scenes when bugs occur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start gap-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Network className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-2">API Failure Detection</h4>
                <span className="text-sm text-indigo-100 leading-relaxed">
                  Automatically identify which API endpoints are failing with status codes, error messages, and timing data.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Bug className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-2">Request & Response Analysis</h4>
                <span className="text-sm text-indigo-100 leading-relaxed">
                  View complete request headers, payloads, response data, and identify exactly what went wrong.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-2">Timeline Correlation</h4>
                <span className="text-sm text-indigo-100 leading-relaxed">
                  See exactly when network requests occurred in relation to user actions and bug manifestation.
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
