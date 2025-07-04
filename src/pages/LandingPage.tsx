
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
  Sparkles
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
    "Customized Domains (e.g., yourcompany.flonnect.com)",
    "Secure Workspaces for Teams",
    "Advanced Analytics & User Engagement Tracking",
    "Integration with Enterprise Tools (Google, Microsoft, Salesforce)"
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
                Flonnect - Your Ultimate 
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Video Solution
                </span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Easily Record, Manage, Edit, and Share Videos for Teams and Enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="text-lg px-8 py-6 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Chrome className="w-5 h-5 mr-2" />
                  Get Started - Free Extension
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                  <Download className="w-5 h-5 mr-2" />
                  Download Desktop App
                </Button>
              </div>
              
              {/* Video Demo */}
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/63eb8b8f-6c42-4629-b52c-75fbbc737c6a.png" 
                    alt="Flonnect Demo Video"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-sm">
                    <Button 
                      size="lg" 
                      className="rounded-full w-20 h-20 bg-white text-indigo-600 hover:bg-gray-100 shadow-xl hover:scale-110 transition-all duration-300"
                      onClick={() => setPlayingVideo(!playingVideo)}
                    >
                      <Play className="w-10 h-10" />
                    </Button>
                  </div>
                </div>
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
                Solutions for Every Video Need
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive video tools designed for modern teams and businesses
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

        {/* Enterprise Solutions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                Built for Enterprises
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Scale your video operations with enterprise-grade features and security
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Building className="w-5 h-5 mr-2" />
                  Request Enterprise Demo
                </Button>
              </div>
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
