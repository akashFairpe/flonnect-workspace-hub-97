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
import { CheckCircle, Play, FileText, Share2, Camera, Download, BarChart3, Eye, Code, Users } from 'lucide-react';

export default function HowToUseStepRecorderPage() {
  React.useEffect(() => {
    document.title = 'How to Use Step Recorder | Flonnect - Get Started Guide';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Complete guide to using Flonnect Step Recorder Chrome extension. Create interactive step-by-step guides in under 60 seconds.');
    }
  }, []);

  const quickStartSteps = [
    {
      icon: Play,
      title: "Click Record",
      description: "Open the extension and hit the record button"
    },
    {
      icon: Eye,
      title: "Perform Actions",
      description: "Navigate through your process normally"
    },
    {
      icon: FileText,
      title: "Add Annotations",
      description: "Highlight key elements and add descriptions"
    },
    {
      icon: Share2,
      title: "Share Guide",
      description: "Export and share with your team instantly"
    }
  ];

  const proTips = [
    "Use annotations to highlight important UI elements",
    "Export guides as HTML, PDF, or interactive demos",
    "Track guide views with built-in analytics",
    "Embed guides directly in your documentation"
  ];

  const testimonials = [
    {
      quote: "Cut our onboarding time from 2 hours to 30 minutes",
      author: "Sarah Chen",
      role: "Product Manager at TechCorp"
    },
    {
      quote: "Perfect for creating QA test documentation",
      author: "Mike Rodriguez",
      role: "QA Lead at StartupXYZ"
    },
    {
      quote: "Our support team loves how easy it is to create guides",
      author: "Emma Thompson",
      role: "Customer Success Manager"
    }
  ];

  const faqs = [
    {
      question: "What browsers does the Step Recorder support?",
      answer: "Currently supports Chrome and Chromium-based browsers. Firefox and Safari support coming soon."
    },
    {
      question: "Can I edit my guides after recording?",
      answer: "Yes! You can add annotations, edit descriptions, and modify steps after recording is complete."
    },
    {
      question: "How do I share my step-by-step guides?",
      answer: "Export as HTML, PDF, or generate a shareable link. You can also embed guides directly in documentation."
    },
    {
      question: "Is there a limit on recording length?",
      answer: "No time limits! Record as many steps as needed for comprehensive guides."
    },
    {
      question: "Can I track who views my guides?",
      answer: "Yes, built-in analytics show view counts, completion rates, and user engagement metrics."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-green-100 text-green-700 border-green-200">
            ✅ Extension Installed Successfully
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            You're All Set!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start creating interactive step-by-step guides in under 60 seconds. Perfect for onboarding, training, and documentation.
          </p>
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg mb-4"
            onClick={() => window.open('chrome-extension://flonnect-step-recorder/popup.html', '_blank')}
          >
            <Play className="w-5 h-5 mr-2" />
            Start Recording Now
          </Button>
          <p className="text-sm text-gray-500">
            Or try our <a href="/how-to-use-flonnect-video-recorder" className="text-purple-600 hover:underline">Video Recorder</a> for screen recordings
          </p>
        </div>

        {/* Quick Start Steps */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Start in 4 Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <StepIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-sm font-medium text-purple-600 mb-2">Step {index + 1}</div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Embedded Video */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Watch: 90-Second Tutorial</h2>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
              <div className="text-center">
                <Play className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <p className="text-gray-600">Video placeholder: {`{{video_step_recorder_intro}}`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Try Our Interactive Demo</h2>
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center mb-6">
                <div className="text-center">
                  <Code className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive demo: {`{{embed_step_demo}}`}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                This demo was created with our Step Recorder! Experience firsthand how easy it is to create guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-purple-200 text-purple-600">
                  <Download className="w-4 h-4 mr-2" />
                  Embed This Guide
                </Button>
                <Button variant="outline" className="border-blue-200 text-blue-600">
                  <Camera className="w-4 h-4 mr-2" />
                  Record Video Version
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pro Tips */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Pro Tips</h2>
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-orange-600" />
                Level Up Your Guides
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

        {/* Social Proof */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Trusted by Teams Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
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
            "@type": "HowTo",
            "name": "How to Use Flonnect Step Recorder",
            "description": "Learn to create interactive step-by-step guides with Flonnect Step Recorder Chrome extension",
            "step": quickStartSteps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.title,
              "text": step.description
            })),
            "video": {
              "@type": "VideoObject",
              "name": "Step Recorder Tutorial",
              "description": "90-second tutorial on using Flonnect Step Recorder",
              "embedUrl": "{{video_step_recorder_intro}}"
            }
          })}
        </script>
      </main>
    </div>
  );
}