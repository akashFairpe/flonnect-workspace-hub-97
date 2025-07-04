
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube, Globe, Share2, CheckCircle } from 'lucide-react';

const sharingFeatures = [
  {
    icon: Youtube,
    title: "Export to YouTube",
    description: "Publish Directly to Your YouTube Channel in One Click"
  },
  {
    icon: Globe,
    title: "Embed on Your Website",
    description: "Showcase Testimonials Directly on Your Landing Pages"
  },
  {
    icon: Share2,
    title: "Social Media Sharing",
    description: "Post on Facebook, Instagram, and LinkedIn to Amplify Customer Stories"
  }
];

export function TestimonialsSharing() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Share Anywhere – From YouTube to Your Website
          </h2>
          <div className="space-y-4 mb-8">
            {sharingFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">{feature.title}:</p>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Share Testimonials with a Personal Touch – Across All Platforms
              </h3>
              <div className="space-y-4 mb-6">
                {sharingFeatures.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <FeatureIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{feature.title}:</p>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                Take A Product Tour
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
