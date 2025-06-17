
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, Youtube, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForStudents = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Online Classes & Lectures for Revision",
      description: "Students can record live online classes on Zoom, Google Meet, or Microsoft Teams for later review. Helps in revising difficult topics at their own pace. Useful for students with different learning speeds, allowing them to pause and rewatch lessons. Ensures they don't miss any important points during fast-paced lectures.",
      example: "A college student records a 2-hour physics lecture on Zoom and replays it later to take detailed notes before an exam.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Taking Notes by Recording & Annotating Study Materials",
      description: "Instead of writing long notes, students can record video summaries of their study materials. Can add screen annotations to highlight key points in PDFs, presentations, or research papers. Useful for creating digital flashcards or summaries for quick revision. Saves time by replacing manual note-taking with visual learning.",
      example: "A law student records a case law summary, highlighting important legal principles on-screen while explaining them in voiceover.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1485827404703-89b55fcc595e"
    },
    {
      title: "Recording & Submitting Assignments or Projects",
      description: "Students can record project presentations instead of presenting live. Great for explaining coding assignments, design projects, or research findings. Can be used for group projects, where multiple students contribute asynchronously. Helps improve public speaking skills through recorded practice sessions.",
      example: "A computer science student records a coding project walkthrough, explaining their code logic and functionality before submitting it.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1526374965328-7f61d4dc18c5"
    },
    {
      title: "Preparing for Exams & Self-Studying",
      description: "Students can record themselves solving problems to understand mistakes later. Helps with memorization, as explaining concepts aloud improves retention. Can record mock interviews or practice speeches for oral exams and presentations. Useful for language learners to practice pronunciation and fluency.",
      example: "A medical student records a self-study session, explaining human anatomy diagrams while highlighting key terms on the screen.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Creating & Sharing Educational Content",
      description: "Students can record and share study materials with classmates. Useful for student YouTubers who create educational content. Helps in group studies, where one student explains a topic while others learn from the recording. Can create short explainer videos for study groups or academic communities.",
      example: "A college student records a 5-minute tutorial on solving differential equations and shares it in a WhatsApp study group.",
      icon: Youtube,
      gradient: "from-primary to-secondary",
      image: "photo-1605810230434-7631ac76ec81"
    }
  ];

  const faqs = [
    {
      question: "Is the screen recorder free for students?",
      answer: "Yes! We offer a generous free plan specifically for students. You can record unlimited sessions and access all basic features without any cost."
    },
    {
      question: "Can I record lectures without permission?",
      answer: "You should always check with your school's policy and get permission from your instructors before recording lectures. Many institutions have guidelines about recording academic content."
    },
    {
      question: "How much storage space do recordings take?",
      answer: "Recording size depends on video quality and length. A 1-hour lecture in standard quality typically takes about 500MB. We also offer cloud storage options to save space on your device."
    },
    {
      question: "Can I use this on my mobile device?",
      answer: "Yes! Our software works on desktop computers, laptops, and mobile devices. You can record on any platform and sync your recordings across devices."
    },
    {
      question: "What happens if my internet disconnects during recording?",
      answer: "Our software saves recordings locally on your device, so you won't lose your content if your internet connection drops. You can upload to the cloud later when reconnected."
    },
    {
      question: "Can I share recordings with study groups?",
      answer: "Absolutely! You can easily share recordings via links, download files, or upload to platforms like Google Drive. Perfect for collaborative studying and group projects."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Students
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance your learning experience with powerful screen recording tools. Record lectures, create study materials, and excel in your academic journey with professional video recording capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Recording - Free for Students
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              Download Mobile App
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Powerful Ways Students Use Screen Recording
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From recording lectures to creating study materials, discover how students are boosting their academic performance with screen recording
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
                        alt={`Student using screen recording for ${useCase.title.toLowerCase()}`}
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
              Everything students need to know about using our screen recording software
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
            Boost Your Academic Success
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who are achieving better grades and learning more effectively with our screen recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Free Account
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Student Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderForStudents;
