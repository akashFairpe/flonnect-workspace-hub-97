
import { Button } from "@/components/ui/button";
import UseCaseCard from "@/components/UseCaseCard";
import { ArrowDown } from "lucide-react";

const CallCenterRecordingSoftware = () => {
  const useCases = [
    {
      title: "Recording Customer Service Calls for Quality Assurance & Compliance",
      description: "Call centers can record inbound and outbound calls to ensure high-quality service. Helps businesses comply with industry regulations (e.g., GDPR, HIPAA, PCI DSS). Supervisors can monitor calls for compliance, ensuring agents follow scripts and policies. Enables legal protection in case of disputes with customers.",
      example: "A telecom call center records customer complaints to analyze agent responses and ensure they adhere to compliance policies."
    },
    {
      title: "Monitoring Agent Performance & Training New Employees",
      description: "Call centers can use recordings for coaching and training new agents. Managers can review past interactions to identify areas of improvement. Helps agents improve communication skills and handle difficult customers better. Enables real-time feedback by sharing examples of good and bad calls.",
      example: "A banking call center uses recorded customer service calls to train new hires on how to handle fraud-related inquiries professionally."
    },
    {
      title: "Recording Customer Interactions for Dispute Resolution",
      description: "Businesses can record calls to resolve customer disputes and complaints effectively. Prevents miscommunication by keeping records of all verbal agreements. Helps in legal cases where proof of conversation is required. Ensures customers get what was promised, avoiding potential lawsuits.",
      example: "A credit card company records customer authorization calls to verify consent before approving a loan increase."
    },
    {
      title: "Capturing Screen Activity Along with Audio for Enhanced Monitoring",
      description: "Call centers can record both calls and screen activity to track how agents handle CRM software. Useful for technical support centers, where agents guide customers through troubleshooting steps. Helps in identifying workflow inefficiencies and improving software usability. Provides a full picture of agent productivity beyond just call recordings.",
      example: "A tech support call center records agent screen activity while they assist customers in resetting their accounts, ensuring correct navigation."
    },
    {
      title: "Storing & Accessing Recordings on Cloud for Remote Teams",
      description: "Cloud-based call recording enables remote call center agents to record and access interactions from anywhere. Reduces hardware dependency by eliminating the need for physical storage devices. Allows team leaders to review recordings anytime, improving operational efficiency. Ensures data backup and security by keeping all recordings in a centralized system.",
      example: "A multinational e-commerce support team records customer complaint calls on the cloud, allowing managers in different locations to review and provide feedback."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Call Center Recording Software
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Enterprise-grade call recording solutions for call centers. Ensure compliance, improve agent training, and enhance customer service with professional recording technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Call Center Trial
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
            5 Essential Call Center Recording Solutions
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From quality assurance to compliance, discover how call centers are optimizing operations with professional recording software.
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
            Optimize Your Call Center Operations
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading call centers worldwide who trust our platform for compliance, training, and quality assurance.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Get Enterprise Call Center Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CallCenterRecordingSoftware;
