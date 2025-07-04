import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Download, 
  Users, 
  Share2, 
  MessageCircle, 
  Heart, 
  Trophy, 
  Youtube, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Monitor,
  VideoIcon,
  Edit3,
  Bug,
  Building,
  Zap,
  Shield,
  Target,
  Headphones,
  GraduationCap,
  BarChart3,
  Clock,
  Globe,
  Chrome,
  Sparkles,
  MousePointer,
  Camera,
  Lock,
  Database,
  Network,
  Settings,
  FileText,
  TrendingUp,
  Award,
  Briefcase
} from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [playingVideo, setPlayingVideo] = useState(false);

  const stats = [
    { number: "25M+", label: "Videos Created" },
    { number: "200K+", label: "Active Users Worldwide" },
    { number: "170+", label: "Countries Served" },
    { number: "4.9/5", label: "User Rating" }
  ];

  const mainExtensions = [
    {
      icon: Camera,
      title: "Video Recording Extension", 
      description: "Record high-quality videos from your screen, webcam, or both with professional editing features.",
      features: ["Screen & Camera Recording", "AI-Powered Editing", "Professional Voiceovers", "Instant Sharing"],
      link: "/screenrecorder",
      color: "from-blue-500 to-indigo-600",
      ctaText: "Get Video Recorder"
    },
    {
      icon: MousePointer,
      title: "Step Recording Guide Maker",
      description: "Create interactive step-by-step guides and demos with automatic screenshot capture and annotations.",
      features: ["Interactive Guides", "Auto Screenshots", "Step-by-Step Flows", "Demo Mode"],
      link: "/interactive-demo-capture", 
      color: "from-purple-500 to-pink-600",
      ctaText: "Get Guide Maker"
    }
  ];

  const solutions = [
    {
      icon: Monitor,
      title: "Screen Recorder",
      description: "Record high-quality videos directly from your screen and webcam.",
      link: "/screenrecorder",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: VideoIcon,
      title: "Interactive Demos",
      description: "Create interactive demos to boost engagement and conversion.",
      link: "/interactive-demo-capture",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: MessageCircle,
      title: "Customer Testimonials",
      description: "Capture genuine customer testimonials effortlessly.",
      link: "/testimonials",
      color: "from-emerald-400 to-emerald-500"
    },
    {
      icon: Bug,
      title: "Bug Reporting",
      description: "Efficiently report and track bugs with visual evidence.",
      link: "/bug-reporting",
      color: "from-orange-400 to-orange-500"
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "SOC 2 Type II certified with end-to-end encryption, GDPR compliance, and enterprise-grade data protection.",
      features: ["SOC 2 Type II Certified", "GDPR & CCPA Compliant", "End-to-End Encryption", "Multi-Factor Authentication"]
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
      company: "Fortune 500 Tech Company",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      quote: "Flonnect transformed our global training program. We've reduced onboarding time by 60% while improving knowledge retention across 15,000+ employees.",
      author: "Jennifer Walsh",
      position: "VP of People Operations",
      results: ["60% faster onboarding", "15,000+ employees trained", "40% better retention rates"]
    },
    {
      company: "Leading Financial Services",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop",
      quote: "Our sales team's conversion rate increased by 73% after implementing Flonnect for personalized client presentations and product demos.",
      author: "Michael Rodriguez",
      position: "Head of Sales Operations",
      results: ["73% higher conversion", "$2.3M additional revenue", "50% shorter sales cycle"]
    },
    {
      company: "Global Healthcare Provider",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop",
      quote: "Flonnect's compliance features and security standards make it perfect for our healthcare environment. We've streamlined patient education and staff training.",
      author: "Dr. Sarah Chen",
      position: "Chief Medical Officer",
      results: ["HIPAA compliant", "80% staff adoption", "30% better patient outcomes"]
    }
  ];

  const securityFeatures = [
    { feature: "SOC 2 Type II Certification", description: "Rigorous security and availability standards" },
    { feature: "GDPR & CCPA Compliance", description: "Full data privacy regulation compliance" },
    { feature: "End-to-End Encryption", description: "256-bit AES encryption for all data" },
    { feature: "Single Sign-On (SSO)", description: "SAML 2.0 and OAuth 2.0 support" },
    { feature: "Role-Based Access Control", description: "Granular permissions and access management" },
    { feature: "Audit Trails & Logging", description: "Comprehensive activity tracking and reporting" },
    { feature: "Data Residency Options", description: "Choose your data storage location" },
    { feature: "Regular Security Audits", description: "Third-party penetration testing and audits" }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Install Easily",
      description: "Quickly install our extension or desktop application.",
      color: "from-blue-400 to-blue-500"
    },
    {
      step: "2", 
      title: "Record Seamlessly",
      description: "Capture videos from your screen, camera, or both.",
      color: "from-purple-400 to-purple-500"
    },
    {
      step: "3",
      title: "Edit with AI", 
      description: "Automatically transcribe, summarize, and edit your videos.",
      color: "from-pink-400 to-pink-500"
    },
    {
      step: "4",
      title: "Share Effortlessly",
      description: "Manage and share content securely with your team.",
      color: "from-emerald-400 to-emerald-500"
    }
  ];

  const useCases = [
    {
      icon: Target,
      title: "SaaS Product Onboarding",
      description: "Guide users through your software with interactive videos.",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Marketing Teams", 
      description: "Create compelling demo and testimonial videos.",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Resolve issues quickly through visual communication.",
      color: "from-emerald-400 to-emerald-500"
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Develop engaging tutorials and training modules.",
      color: "from-orange-400 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Flonnect transformed our product demos. Our conversion rate increased by 40% after implementing interactive video tutorials.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "The AI-powered editing features save us hours every week. Our team can now focus on strategy instead of video production.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Customer Success Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Customer testimonial collection has never been easier. Our clients love how simple it is to record and share their experiences.",
      rating: 5
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-purple-100"></div>
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="relative container mx-auto px-6 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200">
                <Sparkles className="w-4 h-4 mr-2" />
                Join 200K+ Users Worldwide
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
                Two Powerful Extensions for 
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Every Video Need
                </span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Professional Video Recording & Interactive Step-by-Step Guide Creation
              </p>
              
              {/* Main Extensions Showcase */}
              <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
                {mainExtensions.map((extension, index) => (
                  <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group bg-white/90 backdrop-blur-sm">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-20 h-20 bg-gradient-to-r ${extension.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                        <extension.icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-3">{extension.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-6">
                        {extension.description}
                      </CardDescription>
                      <ul className="text-sm space-y-2 mb-6">
                        {extension.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center justify-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <Link to={extension.link}>
                        <Button size="lg" className={`bg-gradient-to-r ${extension.color} hover:scale-105 transition-all duration-300 text-white px-6 py-3 w-full`}>
                          <Chrome className="w-5 h-5 mr-2" />
                          {extension.ctaText}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Statistics */}
        <section className="py-16 bg-white shadow-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Offered */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                Complete Video Solution Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From recording to sharing - everything you need for professional video content
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {solution.description}
                    </CardDescription>
                    <Link to={solution.link}>
                      <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">
                        Explore {solution.title} →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Enterprise Solutions */}
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
              <div className="grid lg:grid-cols-3 gap-8">
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

        {/* Features and Workflow */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                Simplify Your Video Workflow
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From recording to sharing - streamline every step of your video creation process
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button size="lg" variant="outline" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Clock className="w-5 h-5 mr-2" />
                  Start Your Free Trial Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                Flonnect Works for Everyone
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by teams across industries to create impactful video content
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group border-0">
                  <CardHeader className="text-center">
                    <div className={`w-14 h-14 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <useCase.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                Loved by Teams Worldwide
              </h2>
              <p className="text-xl text-gray-600">
                See what our users are saying about Flonnect
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-indigo-100"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations & Security */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
                Seamless Integrations & Security
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Flonnect integrates securely with Google Calendar, Microsoft Outlook, Salesforce, Slack, and many more, 
                complying fully with industry-standard security and privacy guidelines.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Shield className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-700 font-semibold">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-semibold">Global Compliance</span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-50 to-orange-50 px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Zap className="w-6 h-6 text-yellow-600" />
                  <span className="text-gray-700 font-semibold">API Integrations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-purple-100"></div>
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="relative container mx-auto px-6 text-center text-gray-900">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Transform How Your Team Collaborates
            </h2>
            <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users making video creation and management simpler and smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                <Users className="w-5 h-5 mr-2" />
                Sign Up for Free
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-indigo-300 text-indigo-600 hover:bg-indigo-50">
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm mt-6 text-gray-600">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
