
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Video, CheckCircle, Play } from 'lucide-react';

export function BugReportingModes() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Track and Manage Bugs with Ease
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Stop wasting time with vague bug reports. Use Flonnect Bug Reporting to capture detailed images and videos, automatically log network requests, and integrate with tools you already use.
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
                <span className="text-gray-700">Capture precise screenshots of the issue.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Add visual highlights and annotations for clarity.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Share directly with your team for quick resolution.</span>
              </div>
            </div>
            
            <div className="bg-white/60 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Automatic Network & API Tracking – Debugging Made Easy</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>View detailed logs alongside bug reports for better debugging.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Eliminate guesswork by providing all the technical data developers need.</span>
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
                <span className="text-gray-700">Record video bugs with the ability to mark key timestamps.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Highlight where the issue occurs during playback.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Provide developers with clear context for faster fixes.</span>
              </div>
            </div>
            
            <div className="bg-white/60 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Seamless Integrations – Work Smarter, Not Harder</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Sync directly with Jira and ClickUp to track bugs in one place.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Streamline bug reporting without disrupting your existing processes.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Keep your team aligned and productive.</span>
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
    </section>
  );
}
