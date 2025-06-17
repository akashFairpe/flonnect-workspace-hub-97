
import { Button } from "@/components/ui/button";
import UseCaseCard from "@/components/UseCaseCard";
import { ArrowDown } from "lucide-react";

const SalesCallRecordingSoftware = () => {
  const useCases = [
    {
      title: "Recording Sales Calls for Training & Skill Improvement",
      description: "Sales teams can record client calls and demos for review and skill development. Helps in analyzing successful pitches and identifying areas for improvement. Useful for new hire training, allowing sales reps to learn from experienced team members. Enables managers to provide constructive feedback based on real conversations.",
      example: "A sales manager records a high-performing sales call and shares it with the team to showcase effective objection-handling techniques."
    },
    {
      title: "Capturing Client Requirements & Reducing Miscommunication",
      description: "Ensures accurate documentation of client needs and expectations. Helps avoid misunderstandings by allowing reps to review conversations later. Supports customized proposals by revisiting client-specific requirements. Reduces reliance on manual note-taking during calls.",
      example: "A sales executive records a discovery call with a potential client and revisits the conversation later to ensure all pain points are addressed in the proposal."
    },
    {
      title: "Compliance & Legal Documentation for Sales Agreements",
      description: "Records verbal agreements and discussions to protect both parties. Helps in adhering to industry regulations and compliance policies. Useful for businesses operating in highly regulated industries like finance and healthcare. Can be used as proof of commitment in case of disputes.",
      example: "A financial services firm records calls with clients to ensure compliance with regulatory guidelines before finalizing an investment deal."
    },
    {
      title: "Enhancing CRM & Sales Strategy with Real Conversations",
      description: "Recorded calls can be stored in a CRM system for reference. Helps in analyzing common objections and client concerns. Aids in refining sales scripts based on real-world interactions. Provides AI-driven insights to improve conversion rates.",
      example: "A SaaS company records all customer interactions and integrates them into their CRM, helping the team analyze buying patterns and objections."
    },
    {
      title: "Recording Sales Calls on Mobile for On-the-Go Reps",
      description: "Mobile-friendly recording software helps field sales representatives document meetings and client interactions. Useful for traveling sales teams who need to record conversations from anywhere. Supports instant sharing of important call details with the sales team. Helps in quick follow-ups with potential leads based on recorded discussions.",
      example: "A real estate agent records a client call on their Android phone while traveling and later reviews the conversation to customize the property pitch."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Sales Call Recording Software
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Boost your sales performance with professional call recording software. Capture client conversations, train your team, and close more deals with compliance-ready recording solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Sales Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              See CRM Integration
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
            5 Powerful Sales Recording Use Cases
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From training to compliance, discover how sales teams are leveraging call recording to drive better results.
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
            Accelerate Your Sales Success
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join top-performing sales teams who are using call recording to improve their results and exceed targets.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Boost Sales Performance Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SalesCallRecordingSoftware;
