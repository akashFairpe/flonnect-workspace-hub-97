
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Briefcase, 
  Users 
} from 'lucide-react';

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Product reviews and unboxing testimonials",
    examples: ["Product demonstrations", "Customer success stories", "Before/after showcases"],
    badge: "Popular",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Building2,
    title: "B2B Services",
    description: "Client case studies and business testimonials",
    examples: ["ROI demonstrations", "Implementation stories", "Partnership success"],
    badge: "Enterprise",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Student and course completion testimonials",
    examples: ["Course reviews", "Career transformations", "Learning outcomes"],
    badge: "Growing",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Wellness",
    description: "Patient stories and treatment testimonials",
    examples: ["Recovery journeys", "Treatment experiences", "Wellness transformations"],
    badge: "Trusted",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Client satisfaction and project testimonials",
    examples: ["Legal success stories", "Consulting results", "Financial planning wins"],
    badge: "Proven",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Non-profit & Community",
    description: "Impact stories and donor testimonials",
    examples: ["Community impact", "Volunteer experiences", "Donation outcomes"],
    badge: "Impactful",
    gradient: "from-teal-500 to-blue-500"
  }
];

export function TestimonialsUseCases() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Perfect for Every Industry
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From e-commerce to healthcare, capture authentic testimonials that resonate with your audience
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <div className={`p-3 bg-gradient-to-r ${useCase.gradient} rounded-lg text-white group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="w-6 h-6" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {useCase.badge}
                </Badge>
              </div>
              <CardTitle className="text-lg">{useCase.title}</CardTitle>
              <CardDescription className="text-gray-600">
                {useCase.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {useCase.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    {example}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
