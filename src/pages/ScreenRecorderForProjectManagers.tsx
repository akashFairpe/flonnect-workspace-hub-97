
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, Briefcase, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForProjectManagers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Virtual Meetings & Team Discussions",
      description: "Project managers can record online meetings on Zoom, Microsoft Teams, and Google Meet. Ensures that important discussions, decisions, and action points are documented. Helps remote team members review meetings asynchronously if they miss a session. Reduces the need for excessive note-taking, improving focus during discussions.",
      example: "A project manager records a weekly sprint planning meeting on Zoom and shares it with the development team to ensure alignment on priorities and deadlines.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Creating Task & Process Documentation Videos",
      description: "Instead of writing long guides, managers can record video walkthroughs for tasks and workflows. Helps onboard new team members faster with step-by-step process explanations. Can be used for demonstrating tools like Jira, Trello, Asana, or ClickUp. Saves time by reducing the need for repetitive one-on-one training.",
      example: "A project manager records a step-by-step guide on how to create and track tasks in Jira and shares it with new team members during onboarding.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Providing Clear Feedback on Project Deliverables",
      description: "Instead of lengthy emails, managers can record video feedback on documents, designs, or reports. Helps teams understand feedback contextually, reducing misinterpretations. Useful for reviewing design mockups, reports, and code reviews. Speeds up the feedback loop by allowing visual and verbal explanations.",
      example: "A project manager records a screen video reviewing a UI design prototype, highlighting areas that need improvement with annotations and verbal explanations.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Tracking & Documenting Project Progress",
      description: "Managers can record progress updates for stakeholders and executives. Useful for creating video-based status reports instead of lengthy written updates. Can be used to capture project milestones and demonstrate achievements. Helps in maintaining a record of project developments over time.",
      example: "A project manager records a monthly project update video summarizing key milestones, roadblocks, and next steps for the leadership team and stakeholders.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Training & Knowledge Sharing for Teams",
      description: "Managers can record training sessions to onboard new employees. Useful for knowledge transfer when a team member transitions out. Can create repository videos for common project management tasks. Saves time by ensuring important knowledge is preserved and easily accessible.",
      example: "A project manager records a detailed walkthrough on risk management strategies and adds it to the team's internal knowledge base for future reference.",
      icon: Briefcase,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How can screen recording improve project documentation?",
      answer: "Screen recording creates visual documentation that's easier to understand than written instructions. You can capture processes, demonstrate tools, and provide context that text alone cannot convey, making project knowledge more accessible to team members."
    },
    {
      question: "Can I integrate recordings with project management tools?",
      answer: "Yes! We integrate with popular PM tools like Jira, Asana, Trello, and Monday.com. You can attach recordings directly to tasks, user stories, or project updates for better context and communication."
    },
    {
      question: "How do I ensure team members watch important recordings?",
      answer: "Our platform provides viewing analytics and engagement tracking. You can see who has watched recordings and send automatic reminders. Integration with communication tools like Slack also helps distribute important content."
    },
    {
      question: "What's the best way to organize project recordings?",
      answer: "Create organized folders by project, sprint, or team. Use descriptive naming conventions and tags. Our search functionality helps team members quickly find relevant recordings when they need specific information."
    },
    {
      question: "Can recordings help with remote team management?",
      answer: "Absolutely! Recordings bridge time zone gaps, ensure consistent communication, and help remote team members stay connected to project discussions. They're especially valuable for asynchronous work environments."
    },
    {
      question: "How do I handle sensitive project information in recordings?",
      answer: "We provide enterprise-grade security with encryption, access controls, and retention policies. You can set permissions by team member, project, or content type to ensure sensitive information stays protected."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Project Managers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline project management with professional recording tools. Document meetings, create process guides, and enhance team collaboration with powerful screen recording capabilities.
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

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Project Management Recording Uses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From meeting documentation to training, discover how project managers are optimizing workflows with screen recording
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

        {/* FAQ Section */}
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

        {/* CTA Section */}
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
