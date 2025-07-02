
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Video, Network, Settings, ArrowRight, Bug, Pen } from 'lucide-react';

const features = [
  {
    title: "Two Bug Reporting Modes:",
    description: "Choose from Image Bug or Video Bug to report issues effectively with comprehensive capture options.",
    icon: Camera
  },
  {
    title: "Mark Bugs in Videos",
    description: "Highlight specific timestamps in recorded videos to pinpoint issues quickly and provide precise context.",
    icon: Video
  },
  {
    title: "Automatic Network & API Recording:",
    description: "Capture all network requests, API calls, and failed requests. Identify which APIs fail, view response codes, and debug network issues effortlessly.",
    icon: Network
  },
  {
    title: "Advanced Annotation Tools:",
    description: "Add arrows, highlights, text boxes, and drawings to screenshots and videos for crystal-clear bug documentation.",
    icon: Pen
  },
  {
    title: "Network Tab Monitoring:",
    description: "Monitor all network activity including XHR requests, fetch calls, and WebSocket connections. See exactly which API endpoints are failing and why.",
    icon: Bug
  },
  {
    title: "Seamless Integrations:",
    description: "Sync bug reports directly with Jira, ClickUp, GitHub Issues, and other project management tools with all network data included.",
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
        <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Go beyond simple screenshots. Capture network activity, annotate issues, and provide developers with everything they need to fix bugs quickly.
        </p>
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
