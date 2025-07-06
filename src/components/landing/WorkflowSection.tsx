
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
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-indigo-50" role="region" aria-label="Video Workflow Process">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Simplify Your Video Workflow
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            From recording to sharing - streamline every step of your video creation process
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${step.color} rounded-2xl sm:rounded-3xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center px-4">
            <Button size="lg" variant="outline" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Start Your Free Trial Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
