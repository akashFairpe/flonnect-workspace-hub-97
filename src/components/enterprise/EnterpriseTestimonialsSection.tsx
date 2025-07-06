
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Quote,
  Star,
  Building,
  TrendingUp,
  Clock,
  Users
} from 'lucide-react';

const EnterpriseTestimonialsSection = () => {
  const testimonials = [
    {
      quote: "With Flonnect Enterprise, our product demos, support bug reports, and onboarding videos got 3x faster to produce — and AI handles the boring bits!",
      author: "Sarah Chen",
      position: "VP of Product",
      company: "TechFlow Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      metrics: ["3x faster production", "50% less manual work", "90% team adoption"],
      industry: "SaaS"
    },
    {
      quote: "Flonnect transformed our customer support process. Screen recordings with AI-generated summaries have reduced our ticket resolution time by 60%.",
      author: "Michael Rodriguez",
      position: "Head of Customer Success", 
      company: "DataVision Corp",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop",
      metrics: ["60% faster resolution", "40% fewer escalations", "95% customer satisfaction"],
      industry: "Enterprise Software"
    },
    {
      quote: "The meeting recording and AI minutes feature alone saves our team 10 hours per week. It's like having a personal assistant for every meeting.",
      author: "Emily Watson",
      position: "Operations Director",
      company: "InnovateTech",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop",
      metrics: ["10 hours saved weekly", "100% meeting coverage", "Zero missed action items"],
      industry: "Technology Consulting"
    },
    {
      quote: "Our sales team uses Flonnect for personalized demo videos. Since implementing it, our conversion rate increased by 85% and deal cycles shortened significantly.",
      author: "James Park",
      position: "Sales Director",
      company: "CloudScale Systems",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop",
      metrics: ["85% higher conversion", "30% shorter sales cycles", "200% more demos created"],
      industry: "Cloud Infrastructure"
    }
  ];

  const stats = [
    {
      icon: Building,
      number: "500+",
      label: "Enterprise Customers",
      description: "Leading companies trust Flonnect"
    },
    {
      icon: Users,
      number: "50K+",
      label: "Active Users",
      description: "Professionals using Flonnect daily"
    },
    {
      icon: Clock,
      number: "10M+",
      label: "Hours Saved",
      description: "Time saved through AI automation"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Customer Satisfaction",
      description: "Enterprise customer happiness rate"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-emerald-100 text-emerald-700 border-emerald-200">
            <Quote className="w-4 h-4 mr-2" />
            Customer Success Stories
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how enterprise teams are transforming their workflows with Flonnect
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-gray-500">{testimonial.company} • {testimonial.industry}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  {testimonial.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-medium text-emerald-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseTestimonialsSection;
