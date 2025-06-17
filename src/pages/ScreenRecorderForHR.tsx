
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, Shield, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForHR = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Employee Onboarding & Training Sessions",
      description: "HR teams can record onboarding sessions for new hires, ensuring they have access to company policies, workflows, and role-specific training. Helps reduce repetitive training efforts by creating reusable training materials. Can include screen recordings of HR software usage, company portals, and benefits explanations.",
      example: "An HR manager records a step-by-step guide on the company's HR software, covering payroll, leave requests, and benefits enrollment for new employees.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Documenting Recruitment Interviews & Evaluations",
      description: "HR professionals can record recruitment interviews on platforms like Zoom, Google Meet, and Microsoft Teams for later review. Helps in analyzing candidate responses and sharing interview recordings with hiring managers. Useful for internal HR meetings, ensuring key discussions are documented for future reference.",
      example: "An HR recruiter records a final round interview and shares it with the hiring team to evaluate the candidate together before making a decision.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Creating HR Policy & Compliance Training Videos",
      description: "HR teams can record compliance training videos covering company policies, workplace ethics, and security guidelines. Helps ensure employees stay informed about legal and regulatory requirements. Can be used to train employees on workplace harassment policies, diversity training, and cybersecurity awareness.",
      example: "An HR compliance officer records a mandatory anti-harassment training session and shares it with all employees to ensure company-wide compliance.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Performance Reviews & Employee Feedback Documentation",
      description: "HR managers can record performance review meetings to ensure clarity and alignment on employee goals. Useful for documenting discussions on performance improvements and career development plans. Can be used to provide personalized feedback to employees through recorded explanations.",
      example: "An HR manager records a one-on-one performance review discussion to ensure both parties can revisit key points and action items discussed.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Creating Training Videos for Internal HR Systems & Processes",
      description: "HR teams can record step-by-step guides on using HRMS (Human Resource Management Systems). Helps new employees understand how to apply for leave, access payslips, or update personal information. Reduces dependency on live training by providing on-demand video tutorials.",
      example: "An HR training specialist records a tutorial on how to submit expense reports using the company's internal HR portal, reducing support tickets.",
      icon: Shield,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "Is the software compliant with HR data protection regulations?",
      answer: "Yes, our software meets all major compliance requirements including GDPR, HIPAA, and SOX. We provide encryption, secure storage, and detailed audit trails for all HR-related recordings."
    },
    {
      question: "Can we control access to sensitive HR recordings?",
      answer: "Absolutely! We offer role-based access controls, allowing you to restrict who can view, edit, or share HR content. You can set permissions by department, role, or individual user level."
    },
    {
      question: "How do we ensure employee consent for recording?",
      answer: "Our software includes built-in consent mechanisms and notifications. We provide templates for consent forms and automatic disclosure features to ensure compliance with recording laws."
    },
    {
      question: "Can recordings be integrated with our HRIS system?",
      answer: "Yes, we offer integrations with popular HRIS platforms like Workday, BambooHR, and ADP. Recordings can be automatically linked to employee profiles and training records."
    },
    {
      question: "What retention policies can we set for HR recordings?",
      answer: "You can configure automatic deletion schedules based on content type, regulatory requirements, or company policy. We support custom retention rules for different types of HR content."
    },
    {
      question: "Do you provide analytics for HR training effectiveness?",
      answer: "Yes, our platform includes detailed analytics on training completion rates, engagement metrics, and knowledge retention. This helps HR teams measure the effectiveness of their training programs."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for HR
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline HR operations with professional recording software. Create training materials, document interviews, and enhance employee onboarding with secure, compliant recording solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start HR Trial
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
              5 Essential HR Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your HR processes with professional recording tools designed for compliance, training, and documentation
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
              Everything HR teams need to know about secure, compliant recording solutions
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
            Transform Your HR Operations
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join HR teams worldwide who are improving efficiency and compliance with our secure recording platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Request HR Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Compliance Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderForHR;
