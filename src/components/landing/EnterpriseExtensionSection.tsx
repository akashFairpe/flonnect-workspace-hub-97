
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Chrome,
  Sparkles,
  Shield,
  Users,
  Zap,
  Building2,
  Bell,
  CheckCircle
} from 'lucide-react';

const EnterpriseExtensionSection = () => {
  const enterpriseFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced encryption, SSO integration, and compliance controls"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Centralized user management, role-based permissions, and analytics"
    },
    {
      icon: Zap,
      title: "Advanced Automation",
      description: "AI-powered workflows, bulk operations, and custom integrations"
    },
    {
      icon: Building2,
      title: "White-Label Options",
      description: "Custom branding, domain management, and enterprise deployment"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 border-yellow-400/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Coming Soon
          </Badge>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Flonnect for Enterprise
            <span className="block text-2xl sm:text-3xl font-normal text-blue-200 mt-4">
              The Ultimate Chrome Extension
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            All your favorite Flonnect features combined into one powerful enterprise-grade Chrome extension, 
            plus exclusive tools designed for large organizations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Chrome className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-3xl text-white mb-4">
                Everything You Need in One Extension
              </CardTitle>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Seamlessly switch between video recording, step-by-step guide creation, 
                bug reporting, and enterprise management tools - all from one unified interface.
              </p>
            </CardHeader>
            
            <CardContent className="px-8 pb-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-blue-100 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  What's Included in Enterprise Edition
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Professional Video Recording & Editing",
                    "Interactive Step-by-Step Guide Builder",
                    "Advanced Bug Reporting & Tracking",
                    "Enterprise-Grade Security & Compliance",
                    "Team Collaboration & Workspace Management",
                    "Custom Branding & White-Label Options",
                    "Advanced Analytics & Reporting",
                    "Priority Support & Custom Training"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl">
              <Bell className="w-5 h-5 mr-2" />
              Get Notified When Available
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 bg-transparent">
              <Building2 className="w-5 h-5 mr-2" />
              Schedule Enterprise Demo
            </Button>
          </div>
          <p className="text-sm text-blue-200">
            Early access for enterprise customers • Priority onboarding • Custom implementation support
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseExtensionSection;
