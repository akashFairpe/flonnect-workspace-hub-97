
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, Building, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForBusiness = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Business Meetings & Client Presentations",
      description: "Record important business meetings for future reference, ensuring no details are missed. Useful for client calls, internal team discussions, and project updates. Helps in reviewing decisions, action points, and next steps post-meeting. Allows employees who missed the meeting to catch up on key discussions. Ensures compliance and record-keeping for legal and audit purposes.",
      example: "A project manager records a weekly sprint review meeting on Google Meet, allowing the team to revisit decisions and align on project goals before the next meeting.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Creating Training Materials & Employee Onboarding",
      description: "Businesses can create comprehensive training videos for new employees and ongoing professional development. Records step-by-step processes, software tutorials, and company procedures. Reduces training costs by creating reusable content. Ensures consistent messaging across all training sessions.",
      example: "An HR manager creates a comprehensive onboarding series covering company policies, software tools, and department workflows for new hires.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Documenting Processes & Creating SOPs",
      description: "Record detailed workflows and standard operating procedures for easy reference. Helps in knowledge transfer when employees transition roles. Creates visual documentation that's easier to follow than written instructions. Enables process optimization by reviewing recorded workflows.",
      example: "A operations manager records the entire customer onboarding process, creating a visual SOP that new team members can follow step-by-step.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Recording Sales Calls & Customer Interactions",
      description: "Capture sales presentations and customer meetings for training and quality assurance. Helps in analyzing successful sales techniques and improving team performance. Useful for onboarding new sales representatives. Provides evidence of commitments made during sales calls.",
      example: "A sales director records successful client pitches and uses them to train the sales team on effective presentation techniques and objection handling.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Creating Marketing Content & Product Demos",
      description: "Record product demonstrations and feature explanations for marketing purposes. Create content for websites, social media, and sales materials. Helps in maintaining consistent product messaging across all channels. Enables creation of professional marketing videos without expensive equipment.",
      example: "A marketing team records detailed product demos and feature walkthroughs, then edits them into promotional videos for the company website and social media campaigns.",
      icon: Building,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "Is the recording software secure for business use?",
      answer: "Yes, our software meets enterprise security standards with end-to-end encryption, secure cloud storage, and compliance with GDPR, HIPAA, and other regulations. We provide detailed security documentation for IT review."
    },
    {
      question: "Can we integrate with our existing business tools?",
      answer: "Absolutely! We integrate with popular platforms like Slack, Microsoft Teams, Google Workspace, Salesforce, and many CRM systems. Custom integrations are also available for enterprise clients."
    },
    {
      question: "What are the storage limits for business accounts?",
      answer: "Business plans include generous storage limits starting from 100GB, with unlimited storage options available. We also offer on-premise storage solutions for enterprises with specific data residency requirements."
    },
    {
      question: "Can we control who has access to recordings?",
      answer: "Yes, we provide comprehensive access controls with role-based permissions, team folders, and sharing restrictions. Admins can control who can record, view, edit, and share content within the organization."
    },
    {
      question: "Do you offer training for our team?",
      answer: "We provide comprehensive onboarding, training sessions, and ongoing support for business customers. This includes live training sessions, documentation, and dedicated customer success managers for enterprise accounts."
    },
    {
      question: "What analytics are available for business use?",
      answer: "Business plans include detailed analytics on usage, engagement, storage, and team activity. You can track how recordings are being used, identify training needs, and measure the impact of your content."
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
            Screen Recorder for Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional screen recording solutions for modern businesses. Record meetings, create training materials, and enhance team collaboration with enterprise-grade recording software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Business Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Enterprise Features
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Business Recording Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamline your business operations with professional meeting recording and documentation tools
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
              Everything businesses need to know about our enterprise recording solution
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
            Elevate Your Business Communication
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Transform how your team collaborates and documents important business discussions with professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Get Enterprise Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Business Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderForBusiness;
