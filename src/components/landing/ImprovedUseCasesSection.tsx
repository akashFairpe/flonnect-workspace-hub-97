
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target,
  TrendingUp,
  Clock,
  Users,
  Star
} from 'lucide-react';

const ImprovedUseCasesSection = () => {
  const useCases = [
    {
      icon: Target,
      title: "Sales & Product Demos",
      description: "Convert prospects with compelling interactive demos.",
      metric: "69% faster deal closure",
      color: "from-blue-400 to-blue-500",
      testimonial: {
        quote: "Our conversion rate increased 40% after implementing Flonnect demos.",
        author: "Sarah Johnson, TechCorp"
      }
    },
    {
      icon: TrendingUp,
      title: "Customer Onboarding", 
      description: "Reduce time-to-value with guided video tutorials.",
      metric: "50% faster onboarding",
      color: "from-purple-400 to-purple-500",
      testimonial: {
        quote: "Customer support tickets dropped 60% with our new video guides.",
        author: "Mike Chen, StartupXYZ"
      }
    },
    {
      icon: Clock,
      title: "Training & Education",
      description: "Scale knowledge sharing across your organization.",
      metric: "75% reduction in training time",
      color: "from-emerald-400 to-emerald-500",
      testimonial: {
        quote: "We train new hires 3x faster with interactive video content.",
        author: "Emily Rodriguez, GrowthCo"
      }
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Streamline feedback and communication workflows.",
      metric: "85% faster feedback cycles",
      color: "from-orange-400 to-orange-500",
      testimonial: {
        quote: "Video feedback eliminates endless email chains completely.",
        author: "David Kim, EduTech"
      }
    }
  ];

  const trustedLogos = [
    { name: "TechCorp", logo: "🏢" },
    { name: "StartupXYZ", logo: "🚀" },
    { name: "GrowthCo", logo: "📈" },
    { name: "EduTech", logo: "🎓" },
    { name: "FinanceFlow", logo: "💼" },
    { name: "HealthFirst", logo: "🏥" },
    { name: "RetailMax", logo: "🛍️" },
    { name: "DevTools", logo: "⚡" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" role="region" aria-label="Use Cases and Results">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Proven Results Across Industries
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            See how teams use Flonnect to drive measurable business outcomes
          </p>
        </div>
        
        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group border-0 h-full">
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${useCase.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <useCase.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg leading-tight mb-2">{useCase.title}</CardTitle>
                <Badge className={`bg-gradient-to-r ${useCase.color} text-white border-0 text-xs font-semibold mb-3`}>
                  {useCase.metric}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">{useCase.description}</p>
                
                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-l-blue-500">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 italic mb-2">"{useCase.testimonial.quote}"</p>
                  <p className="text-xs text-gray-500 font-medium">— {useCase.testimonial.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-6">Trusted by 200K+ users at companies like:</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {trustedLogos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-lg">{logo.logo}</span>
                <span className="text-sm font-medium text-gray-700">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovedUseCasesSection;
