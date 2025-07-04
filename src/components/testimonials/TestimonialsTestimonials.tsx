
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

export function TestimonialsTestimonials() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
