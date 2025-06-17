
import { Button } from "@/components/ui/button";
import UseCaseCard from "@/components/UseCaseCard";
import { ArrowDown } from "lucide-react";

const ScreenRecorderForStudents = () => {
  const useCases = [
    {
      title: "Recording Online Classes & Lectures for Revision",
      description: "Students can record live online classes on Zoom, Google Meet, or Microsoft Teams for later review. Helps in revising difficult topics at their own pace. Useful for students with different learning speeds, allowing them to pause and rewatch lessons. Ensures they don't miss any important points during fast-paced lectures.",
      example: "A college student records a 2-hour physics lecture on Zoom and replays it later to take detailed notes before an exam."
    },
    {
      title: "Taking Notes by Recording & Annotating Study Materials",
      description: "Instead of writing long notes, students can record video summaries of their study materials. Can add screen annotations to highlight key points in PDFs, presentations, or research papers. Useful for creating digital flashcards or summaries for quick revision. Saves time by replacing manual note-taking with visual learning.",
      example: "A law student records a case law summary, highlighting important legal principles on-screen while explaining them in voiceover."
    },
    {
      title: "Recording & Submitting Assignments or Projects",
      description: "Students can record project presentations instead of presenting live. Great for explaining coding assignments, design projects, or research findings. Can be used for group projects, where multiple students contribute asynchronously. Helps improve public speaking skills through recorded practice sessions.",
      example: "A computer science student records a coding project walkthrough, explaining their code logic and functionality before submitting it."
    },
    {
      title: "Preparing for Exams & Self-Studying",
      description: "Students can record themselves solving problems to understand mistakes later. Helps with memorization, as explaining concepts aloud improves retention. Can record mock interviews or practice speeches for oral exams and presentations. Useful for language learners to practice pronunciation and fluency.",
      example: "A medical student records a self-study session, explaining human anatomy diagrams while highlighting key terms on the screen."
    },
    {
      title: "Creating & Sharing Educational Content",
      description: "Students can record and share study materials with classmates. Useful for student YouTubers who create educational content. Helps in group studies, where one student explains a topic while others learn from the recording. Can create short explainer videos for study groups or academic communities.",
      example: "A college student records a 5-minute tutorial on solving differential equations and shares it in a WhatsApp study group."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Screen Recorder for Students
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Enhance your learning experience with powerful screen recording tools. Record lectures, create study materials, and excel in your academic journey with professional video recording capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              See Student Features
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
            5 Powerful Ways Students Use Screen Recording
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From recording lectures to creating study materials, discover how students are boosting their academic performance with screen recording.
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
            Boost Your Academic Success
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who are achieving better grades and learning more effectively with our screen recording tools.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Start Recording - Free for Students
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ScreenRecorderForStudents;
