
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Wrench, Shield, TrendingUp, Users, AlertTriangle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FactoryManagersWorkers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Machinery Operation & Maintenance Training Videos",
      description: "Factory managers can record step-by-step tutorials on operating complex machinery. Helps workers learn proper usage, safety protocols, and troubleshooting procedures. Can include detailed instructions for new hires and refresher courses for experienced workers. Useful for automotive, manufacturing, food processing, and heavy machinery industries.",
      example: "A factory supervisor records a tutorial on 'How to Operate and Maintain an Industrial CNC Machine', covering setup, calibration, and error handling.",
      icon: Wrench,
      gradient: "from-gray-500 to-slate-600",
      image: "photo-1565793298595-6a879b1d9492"
    },
    {
      title: "Creating Workplace Safety & Compliance Training Videos",
      description: "Factory teams can record safety training videos to ensure compliance with OSHA and industry regulations. Helps in reducing workplace accidents and improving worker awareness. Can include emergency procedures, fire drills, PPE usage, and hazardous material handling. Useful for manufacturing plants, chemical industries, and warehouse operations.",
      example: "A safety officer records a video on 'Proper Use of Protective Gear in a Manufacturing Facility', demonstrating how to wear PPE correctly.",
      icon: Shield,
      gradient: "from-red-500 to-orange-600",
      image: "photo-1581091870610-c90c0d7ac2fe"
    },
    {
      title: "Documenting Factory Workflow & Process Optimization",
      description: "Factory managers can record video walkthroughs of production lines and assembly processes. Helps in identifying inefficiencies, improving productivity, and ensuring quality control. Can include bottleneck analysis, lean manufacturing principles, and automation integration. Useful for process engineers, supervisors, and production teams.",
      example: "A plant manager records a video analyzing a production line's efficiency, highlighting areas where automation can reduce downtime.",
      icon: TrendingUp,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1513475382585-d06e58bcb0e0"
    },
    {
      title: "Hosting & Recording Virtual Meetings for Cross-Shift Communication",
      description: "Factory managers can record team meetings and shift change briefings to ensure all workers stay informed. Helps in aligning teams across different shifts and locations. Can include daily performance reports, equipment status updates, and work assignments. Useful for factories operating 24/7 or across multiple locations.",
      example: "A supervisor records a shift handover report, summarizing ongoing maintenance tasks and upcoming deadlines for the next team.",
      icon: Users,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1581092795360-fd1ca04f0952"
    },
    {
      title: "Capturing & Reviewing Equipment Failures & Repair Procedures",
      description: "Maintenance teams can record breakdown analysis and repair tutorials to train workers. Helps in reducing downtime by creating a troubleshooting reference guide. Can include common machine failures, quick fixes, and preventive maintenance techniques. Useful for factory technicians, mechanics, and maintenance teams.",
      example: "A machine technician records a step-by-step repair guide for a conveyor belt system, helping workers diagnose and fix issues faster.",
      icon: AlertTriangle,
      gradient: "from-yellow-500 to-orange-600",
      image: "photo-1581093458791-9d42e75f5b73"
    }
  ];

  const faqs = [
    {
      question: "How can I create effective safety training videos for factory workers?",
      answer: "Use clear, step-by-step demonstrations with close-up shots of safety procedures. Our platform includes annotation tools to highlight critical safety points and ensure compliance with OSHA and industry regulations."
    },
    {
      question: "What's the best way to document machinery operations?",
      answer: "Record from multiple angles showing operator positioning, control interfaces, and safety mechanisms. Include both normal operation and troubleshooting scenarios to create comprehensive training materials."
    },
    {
      question: "Can I record in noisy factory environments?",
      answer: "Yes! Our advanced audio filtering technology reduces background noise while preserving clear narration. You can also add text overlays and visual cues for environments where audio is challenging."
    },
    {
      question: "How do I ensure consistent training across multiple shifts?",
      answer: "Record standardized training materials that can be viewed by all shift workers. Our platform allows you to track viewing completion and ensure all team members receive consistent information."
    },
    {
      question: "Can I create a digital maintenance manual with recordings?",
      answer: "Absolutely! Build a comprehensive video library of repair procedures, maintenance schedules, and troubleshooting guides. Search and categorize content by equipment type, issue, or skill level."
    },
    {
      question: "How do I document process improvements effectively?",
      answer: "Record before-and-after comparisons of production processes, highlighting efficiency gains and quality improvements. Use time-lapse recording to show workflow optimization and bottleneck elimination."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Factory Managers & Workers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance factory operations and worker safety. Create comprehensive training materials, document procedures, and improve communication across shifts with professional recording tools for manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Factory Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Manufacturing Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Manufacturing Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From safety training to process optimization, discover how factory professionals are improving operations and worker safety through recording solutions
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="lg:w-1/3">
                      <img 
                        src={`https://images.unsplash.com/${useCase.image}?auto=format&fit=crop&w=400&h=250`}
                        alt={`Manufacturing facility environment for ${useCase.title.toLowerCase()}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${useCase.gradient} text-white flex-shrink-0`}>
                          <useCase.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl md:text-2xl text-gray-900 mb-2">
                            <h3>{index + 1}. {useCase.title}</h3>
                          </CardTitle>
                          <CardDescription className="text-base text-gray-600 leading-relaxed">
                            {useCase.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Manufacturing Example:</p>
                        <p className="text-gray-600 italic">
                          {useCase.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything factory managers and workers need to know about professional recording for manufacturing operations and safety training
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900 text-left">
                      <h3>{faq.question}</h3>
                    </CardTitle>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Optimize Factory Operations
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join manufacturing professionals who are improving safety, efficiency, and training through professional recording and documentation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Manufacturing Success
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Factory Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryManagersWorkers;
