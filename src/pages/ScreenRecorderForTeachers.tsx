
import { Button } from "@/components/ui/button";
import UseCaseCard from "@/components/UseCaseCard";
import { ArrowDown } from "lucide-react";

const ScreenRecorderForTeachers = () => {
  const useCases = [
    {
      title: "Recording Online Classes & Virtual Lessons",
      description: "Teachers can record live online classes on platforms like Zoom, Google Meet, and Microsoft Teams. Helps students who miss live sessions to catch up later. Useful for flipped classrooms, where students watch lessons before discussions. Teachers can share recorded sessions with students for easy revision.",
      example: "A history teacher records a Google Meet session and shares it with students to review important dates and events before exams."
    },
    {
      title: "Creating Pre-Recorded Lessons & Tutorials",
      description: "Teachers can pre-record lessons with detailed explanations for students. Ideal for asynchronous learning where students learn at their own pace. Useful for YouTube tutorials or LMS (Learning Management Systems). Can include PowerPoint presentations, annotations, and webcam overlays.",
      example: "A science teacher records a step-by-step chemistry experiment guide and uploads it to Google Classroom for students to follow along."
    },
    {
      title: "Explaining Complex Concepts & Problem-Solving",
      description: "Teachers can record whiteboard explanations for math, physics, or coding classes. Helps students understand problem-solving techniques through detailed walkthroughs. Can use screen annotations and voiceover to highlight key points. Great for homework help and answering student doubts.",
      example: "A math teacher records a solution walkthrough for a tough algebra problem and shares it in a student group for better understanding."
    },
    {
      title: "Providing Personalized Feedback & Student Assessments",
      description: "Teachers can record personalized video feedback instead of writing comments. Makes it easier to explain strengths and areas of improvement. Helpful for language teachers to provide pronunciation and speech correction. Enables visual demonstrations of student mistakes in assignments.",
      example: "An English teacher records a video critique of a student's essay, explaining grammatical mistakes and suggesting improvements with on-screen annotations."
    },
    {
      title: "Developing Course Content for YouTube & Online Learning Platforms",
      description: "Teachers can create structured educational videos for platforms like YouTube, Udemy, and Coursera. Helps in monetizing knowledge by selling courses or growing an online audience. Can record interactive lessons, complete with quizzes and visual aids. Supports branding and professional content creation with AI-powered editing.",
      example: "A business studies teacher records a series of lectures on \"Marketing Strategies\" and uploads them to Udemy as a paid course."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Screen Recorder for Teachers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empower your teaching with professional screen recording software designed specifically for educators. Create engaging video lessons, record live classes, and provide personalized feedback to enhance student learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            5 Essential Ways Teachers Use Screen Recording
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Discover how educators worldwide are transforming their teaching methods with our comprehensive screen recording solution.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={index}
                title={useCase.title}
                description={useCase.description}
                example={useCase.example}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of educators who are already creating impactful video content with our screen recording software.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Get Started Today - Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ScreenRecorderForTeachers;
