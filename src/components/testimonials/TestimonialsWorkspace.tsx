
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageSquare, Shield } from 'lucide-react';

const workspaceFeatures = [
  {
    icon: Users,
    title: "Webcam and Screen Recording Combo: Capture Both Faces and Screens for Engaging Testimonial Narratives"
  },
  {
    icon: MessageSquare,
    title: "Edit Easily: Use Flonnect's Editor to Make Quick Touch-Ups or Add Captions"
  },
  {
    icon: Shield,
    title: "Collaborate with Team Members: Share Access with Your Marketing Team for Faster Video Approvals"
  }
];

export function TestimonialsWorkspace() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Manage your Testimonial Videos with Flonnect Workspaces
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
          Unsure Where Users Get Stuck? Organize and Edit Your Customer Testimonial Videos in One Place. Create a Workspace, Invite Your Team, and Keep All Your Testimonial Content in Sync.
        </p>
      </div>
      
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl mb-12">
        <CardContent className="p-8 sm:p-12">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Streamline your Testimonial Videos. Create, Manage, and Share
            </h3>
            <p className="text-purple-100 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
              Flonnect Makes It Easy to Record and Manage Your Testimonial Videos from Start to Finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {workspaceFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <feature.icon className="w-8 h-8 text-purple-200 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-white leading-relaxed">{feature.title}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
