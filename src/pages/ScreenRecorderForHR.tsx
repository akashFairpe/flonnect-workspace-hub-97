
import { Button } from "@/components/ui/button";
import UseCaseCard from "@/components/UseCaseCard";
import { ArrowDown } from "lucide-react";

const ScreenRecorderForHR = () => {
  const useCases = [
    {
      title: "Recording Employee Onboarding & Training Sessions",
      description: "HR teams can record onboarding sessions for new hires, ensuring they have access to company policies, workflows, and role-specific training. Helps reduce repetitive training efforts by creating reusable training materials. Can include screen recordings of HR software usage, company portals, and benefits explanations.",
      example: "An HR manager records a step-by-step guide on the company's HR software, covering payroll, leave requests, and benefits."
    },
    {
      title: "Recording & Documenting Virtual Meetings & Interviews",
      description: "HR professionals can record recruitment interviews on platforms like Zoom, Google Meet, and Microsoft Teams for later review. Helps in analyzing candidate responses and sharing interview recordings with hiring managers. Useful for internal HR meetings, ensuring key discussions are documented for future reference.",
      example: "An HR recruiter records a final round interview and shares it with the hiring team to evaluate the candidate together before making a decision."
    },
    {
      title: "Creating HR Policy & Compliance Training Videos",
      description: "HR teams can record compliance training videos covering company policies, workplace ethics, and security guidelines. Helps ensure employees stay informed about legal and regulatory requirements. Can be used to train employees on workplace harassment policies, diversity training, and cybersecurity awareness.",
      example: "An HR compliance officer records a mandatory anti-harassment training session and shares it with all employees to ensure compliance."
    },
    {
      title: "Performance Reviews & Employee Feedback Documentation",
      description: "HR managers can record performance review meetings to ensure clarity and alignment on employee goals. Useful for documenting discussions on performance improvements and career development plans. Can be used to provide personalized feedback to employees through recorded explanations.",
      example: "An HR manager records a one-on-one performance review discussion to ensure both parties can revisit key points discussed."
    },
    {
      title: "Creating Training Videos for Internal HR Systems & Processes",
      description: "HR teams can record step-by-step guides on using HRMS (Human Resource Management Systems). Helps new employees understand how to apply for leave, access payslips, or update personal information. Reduces dependency on live training by providing on-demand video tutorials.",
      example: "An HR training specialist records a tutorial on how to submit expense reports using the company's internal HR portal."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Screen Recorder for HR
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline HR operations with professional recording software. Create training materials, document interviews, and enhance employee onboarding with secure, compliant recording solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start HR Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              See Compliance Features
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
            5 Essential HR Recording Applications
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Enhance your HR processes with professional recording tools designed for compliance, training, and documentation.
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
            Transform Your HR Operations
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join HR teams worldwide who are improving efficiency and compliance with our secure recording platform.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Request HR Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ScreenRecorderForHR;
