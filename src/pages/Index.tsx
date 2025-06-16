
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, Youtube } from 'lucide-react';

const Index = () => {
  const useCases = [
    {
      title: "Recording Online Classes & Virtual Lessons",
      description: "Teachers can record live online classes on platforms like Zoom, Google Meet, and Microsoft Teams. Helps students who miss live sessions to catch up later. Useful for flipped classrooms, where students watch lessons before discussions. Teachers can share recorded sessions with students for easy revision.",
      example: "A history teacher records a Google Meet session and shares it with students to review important dates and events before exams.",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Creating Pre-Recorded Lessons & Tutorials",
      description: "Teachers can pre-record lessons with detailed explanations for students. Ideal for asynchronous learning where students learn at their own pace. Useful for YouTube tutorials or LMS (Learning Management Systems). Can include PowerPoint presentations, annotations, and webcam overlays.",
      example: "A science teacher records a step-by-step chemistry experiment guide and uploads it to Google Classroom for students to follow along.",
      icon: BookOpen,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Explaining Complex Concepts & Problem-Solving",
      description: "Teachers can record whiteboard explanations for math, physics, or coding classes. Helps students understand problem-solving techniques through detailed walkthroughs. Can use screen annotations and voiceover to highlight key points. Great for homework help and answering student doubts.",
      example: "A math teacher records a solution walkthrough for a tough algebra problem and shares it in a student group for better understanding.",
      icon: Trophy,
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Providing Personalized Feedback & Student Assessments",
      description: "Teachers can record personalized video feedback instead of writing comments. Makes it easier to explain strengths and areas of improvement. Helpful for language teachers to provide pronunciation and speech correction. Enables visual demonstrations of student mistakes in assignments.",
      example: "An English teacher records a video critique of a student's essay, explaining grammatical mistakes and suggesting improvements with on-screen annotations.",
      icon: MessageSquare,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Developing Course Content for YouTube & Online Learning Platforms",
      description: "Teachers can create structured educational videos for platforms like YouTube, Udemy, and Coursera. Helps in monetizing knowledge by selling courses or growing an online audience. Can record interactive lessons, complete with quizzes and visual aids. Supports branding and professional content creation with AI-powered editing.",
      example: "A business studies teacher records a series of lectures on \"Marketing Strategies\" and uploads them to Udemy as a paid course.",
      icon: Youtube,
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Teachers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empower your teaching with professional screen recording. Create engaging lessons, 
            provide personalized feedback, and build your online presence with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Play className="w-5 h-5 mr-2" />
              Start Recording Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              Download Free Trial
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto">
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
                  <div className="flex items-start gap-4">
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
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Real-World Example:</p>
                    <p className="text-gray-600 italic">
                      {useCase.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Teaching?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of educators who are already creating amazing content with our screen recorder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Try Free Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              Learn More Features
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
