
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Building, Ruler, Monitor, Users, Settings, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const EngineersArchitects = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Project Walkthroughs & Site Inspections",
      description: "Engineers and architects can record on-site project walkthroughs to document progress and key milestones. Helps in tracking construction phases, identifying issues, and communicating updates with stakeholders. Can include aerial drone footage, 3D render comparisons, and real-time site explanations. Useful for contractors, civil engineers, and project managers.",
      example: "A civil engineer records a structural integrity inspection, highlighting areas that need reinforcement before final approval.",
      icon: Building,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1504917595217-d4dc5ebe6122"
    },
    {
      title: "Creating Design Concept Presentations & Client Updates",
      description: "Architects can record detailed design presentations explaining blueprints, layouts, and material choices. Helps clients visualize projects before construction begins. Can include 3D render walkthroughs, CAD model demonstrations, and sustainability features. Useful for residential, commercial, and urban development projects.",
      example: "An architect records a video walkthrough of a new eco-friendly office building design, explaining energy-saving features to the client.",
      icon: Ruler,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1503387762-592deb58ef4e"
    },
    {
      title: "Documenting Engineering Calculations & Design Decisions",
      description: "Engineers can record design reviews and technical explanations for internal documentation. Helps in explaining load calculations, electrical layouts, and structural assessments. Can include screen recordings of CAD drawings, FEA simulations, and coding for automation systems. Useful for mechanical engineers, civil engineers, and MEP consultants.",
      example: "A mechanical engineer records a video explaining HVAC system calculations, detailing airflow efficiency for a commercial building.",
      icon: Monitor,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Hosting & Recording Technical Training & Knowledge-Sharing Sessions",
      description: "Engineering firms can record internal training videos to standardize best practices and workflows. Helps in onboarding new team members and training interns efficiently. Can include software tutorials, safety protocols, and compliance guidelines. Useful for engineering consultancies, construction firms, and architectural studios.",
      example: "A senior structural engineer records a tutorial on 'How to Use Revit for Structural Analysis', guiding junior engineers through best practices.",
      icon: Users,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1560472354-b33ff0c44a43"
    },
    {
      title: "Capturing & Reviewing Project Meetings for Team Collaboration",
      description: "Engineers and architects can record design discussions, stakeholder meetings, and brainstorming sessions. Helps in documenting decisions, tracking project changes, and aligning teams remotely. Can include screen recordings of BIM models, planning software, and cost estimations. Useful for large-scale construction projects, smart city planning, and infrastructure development.",
      example: "A construction manager records a weekly project update meeting, summarizing task progress, pending approvals, and potential delays.",
      icon: Settings,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1486406146926-c627a92ad1ab"
    }
  ];

  const faqs = [
    {
      question: "How can I effectively record construction site walkthroughs?",
      answer: "Use our mobile recording features with GPS tracking, weather data overlays, and high-definition video quality. Perfect for documenting progress, safety inspections, and communicating with remote stakeholders."
    },
    {
      question: "Can I integrate recordings with CAD and BIM software?",
      answer: "Absolutely! Our screen recording tools work seamlessly with AutoCAD, Revit, SketchUp, and other professional design software. Create comprehensive design presentations and tutorial content for clients and team members."
    },
    {
      question: "What's the best way to present complex engineering concepts?",
      answer: "Combine screen recordings of calculations, 3D models, and simulations with clear narration. Our annotation tools help highlight critical design elements and make technical concepts accessible to non-technical stakeholders."
    },
    {
      question: "How do I create effective training videos for engineering teams?",
      answer: "Use structured recording sessions with step-by-step demonstrations, real project examples, and interactive elements. Our platform helps standardize training materials across your organization."
    },
    {
      question: "Can I collaborate with international engineering teams?",
      answer: "Yes! Our platform supports global collaboration with secure sharing, multi-language support, and time zone considerations. Perfect for multinational projects and distributed engineering teams."
    },
    {
      question: "How do I ensure project documentation compliance?",
      answer: "Our recordings include timestamps, metadata, and audit trails that meet industry standards. Perfect for maintaining comprehensive project records and regulatory compliance documentation."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Engineers & Architects
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build better projects through professional recording. Document designs, conduct site inspections, and collaborate with teams using tools designed for engineering and architectural professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Engineering Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Design Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Engineering & Architecture Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From design presentations to site documentation, discover how engineering professionals are improving project delivery and team collaboration
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
                        alt={`Engineering and architecture workspace for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-300">
                        <p className="text-sm font-semibold text-orange-700 mb-2">Project Example:</p>
                        <p className="text-orange-600 italic">
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
              Everything engineers and architects need to know about professional recording for project documentation and client communication
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
            Engineer Better Solutions
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join engineering and architecture professionals who are delivering better projects through professional recording and documentation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Project Documentation
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Engineering Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineersArchitects;
