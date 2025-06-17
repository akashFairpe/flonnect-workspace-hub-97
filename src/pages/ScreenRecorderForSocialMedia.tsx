
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, TrendingUp, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForSocialMedia = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Creating Instagram Reels, TikTok Videos & YouTube Shorts",
      description: "Record engaging short-form videos with high-quality screen and webcam capture. Easily edit and trim videos to fit platform-specific length restrictions. Add voiceovers, captions, and annotations to enhance content. Perfect for tutorials, life hacks, reactions, and challenges.",
      example: "A beauty influencer records a step-by-step makeup tutorial using Flonnect and edits it into a 60-second Instagram Reel with captions.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Recording Social Media Marketing Content & Advertisements",
      description: "Businesses and marketers can create professional video ads showcasing products. Record and explain social media strategies, case studies, and insights. Capture screen walkthroughs of new product features for promotional content. Ideal for Facebook, LinkedIn, Instagram, and TikTok ads.",
      example: "A digital marketing expert records a LinkedIn video explaining how to run a successful Instagram ad campaign, with screen demonstrations.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Creating How-To & Tutorial Videos for Social Media",
      description: "Record step-by-step tutorials for different platforms (e.g., 'How to grow on TikTok'). Great for tech influencers, business coaches, and online educators. Perfect for explaining app usage, business tools, or creative workflows. Can include screen annotations to guide the audience visually.",
      example: "A social media consultant records a YouTube tutorial on 'How to schedule Instagram posts for free,' showing the process step by step.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Recording Gaming Content & Reaction Videos",
      description: "Gamers can record gameplay highlights and commentary. Creators can record reaction videos to viral trends. Easily edit and resize content for different platforms (YouTube, Twitch, TikTok). Add picture-in-picture mode to show facecam reactions while screen recording.",
      example: "A gaming creator records a gameplay session of a trending mobile game, then edits and posts it as a TikTok challenge video.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Capturing and Editing Viral Content for Engagement",
      description: "Record social media challenges, trends, and trending topics to repurpose content. Perfect for influencers who need quick video edits and subtitles. Helps brands create behind-the-scenes (BTS) footage and engaging stories. Convert long-form content into bite-sized clips for maximum engagement.",
      example: "A travel vlogger records a behind-the-scenes tour of a new destination, then repurposes the footage into multiple TikToks and Instagram stories.",
      icon: TrendingUp,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "What video formats work best for different social media platforms?",
      answer: "We support all major formats and automatically optimize for each platform. Instagram Reels and TikTok work best with 9:16 vertical videos, while YouTube Shorts supports both vertical and square formats. Our software includes preset templates for each platform."
    },
    {
      question: "Can I add trending music and effects to my videos?",
      answer: "Yes! Our software includes a library of royalty-free music and sound effects. You can also import your own audio tracks and sync them with your recordings. We provide tools for audio mixing and background music integration."
    },
    {
      question: "How do I optimize videos for maximum engagement?",
      answer: "Our software includes engagement optimization features like automatic captions, eye-catching thumbnails, and trending hashtag suggestions. We also provide analytics insights to help you understand what content performs best."
    },
    {
      question: "Can I schedule posts directly to social media platforms?",
      answer: "While our software focuses on recording and editing, we integrate with popular scheduling tools like Buffer, Hootsuite, and Later. You can also export videos in the optimal format for direct uploading to any platform."
    },
    {
      question: "What's the best way to create viral-worthy content?",
      answer: "Focus on trending topics, use eye-catching visuals, and keep videos short and engaging. Our software includes trend analysis tools and templates based on viral content patterns to help boost your reach."
    },
    {
      question: "Can I collaborate with other creators on content?",
      answer: "Absolutely! Our cloud-based platform allows real-time collaboration. Multiple creators can work on the same project, share assets, and provide feedback. Perfect for brand partnerships and collaborative content creation."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Social Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create viral-worthy content for Instagram, TikTok, YouTube, and more. Professional screen recording software designed for social media creators and influencers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Creating Content
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Social Media Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Powerful Social Media Recording Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From viral shorts to engaging tutorials, discover how creators are dominating social media with professional recording tools
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
                        alt={`Social media content creation for ${useCase.title.toLowerCase()}`}
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
              Everything social media creators need to know about professional content recording
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
            Go Viral with Professional Content
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join millions of creators who are building their social media presence with our professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Create Viral Content Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              See Creator Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderForSocialMedia;
