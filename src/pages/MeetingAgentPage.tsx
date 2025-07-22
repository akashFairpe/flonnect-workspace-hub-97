import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, Calendar, Bot, Users, FileText, Share2, 
  Clock, CheckCircle, Zap, Download, Mail, MessageSquare 
} from 'lucide-react';

export default function MeetingAgentPage() {
  React.useEffect(() => {
    document.title = 'Meeting Agent - AI-Powered Meeting Assistant | Flonnect';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Flonnect Meeting Agent automatically joins meetings, records, transcribes, and generates actionable summaries. Perfect for sales teams, product management, and education.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Flonnect Meeting Agent automatically joins meetings, records, transcribes, and generates actionable summaries. Perfect for sales teams, product management, and education.';
      document.head.appendChild(newMetaDesc);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Flonnect Meeting Agent",
      "description": "AI-powered meeting assistant that joins meetings automatically and generates summaries",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Automatic meeting joining",
        "Real-time transcription",
        "AI-powered summarization", 
        "Calendar integration",
        "Multi-platform support",
        "Automated sharing"
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <Badge className="mb-4 sm:mb-6 bg-green-100 text-green-700 border-green-200 text-xs sm:text-sm">
            Meeting Agent
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Let the Bot Take Notes.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              You Focus on the Meeting.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Meet your AI-powered assistant that joins meetings for you—records, transcribes, and generates actionable summaries like minutes, tasks, and follow-ups. Whether it's a client demo, internal sync, or team standup, Flonnect's Meeting Agent turns every conversation into structured documentation.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg">
            Activate Meeting Agent
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
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <Badge className="bg-green-50 text-green-700 border-green-200">Step 1</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  Join Meetings Automatically
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Flonnect Meeting Agent syncs with your Google Calendar and joins scheduled meetings on time—no manual effort required. You can also provide direct meeting links (Zoom, Google Meet, Microsoft Teams) for ad-hoc calls.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Step 2 */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Bot className="w-6 h-6 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">Step 2</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  Silent Observer Mode
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  The bot joins as a silent participant—no interruptions, no video. Just pure transcription and intelligence in the background.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Step 3 */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200">Step 3</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  AI-Powered Transcription & Summarization
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Using real-time transcription, the agent listens to the entire meeting and auto-generates:
                </CardDescription>
                <CardContent className="pt-4 pl-0">
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Detailed Meeting Notes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Summarized Minutes of Meeting
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Key Highlights & Action Items
                    </li>
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>

            {/* Step 4 */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <Badge className="bg-orange-50 text-orange-700 border-orange-200">Step 4</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  Context-Aware Insights
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  If the meeting is tagged as a "Demo Call," the agent understands the context and generates product-specific summaries, demo steps covered, and client questions raised.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Step 5 */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <Share2 className="w-6 h-6 text-pink-600" />
                  </div>
                  <Badge className="bg-pink-50 text-pink-700 border-pink-200">Step 5</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  Post-Meeting Sync & Share
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  After the meeting ends, all notes, transcripts, and summaries are synced to your Flonnect dashboard. Export and share via Notion, Slack, Email, or download as PDF.
                </CardDescription>
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
                <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Sales Teams</CardTitle>
                <CardDescription className="text-sm">
                  Demo recap, next steps, and objections logged automatically.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Product Teams</CardTitle>
                <CardDescription className="text-sm">
                  Actionable tasks with ownership and follow-up items.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Support Teams</CardTitle>
                <CardDescription className="text-sm">
                  Client requests documented without distraction.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Education</CardTitle>
                <CardDescription className="text-sm">
                  Lecture summaries and transcripts for easy revision.
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
              <Calendar className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📅 Calendar Integration</h3>
                <p className="text-sm text-gray-600">Auto-joins meetings from Google Calendar</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border">
              <Bot className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🧠 AI Summarization</h3>
                <p className="text-sm text-gray-600">Converts long calls into digestible notes</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border">
              <FileText className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🗂️ Auto-Minutes Generator</h3>
                <p className="text-sm text-gray-600">Custom templates for internal or demo meetings</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border">
              <Clock className="w-6 h-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🔁 Transcription Archive</h3>
                <p className="text-sm text-gray-600">Easily searchable by keyword, date, or title</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border">
              <Share2 className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">✉️ Smart Sharing</h3>
                <p className="text-sm text-gray-600">Push to Slack, Notion, Email, or download</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Your Meetings, Documented Like Magic
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Don't just record meetings—understand, summarize, and act on them with Flonnect's Meeting Agent.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-3 text-base sm:text-lg">
            Start Free with Meeting Agent
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>

        {/* SEO Content Section */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto prose prose-gray">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Revolutionize Meeting Management with AI-Powered Automation
          </h2>
          <div className="text-gray-600 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              The Flonnect Meeting Agent represents a paradigm shift in how organizations approach meeting documentation and follow-up processes. By leveraging advanced artificial intelligence and seamless calendar integration, this powerful tool eliminates the traditional burden of manual note-taking while ensuring comprehensive capture of every important discussion point, decision, and action item.
            </p>
            <p>
              Our intelligent assistant operates with complete discretion, joining meetings as a silent observer that never interrupts the natural flow of conversation. The sophisticated transcription engine processes speech in real-time, understanding context, identifying speakers, and organizing content into structured, searchable formats that transform raw conversations into actionable business intelligence.
            </p>
            <p>
              What sets the Meeting Agent apart is its contextual awareness and customizable output formats. Whether you're conducting sales demos, product planning sessions, customer support calls, or educational lectures, the AI adapts its summarization approach to match the meeting type and purpose. This ensures that demo calls generate product-focused insights, while strategy sessions produce tactical action items with clear ownership assignments.
            </p>
            <p>
              The post-meeting workflow automation extends the value proposition beyond simple documentation. Automatic integration with popular productivity platforms like Slack, Notion, and email systems ensures that meeting outcomes are immediately available to relevant stakeholders, while PDF export options provide formal documentation for compliance and archival purposes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}