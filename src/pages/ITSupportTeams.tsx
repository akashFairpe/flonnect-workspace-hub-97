
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, HelpCircle, Monitor, PhoneCall, Shield, Settings, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ITSupportTeams = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Troubleshooting Guides for Common IT Issues",
      description: "IT support teams can record step-by-step troubleshooting videos for frequently encountered technical issues. Helps end-users fix problems independently, reducing support ticket volume. Useful for explaining software errors, network issues, and system configurations. Can include voiceover instructions and screen annotations for better clarity.",
      example: "An IT support specialist records a troubleshooting guide on 'How to Fix Wi-Fi Connection Issues on Windows & Mac', showing different solutions step by step.",
      icon: HelpCircle,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Creating Technical Support Videos for Employees & Customers",
      description: "IT teams can record support tutorials to help employees or customers navigate software tools. Useful for onboarding new employees to company systems. Helps in reducing repetitive questions by providing reusable video guides. Can be shared internally via company wikis, email, or IT helpdesk portals.",
      example: "An IT admin records a tutorial on 'How to Set Up Multi-Factor Authentication (MFA) for Office 365', ensuring employees follow proper security steps.",
      icon: Monitor,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Recording Remote IT Support & Issue Resolution Sessions",
      description: "IT teams can record live troubleshooting sessions with employees or customers for documentation. Helps track recurring issues and create an internal knowledge base. Useful for remote teams needing asynchronous support. Can be referenced later if similar issues arise.",
      example: "An IT support agent records a remote session fixing a client's email server configuration issue, so other team members can use it as a future reference.",
      icon: PhoneCall,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Creating Cybersecurity Awareness & IT Policy Training Videos",
      description: "IT support can record security training sessions to educate employees on phishing attacks, data privacy, and best IT practices. Helps organizations enforce security protocols and compliance standards. Reduces security risks by training employees effectively. Can be used for internal security awareness programs.",
      example: "An IT security specialist records a cybersecurity training video, explaining how to recognize phishing emails and avoid malware attacks.",
      icon: Shield,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Documenting Software Installations & System Setups",
      description: "IT support teams can record software installation and system setup guides. Useful for new employee onboarding or guiding clients through complex installations. Can include detailed walkthroughs for configuring enterprise software, VPNs, and cloud tools. Saves time by providing pre-recorded instructions instead of live support.",
      example: "An IT administrator records a step-by-step guide on 'How to Install and Configure VPN for Remote Work', ensuring employees can securely access company networks.",
      icon: Settings,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How can recorded tutorials reduce our support ticket volume?",
      answer: "Self-service video tutorials can reduce support tickets by 40-60%. Users prefer visual guides for common issues, allowing your team to focus on complex problems while routine questions are handled automatically."
    },
    {
      question: "Can we create secure training videos for sensitive IT procedures?",
      answer: "Yes! Our platform includes enterprise security features with access controls, watermarking, and encrypted storage. You can create secure training content for privileged access procedures and compliance requirements."
    },
    {
      question: "How do we organize and share IT knowledge base videos?",
      answer: "Create categorized video libraries with search functionality. Share via secure links, embed in your intranet, or integrate with existing knowledge management systems like Confluence or SharePoint."
    },
    {
      question: "Can recordings help with IT compliance and documentation?",
      answer: "Absolutely! Record compliance training, document security procedures, and maintain audit trails. Our platform supports retention policies and compliance reporting for various industry standards."
    },
    {
      question: "What's the best way to record remote support sessions?",
      answer: "Record both screens and audio with proper consent. Document issue resolution steps, create searchable transcripts, and build a knowledge base from real support scenarios for future reference."
    },
    {
      question: "How can we measure the effectiveness of our IT training videos?",
      answer: "Track completion rates, user engagement, and support ticket reductions for topics covered in videos. Our analytics help identify which content is most valuable and where additional training is needed."
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
            Screen Recorder for IT Support Teams
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline IT support with comprehensive recording solutions. Create troubleshooting guides, document procedures, and train users with professional video tools designed for IT teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start IT Support Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See IT Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential IT Support Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From troubleshooting guides to security training, discover how IT teams are improving support efficiency and user education
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
                        alt={`IT support workflow showing ${useCase.title.toLowerCase()}`}
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
              Everything IT support teams need to know about professional recording solutions for better user support and training
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
            Transform Your IT Support Operations
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join IT teams worldwide who are improving support efficiency and user satisfaction with professional recording and training tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Optimize IT Support Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View IT Knowledge Base Features
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSupportTeams;
