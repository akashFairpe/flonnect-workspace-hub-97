
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket,
  Play,
  Users,
  Zap,
  ArrowRight
} from 'lucide-react';

const EnterpriseWorkflowSection = () => {
  const steps = [
    {
      icon: Rocket,
      title: "Deploy Flonnect",
      description: "Set up your enterprise workspace with custom branding, SSO, and team roles in minutes.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Play,
      title: "Record Everything",
      description: "Capture guides, meetings, bugs, demos — all in one unified platform with consistent quality.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Collaborate Seamlessly",
      description: "Share, comment, review, and track usage across your entire team with real-time collaboration.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Zap,
      title: "Automate with AI",
      description: "Let AI handle notes, summaries, transcriptions, and content generation automatically.",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-200">
            <Zap className="w-4 h-4 mr-2" />
            Simple Workflow
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your enterprise team up and running in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white/90 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4 w-8 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center font-bold text-gray-600">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3">{step.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseWorkflowSection;
