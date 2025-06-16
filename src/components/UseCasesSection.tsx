
import { Users, BookOpen, MessageSquare, Trophy, Youtube } from 'lucide-react';
import UseCase from './UseCase';

const UseCasesSection = () => {
  const useCases = [
    {
      title: "Recording Online Classes & Virtual Lessons",
      description: "Teachers can record live online classes on platforms like Zoom, Google Meet, and Microsoft Teams. Helps students who miss live sessions to catch up later. Useful for flipped classrooms, where students watch lessons before discussions. Teachers can share recorded sessions with students for easy revision.",
      example: "A history teacher records a Google Meet session and shares it with students to review important dates and events before exams.",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Creating Pre-Recorded Lessons & Tutorials",
      description: "Teachers can pre-record lessons with detailed explanations for students. Ideal for asynchronous learning where students learn at their own pace. Useful for YouTube tutorials or LMS (Learning Management Systems). Can include PowerPoint presentations, annotations, and webcam overlays.",
      example: "A science teacher records a step-by-step chemistry experiment guide and uploads it to Google Classroom for students to follow along.",
      icon: BookOpen,
      gradient: "from-green-500 to-emerald-500",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Explaining Complex Concepts & Problem-Solving",
      description: "Teachers can record whiteboard explanations for math, physics, or coding classes. Helps students understand problem-solving techniques through detailed walkthroughs. Can use screen annotations and voiceover to highlight key points. Great for homework help and answering student doubts.",
      example: "A math teacher records a solution walkthrough for a tough algebra problem and shares it in a student group for better understanding.",
      icon: Trophy,
      gradient: "from-purple-500 to-violet-500",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Providing Personalized Feedback & Student Assessments",
      description: "Teachers can record personalized video feedback instead of writing comments. Makes it easier to explain strengths and areas of improvement. Helpful for language teachers to provide pronunciation and speech correction. Enables visual demonstrations of student mistakes in assignments.",
      example: "An English teacher records a video critique of a student's essay, explaining grammatical mistakes and suggesting improvements with on-screen annotations.",
      icon: MessageSquare,
      gradient: "from-orange-500 to-red-500",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Developing Course Content for YouTube & Online Learning Platforms",
      description: "Teachers can create structured educational videos for platforms like YouTube, Udemy, and Coursera. Helps in monetizing knowledge by selling courses or growing an online audience. Can record interactive lessons, complete with quizzes and visual aids. Supports branding and professional content creation with AI-powered editing.",
      example: "A business studies teacher records a series of lectures on \"Marketing Strategies\" and uploads them to Udemy as a paid course.",
      icon: Youtube,
      gradient: "from-pink-500 to-rose-500",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  return (
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
          <UseCase
            key={index}
            {...useCase}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default UseCasesSection;
