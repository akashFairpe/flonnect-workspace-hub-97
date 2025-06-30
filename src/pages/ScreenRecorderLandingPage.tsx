
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Users, Share2, MessageCircle, BarChart3, FileText, Video, Mic, Eye, Globe, Shield, Edit, Chrome } from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/Header';

const ScreenRecorderLandingPage = () => {
  const [activeFeature, setActiveFeature] = useState('guide');

  const features = [
    {
      icon: Play,
      title: "Interactive Format",
      description: "Choose From Guide Mode for Quick Sharing, Or Demo Mode for More Interactive Walkthroughs.",
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

  const guideSteps = [
    {
      step: 1,
      title: "Create Guide Using Screenshots",
      description: "Taken from Flonnect",
      icon: FileText
    },
    {
      step: 2,
      title: "Edit And Add Text",
      description: "In Your Demo Guide",
      icon: Edit
    },
    {
      step: 3,
      title: "Share Multiple Ways",
      description: "As PDF, Video, or Embed onto Your Website",
      icon: Share2
    }
  ];

  const demoSteps = [
    {
      step: 1,
      title: "Create Demo",
      description: "For your product with Flonnect Screen Recorder",
      icon: Video
    },
    {
      step: 2,
      title: "Edit and Add Voiceover",
      description: "For user engagement",
      icon: Mic
    },
    {
      step: 3,
      title: "Embed onto Website",
      description: "And let the magic unfold",
      icon: Globe
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-6 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 text-lg px-4 py-2">
                🎬 Professional Demo Video Creation
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Create, Manage and Share
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                  Demo Videos for your Products
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Demo Videos Need Not Be Boring. Create Beautiful Demo Videos for Your Customers with Flonnect Screen Recorder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Chrome className="w-5 h-5 mr-2" />
                  Add to Chrome
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
                <p className="text-lg font-semibold text-gray-900">
                  Quality Demo Videos lead to <span className="text-blue-600">69%</span> of consumers buying your products
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Everything You Need for Professional Demo Videos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful features that make demo creation simple, engaging, and effective
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="text-center pb-2">
                    <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Integration Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Manage your Demo Videos with Google Analytics Integration
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Still Guessing About What Part of The Demo Is Causing Drop-Offs? With Google Analytics Integration, Track Viewer Activity on Your Demo Videos with Ease.
              </p>
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Track Engagement</h3>
                    <p className="text-gray-600">Monitor viewer behavior and interaction patterns</p>
                  </div>
                  <div className="text-center">
                    <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Identify Drop-offs</h3>
                    <p className="text-gray-600">Pinpoint exactly where viewers lose interest</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Optimize Performance</h3>
                    <p className="text-gray-600">Make data-driven improvements to your demos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Streamline Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Streamline your Demo Videos. Create, Manage, and Share
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flonnect Step Recorder Is Specifically Built for Your Demo Making Needs. Edit And Manage Your Recorded Videos in Your Workspace.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {workspaceFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mode Selection Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-lg">
                  <Button
                    variant={activeFeature === 'guide' ? 'default' : 'ghost'}
                    onClick={() => setActiveFeature('guide')}
                    className="px-6 py-2"
                  >
                    Guide Mode
                  </Button>
                  <Button
                    variant={activeFeature === 'demo' ? 'default' : 'ghost'}
                    onClick={() => setActiveFeature('demo')}
                    className="px-6 py-2"
                  >
                    Demo Mode
                  </Button>
                </div>
              </div>
            </div>

            {activeFeature === 'guide' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Guide Mode – Quick and Easy to Share</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {guideSteps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                        {step.step}
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeFeature === 'demo' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Demo Mode – For an Interactive Experience</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {demoSteps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-purple-600" />
                      </div>
                      <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                        {step.step}
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Teams Love Flonnect. Still on the Fence? Let Us Prove It.
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Flonnect simplifies the way you create, manage, and share demo videos for your products. Whether you're showcasing a feature, onboarding new clients, or driving sales, Flonnect empowers you to deliver impactful experiences that convert viewers into loyal customers. Start your journey today with a free trial and explore how Flonnect can elevate your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Chrome className="w-5 h-5 mr-2" />
                Add to Chrome
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              No credit card required • Free forever plan • Professional quality demos
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScreenRecorderLandingPage;
