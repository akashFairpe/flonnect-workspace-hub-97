import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bot, Users, Play, Calendar, Zap, Target } from 'lucide-react';

export default function AgentsPage() {
  React.useEffect(() => {
    document.title = 'AI Agents - Intelligent Automation for Meetings & Demos | Flonnect';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Discover Flonnect AI Agents: Meeting Agent for automated transcription and Demo Agent for interactive product walkthroughs. Boost productivity with intelligent automation.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Discover Flonnect AI Agents: Meeting Agent for automated transcription and Demo Agent for interactive product walkthroughs. Boost productivity with intelligent automation.';
      document.head.appendChild(newMetaDesc);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Flonnect AI Agents",
      "description": "Intelligent automation agents for meetings and product demos",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Meeting Agent with Auto-transcription",
        "Demo Agent with Automated Walkthroughs",
        "AI-Powered Summarization",
        "Calendar Integration",
        "Multi-format Export",
        "Real-time Analytics"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <Badge className="mb-4 sm:mb-6 bg-blue-100 text-blue-700 border-blue-200 text-xs sm:text-sm">
            AI Agents
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Intelligent Automation
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              for Modern Teams
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Meet Flonnect's AI Agents—your intelligent assistants that automate meeting documentation and create stunning product demos without human intervention.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Meeting Agent Card */}
          <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  Meeting Agent
                </Badge>
              </div>
              <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-2">
                Let the Bot Take Notes. You Focus on the Meeting.
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                AI-powered assistant that joins meetings, records, transcribes, and generates actionable summaries like minutes, tasks, and follow-ups automatically.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Bot className="w-4 h-4 text-green-600" />
                  <span>Auto-joins from Google Calendar</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Users className="w-4 h-4 text-green-600" />
                  <span>Silent observer mode</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Zap className="w-4 h-4 text-green-600" />
                  <span>AI-powered transcription & summaries</span>
                </div>
              </div>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.location.href = '/agents/meeting-agent'}
              >
                Learn More About Meeting Agent
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Demo Agent Card */}
          <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50"></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Play className="w-6 h-6 text-purple-600" />
                </div>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  Demo Agent
                </Badge>
              </div>
              <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-2">
                Auto-Generate Beautiful Product Demos
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Automated agent that explores your product, captures interactions, and creates fully connected walkthroughs with AI-powered voiceovers.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Target className="w-4 h-4 text-purple-600" />
                  <span>Auto-explores your dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Bot className="w-4 h-4 text-purple-600" />
                  <span>Puppeteer automation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Multi-format outputs</span>
                </div>
              </div>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.location.href = '/agents/demo-agent'}
              >
                Learn More About Demo Agent
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Flonnect AI Agents?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Zero Manual Work</h3>
              <p className="text-sm text-gray-600">Complete automation from start to finish</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <Bot className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Intelligence</h3>
              <p className="text-sm text-gray-600">Smart understanding of context and content</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Multi-Purpose Output</h3>
              <p className="text-sm text-gray-600">Videos, guides, and interactive content</p>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto prose prose-gray">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Transform Your Workflow with AI-Powered Automation
          </h2>
          <div className="text-gray-600 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Flonnect's AI Agents represent the future of workplace automation, designed specifically for modern teams who need to maximize productivity without sacrificing quality. Our intelligent agents work tirelessly in the background, handling time-consuming tasks that traditionally required manual intervention and human oversight.
            </p>
            <p>
              The Meeting Agent revolutionizes how organizations handle meeting documentation and follow-up processes. By automatically joining scheduled meetings through calendar integration, it ensures no important discussion goes undocumented. The agent's advanced transcription capabilities, powered by state-of-the-art AI technology, convert spoken conversations into structured, searchable, and actionable insights that drive business outcomes.
            </p>
            <p>
              Meanwhile, the Demo Agent transforms product marketing and customer onboarding by creating professional-grade demonstrations without requiring technical expertise or significant time investment. Using sophisticated web automation technology, it explores your application systematically, capturing every interaction and generating comprehensive walkthroughs that can be customized for different audiences and use cases.
            </p>
            <p>
              Both agents integrate seamlessly with popular business tools and platforms, ensuring your automated workflows fit naturally into existing processes. Whether you're a startup looking to scale efficiently or an enterprise seeking to standardize documentation practices, Flonnect's AI Agents provide the intelligent automation foundation your team needs to focus on high-value strategic work while maintaining comprehensive records of all critical activities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}