
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
  Chrome
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
      color: "bg-blue-500"
    },
    {
      icon: VideoIcon,
      title: "Interactive Demos",
      description: "Create interactive demos to boost engagement and conversion.",
      link: "/interactive-demo-capture",
      color: "bg-purple-500"
    },
    {
      icon: MessageCircle,
      title: "Customer Testimonials",
      description: "Capture genuine customer testimonials effortlessly.",
      link: "/testimonials",
      color: "bg-green-500"
    },
    {
      icon: Bug,
      title: "Bug Reporting",
      description: "Efficiently report and track bugs with visual evidence.",
      link: "/bug-reporting",
      color: "bg-red-500"
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
      description: "Quickly install our extension or desktop application."
    },
    {
      step: "2", 
      title: "Record Seamlessly",
      description: "Capture videos from your screen, camera, or both."
    },
    {
      step: "3",
      title: "Edit with AI", 
      description: "Automatically transcribe, summarize, and edit your videos."
    },
    {
      step: "4",
      title: "Share Effortlessly",
      description: "Manage and share content securely with your team."
    }
  ];

  const useCases = [
    {
      icon: Target,
      title: "SaaS Product Onboarding",
      description: "Guide users through your software with interactive videos."
    },
    {
      icon: BarChart3,
      title: "Marketing Teams", 
      description: "Create compelling demo and testimonial videos."
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Resolve issues quickly through visual communication."
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Develop engaging tutorials and training modules."
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/30">
                🎉 Join 200K+ Users Worldwide
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Flonnect - Your Ultimate Video Solution
              </h1>
              <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Easily Record, Manage, Edit, and Share Videos for Teams and Enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-indigo-600 hover:bg-gray-100">
                  <Chrome className="w-5 h-5 mr-2" />
                  Get Started - Free Extension
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                  <Download className="w-5 h-5 mr-2" />
                  Download Desktop App
                </Button>
              </div>
              
              {/* Video Demo */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/63eb8b8f-6c42-4629-b52c-75fbbc737c6a.png" 
                    alt="Flonnect Demo Video"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="rounded-full w-16 h-16 bg-white text-indigo-600 hover:bg-gray-100"
                      onClick={() => setPlayingVideo(!playingVideo)}
                    >
                      <Play className="w-8 h-8" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Statistics */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Offered */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Solutions for Every Video Need
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive video tools designed for modern teams and businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="text-center pb-2">
                    <div className={`w-16 h-16 ${solution.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {solution.description}
                    </CardDescription>
                    <Link to={solution.link}>
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
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
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Built for Enterprises
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Scale your video operations with enterprise-grade features and security
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg">
                  <Building className="w-5 h-5 mr-2" />
                  Request Enterprise Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features and Workflow */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Simplify Your Video Workflow
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From recording to sharing - streamline every step of your video creation process
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg">
                  <Clock className="w-5 h-5 mr-2" />
                  Start Your Free Trial Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Flonnect Works for Everyone
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by teams across industries to create impactful video content
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <useCase.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Loved by Teams Worldwide
              </h2>
              <p className="text-xl text-gray-600">
                See what our users are saying about Flonnect
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
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
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Seamless Integrations & Security
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Flonnect integrates securely with Google Calendar, Microsoft Outlook, Salesforce, Slack, and many more, 
                complying fully with industry-standard security and privacy guidelines.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">Global Compliance</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700 font-medium">API Integrations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-purple-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Transform How Your Team Collaborates
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of users making video creation and management simpler and smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-purple-700 hover:bg-gray-100">
                <Users className="w-5 h-5 mr-2" />
                Sign Up for Free
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
