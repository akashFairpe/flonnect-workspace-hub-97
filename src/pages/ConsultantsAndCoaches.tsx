
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, TrendingUp, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ConsultantsAndCoaches = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Personalized Coaching Sessions for Clients",
      description: "Coaches and consultants can record 1-on-1 or group coaching sessions for clients to rewatch later. Helps clients review discussions, key strategies, and action steps at their own pace. Works for business coaching, life coaching, career coaching, and fitness coaching. Can be used to create a coaching archive for new clients.",
      example: "A business consultant records a strategy session on 'Scaling Your Business with Systems & Automation', so the client can refer back anytime.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Creating Pre-Recorded Coaching Programs & Courses",
      description: "Coaches can pre-record structured coaching programs to sell as courses or memberships. Ideal for scaling a coaching business beyond 1-on-1 sessions. Works for mindset coaching, sales training, leadership coaching, and online business growth. Can include screen shares, whiteboard explanations, and step-by-step guides.",
      example: "A career coach records a 'Job Interview Mastery' course, teaching resume writing, answering common questions, and body language tips.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Providing Actionable Feedback on Client Work",
      description: "Consultants can record feedback videos on client work instead of long emails. Helps with website reviews, business audits, branding feedback, and marketing strategies. Enables visual annotations and voiceover explanations for better clarity. Speeds up the feedback loop and enhances client understanding.",
      example: "A marketing consultant records a website audit video, explaining how a client can improve landing page conversions using better headlines and CTAs.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Hosting Virtual Workshops & Webinars",
      description: "Coaches can record live training workshops and repurpose them for future clients. Great for coaching masterminds, leadership training, and self-development sessions. Can be used to generate leads by offering free recorded sessions as a bonus. Works well for creating mini-courses, evergreen webinars, and sales funnels.",
      example: "A life coach records a 'Goal-Setting Masterclass', showing how to define, plan, and achieve personal and professional goals.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Creating Social Media & YouTube Coaching Content",
      description: "Coaches can record short coaching lessons for Instagram, TikTok, LinkedIn, and YouTube. Helps attract new clients and build a strong personal brand. Can record quick tips, Q&A sessions, mindset shifts, and success strategies. Great for generating leads by directing viewers to paid coaching services.",
      example: "A fitness coach records a '3 Mistakes You're Making in Your Workout Routine' video for YouTube, leading viewers to a paid coaching program.",
      icon: TrendingUp,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How can screen recording help me scale my coaching business?",
      answer: "By recording your sessions and frameworks, you can create courses and programs that serve multiple clients simultaneously. This allows you to help more people while reducing the need for 1-on-1 time, ultimately increasing your revenue potential."
    },
    {
      question: "What's the best way to record coaching sessions with client consent?",
      answer: "Always get written consent before recording any client session. Our software includes consent management features and privacy controls. Recorded sessions should be used solely for the client's benefit and stored securely."
    },
    {
      question: "Can I create evergreen content from my live coaching sessions?",
      answer: "Yes! You can edit live session recordings to remove personal details and create valuable evergreen content. This works great for creating course materials, lead magnets, and educational content for your audience."
    },
    {
      question: "How do I provide effective video feedback to consulting clients?",
      answer: "Use our annotation tools to highlight specific areas while providing clear, actionable feedback. Keep videos focused and under 10 minutes when possible. Visual feedback is often more impactful than written reports."
    },
    {
      question: "What's the best format for online coaching programs?",
      answer: "Break content into digestible modules of 10-20 minutes each. Include a mix of teaching, examples, and actionable steps. Our software helps you create professional-looking course content with minimal editing required."
    },
    {
      question: "Can I track engagement with my coaching videos?",
      answer: "Yes! We provide detailed analytics showing which parts of your videos get the most engagement. This helps you understand what resonates with your audience and improve your coaching content over time."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Consultants & Coaches
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scale your coaching business and enhance client experiences. Create powerful coaching content, provide better feedback, and build engaging programs that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Coaching Videos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Coaching Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Powerful Coaching & Consulting Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From personalized feedback to scalable programs, discover how coaches and consultants are transforming their practice
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
                        alt={`Professional coaching setup for ${useCase.title.toLowerCase()}`}
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
              Everything coaches and consultants need to know about professional video content creation
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
            Scale Your Coaching Impact
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful coaches and consultants who are building thriving businesses with engaging video content and scalable programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Transform Your Coaching Business
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Coaching Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantsAndCoaches;
