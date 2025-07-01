
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Sparkles, Users, Target } from 'lucide-react';

const useCases = [
  {
    title: "SaaS Product Onboarding",
    description: "Guide new users through complex software features with step-by-step interactive demos",
    icon: Monitor
  },
  {
    title: "Feature Announcements",
    description: "Showcase new features and updates with engaging video demonstrations",
    icon: Sparkles
  },
  {
    title: "Training & Education",
    description: "Create comprehensive training materials for teams and customers",
    icon: Users
  },
  {
    title: "Sales Presentations",
    description: "Convert prospects with compelling product demonstrations",
    icon: Target
  }
];

export function UseCasesSection() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Perfect for Every Use Case
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          From product onboarding to sales presentations, create demos that drive results
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {useCases.map((useCase, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/30 group">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors w-fit">
                <useCase.icon className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg text-gray-900 mb-2">{useCase.title}</CardTitle>
              <CardDescription className="text-sm text-gray-600 leading-relaxed">
                {useCase.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
