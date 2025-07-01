
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Video, CheckCircle, ArrowRight } from 'lucide-react';

const guideModeFeatures = [
  "Create Guides: Use Flonnect Screenshots to Walk Users Through Each Step",
  "Edit and Add Text: Customize Instructions to Ensure Clarity",
  "Share: Share as PDF, Video, or Embed Directly on Your Site"
];

const demoModeFeatures = [
  "Create Interactive Onboarding - Record and Edit Videos with Flonnect Screen Recorder",
  "Voiceover Integration - Add Voice Narration for Enhanced Engagement",
  "Embed On Your Website - Let Users Interact with the Video Directly on Your Platform"
];

export function ModesSection() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Two Powerful Modes for Every Need
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Choose the perfect format for your onboarding content
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Guide Mode */}
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-200 rounded-lg">
                <FileText className="w-6 h-6 text-blue-700" />
              </div>
              <CardTitle className="text-xl sm:text-2xl text-blue-800">
                Guide Mode – Easy Onboarding Videos
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {guideModeFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
            <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
              Try Guide Mode
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Demo Mode */}
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-200 rounded-lg">
                <Video className="w-6 h-6 text-green-700" />
              </div>
              <CardTitle className="text-xl sm:text-2xl text-green-800">
                Demo Mode – Interactive Tutorials for Deeper Learning
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {demoModeFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
            <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
              Try Demo Mode
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
