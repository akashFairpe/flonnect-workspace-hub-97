
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield,
  Palette,
  Key,
  BarChart3,
  Users,
  Lock,
  Globe,
  Database,
  CheckCircle,
  Building2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterpriseBenefitsSection = () => {
  const enterpriseFeatures = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC 2, GDPR, and HIPAA compliance.",
      features: ["End-to-end encryption", "Data residency controls", "Audit logs", "Compliance reports"]
    },
    {
      icon: Palette,
      title: "Custom Branding & Domains",
      description: "White-label solutions with your brand identity and custom domains.",
      features: ["Custom branding", "White-label interface", "Custom domains", "Brand guidelines"]
    },
    {
      icon: Key,
      title: "SSO & Integrations",
      description: "Seamless integration with your existing enterprise tools and systems.",
      features: ["Single Sign-On", "Active Directory", "API integrations", "Webhook support"]
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Comprehensive analytics and reporting for enterprise visibility.",
      features: ["Usage analytics", "Performance metrics", "Custom dashboards", "Export capabilities"]
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Advanced user management with role-based access controls.",
      features: ["Role-based access", "Team hierarchies", "Bulk user management", "Permission controls"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" role="region" aria-label="Enterprise Benefits">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-100/20 to-purple-100/20 text-blue-200 border-blue-400/30 text-sm backdrop-blur-sm font-medium">
            <Building2 className="w-4 h-4 mr-2" />
            🏢 Enterprise Ready
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Built for 
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-1 sm:mt-2">
              Enterprise Scale
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Secure, scalable, and customizable solutions for organizations of all sizes.
          </p>
        </div>

        {/* Enterprise Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {enterpriseFeatures.map((feature, index) => (
            <Card key={index} className="border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:from-white/15 hover:to-white/10 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-white leading-tight font-bold">{feature.title}</CardTitle>
                <CardDescription className="text-sm text-gray-300 leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Highlights */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-8 sm:p-12 mb-12 backdrop-blur-sm border border-white/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Lock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">99.9% Uptime</h3>
              <p className="text-sm text-gray-300">Enterprise SLA guaranteed</p>
            </div>
            <div>
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Global CDN</h3>
              <p className="text-sm text-gray-300">Worldwide content delivery</p>
            </div>
            <div>
              <Database className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Data Sovereignty</h3>
              <p className="text-sm text-gray-300">Your data, your region</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-300">Dedicated success team</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/for-enterprise">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ring-2 ring-blue-400/30 hover:ring-blue-400/50"
            >
              <Building2 className="w-5 h-5 mr-2" />
              Explore Enterprise Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseBenefitsSection;
