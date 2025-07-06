
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield,
  Lock,
  Key,
  Database,
  Globe,
  FileCheck,
  Users,
  Activity
} from 'lucide-react';

const EnterpriseSecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level security standards with comprehensive protection across all data and communications.",
      features: ["End-to-end encryption", "SOC 2 Type II compliance", "Regular security audits", "Penetration testing"]
    },
    {
      icon: Key,
      title: "Single Sign-On (SSO)",
      description: "Seamless integration with your existing identity management systems and authentication workflows.",
      features: ["SAML 2.0 & OAuth 2.0", "Active Directory integration", "Multi-factor authentication", "Role-based access control"]
    },
    {
      icon: Database,
      title: "Data Protection & Privacy",
      description: "Complete data sovereignty with flexible hosting options and comprehensive privacy controls.",
      features: ["GDPR & CCPA compliant", "Data residency options", "Automatic data retention policies", "Right to deletion"]
    },
    {
      icon: Globe,
      title: "Custom Domain & Branding",
      description: "White-label solution with your domain, branding, and customized user experience.",
      features: ["Custom subdomain setup", "Brand customization", "White-label interface", "Custom email domains"]
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Sophisticated user management with granular permissions and organizational controls.",
      features: ["Role-based permissions", "Team hierarchies", "Bulk user provisioning", "Activity monitoring"]
    },
    {
      icon: Activity,
      title: "Audit & Compliance",
      description: "Comprehensive logging and reporting for compliance and security monitoring requirements.",
      features: ["Complete audit trails", "Compliance reporting", "Activity dashboards", "Export capabilities"]
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", icon: FileCheck },
    { name: "GDPR Compliant", icon: Shield },
    { name: "ISO 27001", icon: Lock },
    { name: "CCPA Ready", icon: Database }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-emerald-100 text-emerald-700 border-emerald-200">
            <Shield className="w-4 h-4 mr-2" />
            Enterprise Security & Compliance
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Built for Enterprise Security Standards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security, privacy, and compliance features designed for the most demanding enterprise requirements
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Lock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Security Certifications & Compliance
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <cert.icon className="w-10 h-10 text-white" />
                </div>
                <div className="font-semibold text-gray-900">{cert.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Regular third-party security assessments and compliance audits ensure the highest standards of data protection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSecuritySection;
