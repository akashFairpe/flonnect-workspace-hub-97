
import { Button } from "@/components/ui/button";
import UseCaseCard from "@/components/UseCaseCard";
import { ArrowDown } from "lucide-react";

const ScreenRecorderForBusiness = () => {
  const useCases = [
    {
      title: "Recording Google Meet Meetings for Business Documentation & Collaboration",
      description: "Record important business meetings for future reference, ensuring no details are missed. Useful for client calls, internal team discussions, and project updates. Helps in reviewing decisions, action points, and next steps post-meeting. Allows employees who missed the meeting to catch up on key discussions. Ensures compliance and record-keeping for legal and audit purposes.",
      example: "A project manager records a weekly sprint review meeting on Google Meet, allowing the team to revisit decisions and align on project goals before the next meeting."
    },
    {
      title: "Recording Business Meetings & Presentations on Zoom",
      description: "Automatically records Zoom meetings with high-quality audio and video. Captures both screen and speaker video, ensuring clarity in presentations. Supports AI-powered transcription and summarization, saving time in note-taking. Easily share recorded Zoom meetings with team members who missed the session.",
      example: "A marketing manager hosts a Zoom meeting to discuss the company's next campaign strategy. The session is recorded, transcribed, and shared with the team, ensuring everyone stays aligned and no key points are lost."
    },
    {
      title: "Recording Online Business Meetings & Team Discussions",
      description: "Businesses can record internal and client meetings on Microsoft Teams, Zoom, and Google Meet. Helps teams review discussions, action points, and key decisions later. Useful for onboarding new employees, as they can watch past meetings for context. Enables sharing meeting recordings with absent team members. Can include AI-powered transcription for easy documentation.",
      example: "A project manager records a Microsoft Teams meeting where the team discusses project milestones, then shares it with team members who couldn't attend."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Screen Recorder for Business
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional screen recording solutions for modern businesses. Record meetings, create training materials, and enhance team collaboration with enterprise-grade recording software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Business Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              See Enterprise Features
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
            Essential Business Recording Solutions
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Streamline your business operations with professional meeting recording and documentation tools.
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
            Elevate Your Business Communication
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform how your team collaborates and documents important business discussions with professional recording tools.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Get Enterprise Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ScreenRecorderForBusiness;
