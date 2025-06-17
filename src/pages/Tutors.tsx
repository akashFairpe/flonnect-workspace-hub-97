
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const Tutors = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Creating Personalized Video Lessons for Students",
      description: "Tutors can record step-by-step explanations of concepts tailored to each student's learning needs. Helps students revisit lessons anytime and learn at their own pace. Can include whiteboard explanations, screen recordings, and interactive elements. Useful for math, science, language, test prep, and subject-specific coaching.",
      example: "A math tutor records a video explaining algebraic equations, walking through multiple problem-solving methods based on a student's difficulty areas.",
      icon: Video,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1434030216411-0b793f4b4173"
    },
    {
      title: "Providing Detailed Feedback on Assignments & Exams",
      description: "Tutors can record video feedback on student work, pointing out mistakes and suggesting improvements. More engaging and effective than written feedback, as tutors can explain solutions verbally. Can include on-screen annotations to highlight errors in essays, calculations, and presentations. Useful for language learning, essay writing, coding, and problem-solving subjects.",
      example: "An English tutor records a video review of a student's essay, explaining how to improve structure, grammar, and argument clarity.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1522202176988-66273c2fd55f"
    },
    {
      title: "Recording Test Preparation & Practice Sessions",
      description: "Tutors can record exam strategies, practice questions, and mock test solutions. Helps students prepare for standardized tests like SAT, GRE, GMAT, and competitive exams. Can include timed question-solving, multiple-choice strategies, and common mistake breakdowns. Useful for students who need last-minute review sessions before exams.",
      example: "A GRE tutor records a tutorial on 'How to Solve Data Interpretation Questions Efficiently', demonstrating different shortcut methods.",
      icon: GraduationCap,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1513258496099-48168024aec0"
    },
    {
      title: "Hosting & Recording Live Doubt-Solving Sessions",
      description: "Tutors can record one-on-one or group tutoring sessions where students ask real-time questions. Helps students review explanations later for better understanding. Can be used for doubt resolution, additional practice, and peer discussions. Useful for subjects with complex problem-solving, like physics, chemistry, and programming.",
      example: "A coding tutor records a session answering students' doubts on Python loops, explaining common errors and debugging techniques.",
      icon: Users,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1552664730-d307ca884978"
    },
    {
      title: "Building an Online Course or Educational Content Library",
      description: "Tutors can record structured lessons and package them as an online course. Helps in monetizing knowledge by selling courses on Udemy, Teachable, or a personal website. Can include lecture slides, homework assignments, and quizzes. Useful for scaling tutoring beyond one-on-one sessions.",
      example: "A language tutor records a full 'Beginner's Guide to French' course, teaching grammar, vocabulary, and pronunciation.",
      icon: Search,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1503676260728-1c00da094a0b"
    }
  ];

  const faqs = [
    {
      question: "How can video lessons improve student learning outcomes?",
      answer: "Video lessons allow students to learn at their own pace, replay difficult concepts, and access visual explanations. Our platform provides interactive features, progress tracking, and personalized content that significantly improves retention and understanding."
    },
    {
      question: "What's the best way to provide personalized feedback to students?",
      answer: "Video feedback is more engaging than written comments. Our platform allows screen annotation, voice-over explanations, and detailed breakdowns that help students understand exactly where they need improvement and how to achieve it."
    },
    {
      question: "How can I scale my tutoring business with online courses?",
      answer: "Our course creation tools help you structure lessons, track student progress, and monetize your expertise. You can reach more students globally while maintaining the personal touch that makes tutoring effective."
    },
    {
      question: "What features help with test preparation and exam coaching?",
      answer: "We offer tools for creating practice tests, timed sessions, strategy explanations, and performance analytics. Perfect for SAT, GRE, GMAT preparation and other standardized test coaching with measurable results."
    },
    {
      question: "Can I create interactive doubt-solving sessions for students?",
      answer: "Yes! Our platform supports live recording, Q&A sessions, and interactive whiteboards. Students can ask questions in real-time, and you can create a library of common doubt-solving sessions for future reference."
    },
    {
      question: "How do I track student progress and engagement with video content?",
      answer: "We provide detailed analytics on viewing patterns, completion rates, and student engagement. You can identify which concepts need more attention and adapt your teaching methods based on data-driven insights."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Tutors
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your tutoring and accelerate student success. Create personalized lessons, provide detailed feedback, and build a scalable education business with professional recording tools for tutors and educators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Teaching Success
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Tutoring Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Tutoring Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From personalized lessons to course creation, discover how tutors are transforming education and building successful teaching businesses
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
                        alt={`Tutoring and education environment for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-300">
                        <p className="text-sm font-semibold text-blue-700 mb-2">Teaching Example:</p>
                        <p className="text-blue-600 italic">
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
              Everything tutors need to know about creating effective educational content and building successful teaching businesses
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
            Accelerate Student Success
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join tutors who are transforming education and building thriving teaching businesses with personalized content and professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Transform Your Tutoring
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Tutor Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;
