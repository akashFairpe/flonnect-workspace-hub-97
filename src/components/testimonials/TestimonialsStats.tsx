
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Play, Star } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    number: "157%",
    label: "Increase in Website Traffic",
    description: "Video testimonials boost engagement"
  },
  {
    icon: Users,
    number: "92%",
    label: "Customer Trust Rate",
    description: "People trust video testimonials more"
  },
  {
    icon: Play,
    number: "5x",
    label: "Higher Conversion",
    description: "Video content converts better"
  },
  {
    icon: Star,
    number: "4.8/5",
    label: "Average Rating",
    description: "Customer satisfaction score"
  }
];

export function TestimonialsStats() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Why Video Testimonials Work
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Data-driven results that prove the power of authentic customer stories
        </p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <stat.icon className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-600">
                {stat.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
