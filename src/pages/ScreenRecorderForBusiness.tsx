
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, Briefcase, Target, TrendingUp, MessageSquare, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForBusiness = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Client Meetings & Project Updates",
      description: "Business teams can record client calls, project discussions, and stakeholder meetings for documentation and follow-up. Helps in maintaining clear communication records and ensuring all team members stay aligned on project objectives. Can be shared with remote team members who couldn't attend live meetings.",
      example: "A project manager records a client kickoff meeting and shares key decisions with the development team for reference.",
      icon: Users,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1600880292203-757bb62b4baf"
    },
    {
      title: "Creating Product Demos & Sales Presentations",
      description: "Sales teams can record compelling product demonstrations and presentations for prospects and clients. Helps in standardizing sales messaging across the team and providing consistent product explanations. Can be customized for different client segments and shared via email or during sales calls.",
      example: "A sales rep records a software demo highlighting features specific to a healthcare client's needs.",
      icon: Briefcase,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1551434678-e076c223a692"
    },
    {
      title: "Employee Training & Onboarding Videos",
      description: "HR and training teams can record comprehensive onboarding sessions and skill development programs. Helps new employees learn company processes, software tools, and best practices efficiently. Reduces repetitive training sessions and ensures consistent knowledge transfer across the organization.",
      example: "An HR manager records a company culture and values session for new hires joining remotely.",
      icon: Target,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1542744173-8e7e53415bb0"
    },
    {
      title: "Process Documentation & Standard Operating Procedures",
      description: "Operations teams can record step-by-step process walkthroughs for internal documentation. Helps in creating visual SOPs that are easier to follow than written procedures. Useful for quality control, compliance training, and maintaining operational consistency across different locations.",
      example: "An operations manager records the monthly reporting process to ensure consistency across regional offices.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1553877522-43269d4ea984"
    },
    {
      title: "Team Collaboration & Knowledge Sharing",
      description: "Cross-functional teams can record brainstorming sessions, strategy discussions, and knowledge-sharing meetings. Helps preserve institutional knowledge and makes it accessible to future team members. Can be used for async collaboration when team members are in different time zones.",
      example: "A marketing team records a campaign strategy session and shares insights with the global marketing team.",
      icon: MessageSquare,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1559136555-9303baea8ebd"
    }
  ];

  const faqs = [
    {
      question: "How secure is our business data when using your recording software?",
      answer: "We implement enterprise-grade security with end-to-end encryption, secure cloud storage, and compliance with SOC 2, GDPR, and other industry standards. Your business data is protected with the highest level of security."
    },
    {
      question: "Can multiple team members collaborate on recordings?",
      answer: "Yes! Our platform supports team collaboration with shared workspaces, commenting features, and role-based access controls. Teams can edit, review, and share recordings seamlessly."
    },
    {
      question: "What integrations are available for business tools?",
      answer: "We integrate with popular business tools including Slack, Microsoft Teams, Google Workspace, Salesforce, and many others. This ensures recordings fit naturally into your existing workflow."
    },
    {
      question: "How do we manage recordings across different departments?",
      answer: "Our admin dashboard provides centralized management with department-specific folders, usage analytics, and permission settings. Administrators can easily organize and control access to recordings."
    },
    {
      question: "Can we add our company branding to recordings?",
      answer: "Absolutely! You can customize recordings with your company logo, colors, and branding elements. This is perfect for client-facing content and maintaining brand consistency."
    },
    {
      question: "What support do you provide for enterprise deployments?",
      answer: "We offer dedicated account management, priority support, custom training sessions, and assistance with large-scale deployments. Our enterprise team ensures smooth implementation and adoption."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance business communication and productivity with enterprise-grade screen recording solutions. Create professional presentations, document processes, and improve team collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Business Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              Enterprise Features
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Business Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how forward-thinking businesses are leveraging screen recording to improve operations and drive growth
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
                        alt={`Business team using screen recording for ${useCase.title.toLowerCase()}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${useCase.gradient} text-white flex-shrink-0`}>
                          <useCase.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl text-gray-900 mb-2 font-semibold">
                            {index + 1}. {useCase.title}
                          </h3>
                          <CardDescription className="text-base text-gray-600 leading-relaxed">
                            {useCase.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Business Example:</p>
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
              Everything businesses need to know about implementing enterprise screen recording solutions
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
                    <h3 className="text-lg text-gray-900 text-left font-medium">
                      {faq.question}
                    </h3>
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
            Transform Your Business Communication
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses who have improved their productivity and collaboration with our enterprise recording platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Schedule Enterprise Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Pricing Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderForBusiness;
