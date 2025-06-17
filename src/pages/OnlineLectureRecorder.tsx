
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, Youtube, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const OnlineLectureRecorder = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Online Lectures for Students & Learners",
      description: "Professors and teachers can record live online lectures for students to access later. Works with Zoom, Google Meet, Microsoft Teams, and other platforms. Helps students who miss live sessions or need to revisit complex topics. Ideal for asynchronous learning in schools, universities, and online courses.",
      example: "A university professor records a weekly economics lecture on Zoom and uploads it to the class portal for students who missed the session.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Creating High-Quality Online Courses for E-Learning Platforms",
      description: "Course creators can record professional video lectures for Udemy, Coursera, Skillshare, or Teachable. Supports screen recording, webcam overlay, and voice narration for engaging lessons. Allows editing, annotations, and subtitles to enhance learning content. Helps educators monetize their knowledge by selling courses online.",
      example: "A coding instructor records Python programming tutorials and uploads them to Udemy as a structured online course.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1615906655593-ad0386982a0f"
    },
    {
      title: "Developing Training & Certification Programs for Businesses",
      description: "Corporations and trainers can record professional development courses for employees. Works well for HR training, leadership development, and technical skill training. Businesses can create onboarding videos for new hires. Helps in reducing in-person training costs by offering pre-recorded lessons.",
      example: "A corporate trainer records a data analytics training program for employees, allowing them to complete it at their own pace.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1558618666-fcd25c85cd64"
    },
    {
      title: "Recording & Editing Educational YouTube Content",
      description: "Online educators and influencers can record educational videos for YouTube channels. Perfect for tutorials, explainer videos, and subject-based content. Supports high-quality video resolution and easy video editing. Allows YouTubers to increase engagement with annotations and subtitles.",
      example: "A history educator records \"The Rise and Fall of Ancient Civilizations\", adding highlights and voiceover to create an engaging YouTube video.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1619642751034-765dfdf7c58e"
    },
    {
      title: "Creating Video Guides & Study Materials for Students",
      description: "Teachers and instructors can record step-by-step solutions to complex topics. Works for subjects like math, physics, coding, and language learning. Can be used for revision guides before exams. Helps in creating visual study materials for better comprehension.",
      example: "A physics professor records a step-by-step solution to a tough mechanics problem and shares it with students before an exam.",
      icon: Youtube,
      gradient: "from-primary to-secondary",
      image: "photo-1579952363873-27d3bfad9c0d"
    }
  ];

  const faqs = [
    {
      question: "What platforms can I record lectures from?",
      answer: "Our software works with all major video conferencing platforms including Zoom, Google Meet, Microsoft Teams, Webex, and many others. You can record any screen content or application."
    },
    {
      question: "Can I record lectures in high definition?",
      answer: "Yes! We support recording up to 4K resolution at 60fps, ensuring crystal-clear video quality for your educational content, even when recording detailed presentations or code."
    },
    {
      question: "How do I add captions to my lectures?",
      answer: "Our AI-powered transcription automatically generates accurate captions for your recordings. You can also edit and customize the captions before publishing your content."
    },
    {
      question: "Can I schedule automatic recordings?",
      answer: "Absolutely! You can set up automatic recording schedules for recurring lectures, ensuring you never miss capturing important educational content."
    },
    {
      question: "What's the best way to share recorded lectures?",
      answer: "You can share via direct links, embed codes, or upload directly to learning management systems like Canvas, Blackboard, or Moodle. We also support direct uploads to YouTube and Vimeo."
    },
    {
      question: "Is there cloud storage for my lecture recordings?",
      answer: "Yes, we offer secure cloud storage with automatic backup. Your recordings are safely stored and accessible from any device, with options for team collaboration and sharing."
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
            Online Lecture Recorder
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional lecture recording software for educators, course creators, and training professionals. Create high-quality educational content that engages learners and drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Recording Lectures
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Platform Integrations
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Online Lecture Recording Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From university lectures to professional training programs, discover how educators are leveraging online lecture recording
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
                        alt={`Online lecture recording for ${useCase.title.toLowerCase()}`}
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
              Everything you need to know about recording professional online lectures
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
                    <h3 className="text-lg text-gray-900 text-left font-medium">
                      {faq.question}
                    </h3>
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
            Start Recording Professional Lectures
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join educators and trainers worldwide who trust our platform for creating high-quality educational content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Try Free - No Credit Card Required
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Course Creator Features
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineLectureRecorder;
