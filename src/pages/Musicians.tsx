
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const Musicians = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Music Tutorials & Lessons",
      description: "Musicians can record step-by-step tutorials teaching instruments, vocal techniques, or music theory. Useful for beginner to advanced students learning at their own pace. Can include chord breakdowns, sheet music overlays, and rhythm exercises. Great for YouTube, Patreon, online courses, and social media coaching.",
      example: "A guitarist records a tutorial on 'How to Play Bar Chords Easily', demonstrating finger placement with slow-motion and annotations.",
      icon: GraduationCap,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1493225457124-a3eb161ffa5f"
    },
    {
      title: "Capturing Practice Sessions for Self-Improvement",
      description: "Musicians can record practice routines to track progress and identify areas for improvement. Helps in analyzing mistakes, fine-tuning technique, and improving stage presence. Useful for preparing for performances, auditions, and competitions. Can be used as self-feedback or shared with music mentors for guidance.",
      example: "A pianist records daily scales and arpeggios, reviewing playback to perfect hand coordination and speed.",
      icon: Search,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1520523839897-bd0b52f945a0"
    },
    {
      title: "Recording Live Performances & Studio Sessions",
      description: "Musicians can record and share live performances for fans, social media, and music promotion. Useful for creating professional music videos, acoustic sessions, and jam sessions. Can include multi-angle recordings, audience reactions, and stage visuals. Helps in building an online presence and engaging with audiences globally.",
      example: "A band records an unplugged version of their latest song, posting it on Instagram Reels to engage their audience.",
      icon: Video,
      gradient: "from-red-500 to-orange-600",
      image: "photo-1471478331149-c72f17e33c73"
    },
    {
      title: "Producing & Editing Music Content for Social Media",
      description: "Musicians can record short clips for TikTok, Instagram, and YouTube Shorts. Helps in engaging new audiences, showcasing skills, and promoting new releases. Can include behind-the-scenes content, mashups, and quick music challenges. Useful for viral trends, collaborations, and increasing music exposure.",
      example: "A violinist records a trending song cover in 60 seconds, adding subtitles and hashtags for better reach on TikTok.",
      icon: Users,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1511671782779-c97d3d27a1d4"
    },
    {
      title: "Creating Online Music Courses & Monetizing Lessons",
      description: "Musicians can record structured music courses for selling on platforms like Udemy, Skillshare, or personal websites. Helps in teaching advanced music techniques, songwriting, and music production. Can include PDF resources, backing tracks, and step-by-step guidance. Useful for turning musical expertise into a profitable online business.",
      example: "A music producer records a course on 'How to Mix & Master Songs Like a Pro', selling it to aspiring producers online.",
      icon: FileText,
      gradient: "from-yellow-500 to-orange-600",
      image: "photo-1507838153414-b4b713384a76"
    }
  ];

  const faqs = [
    {
      question: "What's the best setup for recording high-quality music tutorials?",
      answer: "For music tutorials, we recommend recording in high resolution with clear audio capture. Our platform supports multi-camera angles, audio mixing, and screen overlay features perfect for demonstrating techniques and sheet music."
    },
    {
      question: "How can I create engaging content for social media platforms?",
      answer: "Our tools include quick editing features, trending format templates, and social media optimization. You can create short-form content, add captions, and format videos specifically for TikTok, Instagram Reels, and YouTube Shorts."
    },
    {
      question: "Can I record and analyze my practice sessions effectively?",
      answer: "Yes! Our platform includes slow-motion playback, annotation tools, and progress tracking features. You can mark specific sections for improvement, compare recordings over time, and share with instructors for feedback."
    },
    {
      question: "How do I monetize my music education content?",
      answer: "We support course creation with structured lessons, progress tracking, and integration with payment platforms. You can create comprehensive music courses, offer subscription content, or sell individual lessons and tutorials."
    },
    {
      question: "What features help with live performance recording?",
      answer: "Our platform offers multi-camera recording, professional audio capture, live streaming capabilities, and post-production tools. Perfect for concerts, jam sessions, and creating promotional performance videos."
    },
    {
      question: "Can I collaborate with other musicians remotely?",
      answer: "Absolutely! We support remote collaboration features, synchronized recording, and easy sharing tools. Musicians can record parts separately and combine them, or participate in virtual jam sessions and collaborations."
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
            Screen Recorder for Musicians
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Amplify your musical journey and build your audience. Create engaging tutorials, record performances, and build a successful music education business with professional recording tools for musicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Music Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Music Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Music Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From tutorials to performances, discover how musicians are building audiences and creating successful music education businesses
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
                        alt={`Music creation environment for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-300">
                        <p className="text-sm font-semibold text-purple-700 mb-2">Musical Example:</p>
                        <p className="text-purple-600 italic">
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
              Everything musicians need to know about creating engaging content and building successful music education businesses
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
            Build Your Music Empire
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join musicians who are building successful careers through education, performance, and audience engagement with professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Your Music Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Musician Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musicians;
