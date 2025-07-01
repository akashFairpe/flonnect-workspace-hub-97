
import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  MousePointer, 
  Mic, 
  BarChart3, 
  Share2, 
  Users, 
  MessageSquare, 
  Shield, 
  FileText, 
  Video, 
  Globe, 
  Chrome, 
  Monitor, 
  Palette, 
  Brain,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Target,
  Clock,
  TrendingUp,
  Sparkles,
  Lock,
  Download
} from 'lucide-react';

export default function InteractiveDemoCapturePage() {
  React.useEffect(() => {
    document.title = 'Interactive Demo Capture - Create Seamless Software Onboarding | Flonnect';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Create engaging interactive demos and onboarding videos with Flonnect. Increase retention rates by up to 50% with professional voiceovers, analytics, and seamless sharing options.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Create engaging interactive demos and onboarding videos with Flonnect. Increase retention rates by up to 50% with professional voiceovers, analytics, and seamless sharing options.';
      document.head.appendChild(newMetaDesc);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Flonnect Interactive Demo Capture",
      "description": "Create engaging interactive demos and onboarding videos with professional features",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser, Windows, Mac",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive Demo Creation",
        "AI-Powered Voiceover",
        "Google Analytics Integration",
        "Multi-format Export",
        "Team Collaboration",
        "Brand Customization"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const features = [
    {
      icon: MousePointer,
      title: "Interactive Format",
      description: "Choose Guide Mode for Simple Walkthroughs or Demo Mode for Immersive Onboarding Experiences.",
      action: "Read More →"
    },
    {
      icon: Mic,
      title: "AI-Enabled Voiceover",
      description: "Add Professional Voiceovers to Make Your Onboarding Clearer and More Informative",
      action: "Read More →"
    },
    {
      icon: BarChart3,
      title: "Track And Assess",
      description: "Monitor User Progress and Identify Drop-Off Points with Google Analytics Integration",
      action: "Read More →"
    },
    {
      icon: Share2,
      title: "Express Sharing Options",
      description: "Easily Share Onboarding Videos as PDFs, Embed on Your Site, or Export to YouTube. Flexibility at Your Fingertips",
      action: "Read More →"
    }
  ];

  const workspaceFeatures = [
    {
      icon: Users,
      title: "Create Workspace and Invite Team Members for Easy Collaboration"
    },
    {
      icon: MessageSquare,
      title: "Add Video Comments and Skip the Long Text Chains and Emails"
    },
    {
      icon: Shield,
      title: "Manage Who Can View Your Videos for Secure Sharing"
    }
  ];

  const guideModeFeatures = [
    "Create Guides: Use Flonnect Screenshots to Walk Users Through Each Step",
    "Edit and Add Text: Customize Instructions to Ensure Clarity",
    "Share: Share as PDF, Video, or Embed Directly on Your Site"
  ];

  const demoModeFeatures = [
    "Create Interactive Onboarding - Record and Edit Videos with Flonnect Screen Recorder",
    "Voiceover Integration - Add Voice Narration for Enhanced Engagement",
    "Embed On Your Website - Let Users Interact with the Video Directly on Your Platform"
  ];

  const additionalFeatures = [
    { icon: FileText, title: "Screenshot & Interactive HTML Demo Guide", description: "Support for both static screenshots and interactive HTML demos" },
    { icon: Globe, title: "Easy Embedding", description: "Seamlessly embed demos into your website or platform" },
    { icon: BarChart3, title: "Analytics Integration", description: "Track engagement and user behavior with detailed analytics" },
    { icon: Share2, title: "Demo Hub Creation", description: "Create centralized demo hubs and share with ease" },
    { icon: MousePointer, title: "Advanced Editing Tools", description: "Easy edit steps with annotation, blur, and other features" },
    { icon: Monitor, title: "Multi-Platform Support", description: "Available with extension and desktop. HTML demos via extension only" },
    { icon: Mic, title: "Voiceover Options", description: "Add professional voiceovers to enhance your demos" },
    { icon: Brain, title: "AI Title Generation", description: "Automatically generate compelling titles for your demos" },
    { icon: Palette, title: "Brand Customization", description: "Customize colors to closely mimic your target website branding" },
    { icon: Brain, title: "AI Step Descriptions", description: "Generate intelligent descriptions for each demo step automatically" }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost User Engagement",
      description: "Interactive demos increase user engagement by 300% compared to static documentation",
      stat: "300%"
    },
    {
      icon: Clock,
      title: "Reduce Support Tickets",
      description: "Clear onboarding reduces customer support inquiries by up to 70%",
      stat: "70%"
    },
    {
      icon: Target,
      title: "Improve Conversion Rates",
      description: "Well-crafted demos can improve trial-to-paid conversion rates by 25%",
      stat: "25%"
    },
    {
      icon: Zap,
      title: "Faster User Adoption",
      description: "Users complete onboarding 5x faster with guided interactive demos",
      stat: "5x"
    }
  ];

  const useCases = [
    {
      title: "SaaS Product Onboarding",
      description: "Guide new users through complex software features with step-by-step interactive demos",
      icon: Monitor
    },
    {
      title: "Feature Announcements",
      description: "Showcase new features and updates with engaging video demonstrations",
      icon: Sparkles
    },
    {
      title: "Training & Education",
      description: "Create comprehensive training materials for teams and customers",
      icon: Users
    },
    {
      title: "Sales Presentations",
      description: "Convert prospects with compelling product demonstrations",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 max-w-5xl mx-auto">
          <Badge className="mb-4 sm:mb-6 bg-purple-100 text-purple-700 border-purple-200 text-xs sm:text-sm">
            Interactive Demo Capture
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Create Seamless Onboarding<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              for your Software
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Onboarding Made Simple. Create Engaging Videos to Guide Your Users Through Your Software with Flonnect Screen Recorder.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 mb-8 sm:mb-10 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <p className="text-green-800 font-semibold text-sm sm:text-base">
                Proven Results
              </p>
            </div>
            <p className="text-green-700 text-sm sm:text-base">
              Retention rates increased by up to 50% with effective onboarding.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
              Start Creating Demos
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
              Watch Demo
              <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Interactive Demos Matter
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your user onboarding with data-driven interactive experiences
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                    {benefit.stat}
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Powerful Features for Every Need
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to create professional interactive demos and onboarding experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-gray-900">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 h-auto justify-start font-medium">
                    {feature.action}
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Perfect for Every Use Case
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              From product onboarding to sales presentations, create demos that drive results
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/30 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors w-fit">
                    <useCase.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Analytics Section */}
        <section className="mb-16 sm:mb-20">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-800 font-medium text-sm">Analytics & Insights</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Manage your Onboarding Videos with Google Analytics Integration
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Unsure Where Users Get Stuck? With Google Analytics Integration, Track Viewer Engagement with Your Onboarding Videos for Improved User Experience.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-2">Real-time</div>
                    <div className="text-sm text-gray-600">User Tracking</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-2">Detailed</div>
                    <div className="text-sm text-gray-600">Drop-off Analysis</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-2">Actionable</div>
                    <div className="text-sm text-gray-600">Insights & Reports</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Workspace Management */}
        <section className="mb-16 sm:mb-20">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                  <Users className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm">Team Collaboration</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Streamline your Onboarding Videos. Create, Manage, and Share
                </h2>
                <p className="text-purple-100 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
                  Flonnect Step Recorder is Designed for Efficient Onboarding Video Creation. Edit and Manage Videos in Your Workspace.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {workspaceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <feature.icon className="w-8 h-8 text-purple-200 flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-white leading-relaxed">{feature.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mode Sections */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Two Powerful Modes for Every Need
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect format for your onboarding content
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Guide Mode */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-200 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-blue-800">
                    Guide Mode – Easy Onboarding Videos
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {guideModeFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                  Try Guide Mode
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Demo Mode */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-200 rounded-lg">
                    <Video className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-green-800">
                    Demo Mode – Interactive Tutorials for Deeper Learning
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {demoModeFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                  Try Demo Mode
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Complete Feature Set for Professional Demos
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced tools and capabilities to create world-class interactive demos
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm group">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Product Tour CTA */}
        <section className="text-center mb-16 sm:mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
              Ready to Transform Your Onboarding?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              See how Flonnect can revolutionize your user experience
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
              Take A Product Tour
              <Play className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        {/* Final CTA Section */}
        <section>
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-300" />
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl text-white mb-6 leading-tight">
                Teams Love Flonnect. Still on the Fence? Let Us Prove It.
              </CardTitle>
              <CardDescription className="text-purple-100 text-base sm:text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
                Flonnect simplifies the way you create, manage, and share demo videos for your products. Whether you're showcasing a feature, onboarding new clients, or driving sales, Flonnect empowers you to deliver impactful experiences that convert viewers into loyal customers. Start your journey today with a free trial and explore how Flonnect can elevate your business.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg w-full sm:w-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
              </div>
              <div className="mt-8 text-sm text-purple-200">
                No credit card required • Free forever plan available
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
