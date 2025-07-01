
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MousePointer, Mic, BarChart3, Share2 } from 'lucide-react';

const features = [
  {
    icon: MousePointer,
    title: "Interactive Format",
    description: "Choose Guide Mode for Simple Walkthroughs or Demo Mode for Immersive Onboarding Experiences.",
    action: "Read More →"
  },
  {
    icon: Mic,
    title: "AI-Enabled Voiceover",
    description: "Add Professional Voiceovers to Make Your Onboarding Clearer and More Informative",
    action: "Read More →"
  },
  {
    icon: BarChart3,
    title: "Basic Tracking",
    description: "Track Basic User Engagement with Your Step-by-Step Guides and Demos",
    action: "Read More →"
  },
  {
    icon: Share2,
    title: "Express Sharing Options",
    description: "Easily Share Onboarding Videos as PDFs, Embed on Your Site, or Export to YouTube. Flexibility at Your Fingertips",
    action: "Read More →"
  }
];

export function FeaturesSection() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Powerful Features for Every Need
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Everything you need to create professional interactive demos and onboarding experiences
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900">{feature.title}</CardTitle>
              </div>
              <CardDescription className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </CardDescription>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 h-auto justify-start font-medium">
                {feature.action}
              </Button>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
