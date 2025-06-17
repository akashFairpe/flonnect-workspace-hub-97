
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, Headphones, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const CallCenterRecordingSoftware = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Customer Service Calls for Quality Assurance & Compliance",
      description: "Call centers can record inbound and outbound calls to ensure high-quality service. Helps businesses comply with industry regulations (e.g., GDPR, HIPAA, PCI DSS). Supervisors can monitor calls for compliance, ensuring agents follow scripts and policies. Enables legal protection in case of disputes with customers.",
      example: "A telecom call center records customer complaints to analyze agent responses and ensure they adhere to compliance policies while resolving issues.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Monitoring Agent Performance & Training New Employees",
      description: "Call centers can use recordings for coaching and training new agents. Managers can review past interactions to identify areas of improvement. Helps agents improve communication skills and handle difficult customers better. Enables real-time feedback by sharing examples of good and bad calls.",
      example: "A banking call center uses recorded customer service calls to train new hires on how to handle fraud-related inquiries professionally and efficiently.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Recording Customer Interactions for Dispute Resolution",
      description: "Businesses can record calls to resolve customer disputes and complaints effectively. Prevents miscommunication by keeping records of all verbal agreements. Helps in legal cases where proof of conversation is required. Ensures customers get what was promised, avoiding potential lawsuits.",
      example: "A credit card company records customer authorization calls to verify consent before approving a loan increase, protecting both parties.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Capturing Screen Activity Along with Audio for Enhanced Monitoring",
      description: "Call centers can record both calls and screen activity to track how agents handle CRM software. Useful for technical support centers, where agents guide customers through troubleshooting steps. Helps in identifying workflow inefficiencies and improving software usability. Provides a full picture of agent productivity beyond just call recordings.",
      example: "A tech support call center records agent screen activity while they assist customers in resetting their accounts, ensuring correct navigation and procedure following.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Storing & Accessing Recordings on Cloud for Remote Teams",
      description: "Cloud-based call recording enables remote call center agents to record and access interactions from anywhere. Reduces hardware dependency by eliminating the need for physical storage devices. Allows team leaders to review recordings anytime, improving operational efficiency. Ensures data backup and security by keeping all recordings in a centralized system.",
      example: "A multinational e-commerce support team records customer complaint calls on the cloud, allowing managers in different locations to review and provide feedback.",
      icon: Headphones,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How do we ensure compliance with call recording regulations?",
      answer: "Our software includes automatic consent notifications, regulatory compliance features for GDPR, HIPAA, and PCI DSS, plus detailed audit trails. We provide compliance documentation and work with your legal team to ensure proper implementation."
    },
    {
      question: "Can we monitor live calls in real-time?",
      answer: "Yes! Supervisors can listen to live calls, whisper to agents, or take over calls when needed. This helps with immediate coaching and ensures quality service during critical customer interactions."
    },
    {
      question: "What analytics are available for call center performance?",
      answer: "We provide comprehensive analytics including call volume, agent performance, customer satisfaction scores, resolution times, and compliance metrics. Custom dashboards help managers track KPIs and identify improvement opportunities."
    },
    {
      question: "How does the software integrate with our existing call center systems?",
      answer: "We integrate with major call center platforms including Avaya, Cisco, Genesys, and cloud-based solutions like Five9. Our API allows custom integrations with your existing CRM and ticketing systems."
    },
    {
      question: "What happens if there's a system outage?",
      answer: "Our software includes redundancy and failover protection. Recordings are stored locally as backup, and we provide 99.9% uptime guarantee with automatic system recovery to ensure continuous operation."
    },
    {
      question: "How do we handle high call volumes during peak times?",
      answer: "Our enterprise infrastructure scales automatically to handle peak loads. We support unlimited concurrent recordings and provide load balancing to ensure consistent performance during busy periods."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Call Center Recording Software
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade call recording solutions for call centers. Ensure compliance, improve agent training, and enhance customer service with professional recording technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Call Center Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Compliance Features
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Call Center Recording Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From quality assurance to compliance, discover how call centers are optimizing operations with professional recording software
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
              Everything call centers need to know about enterprise recording solutions
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
            Optimize Your Call Center Operations
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join leading call centers worldwide who trust our platform for compliance, training, and quality assurance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Get Enterprise Call Center Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Integration Options
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallCenterRecordingSoftware;
