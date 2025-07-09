import React from 'react';
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
  Upload
} from 'lucide-react';

export default function HowToUseFlonnectVideoRecorderPage() {
  React.useEffect(() => {
    document.title = 'How to Use Flonnect Video Recorder | Complete Recording Guide';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Master Flonnect Video Recorder Chrome extension. Record screen, webcam, or both with AI transcription and easy sharing.');
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
            🎥 Extension Ready to Use
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to Capture Your First Video?
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Record screen, webcam, or both with AI-powered transcription and instant sharing. Perfect for tutorials, demos, and team communication.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg mb-4"
            onClick={() => window.open('chrome-extension://flonnect-video-recorder/popup.html', '_blank')}
          >
            <Video className="w-5 h-5 mr-2" />
            Start Recording Now
          </Button>
          <p className="text-sm text-gray-500">
            Or create <a href="/how-to-use-step-recorder" className="text-blue-600 hover:underline">Step-by-Step Guides</a> with our Step Recorder
          </p>
        </div>

        {/* Recording Modes */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Recording Mode</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recordingModes.map((mode, index) => {
              const ModeIcon = mode.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <ModeIcon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{mode.title}</CardTitle>
                    <CardDescription className="text-base">{mode.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mode.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600" />
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
          <h2 className="text-3xl font-bold mb-8">Watch: 90-Second Intro Video</h2>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="text-center">
                <Play className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Video placeholder: {`{{video_video_recorder_intro}}`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Checklist */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Step-by-Step Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <StepIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-sm font-medium text-blue-600 mb-2">Step {index + 1}</div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Pro Tips</h2>
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                Advanced Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {proTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cross-Tool Integration */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Enhance Your Videos</h2>
          <Card className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Add Step-by-Step Guides</h3>
                  <p className="text-gray-600 mb-4">
                    Combine your video recordings with interactive step guides for comprehensive tutorials.
                  </p>
                  <Button variant="outline" className="border-green-200 text-green-600">
                    <Code className="w-4 h-4 mr-2" />
                    Embed Step Guide
                  </Button>
                </div>
                <div className="text-center">
                  <Mic className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">AI Transcription</h3>
                  <p className="text-gray-600 mb-4">
                    Automatically generate subtitles and summaries from your video recordings.
                  </p>
                  <Button variant="outline" className="border-blue-200 text-blue-600">
                    <Download className="w-4 h-4 mr-2" />
                    Get Transcript
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Video className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
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