import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, Play, Bot, Users, FileText, Share2, 
  Mouse, Camera, Volume2, BarChart, Globe, Code 
} from 'lucide-react';

export default function DemoAgentPage() {
  React.useEffect(() => {
    document.title = 'Demo Agent - Automated Product Demo Generator | Flonnect';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Flonnect Demo Agent automatically generates beautiful product demos using Puppeteer automation. Create interactive walkthroughs, guides, and videos without manual effort.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Flonnect Demo Agent automatically generates beautiful product demos using Puppeteer automation. Create interactive walkthroughs, guides, and videos without manual effort.';
      document.head.appendChild(newMetaDesc);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Flonnect Demo Agent",
      "description": "Automated product demo generator with Puppeteer automation and AI voiceover",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Automated dashboard exploration",
        "Puppeteer-powered automation",
        "AI voiceover generation",
        "Multi-format output",
        "Interactive walkthrough creation",
        "Analytics integration"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <Badge className="mb-4 sm:mb-6 bg-purple-100 text-purple-700 border-purple-200 text-xs sm:text-sm">
            Demo Agent
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Auto-Generate Beautiful
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Product Demos
            </span>
            <br />
            Without Lifting a Finger
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            The Flonnect Demo Agent acts like a user, clicking through your dashboard and generating fully connected walkthroughs. Powered by Puppeteer and AI, it captures each step, annotates them, and produces a cohesive guide or video.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg">
            Launch Demo Agent
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>

        {/* How It Works Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            How It Works
          </h2>
          <div className="grid gap-6 sm:gap-8">
            {/* Step 1 */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">Step 1</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  Auto-Explore Your Dashboard
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Feed the Demo Agent a list of URLs, or let it crawl your product on its own. It mimics user interactions—clicking buttons, switching tabs, and filling fields.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Step 2 */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Camera className="w-6 h-6 text-green-600" />
                  </div>
                  <Badge className="bg-green-50 text-green-700 border-green-200">Step 2</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  Step-by-Step Capture
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  For every action it takes, the agent captures a high-quality screenshot, records screen interaction, and notes the context.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Step 3 */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Bot className="w-6 h-6 text-purple-600" />
                  </div>
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200">Step 3</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  Content-Aware Structuring
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  It identifies sections, page flows, and interaction logic to automatically group steps into a meaningful demo structure.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Step 4 */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Volume2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <Badge className="bg-orange-50 text-orange-700 border-orange-200">Step 4</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  AI-Powered Voiceover (Optional)
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Convert your demo into a video with automated voiceovers, captions, and highlights. Customize voice tone, pace, and language.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Step 5 */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <FileText className="w-6 h-6 text-pink-600" />
                  </div>
                  <Badge className="bg-pink-50 text-pink-700 border-pink-200">Step 5</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  Multi-Format Outputs
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  Generate multiple output formats to suit different needs:
                </CardDescription>
                <CardContent className="pt-0 pl-0">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                      <Play className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium">🎬 Demo Mode: Interactive video walkthrough</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium">🧾 Guide Mode: Clean documentation in HTML, PDF, or Markdown</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                      <Code className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium">🌐 Embeddable Code: Plug your demos into your website or app</span>
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Perfect For Every Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Product Teams</CardTitle>
                <CardDescription className="text-sm">
                  Automate updates to product walkthroughs after every sprint
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-pink-100 rounded-full w-fit mx-auto mb-4">
                  <Share2 className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-lg">Marketing Teams</CardTitle>
                <CardDescription className="text-sm">
                  Launch demo microsites instantly without designers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Customer Support</CardTitle>
                <CardDescription className="text-sm">
                  Provide guided help inside the product itself
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Onboarding Teams</CardTitle>
                <CardDescription className="text-sm">
                  Deliver self-serve walkthroughs for new users
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border">
              <Bot className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🧭 Puppeteer Automation</h3>
                <p className="text-sm text-gray-600">Simulates real users to explore your app</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border">
              <Mouse className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🪄 Auto-Linking Across Pages</h3>
                <p className="text-sm text-gray-600">No need to stitch screen recordings manually</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border">
              <Volume2 className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📢 TTS Voice Narration</h3>
                <p className="text-sm text-gray-600">Add voiceover without a mic</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border">
              <Camera className="w-6 h-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🔍 Smart Annotations</h3>
                <p className="text-sm text-gray-600">Tooltips, click indicators, highlights, and scroll tracking</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border">
              <BarChart className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📊 Performance Tracking</h3>
                <p className="text-sm text-gray-600">Google Analytics integration for engagement analysis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Turn Your Product into a Tour—Automatically
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Let Flonnect's Demo Agent build interactive, intelligent walkthroughs—so your users always know where to click next.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 text-base sm:text-lg">
            Try the Demo Agent
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>

        {/* SEO Content Section */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto prose prose-gray">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Transform Product Marketing with Automated Demo Generation
          </h2>
          <div className="text-gray-600 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              The Flonnect Demo Agent revolutionizes how software companies create product demonstrations and user onboarding experiences. By combining cutting-edge Puppeteer automation technology with sophisticated AI-powered content generation, this innovative tool eliminates the traditional time and resource constraints associated with creating high-quality product demos.
            </p>
            <p>
              Unlike conventional screen recording tools that require manual setup and post-production editing, the Demo Agent operates autonomously, intelligently navigating through your application to discover features, capture interactions, and document user workflows. This automated approach ensures comprehensive coverage of your product's capabilities while maintaining consistency across all generated content.
            </p>
            <p>
              The system's advanced content-aware structuring capabilities enable it to understand the logical flow of your application, automatically organizing captured steps into coherent narratives that make sense to end users. Whether creating interactive video walkthroughs for marketing purposes, comprehensive documentation for customer support, or embeddable guides for in-app onboarding, the Demo Agent adapts its output format to match your specific requirements.
            </p>
            <p>
              Integration with modern analytics platforms provides valuable insights into user engagement with generated demos, enabling continuous optimization of onboarding experiences. The combination of automated generation, multi-format output options, and performance tracking creates a comprehensive solution for organizations seeking to scale their product education efforts without proportional increases in manual effort or production costs.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}