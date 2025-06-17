
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, BookOpen, Video, Download, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

const HowToUse = () => {
  const steps = [
    {
      number: "01",
      title: "Download & Install",
      description: "Get started by downloading our screen recorder software. Installation takes less than 2 minutes.",
      icon: Download,
      gradient: "from-primary to-primary/80"
    },
    {
      number: "02", 
      title: "Set Up Recording",
      description: "Choose your recording area, audio source, and quality settings. Our smart presets make it easy.",
      icon: Video,
      gradient: "from-secondary to-secondary/80"
    },
    {
      number: "03",
      title: "Start Teaching",
      description: "Hit record and start creating your lesson. Focus on teaching while we handle the technical details.",
      icon: Play,
      gradient: "from-primary/80 to-secondary/60"
    },
    {
      number: "04",
      title: "Share & Publish",
      description: "Edit, export, and share your recordings with students across any platform or LMS.",
      icon: ExternalLink,
      gradient: "from-secondary/80 to-primary/60"
    }
  ];

  const features = [
    "High-quality screen and webcam recording",
    "Real-time editing and annotation tools", 
    "Direct upload to Google Classroom, Canvas, and more",
    "Automatic transcription and closed captions",
    "Cloud storage and sharing options",
    "Student engagement analytics"
  ];

  const faqs = [
    {
      question: "What recording quality can I expect?",
      answer: "Our software supports up to 4K recording at 60fps, ensuring crystal-clear video quality for your educational content."
    },
    {
      question: "Can I edit recordings after capturing them?",
      answer: "Yes! Our built-in editor allows you to trim, add annotations, insert captions, and enhance audio quality without external software."
    },
    {
      question: "How do I share recordings with students?",
      answer: "Share instantly via direct links, embed codes, or upload directly to your LMS like Google Classroom, Canvas, or Blackboard."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How to Use Our Screen Recorder
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Complete guide to creating professional educational content with our screen recording software
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Watch Tutorial Video
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              Download Quick Start Guide
            </Button>
          </div>
        </div>

        {/* Embedded Video Guide Placeholder */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden shadow-xl border-0">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Complete Video Tutorial
                </h3>
                <p className="text-gray-600 mb-4">
                  Watch our comprehensive 15-minute guide covering all features
                </p>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  <Play className="w-4 h-4 mr-2" />
                  Play Tutorial
                </Button>
              </div>
              {/* Placeholder for actual video embed */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                15:42
              </div>
            </div>
          </Card>
        </div>

        {/* Step-by-Step Guide */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Step-by-Step Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to start creating professional educational content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <div className={`h-2 bg-gradient-to-r ${step.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${step.gradient} text-white flex-shrink-0`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-gray-400">{step.number}</span>
                        <CardTitle className="text-xl text-gray-900">
                          {step.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features for Educators
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to create engaging educational content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900 mb-4">
                Pro Tips for Better Recordings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <Video className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Good Lighting</h4>
                  <p className="text-sm text-gray-600">Use natural light or a ring light for clear webcam recordings</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <BookOpen className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Plan Content</h4>
                  <p className="text-sm text-gray-600">Prepare an outline to keep your lessons focused and engaging</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Test First</h4>
                  <p className="text-sm text-gray-600">Do a quick test recording to check audio and video quality</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to help you get started faster
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {faq.question}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Recording?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Download our screen recorder and create your first educational video today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              Download Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <ArrowRight className="w-5 h-5 mr-2" />
              View More Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
