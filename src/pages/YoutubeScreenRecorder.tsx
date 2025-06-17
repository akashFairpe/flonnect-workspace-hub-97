
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, Youtube, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const YoutubeScreenRecorder = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording High-Quality YouTube Videos (Tutorials, Reviews, & Demos)",
      description: "YouTubers can record tutorials, product reviews, and software demos with HD recording capabilities. Supports screen + webcam recording, making it perfect for how-to videos, educational content, and unboxing videos. Enables adding annotations, highlights, and AI-powered editing for polished content. Works great for tech tutorials, software walkthroughs, and explainer videos.",
      example: "A tech YouTuber records a detailed tutorial on video editing software, using screen recording to guide viewers through the features while providing live commentary.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Recording YouTube Gaming Videos & Live Gameplay",
      description: "Gamers can capture gameplay footage in high resolution for YouTube content. Supports recording webcam overlay to show reactions while playing. Great for walkthroughs, game reviews, speedruns, and reaction videos. Can be used to record live-stream gameplay and later upload the highlights.",
      example: "A gaming YouTuber records a high-definition playthrough of a trending game, adding real-time commentary using webcam overlay to engage their audience.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Creating Reaction & Commentary Videos",
      description: "YouTubers can record their screen while watching videos, shows, or trailers. Enables adding facecam reactions to content using webcam recording. Can be used to create reaction videos, breakdowns, and commentary content. Perfect for reviewing viral videos, explaining memes, or analyzing pop culture trends.",
      example: "A movie critic YouTuber records a reaction video to a new movie trailer, pausing and commenting on different scenes while screen-sharing the content.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Recording Online Meetings & Interviews for YouTube Content",
      description: "Podcasters and interviewers can record online interviews with guests on Zoom, Google Meet, or Skype. Supports high-quality video and audio capture, ensuring professional-looking interviews. Great for YouTube talk shows, expert discussions, or industry Q&A sessions. AI-powered transcription helps create subtitles for accessibility and SEO.",
      example: "A YouTube podcast host records a virtual interview with an industry expert, later adding subtitles and trimming unnecessary parts before publishing.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Recording & Editing YouTube Shorts & Social Media Clips",
      description: "YouTubers can record short-form content optimized for YouTube Shorts. Ideal for quick tutorials, trending challenges, motivational clips, and bite-sized explanations. Supports AI-powered editing, making it easier to cut, trim, and enhance videos before posting. Can also be repurposed for Instagram Reels, TikTok, and Facebook videos.",
      example: "A fitness YouTuber records a \"60-second home workout challenge\", adding text overlays and trimming the clip for YouTube Shorts and Instagram Reels.",
      icon: Youtube,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "What video quality settings work best for YouTube?",
      answer: "We recommend recording in 1080p or 4K resolution at 30-60fps for optimal YouTube quality. Our software automatically optimizes settings for YouTube's requirements, ensuring your videos look professional without large file sizes."
    },
    {
      question: "Can I add webcam overlay while recording my screen?",
      answer: "Yes! You can record your screen and webcam simultaneously, with customizable positioning and sizing for your facecam. This is perfect for tutorials, gaming videos, and reaction content where viewers want to see your expressions."
    },
    {
      question: "How do I optimize recordings for YouTube SEO?",
      answer: "Our AI transcription creates accurate captions that boost SEO. You can also add custom titles, descriptions, and tags. We provide YouTube-specific export settings that maintain quality while meeting platform requirements."
    },
    {
      question: "Can I edit my recordings before uploading to YouTube?",
      answer: "Absolutely! Our built-in editor lets you trim, add annotations, insert transitions, and enhance audio. You can also add intro/outro segments, background music, and custom branding elements to make your content more engaging."
    },
    {
      question: "Does the software support YouTube Shorts format?",
      answer: "Yes! We have specific recording modes for vertical content perfect for YouTube Shorts, Instagram Reels, and TikTok. The software automatically formats your content for optimal mobile viewing."
    },
    {
      question: "Can I schedule uploads directly to YouTube?",
      answer: "Yes, our platform integrates with YouTube's API, allowing you to upload and schedule content directly from our interface. You can set titles, descriptions, thumbnails, and publication times all in one place."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Youtube className="w-12 h-12 text-red-600" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              YouTube Screen Recorder
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create professional YouTube content with our advanced screen recording software. Perfect for tutorials, gaming videos, reactions, and more. Built for content creators who demand quality.
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

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Powerful Ways to Create YouTube Content
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From gaming to tutorials, discover how YouTubers are creating engaging content with professional screen recording tools
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
                        alt={useCase.title}
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
                            {index + 1}. {useCase.title}
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

        {/* CTA Section */}
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
