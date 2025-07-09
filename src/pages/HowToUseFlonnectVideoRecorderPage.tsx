import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Monitor, 
  Camera, 
  Users, 
  Play, 
  CheckCircle, 
  Settings, 
  Video, 
  Square, 
  FileText,
  Share2,
  BarChart3,
  Download,
  Code,
  Mic,
  Upload,
  Sparkles
} from 'lucide-react';

export default function HowToUseFlonnectVideoRecorderPage() {
  useEffect(() => {
    document.title = 'How to Use Flonnect Video Recorder | Complete Recording Guide';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Master Flonnect Video Recorder Chrome extension. Record screen, webcam, or both with AI transcription and easy sharing.');
    }

    // Add additional SEO meta tags
    const keywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    keywords.setAttribute('name', 'keywords');
    keywords.setAttribute('content', 'video recorder, chrome extension, screen recording, webcam recording, AI transcription, video sharing, tutorials');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(keywords);
    }

    const author = document.querySelector('meta[name="author"]') || document.createElement('meta');
    author.setAttribute('name', 'author');
    author.setAttribute('content', 'Flonnect');
    if (!document.querySelector('meta[name="author"]')) {
      document.head.appendChild(author);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'How to Use Flonnect Video Recorder - Complete Guide');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Master screen and webcam recording with AI transcription using Flonnect Video Recorder Chrome extension.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }
  }, []);

  const recordingModes = [
    {
      icon: Monitor,
      title: "Screen Only",
      description: "Capture your entire screen or specific application windows",
      features: ["Full HD recording", "System audio capture", "Multiple monitor support"]
    },
    {
      icon: Camera,
      title: "Webcam Only", 
      description: "Record yourself with webcam for presentations or tutorials",
      features: ["1080p webcam", "Background blur", "Face tracking"]
    },
    {
      icon: Users,
      title: "Screen + Webcam",
      description: "Combine screen recording with webcam overlay",
      features: ["Picture-in-picture", "Customizable layout", "Sync audio/video"]
    }
  ];

  const quickStartSteps = [
    {
      icon: Settings,
      title: "Choose Recording Mode",
      description: "Select screen, webcam, or both based on your needs"
    },
    {
      icon: CheckCircle,
      title: "Grant Permissions",
      description: "Allow camera and microphone access when prompted"
    },
    {
      icon: Video,
      title: "Start Recording",
      description: "Click record and begin capturing your content"
    },
    {
      icon: Square,
      title: "Stop & Save",
      description: "End recording and automatically save to your library"
    }
  ];

  const proTips = [
    "Use AI transcription to automatically generate subtitles",
    "Export summaries for quick video overviews",
    "Share directly to YouTube or get embeddable links",
    "Record step-by-step guides with annotations"
  ];

  const testimonials = [
    {
      quote: "AI transcription saves hours of manual work",
      author: "David Park",
      role: "Content Creator"
    },
    {
      quote: "Perfect for customer support video responses",
      author: "Lisa Johnson",
      role: "Support Team Lead"
    },
    {
      quote: "Our training videos reach global teams instantly",
      author: "Carlos Martinez",
      role: "Learning & Development"
    }
  ];

  const faqs = [
    {
      question: "What permissions does the extension need?",
      answer: "Camera and microphone access for recording, plus screen capture permission. All permissions are used only during active recording sessions."
    },
    {
      question: "What's the maximum file size for recordings?",
      answer: "No hard limits! Videos are compressed efficiently while maintaining quality. Typical 10-minute recordings are under 100MB."
    },
    {
      question: "How do I share my recorded videos?",
      answer: "Generate shareable links, export to YouTube, download MP4 files, or embed directly in websites and documentation."
    },
    {
      question: "Can I record system audio with screen recordings?",
      answer: "Yes! Capture system audio, microphone, or both. Perfect for software demos with background music or application sounds."
    },
    {
      question: "Is AI transcription available in multiple languages?",
      answer: "Currently supports English with 95%+ accuracy. Spanish, French, and German support coming soon."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 animate-scale-in">
              <Sparkles className="w-4 h-4 mr-2" />
              🎥 Extension Ready to Use
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              🎉 Ready to Capture Your First Video?
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
              Record screen, webcam, or both with AI-powered transcription and instant sharing. Perfect for tutorials, demos, and team communication.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg mb-4 hover-scale animate-fade-in"
              onClick={() => window.open('chrome-extension://flonnect-video-recorder/popup.html', '_blank')}
            >
              <Video className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Start Recording Now
            </Button>
            <p className="text-sm text-gray-500 animate-fade-in">
              Or create <a href="/how-to-use-step-recorder" className="text-blue-600 hover:underline story-link">Step-by-Step Guides</a> with our Step Recorder
            </p>
          </div>
        </div>

        {/* Recording Modes */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 animate-fade-in">
            Choose Your Recording Mode 🎬
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {recordingModes.map((mode, index) => {
              const ModeIcon = mode.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 hover-scale group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto w-14 sm:w-16 h-14 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <ModeIcon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{mode.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{mode.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mode.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Embedded Video */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 animate-fade-in">Watch: 90-Second Intro Video 📹</h2>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg animate-fade-in">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="text-center">
                <Play className="w-12 sm:w-16 h-12 sm:h-16 text-blue-600 mx-auto mb-4 animate-[pulse_2s_infinite]" />
                <p className="text-sm sm:text-base text-gray-600">Video placeholder: {`{{video_video_recorder_intro}}`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Checklist */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 animate-fade-in">
            Step-by-Step Checklist ✅
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickStartSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <StepIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-blue-600 mb-2">Step {index + 1}</div>
                    <CardTitle className="text-base sm:text-lg">{step.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 animate-fade-in">Pro Tips 💡</h2>
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                Advanced Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {proTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 animate-fade-in">What Users Say 💬</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white/80 backdrop-blur-sm hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Video className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 animate-fade-in">Frequently Asked Questions ❓</h2>
          <Accordion type="single" collapsible className="w-full animate-fade-in">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Flonnect Video Recorder Tutorial",
            "description": "Learn to record screen and webcam videos with AI transcription using Flonnect Video Recorder",
            "embedUrl": "{{video_video_recorder_intro}}",
            "publisher": {
              "@type": "Organization",
              "name": "Flonnect"
            }
          })}
        </script>
      </main>
    </div>
  );
}