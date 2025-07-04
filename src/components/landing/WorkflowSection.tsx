
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

const WorkflowSection = () => {
  const workflowSteps = [
    {
      step: "1",
      title: "Install Easily",
      description: "Quickly install our extension or desktop application.",
      color: "from-blue-400 to-blue-500"
    },
    {
      step: "2", 
      title: "Record Seamlessly",
      description: "Capture videos from your screen, camera, or both.",
      color: "from-purple-400 to-purple-500"
    },
    {
      step: "3",
      title: "Edit with AI", 
      description: "Automatically transcribe, summarize, and edit your videos.",
      color: "from-pink-400 to-pink-500"
    },
    {
      step: "4",
      title: "Share Effortlessly",
      description: "Manage and share content securely with your team.",
      color: "from-emerald-400 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simplify Your Video Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From recording to sharing - streamline every step of your video creation process
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Clock className="w-5 h-5 mr-2" />
              Start Your Free Trial Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
