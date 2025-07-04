
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield,
  Building,
  Database,
  Network,
  Users,
  Settings,
  Briefcase,
  GraduationCap,
  Headphones,
  TrendingUp,
  CheckCircle,
  Award,
  Lock,
  FileText
} from 'lucide-react';

const EnterpriseSection = () => {
  const enterpriseFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Bank-grade security with comprehensive encryption, privacy compliance, and enterprise data protection.",
      features: ["Bank-Grade Security", "Privacy Compliant", "Data Encryption", "Multi-Factor Authentication"]
    },
    {
      icon: Building,
      title: "Custom Branding & Domains",
      description: "White-label solutions with custom domains, branded interfaces, and personalized user experiences.",
      features: ["Custom Domains (yourcompany.flonnect.com)", "White-Label Interface", "Custom Branding Assets", "Personalized Onboarding"]
    },
    {
      icon: Database,
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive insights into team productivity, video engagement metrics, and detailed usage analytics.",
      features: ["Team Performance Dashboards", "Video Engagement Analytics", "Usage & ROI Reports", "Custom KPI Tracking"]
    },
    {
      icon: Network,
      title: "Enterprise Integrations",
      description: "Seamlessly integrate with your existing enterprise tools and workflows for maximum productivity.",
      features: ["Salesforce Integration", "Microsoft 365 & Teams", "Google Workspace", "Slack & Asana"]
    },
    {
      icon: Users,
      title: "Advanced Team Management",
      description: "Sophisticated user management with role-based permissions, team hierarchies, and administrative controls.",
      features: ["Role-Based Access Control", "Team Hierarchies", "Bulk User Management", "Single Sign-On (SSO)"]
    },
    {
      icon: Settings,
      title: "Custom Workflow Automation",
      description: "Automate repetitive tasks with custom workflows, approval processes, and automated sharing protocols.",
      features: ["Custom Approval Workflows", "Automated Content Distribution", "Scheduled Publishing", "API Access & Webhooks"]
    }
  ];

  const enterpriseUseCases = [
    {
      icon: Briefcase,
      title: "Sales Enablement",
      description: "Empower sales teams with personalized video messages, product demos, and proposal presentations that close deals faster.",
      metrics: "73% faster deal closure",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: GraduationCap,
      title: "Employee Training & Onboarding",
      description: "Create comprehensive training programs with interactive video content that reduces onboarding time by 60%.",
      metrics: "60% faster onboarding",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Headphones,
      title: "Customer Success & Support",
      description: "Deliver exceptional customer experiences with visual support, product walkthroughs, and personalized assistance.",
      metrics: "45% reduction in support tickets",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Marketing & Communications",
      description: "Create compelling marketing content, internal communications, and brand messaging that drives engagement.",
      metrics: "3x higher engagement rates",
      color: "from-orange-500 to-red-600"
    }
  ];

  const enterpriseTestimonials = [
    {
      company: "StartupTalky",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      quote: "Flonnect transformed our content creation process. We've increased our video output by 300% while maintaining high quality across all our startup coverage.",
      author: "Ravi Sharma",
      position: "Content Head",
      results: ["300% more video content", "50% faster publishing", "Better audience engagement"]
    },
    {
      company: "CouponsWala",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop",
      quote: "Our deal presentation videos using Flonnect have boosted our conversion rates by 85%. Customers love the visual demonstrations of savings.",
      author: "Priya Patel",
      position: "Marketing Director",
      results: ["85% higher conversion", "60% more user engagement", "Improved deal clarity"]
    },
    {
      company: "ConsultValue", 
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop",
      quote: "Flonnect helped us create professional client presentations that showcase our consulting value. Our client acquisition rate improved by 120%.",
      author: "Amit Gupta",
      position: "Managing Partner",
      results: ["120% better client acquisition", "Professional presentations", "Streamlined proposals"]
    },
    {
      company: "AdSpyder",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop",
      quote: "Using Flonnect for our ad analysis demos has revolutionized how we present competitive intelligence to clients. 90% of prospects convert after seeing our video presentations.",
      author: "Neha Singh",
      position: "Product Manager",
      results: ["90% prospect conversion", "Better client understanding", "Professional ad analysis demos"]
    }
  ];

  const securityFeatures = [
    { feature: "Enterprise-Grade Security", description: "Bank-level security standards and protection" },
    { feature: "Privacy Compliance", description: "Full data privacy regulation compliance" },
    { feature: "Advanced Encryption", description: "Military-grade encryption for all data" },
    { feature: "Single Sign-On (SSO)", description: "Seamless integration with existing systems" },
    { feature: "Role-Based Access Control", description: "Granular permissions and access management" },
    { feature: "Audit Trails & Logging", description: "Comprehensive activity tracking and reporting" },
    { feature: "Data Residency Options", description: "Choose your data storage location" },
    { feature: "Regular Security Audits", description: "Third-party security testing and validation" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200">
            <Building className="w-4 h-4 mr-2" />
            Enterprise Grade Solutions
          </Badge>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Built for Enterprise Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade video solutions with advanced security, compliance, and management features 
            designed for organizations that demand the highest standards of performance and reliability.
          </p>
        </div>

        {/* Enterprise Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {enterpriseFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6 text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Enterprise Use Cases
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how leading enterprises are using Flonnect to drive measurable business results
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {enterpriseUseCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <useCase.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-emerald-100 text-emerald-700">
                        {useCase.metrics}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enterprise Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Enterprises
            </h3>
            <p className="text-xl text-gray-600">
              Real results from real enterprise customers
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {enterpriseTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.logo} 
                      alt={testimonial.company}
                      className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.company}</div>
                      <div className="text-sm text-gray-600">Enterprise Customer</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="mb-6">
                    <div className="grid grid-cols-1 gap-2">
                      {testimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm font-medium text-emerald-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Security & Compliance
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with security-first architecture and comprehensive compliance frameworks 
              to meet the most stringent enterprise requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((security, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Lock className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{security.feature}</div>
                  <div className="text-gray-600 text-sm">{security.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of enterprise customers who trust Flonnect for their video communication needs. 
            Get a personalized demo and see how we can scale with your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <Building className="w-5 h-5 mr-2" />
              Schedule Enterprise Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <FileText className="w-5 h-5 mr-2" />
              Download Enterprise Datasheet
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Custom pricing available • Dedicated success manager • 24/7 enterprise support
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
