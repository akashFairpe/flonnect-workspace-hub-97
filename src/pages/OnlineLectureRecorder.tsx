
import { Button } from "@/components/ui/button";
import UseCaseCard from "@/components/UseCaseCard";
import { ArrowDown } from "lucide-react";

const OnlineLectureRecorder = () => {
  const useCases = [
    {
      title: "Recording Online Lectures for Students & Learners",
      description: "Professors and teachers can record live online lectures for students to access later. Works with Zoom, Google Meet, Microsoft Teams, and other platforms. Helps students who miss live sessions or need to revisit complex topics. Ideal for asynchronous learning in schools, universities, and online courses.",
      example: "A university professor records a weekly economics lecture on Zoom and uploads it to the class portal for students who missed the session."
    },
    {
      title: "Creating High-Quality Online Courses for E-Learning Platforms",
      description: "Course creators can record professional video lectures for Udemy, Coursera, Skillshare, or Teachable. Supports screen recording, webcam overlay, and voice narration for engaging lessons. Allows editing, annotations, and subtitles to enhance learning content. Helps educators monetize their knowledge by selling courses online.",
      example: "A coding instructor records Python programming tutorials and uploads them to Udemy as a structured online course."
    },
    {
      title: "Developing Training & Certification Programs for Businesses",
      description: "Corporations and trainers can record professional development courses for employees. Works well for HR training, leadership development, and technical skill training. Businesses can create onboarding videos for new hires. Helps in reducing in-person training costs by offering pre-recorded lessons.",
      example: "A corporate trainer records a data analytics training program for employees, allowing them to complete it at their own pace."
    },
    {
      title: "Recording & Editing Educational YouTube Content",
      description: "Online educators and influencers can record educational videos for YouTube channels. Perfect for tutorials, explainer videos, and subject-based content. Supports high-quality video resolution and easy video editing. Allows YouTubers to increase engagement with annotations and subtitles.",
      example: "A history educator records \"The Rise and Fall of Ancient Civilizations\", adding highlights and voiceover to create an engaging YouTube video."
    },
    {
      title: "Creating Video Guides & Study Materials for Students",
      description: "Teachers and instructors can record step-by-step solutions to complex topics. Works for subjects like math, physics, coding, and language learning. Can be used for revision guides before exams. Helps in creating visual study materials for better comprehension.",
      example: "A physics professor records a step-by-step solution to a tough mechanics problem and shares it with students before an exam."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Online Lecture Recorder
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional lecture recording software for educators, course creators, and training professionals. Create high-quality educational content that engages learners and drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Recording Lectures
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              See Platform Integrations
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
            5 Essential Online Lecture Recording Use Cases
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From university lectures to professional training programs, discover how educators are leveraging online lecture recording.
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
            Start Recording Professional Lectures
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join educators and trainers worldwide who trust our platform for creating high-quality educational content.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Try Free - No Credit Card Required
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OnlineLectureRecorder;
