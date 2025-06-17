
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, TrendingUp, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForMarketing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Creating Promotional & Social Media Content",
      description: "Record high-quality promotional videos for marketing campaigns. Create Instagram Reels, TikTok videos, LinkedIn posts, and YouTube ads using screen recordings. Add annotations, highlights, and effects to make videos engaging and interactive. Capture website walkthroughs to showcase landing pages and digital products.",
      example: "A social media manager records a screen capture of a new product website, adds voiceover, and posts it as an Instagram Reel to drive engagement.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Recording Product Demos & Walkthroughs",
      description: "Create step-by-step product demo videos for potential customers. Useful for SaaS companies to explain software features and UI navigation. Helps sales teams showcase how a product works during client pitches. Supports video tutorials for onboarding new users.",
      example: "A SaaS marketing team records a walkthrough of their latest software update, highlighting new features and sharing it with customers.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Creating Explainer Videos & Customer Education Content",
      description: "Record animated or interactive explainer videos to simplify complex topics. Helps educate potential buyers on how a product/service works. Can include voiceovers, subtitles, and visual elements to make videos more engaging. Ideal for website landing pages, YouTube channels, and blog content.",
      example: "A content marketer creates an explainer video on 'How AI-Powered Marketing Works' and uploads it to YouTube to generate inbound leads.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Recording & Analyzing Marketing Campaigns",
      description: "Record live campaign performance from analytics dashboards (Google Analytics, Facebook Ads, etc.). Document A/B testing results and website heatmaps for team discussions. Record social media trends and competitor analysis for future reference. Helps with team collaboration by sharing insights through recorded videos.",
      example: "A digital marketing team records their Facebook Ads dashboard, showing ad performance and discussing optimizations in a team meeting.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Collaborating with Teams & Stakeholders",
      description: "Record marketing strategy discussions for internal documentation. Capture client presentations and marketing proposals for later review. Record brainstorming sessions and team meetings for reference. Helps remote teams stay aligned on projects and campaign updates.",
      example: "A marketing manager records a strategy session discussing Q2 content planning and shares it with the remote team for alignment.",
      icon: TrendingUp,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How can screen recording improve our marketing ROI?",
      answer: "Screen recordings create more engaging content that converts better than static images or text. Video content receives 1200% more shares than text and images combined, and product demo videos can increase conversions by up to 80%."
    },
    {
      question: "What's the best way to create compelling product demos?",
      answer: "Focus on showing real customer problems and how your product solves them. Keep demos short (2-3 minutes), highlight key benefits, and include clear calls-to-action. Our software includes templates and annotations to make demos more engaging."
    },
    {
      question: "Can I track the performance of my marketing videos?",
      answer: "Yes! We provide detailed analytics on video views, engagement rates, and click-through rates. You can also integrate with Google Analytics and marketing automation platforms to track conversions from video content."
    },
    {
      question: "How do I optimize videos for different marketing channels?",
      answer: "Our software includes channel-specific templates and export settings for YouTube, LinkedIn, Instagram, Facebook, and more. Each platform has different optimal video lengths and formats, which we handle automatically."
    },
    {
      question: "Can I create personalized video content at scale?",
      answer: "Absolutely! Use our bulk recording features and dynamic text overlays to create personalized videos for different customer segments, industries, or use cases. This is perfect for account-based marketing campaigns."
    },
    {
      question: "What tools integrate with your marketing recording software?",
      answer: "We integrate with popular marketing tools including HubSpot, Salesforce, Mailchimp, Hootsuite, and Google Analytics. This allows you to incorporate video content seamlessly into your existing marketing workflows."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Marketing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create compelling marketing content that converts. Professional screen recording software for product demos, explainer videos, and social media campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Marketing Videos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Marketing Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Marketing Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From product demos to campaign analysis, discover how marketers are driving results with professional video content
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="lg:w-1/3">
                      <img 
                        src={`https://images.unsplash.com/${useCase.image}?auto=format&fit=crop&w=400&h=250`}
                        alt={`Marketing content creation for ${useCase.title.toLowerCase()}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${useCase.gradient} text-white flex-shrink-0`}>
                          <useCase.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl md:text-2xl text-gray-900 mb-2">
                            <h3>{index + 1}. {useCase.title}</h3>
                          </CardTitle>
                          <CardDescription className="text-base text-gray-600 leading-relaxed">
                            {useCase.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Real-World Example:</p>
                        <p className="text-gray-600 italic">
                          {useCase.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything marketers need to know about creating high-converting video content
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900 text-left">
                      <h3>{faq.question}</h3>
                    </CardTitle>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Boost Your Marketing Performance
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful marketing teams who are driving better results with engaging video content and professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Converting with Video
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              See Marketing ROI Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderForMarketing;
