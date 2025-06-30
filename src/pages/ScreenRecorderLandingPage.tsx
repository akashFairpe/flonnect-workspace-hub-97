
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Users, Share2, MessageCircle, BarChart3, Video, Mic, Eye, Globe, Shield, Chrome, Monitor, Smartphone, CheckCircle, Star, Zap, Clock, Camera, Edit, Maximize, Settings, Upload, FileText, Award, TrendingUp, Target, Layers, BookOpen, Headphones, MousePointer, Paintbrush } from 'lucide-react';
import { Header } from '@/components/Header';
import FAQ from '@/components/FAQ';

const ScreenRecorderLandingPage = () => {
  const features = [
    {
      icon: Video,
      title: "Screen & Audio Recording",
      description: "Capture your screen with crystal-clear quality and system audio. Perfect for creating professional demo videos.",
      color: "bg-blue-500"
    },
    {
      icon: Mic,
      title: "AI-Enabled Voiceover",
      description: "Make Your Demos More Informative. Add Voiceover to It Using Our Speech AI.",
      color: "bg-green-500"
    },
    {
      icon: BarChart3,
      title: "Track And Assess",
      description: "Track How Viewers Are Going Through Your Demo and Points of Drop-Off, With Google Analytics Integration.",
      color: "bg-purple-500"
    },
    {
      icon: Share2,
      title: "Express Sharing Options",
      description: "Share Demos as PDFs or Embed Videos. Export Directly to YouTube. The Options Are Endless.",
      color: "bg-orange-500"
    }
  ];

  const advancedFeatures = [
    {
      icon: Maximize,
      title: "Full Screen Capture",
      description: "Record entire desktop, specific windows, or browser tabs with precision",
      color: "bg-indigo-500"
    },
    {
      icon: Camera,
      title: "Webcam Integration",
      description: "Add personal touch with picture-in-picture webcam recording",
      color: "bg-pink-500"
    },
    {
      icon: Edit,
      title: "Built-in Editor",
      description: "Trim, cut, and enhance your recordings without external tools",
      color: "bg-teal-500"
    },
    {
      icon: Settings,
      title: "Custom Settings",
      description: "Adjust frame rates, quality, and audio settings for optimal results",
      color: "bg-red-500"
    },
    {
      icon: Upload,
      title: "Cloud Storage",
      description: "Automatically save recordings to cloud with unlimited storage",
      color: "bg-yellow-500"
    },
    {
      icon: FileText,
      title: "Auto Transcription",
      description: "Generate automatic transcripts and captions for accessibility",
      color: "bg-cyan-500"
    }
  ];

  const workspaceFeatures = [
    {
      icon: Users,
      title: "Create Workspace and Invite Team Members",
      description: "Easy Collaboration for your entire team"
    },
    {
      icon: MessageCircle,
      title: "Add Video Comments",
      description: "Skip the Long Text Chains and Emails"
    },
    {
      icon: Shield,
      title: "Control Access Securely",
      description: "Control Who Can Watch Your Videos and Manage Access"
    }
  ];

  const platforms = [
    {
      icon: Chrome,
      title: "Chrome Extension",
      description: "Quick and easy browser-based recording",
      cta: "Add to Chrome"
    },
    {
      icon: Monitor,
      title: "Windows Desktop",
      description: "Full-featured desktop application",
      cta: "Download for Windows"
    },
    {
      icon: Smartphone,
      title: "Mac Desktop",
      description: "Native macOS application",
      cta: "Download for Mac"
    }
  ];

  const useCases = [
    {
      icon: Target,
      title: "Product Demos",
      description: "Showcase your software features with interactive walkthroughs",
      benefits: ["Increase conversion rates", "Reduce support tickets", "Onboard customers faster"]
    },
    {
      icon: BookOpen,
      title: "Training Videos",
      description: "Create comprehensive training materials for employees and customers",
      benefits: ["Standardize training", "Scale education", "Track completion"]
    },
    {
      icon: Award,
      title: "Sales Presentations",
      description: "Deliver compelling sales pitches that close more deals",
      benefits: ["Personalized demos", "Reusable content", "Performance tracking"]
    },
    {
      icon: TrendingUp,
      title: "Marketing Content",
      description: "Generate engaging content for social media and campaigns",
      benefits: ["Viral potential", "Brand awareness", "Lead generation"]
    }
  ];

  const integrations = [
    { name: "YouTube", logo: "📺", description: "Direct upload to YouTube" },
    { name: "Google Drive", logo: "💾", description: "Cloud storage integration" },
    { name: "Slack", logo: "💬", description: "Share in team channels" },
    { name: "Notion", logo: "📝", description: "Embed in documentation" },
    { name: "HubSpot", logo: "🎯", description: "CRM integration" },
    { name: "Salesforce", logo: "☁️", description: "Sales workflow integration" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "Flonnect has revolutionized how we create product demos. Our conversion rates increased by 40% after implementing interactive demos.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Mike Chen",
      role: "Sales Director at StartupXYZ",
      content: "The AI voiceover feature saves us hours of recording time. We can create personalized demos at scale.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Lead at GrowthCo",
      content: "Analytics integration helps us understand exactly where prospects drop off. Game-changer for optimization.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["5 recordings/month", "Basic editing", "720p quality", "Community support"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      features: ["Unlimited recordings", "Advanced editing", "4K quality", "AI voiceover", "Analytics", "Priority support"],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Team",
      price: "$49",
      period: "per month",
      features: ["Everything in Pro", "Team collaboration", "Brand customization", "Advanced analytics", "API access", "Dedicated support"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="text-center max-w-5xl mx-auto">
              <Badge className="mb-4 sm:mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2">
                🎬 Professional Screen Recording
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Create, Manage and Share
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                  Demo Videos for your Products
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                Demo Videos Need Not Be Boring. Create Beautiful Demo Videos for Your Customers with Flonnect Screen Recorder.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Chrome className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Add to Chrome
                </Button>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                  <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Start Free Trial
                </Button>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg inline-block mx-4">
                <p className="text-base sm:text-lg font-semibold text-gray-900">
                  Quality Demo Videos lead to <span className="text-blue-600">69%</span> of consumers buying your products
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Options */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Recording Platform
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Get started with our browser extension or download our powerful desktop apps
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {platforms.map((platform, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <platform.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl">{platform.title}</CardTitle>
                    <CardDescription className="text-base">{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant={index === 0 ? "default" : "outline"}>
                      <Download className="w-4 h-4 mr-2" />
                      {platform.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need for Professional Demo Videos
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful features that make demo creation simple, engaging, and effective
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="text-center pb-2">
                    <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Chrome className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Advanced Recording Capabilities
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Professional-grade tools for creating exceptional screen recordings and demo videos
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {advancedFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Perfect for Every Business Need
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                From product demos to training videos, discover how screen recording can transform your business
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <useCase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Integration Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Manage your Demo Videos with Google Analytics Integration
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
                Still Guessing About What Part of The Demo Is Causing Drop-Offs? With Google Analytics Integration, Track Viewer Activity on Your Demo Videos with Ease.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-2xl p-6 sm:p-8 relative">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Track Engagement</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Monitor viewer behavior and interaction patterns</p>
                  </div>
                  <div className="text-center">
                    <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Identify Drop-offs</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Pinpoint exactly where viewers lose interest</p>
                  </div>
                  <div className="text-center sm:col-span-2 lg:col-span-1">
                    <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Optimize Performance</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Make data-driven improvements to your demos</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Learn More About Analytics
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Thousands of Companies
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                See how businesses like yours are using Flonnect to create amazing demo videos
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Seamless Integrations
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with your favorite tools and streamline your workflow
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-2">{integration.logo}</div>
                    <h3 className="font-semibold text-sm mb-1">{integration.name}</h3>
                    <p className="text-xs text-gray-500">{integration.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the plan that fits your needs. Upgrade or downgrade at any time.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {plan.price}
                      <span className="text-sm font-normal text-gray-500">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Streamline Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Streamline your Demo Videos. Create, Manage, and Share
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Flonnect Screen Recorder Is Specifically Built for Your Demo Making Needs. Edit And Manage Your Recorded Videos in Your Workspace.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {workspaceFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                <Users className="w-5 h-5 mr-2" />
                Start Team Collaboration
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Teams Love Flonnect. Still on the Fence? Let Us Prove It.
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Flonnect simplifies the way you create, manage, and share demo videos for your products. Whether you're showcasing a feature, onboarding new clients, or driving sales, Flonnect empowers you to deliver impactful experiences that convert viewers into loyal customers. Start your journey today with a free trial and explore how Flonnect can elevate your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6">
              <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Chrome className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Add to Chrome
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Start Free Trial
              </Button>
            </div>
            <p className="text-xs sm:text-sm opacity-75">
              No credit card required • Free forever plan • Professional quality demos
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScreenRecorderLandingPage;
