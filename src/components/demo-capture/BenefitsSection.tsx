
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Clock, Target, Zap } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Boost User Engagement",
    description: "Interactive demos increase user engagement by 300% compared to static documentation",
    stat: "300%"
  },
  {
    icon: Clock,
    title: "Reduce Support Tickets",
    description: "Clear onboarding reduces customer support inquiries by up to 70%",
    stat: "70%"
  },
  {
    icon: Target,
    title: "Improve Conversion Rates",
    description: "Well-crafted demos can improve trial-to-paid conversion rates by 25%",
    stat: "25%"
  },
  {
    icon: Zap,
    title: "Faster User Adoption",
    description: "Users complete onboarding 5x faster with guided interactive demos",
    stat: "5x"
  }
];

export function BenefitsSection() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Why Interactive Demos Matter
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Transform your user onboarding with data-driven interactive experiences
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                {benefit.stat}
              </div>
              <CardTitle className="text-lg sm:text-xl text-gray-900">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm sm:text-base text-gray-600">
                {benefit.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
