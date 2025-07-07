
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Zap, 
  Heart, 
  Target, 
  Globe, 
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "Build Trust Instantly",
    description: "Authentic video testimonials create immediate credibility and trust with potential customers",
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  {
    icon: Zap,
    title: "Boost Conversions",
    description: "Video testimonials can increase conversion rates by up to 80% compared to text reviews",
    color: "text-purple-600",
    bg: "bg-purple-100"
  },
  {
    icon: Heart,
    title: "Emotional Connection",
    description: "Real faces and voices create emotional bonds that drive purchasing decisions",
    color: "text-pink-600",
    bg: "bg-pink-100"
  },
  {
    icon: Target,
    title: "Targeted Messaging",
    description: "Address specific objections and showcase relevant use cases for different audiences",
    color: "text-green-600",
    bg: "bg-green-100"
  },
  {
    icon: Globe,
    title: "Multi-Platform Sharing",
    description: "Use testimonials across websites, social media, email campaigns, and presentations",
    color: "text-cyan-600",
    bg: "bg-cyan-100"
  },
  {
    icon: TrendingUp,
    title: "SEO Benefits",
    description: "Video content improves search rankings and increases time spent on your website",
    color: "text-indigo-600",
    bg: "bg-indigo-100"
  },
  {
    icon: Clock,
    title: "Quick Production",
    description: "Record, edit, and share testimonials in minutes with our streamlined workflow",
    color: "text-orange-600",
    bg: "bg-orange-100"
  },
  {
    icon: CheckCircle,
    title: "Professional Quality",
    description: "High-definition video and crystal-clear audio ensure professional presentation",
    color: "text-emerald-600",
    bg: "bg-emerald-100"
  }
];

export function TestimonialsBenefits() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
          Key Benefits
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Transform Your Marketing with Video Testimonials
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how authentic customer stories can revolutionize your business growth
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow text-center group">
            <CardContent className="p-6">
              <div className={`w-12 h-12 ${benefit.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
