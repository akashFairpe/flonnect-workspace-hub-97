
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: "A Mannan",
    rating: 5,
    text: "Best screen recorder extension"
  },
  {
    name: "Okwulu Abu",
    rating: 5,
    text: "It was a first time use and I am very impressed, easy to use, no lagging, and clear sound. It's a 10/10 for me."
  },
  {
    name: "Kenny Habuwiwe",
    rating: 5,
    text: "I regret not finding this tool earlier. I had trouble recording an important online meeting, tried different ways, and ended up with Flonnect. It saved my day, and I would confidently recommend it to everyone."
  }
];

export function BugReportingTestimonials() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <span className="font-medium text-sm">{testimonial.name}</span>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
