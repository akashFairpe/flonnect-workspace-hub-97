import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, CheckSquare, Calendar, TrendingUp, MessageSquare, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForProjectManagers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Project Status Meetings & Sprint Reviews",
      description: "Project managers can record team meetings, sprint reviews, and stakeholder updates for documentation and team alignment. Helps remote team members stay informed and provides reference materials for project decisions.",
      example: "A project manager records a sprint retrospective meeting, allowing team members to review feedback and action items later.",
      icon: Users,
      gradient: "from-blue-600 to-indigo-600",
      image: "photo-1552664730-d307ca884978"
    },
    {
      title: "Creating Project Documentation & Process Guides",
      description: "PMs can record step-by-step process guides and project workflows for team onboarding and knowledge transfer. Helps standardize project management practices across the organization.",
      example: "A senior PM records a tutorial on using the company's project management tool for new team members.",
      icon: CheckSquare,
      gradient: "from-green-600 to-emerald-600",
      image: "photo-1454165804606-c3d57bc86b40"
    },
    {
      title: "Documenting Client Presentations & Requirement Gathering",
      description: "Project managers can record client meetings and requirement gathering sessions to ensure accurate project scope documentation. Helps prevent scope creep and maintains clear communication with stakeholders.",
      example: "A PM records a client requirements meeting to share with the development team and ensure everyone understands the project goals.",
      icon: Calendar,
      gradient: "from-purple-600 to-pink-600",
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      title: "Recording Training Sessions & Best Practice Sharing",
      description: "Experienced project managers can record training sessions on project management methodologies, tools, and best practices. Helps build organizational knowledge and improve project success rates.",
      example: "A PMO lead records a session on Agile project management best practices for the entire project management team.",
      icon: TrendingUp,
      gradient: "from-orange-600 to-red-600",
      image: "photo-1600880292089-90a7e086ee0c"
    },
    {
      title: "Creating Post-Project Reviews & Lessons Learned",
      description: "PMs can record project retrospectives and lessons learned sessions to capture valuable insights for future projects. Helps organizations improve their project management maturity and avoid repeating mistakes.",
      example: "A project manager records a post-mortem analysis of a completed project, highlighting what worked well and areas for improvement.",
      icon: MessageSquare,
      gradient: "from-teal-600 to-cyan-600",
      image: "photo-1553877522-43269d4ea984"
    }
  ];

  const faqs = [
    {
      question: "How can screen recording improve project communication?",
      answer: "Screen recording allows PMs to create visual explanations of complex processes, record important meetings for absent team members, and maintain clear documentation of project decisions and changes."
    },
    {
      question: "Can we integrate with project management tools like Jira or Asana?",
      answer: "Yes! Our platform integrates with popular PM tools including Jira, Asana, Trello, and Monday.com. You can link recordings directly to tasks, sprints, and project timelines."
    },
    {
      question: "How do we manage access to sensitive project recordings?",
      answer: "We provide role-based access controls, allowing you to restrict recordings to specific team members or stakeholders. You can also set expiration dates and download permissions."
    },
    {
      question: "Can recordings be used for client reporting and updates?",
      answer: "Absolutely! You can create professional client reports using recorded project updates, demo sessions, and milestone reviews. Our editing tools help you create polished presentations."
    },
    {
      question: "How does this help with remote project management?",
      answer: "Screen recording is essential for remote teams, allowing PMs to record important meetings, create asynchronous updates, and maintain project continuity across different time zones."
    },
    {
      question: "What analytics can help improve project management?",
      answer: "Our analytics track meeting frequency, team engagement metrics, and communication patterns to help PMs identify potential issues and optimize team collaboration."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Project Managers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline project communication and documentation with professional recording solutions. Capture meetings, create training materials, and improve team collaboration across all your projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start PM Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Project Tools Integration
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Project Management Recording Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how successful project managers use screen recording to improve team alignment and project outcomes
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
                        alt={useCase.title}
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
                            {index + 1}. {useCase.title}
                          </CardTitle>
                          <CardDescription className="text-base text-gray-600 leading-relaxed">
                            {useCase.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Real-World Example:</p>
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

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything project managers need to know about using screen recording for better project outcomes
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
                      {faq.question}
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

        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Enhance Your Project Management
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful project managers who are improving team efficiency and communication with our recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Transform Your PM Workflow
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View PM Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderForProjectManagers;
