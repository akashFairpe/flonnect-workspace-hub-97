
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageSquare, Shield } from 'lucide-react';

const workspaceFeatures = [
  {
    icon: Users,
    title: "Create Workspace and Invite Team Members for Easy Collaboration"
  },
  {
    icon: MessageSquare,
    title: "Add Video Comments and Skip the Long Text Chains and Emails"
  },
  {
    icon: Shield,
    title: "Manage Who Can View Your Videos for Secure Sharing"
  }
];

export function WorkspaceSection() {
  return (
    <section className="mb-16 sm:mb-20">
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
        <CardContent className="p-8 sm:p-12">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">Team Collaboration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Streamline your Onboarding Videos. Create, Manage, and Share
            </h2>
            <p className="text-purple-100 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
              Flonnect Step Recorder is Designed for Efficient Onboarding Video Creation. Edit and Manage Videos in Your Workspace.
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
