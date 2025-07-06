
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Users,
  Shield,
  Zap
} from 'lucide-react';

const EnterpriseCTASection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Minimum 5 users",
      description: "Perfect for growing teams"
    },
    {
      icon: Shield,
      title: "Custom domain & branding", 
      description: "Your workspace, your brand"
    },
    {
      icon: Zap,
      title: "Dedicated support & onboarding",
      description: "White-glove implementation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <Card className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white border-0 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <CardContent className="relative p-12 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get Started with Flonnect Enterprise
            </h2>
            <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Transform how your team creates, collaborates, and communicates. 
              Join hundreds of enterprise customers who trust Flonnect for their video and documentation needs.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-white mb-2">{benefit.title}</div>
                  <div className="text-white/80 text-sm">{benefit.description}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </Button>
            </div>

            {/* Additional Benefits */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Flexible pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Cancel anytime</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm mb-4">
                Have questions? Our enterprise sales team is here to help.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                <a href="mailto:enterprise@flonnect.com" className="text-white hover:text-white/80 transition-colors">
                  enterprise@flonnect.com
                </a>
                <span className="text-white/40">•</span>
                <a href="tel:+1-555-0123" className="text-white hover:text-white/80 transition-colors">
                  +1 (555) 0123
                </a>
                <span className="text-white/40">•</span>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EnterpriseCTASection;
