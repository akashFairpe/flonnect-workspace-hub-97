
import { Button } from "@/components/ui/button";
import UseCaseCard from "@/components/UseCaseCard";
import { ArrowDown } from "lucide-react";

const ScreenRecorderForProjectManagers = () => {
  const useCases = [
    {
      title: "Recording Virtual Meetings & Team Discussions",
      description: "Project managers can record online meetings on Zoom, Microsoft Teams, and Google Meet. Ensures that important discussions, decisions, and action points are documented. Helps remote team members review meetings asynchronously if they miss a session. Reduces the need for excessive note-taking, improving focus during discussions.",
      example: "A project manager records a weekly sprint planning meeting on Zoom and shares it with the development team to ensure alignment on priorities."
    },
    {
      title: "Creating Task & Process Documentation Videos",
      description: "Instead of writing long guides, managers can record video walkthroughs for tasks and workflows. Helps onboard new team members faster with step-by-step process explanations. Can be used for demonstrating tools like Jira, Trello, Asana, or ClickUp. Saves time by reducing the need for repetitive one-on-one training.",
      example: "A project manager records a step-by-step guide on how to create and track tasks in Jira and shares it with new team members."
    },
    {
      title: "Providing Clear Feedback on Project Deliverables",
      description: "Instead of lengthy emails, managers can record video feedback on documents, designs, or reports. Helps teams understand feedback contextually, reducing misinterpretations. Useful for reviewing design mockups, reports, and code reviews. Speeds up the feedback loop by allowing visual and verbal explanations.",
      example: "A project manager records a screen video reviewing a UI design prototype, highlighting areas that need improvement with annotations."
    },
    {
      title: "Tracking & Documenting Project Progress",
      description: "Managers can record progress updates for stakeholders and executives. Useful for creating video-based status reports instead of lengthy written updates. Can be used to capture project milestones and demonstrate achievements. Helps in maintaining a record of project developments over time.",
      example: "A project manager records a monthly project update video summarizing key milestones, roadblocks, and next steps for the leadership team."
    },
    {
      title: "Training & Knowledge Sharing for Teams",
      description: "Managers can record training sessions to onboard new employees. Useful for knowledge transfer when a team member transitions out. Can create repository videos for common project management tasks. Saves time by ensuring important knowledge is preserved and easily accessible.",
      example: "A project manager records a detailed walkthrough on risk management strategies and adds it to the team's internal knowledge base."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Screen Recorder for Project Managers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline project management with professional recording tools. Document meetings, create process guides, and enhance team collaboration with powerful screen recording capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start PM Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              See Project Tools Integration
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
            5 Essential Project Management Recording Uses
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From meeting documentation to training, discover how project managers are optimizing workflows with screen recording.
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
            Enhance Your Project Management
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join successful project managers who are improving team efficiency and communication with our recording tools.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Transform Your PM Workflow
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ScreenRecorderForProjectManagers;
