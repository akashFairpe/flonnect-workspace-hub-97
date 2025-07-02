
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Video, Network, Settings, ArrowRight } from 'lucide-react';

const features = [
  {
    title: "Two Bug Reporting Modes:",
    description: "Choose from Image Bug or Video Bug to report issues effectively.",
    icon: Camera
  },
  {
    title: "Mark Bugs in Videos",
    description: "Highlight specific timestamps in recorded videos to pinpoint issues quickly.",
    icon: Video
  },
  {
    title: "Automatic Network & API Recording:",
    description: "Capture all network requests and API calls for seamless debugging.",
    icon: Network
  },
  {
    title: "Seamless Integrations:",
    description: "Sync bug reports directly with Jira, ClickUp, and other project management tools.",
    icon: Settings
  }
];

export function BugReportingFeatures() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Identify, Report, and Fix Bugs Faster Than Ever
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const FeatureIcon = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 rounded-lg flex-shrink-0">
                    <FeatureIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <Button variant="link" className="text-red-600 hover:text-red-700 p-0">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
