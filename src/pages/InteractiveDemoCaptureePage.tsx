
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
  Star
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
            Interactive Demo Capture
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Create Seamless Onboarding<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              for your Software
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-6">
            Onboarding Made Simple. Create Engaging Videos to Guide Your Users Through Your Software with Flonnect Screen Recorder.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 max-w-md mx-auto">
            <p className="text-green-800 font-medium">
              Retention rates increased by up to 50% with effective onboarding.
            </p>
          </div>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
            Start Creating Demos
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600 mb-4">
                  {feature.description}
                </CardDescription>
                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 p-0 h-auto justify-start">
                  {feature.action}
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Manage your Onboarding Videos with Google Analytics Integration
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Unsure Where Users Get Stuck? With Google Analytics Integration, Track Viewer Engagement with Your Onboarding Videos for Improved User Experience.
            </p>
          </div>
        </div>

        {/* Workspace Management */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Streamline your Onboarding Videos. Create, Manage, and Share
            </h2>
            <p className="text-purple-100 max-w-3xl mx-auto">
              Flonnect Step Recorder is Designed for Efficient Onboarding Video Creation. Edit and Manage Videos in Your Workspace.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workspaceFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <feature.icon className="w-8 h-8 text-purple-200 flex-shrink-0" />
                <span className="text-sm">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mode Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Guide Mode */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <FileText className="w-6 h-6" />
                Guide Mode – Easy Onboarding Videos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {guideModeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Demo Mode */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Video className="w-6 h-6" />
                Demo Mode – Interactive Tutorials for Deeper Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {demoModeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Complete Feature Set for Professional Demos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <feature.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-sm font-medium">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-xs text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Tour CTA */}
        <div className="text-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
            Take A Product Tour
          </Button>
        </div>

        {/* Final CTA Section */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-300" />
              <CardTitle className="text-2xl sm:text-3xl text-white">
                Teams Love Flonnect. Still on the Fence? Let Us Prove It.
              </CardTitle>
            </div>
            <CardDescription className="text-purple-100 text-base">
              Flonnect simplifies the way you create, manage, and share demo videos for your products. Whether you're showcasing a feature, onboarding new clients, or driving sales, Flonnect empowers you to deliver impactful experiences that convert viewers into loyal customers. Start your journey today with a free trial and explore how Flonnect can elevate your business.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
