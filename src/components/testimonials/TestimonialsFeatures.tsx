
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, VideoIcon, Share2, Edit3 } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: "Screen Recording",
    description: "Let Customers Share Their Product Experiences with Screen Demos or Visuals"
  },
  {
    icon: VideoIcon,
    title: "High-Quality Video Output",
    description: "Ensure Crisp Video and Audio Quality for Professional Testimonials"
  },
  {
    icon: Share2,
    title: "Flexible Sharing Options",
    description: "Share Your Testimonial Videos via YouTube, Social Media, or Embed on Your Website"
  },
  {
    icon: Edit3,
    title: "Easy Editing",
    description: "Trim, Add Titles, and Polish Your Testimonial Videos for Maximum Impact"
  }
];

export function TestimonialsFeatures() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Capture Real-Time Customer Reactions and Experiences Seamlessly
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const FeatureIcon = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <FeatureIcon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
