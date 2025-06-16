
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, Youtube, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Online Classes & Virtual Lessons",
      description: "Teachers can record live online classes on platforms like Zoom, Google Meet, and Microsoft Teams. Helps students who miss live sessions to catch up later. Useful for flipped classrooms, where students watch lessons before discussions. Teachers can share recorded sessions with students for easy revision.",
      example: "A history teacher records a Google Meet session and shares it with students to review important dates and events before exams.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Creating Pre-Recorded Lessons & Tutorials",
      description: "Teachers can pre-record lessons with detailed explanations for students. Ideal for asynchronous learning where students learn at their own pace. Useful for YouTube tutorials or LMS (Learning Management Systems). Can include PowerPoint presentations, annotations, and webcam overlays.",
      example: "A science teacher records a step-by-step chemistry experiment guide and uploads it to Google Classroom for students to follow along.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Explaining Complex Concepts & Problem-Solving",
      description: "Teachers can record whiteboard explanations for math, physics, or coding classes. Helps students understand problem-solving techniques through detailed walkthroughs. Can use screen annotations and voiceover to highlight key points. Great for homework help and answering student doubts.",
      example: "A math teacher records a solution walkthrough for a tough algebra problem and shares it in a student group for better understanding.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Providing Personalized Feedback & Student Assessments",
      description: "Teachers can record personalized video feedback instead of writing comments. Makes it easier to explain strengths and areas of improvement. Helpful for language teachers to provide pronunciation and speech correction. Enables visual demonstrations of student mistakes in assignments.",
      example: "An English teacher records a video critique of a student's essay, explaining grammatical mistakes and suggesting improvements with on-screen annotations.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Developing Course Content for YouTube & Online Learning Platforms",
      description: "Teachers can create structured educational videos for platforms like YouTube, Udemy, and Coursera. Helps in monetizing knowledge by selling courses or growing an online audience. Can record interactive lessons, complete with quizzes and visual aids. Supports branding and professional content creation with AI-powered editing.",
      example: "A business studies teacher records a series of lectures on \"Marketing Strategies\" and uploads them to Udemy as a paid course.",
      icon: Youtube,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How easy is it to start recording with your software?",
      answer: "Our screen recorder is designed for educators with no technical background. Simply click 'Start Recording' and begin teaching. The interface is intuitive and requires no setup or training."
    },
    {
      question: "Can I record both my screen and webcam simultaneously?",
      answer: "Yes! You can record your screen, webcam, and audio all at the same time. This is perfect for creating engaging lessons where students can see both your presentation and your face."
    },
    {
      question: "What video formats are supported for export?",
      answer: "We support all major video formats including MP4, AVI, MOV, and WebM. You can also export directly to popular platforms like YouTube, Google Drive, and learning management systems."
    },
    {
      question: "Is there a limit on recording length?",
      answer: "No, there are no time limits on your recordings. Record entire class sessions, long tutorials, or multi-part lesson series without any restrictions."
    },
    {
      question: "Can I edit my recordings after capturing them?",
      answer: "Absolutely! Our built-in editor allows you to trim videos, add annotations, insert captions, and enhance audio quality. You can also add intro/outro segments and branding elements."
    },
    {
      question: "How do I share recordings with my students?",
      answer: "Share recordings instantly via direct links, embed codes, or upload directly to your preferred platform like Google Classroom, Canvas, or Blackboard. Students can access recordings on any device."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Screen Recorder for Educators
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create engaging video lessons, provide personalized feedback, and build your online teaching presence with our educator-focused screen recording software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Recording Now - Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              Download Free Version
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Powerful Ways Teachers Use Screen Recording
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how educators worldwide are transforming their teaching with screen recording technology
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
              Everything you need to know about our screen recording software for teachers
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
            Ready to Transform Your Teaching?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join over 50,000 educators who are already creating amazing content with our screen recorder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Free 14-Day Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Pricing Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
