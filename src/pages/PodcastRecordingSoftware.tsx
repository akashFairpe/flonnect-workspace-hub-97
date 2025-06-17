
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, Mic, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const PodcastRecordingSoftware = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording High-Quality Audio & Video Podcasts",
      description: "Flonnect allows podcasters to record professional-quality audio and video for their shows. Supports screen recording and webcam integration, perfect for video podcasts. Ensures clear, noise-free audio capture, essential for high production value. Works for solo, interview-style, or multi-host podcasts.",
      example: "A content creator records a video podcast on digital marketing, with a split-screen layout featuring guest speakers.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Remote Podcast Recording & Interviews",
      description: "Podcasters can record virtual interviews with guests via Zoom, Google Meet, or Teams. Ensures both audio and video are captured smoothly in high resolution. No need for expensive podcasting hardware—just a mic and Flonnect. Ideal for long-distance interviews, expert discussions, and co-hosted podcasts.",
      example: "A journalist records a remote podcast interview with an industry expert over Google Meet and later edits it for a seamless listening experience.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Editing & Enhancing Podcast Audio and Video",
      description: "Flonnect's AI-powered editing tools help in removing silences, background noise, and unnecessary segments. Users can trim, merge, and adjust audio levels for a polished final product. Can be used to add captions, annotations, or subtitles for video podcasts. Helps podcasters optimize content for YouTube, Spotify, and other platforms.",
      example: "A podcaster records a 30-minute discussion on personal finance, then trims filler words and adds captions before publishing on YouTube and Spotify.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Creating Short Video Clips & Highlights for Social Media",
      description: "Podcasters can extract key moments from their episodes and turn them into engaging social media clips. Perfect for Instagram Reels, TikTok, LinkedIn posts, and YouTube Shorts. Helps boost audience engagement by showcasing highlights in a shareable format. Supports adding text overlays, timestamps, and animated elements to enhance content.",
      example: "A tech podcast extracts a 90-second snippet of an interesting AI discussion and posts it as a LinkedIn video with subtitles.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Multi-Format Content Creation from a Single Recording",
      description: "Podcasters can repurpose content by creating multiple formats from one recording. Convert long-form podcasts into transcripts, blog posts, and audiograms. Generate video podcasts for YouTube and audio-only versions for Spotify/Apple Podcasts. AI-powered tools help with automatic transcriptions and summaries.",
      example: "A health and wellness podcaster records a 60-minute discussion on mindfulness, then converts it into a YouTube video podcast, an audio-only version for Spotify, a blog post using the transcript, and short clips for social media.",
      icon: Mic,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "What audio formats does the podcast recording software support?",
      answer: "Our software supports all major audio formats including MP3, WAV, FLAC, and AAC. You can record in high-quality formats and export in the format that best suits your podcast distribution platform."
    },
    {
      question: "Can I record multiple audio sources simultaneously?",
      answer: "Yes! You can record multiple audio inputs at once, including your microphone, guest audio from video calls, system audio, and background music. Each source is recorded on separate tracks for easier editing."
    },
    {
      question: "Does it work with popular podcasting platforms?",
      answer: "Absolutely! Our recordings can be directly uploaded to Spotify, Apple Podcasts, Google Podcasts, and other major platforms. We also provide RSS feed integration for automated publishing."
    },
    {
      question: "Can I remove background noise automatically?",
      answer: "Yes, our AI-powered noise reduction automatically removes background noise, echo, and unwanted sounds. You can also manually adjust audio levels and apply filters for professional-quality results."
    },
    {
      question: "Is there a time limit for podcast recordings?",
      answer: "No time limits! Record episodes as long as you need. Our software handles multi-hour recordings efficiently and provides automatic save features to prevent data loss."
    },
    {
      question: "Can I create video podcasts as well?",
      answer: "Definitely! Record both audio and video simultaneously with webcam integration. Perfect for YouTube podcasts, with options for picture-in-picture, split-screen, and custom layouts."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Podcast Recording Software
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional podcast recording software for creators and broadcasters. Record high-quality audio and video podcasts with advanced editing tools and seamless platform integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Recording Podcasts
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Audio Features
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Podcast Recording Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From remote interviews to multi-format content creation, discover how podcasters are creating professional content
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
                        alt={`Professional podcast recording setup for ${useCase.title.toLowerCase()}`}
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
              Everything podcasters need to know about professional recording software
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
            Start Your Podcast Journey
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of podcasters who trust our platform for professional-quality recordings and seamless content creation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Record Your First Podcast
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Podcasting Features
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastRecordingSoftware;
