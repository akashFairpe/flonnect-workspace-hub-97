import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Youtube, Video, Edit, TrendingUp, Users, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const YoutubeScreenRecorder = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Gaming Content & Live Streams",
      description: "Content creators can record high-quality gaming sessions, live streams, and gameplay tutorials for YouTube. Supports multiple monitors, webcam overlay, and commentary recording for engaging gaming content.",
      example: "A gaming YouTuber records a Minecraft tutorial series, showing building techniques with live commentary and webcam overlay.",
      icon: Video,
      gradient: "from-red-600 to-pink-600",
      image: "photo-1542751371-adc38448a05e"
    },
    {
      title: "Creating Educational Content & Tutorials",
      description: "Educators and experts can record screen-based tutorials, software demonstrations, and educational content for YouTube channels. Perfect for tech tutorials, coding lessons, and how-to guides.",
      example: "A web developer records a React tutorial series, showing code examples and explaining concepts step by step.",
      icon: Users,
      gradient: "from-blue-600 to-indigo-600",
      image: "photo-1522202176988-66273c2fd55f"
    },
    {
      title: "Recording Product Reviews & Unboxing Videos",
      description: "YouTubers can record product demonstrations, software reviews, and unboxing content with professional quality. Includes features for highlighting specific areas and adding annotations.",
      example: "A tech reviewer records a smartphone unboxing and review, highlighting key features and performance tests.",
      icon: TrendingUp,
      gradient: "from-green-600 to-emerald-600",
      image: "photo-1560472354-b33ff0c44a43"
    },
    {
      title: "Creating YouTube Shorts & Viral Content",
      description: "Content creators can record short-form content optimized for YouTube Shorts, TikTok, and other vertical video platforms. Features quick editing tools and vertical recording options.",
      example: "A lifestyle YouTuber records quick tips and life hacks in vertical format for YouTube Shorts.",
      icon: Youtube,
      gradient: "from-purple-600 to-violet-600",
      image: "photo-1611162617474-5b21e879e113"
    },
    {
      title: "Recording Webinars & Live Presentations",
      description: "Professionals can record webinars, presentations, and live talks for later upload to YouTube. Helps build thought leadership and share expertise with a wider audience.",
      example: "A marketing expert records a webinar on social media strategies and uploads it to their YouTube channel for ongoing value.",
      icon: Edit,
      gradient: "from-orange-600 to-yellow-600",
      image: "photo-1557804506-669a67965ba0"
    }
  ];

  const faqs = [
    {
      question: "What video quality is best for YouTube uploads?",
      answer: "We support recording up to 4K resolution at 60fps, which is perfect for YouTube. We also provide optimized export settings for different YouTube content types including gaming, tutorials, and vlogs."
    },
    {
      question: "Can I add overlays and graphics while recording?",
      answer: "Yes! Our platform includes webcam overlay, logo placement, and real-time graphics insertion. You can also add lower thirds, subscribe buttons, and other YouTube-specific elements."
    },
    {
      question: "How do I optimize file sizes for YouTube uploads?",
      answer: "Our smart compression maintains high quality while reducing file sizes. We offer YouTube-optimized export presets that balance quality and upload speed for different content types."
    },
    {
      question: "Can I record multiple audio sources simultaneously?",
      answer: "Absolutely! Record separate tracks for microphone, system audio, and music, giving you full control during editing. This is essential for gaming content and tutorials with background music."
    },
    {
      question: "What editing features are available for YouTube content?",
      answer: "Our built-in editor includes trim, cut, transitions, text overlays, and color correction. You can also add intro/outro templates and YouTube-specific elements like end screens."
    },
    {
      question: "How do I handle copyright and fair use for recorded content?",
      answer: "We provide guidelines and tools to help you understand copyright implications. Our platform can detect copyrighted audio and suggest royalty-free alternatives for your YouTube videos."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            YouTube Screen Recorder
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create professional YouTube content with our specialized screen recording software. Perfect for gaming, tutorials, reviews, and educational content that engages your audience and grows your channel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Creating Content
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Creator Features
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential YouTube Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how successful YouTubers use screen recording to create engaging content and build their channels
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
                        alt={`YouTuber creating content for ${useCase.title.toLowerCase()}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${useCase.gradient} text-white flex-shrink-0`}>
                          <useCase.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl text-gray-900 mb-2 font-semibold">
                            {index + 1}. {useCase.title}
                          </h3>
                          <CardDescription className="text-base text-gray-600 leading-relaxed">
                            {useCase.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-300">
                        <p className="text-sm font-semibold text-red-700 mb-2">Content Example:</p>
                        <p className="text-red-600 italic">
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

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything YouTube creators need to know about professional screen recording
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
                      {faq.question}
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

        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your YouTube Channel?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful YouTubers who are creating high-quality content with our professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Recording for YouTube
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Creator Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeScreenRecorder;
