
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles,
  Users,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react';

const FinalCTASection = () => {
  const benefits = [
    "No credit card required",
    "Cancel anytime", 
    "Free forever plan available",
    "Setup in under 2 minutes"
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative">
        <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border-purple-400/30 text-sm px-4 py-2 backdrop-blur-sm font-medium">
          <Zap className="w-4 h-4 mr-2" />
          ⚡ Limited Time: Early Access to All AI Features
        </Badge>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
          Start Creating with
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-2">
            Flonnect AI — Free Trial for Teams
          </span>
        </h2>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Join 200K+ creators who've revolutionized their content workflow with AI-powered video tools.
        </p>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Users className="w-5 h-5 text-purple-400" />
          <span className="text-purple-200 text-sm font-medium">200K+ active users</span>
          <span className="text-gray-400">•</span>
          <span className="text-purple-200 text-sm font-medium">25M+ videos created</span>
          <span className="text-gray-400">•</span>
          <span className="text-purple-200 text-sm font-medium">4.9/5 rating</span>
        </div>

        {/* Main CTA */}
        <div className="mb-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 border-0 ring-2 ring-purple-400/30 hover:ring-purple-400/50"
          >
            <Sparkles className="w-6 h-6 mr-3" />
            Start Creating with Flonnect AI
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Secondary Info */}
        <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Experience the future of content creation with our comprehensive AI suite. 
          From screen recording to text-to-video generation — everything you need in one powerful platform.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
