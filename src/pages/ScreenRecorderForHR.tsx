import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, Briefcase, Target, TrendingUp, MessageSquare, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForHR = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Employee Interviews & Hiring Assessments",
      description: "HR teams can record video interviews and candidate assessments for better evaluation and documentation. Helps in maintaining consistent interview standards and allows multiple team members to review candidate responses. Can be used for remote interviews, behavioral assessments, and skills demonstrations.",
      example: "An HR manager records a technical interview with a software developer, allowing the engineering team to review the candidate's problem-solving approach.",
      icon: Users,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1521737604893-d14cc237f11d"
    },
    {
      title: "Creating Employee Onboarding & Training Programs",
      description: "HR departments can record comprehensive onboarding sessions and training programs for new hires. Helps standardize the orientation process and ensures all employees receive consistent information about company policies, procedures, and culture.",
      example: "An HR specialist records a company culture orientation video that new employees can watch during their first week.",
      icon: Briefcase,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1557804506-669a67965ba0"
    },
    {
      title: "Documenting Performance Reviews & Employee Feedback",
      description: "HR professionals can record performance evaluation meetings and feedback sessions with employee consent. Helps maintain accurate records of employee development discussions and ensures transparency in the review process.",
      example: "An HR business partner records a quarterly performance review, documenting career development goals and improvement areas.",
      icon: Target,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1600880292203-757bb62b4baf"
    },
    {
      title: "Recording Policy Updates & Compliance Training",
      description: "HR teams can record policy update announcements and mandatory compliance training sessions. Helps ensure all employees understand new regulations, workplace policies, and legal requirements across different departments and locations.",
      example: "An HR director records a workplace harassment prevention training session for all employees to complete.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1454165804606-c3d57bc86b40"
    },
    {
      title: "Creating Internal Communication & Town Hall Videos",
      description: "HR can record company-wide announcements, town halls, and leadership messages to keep all employees informed. Particularly useful for remote teams and organizations with multiple locations to ensure consistent communication.",
      example: "An HR team records the CEO's quarterly update for remote employees who couldn't attend the live session.",
      icon: MessageSquare,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1553877522-43269d4ea984"
    }
  ];

  const faqs = [
    {
      question: "How do we ensure employee privacy when recording HR sessions?",
      answer: "We provide enterprise-grade privacy controls with consent management, secure storage, and role-based access. All recordings are encrypted and only accessible to authorized HR personnel."
    },
    {
      question: "Can we integrate with our existing HRIS systems?",
      answer: "Yes! Our platform integrates with popular HR systems like Workday, BambooHR, and ADP. This ensures seamless workflow integration and automatic employee data synchronization."
    },
    {
      question: "What compliance standards do you meet for HR recordings?",
      answer: "We comply with GDPR, SOC 2, and employment law requirements. Our platform includes consent tracking, data retention policies, and audit trails for compliance documentation."
    },
    {
      question: "How can we use recordings for employee development?",
      answer: "Recordings can be used to create personalized development plans, track progress over time, and provide consistent training experiences. Our analytics help identify skill gaps and training needs."
    },
    {
      question: "Can multiple HR team members collaborate on recordings?",
      answer: "Absolutely! Our platform supports team collaboration with shared workspaces, commenting features, and approval workflows. HR teams can review, edit, and share recordings efficiently."
    },
    {
      question: "What support do you provide for HR implementations?",
      answer: "We offer dedicated HR success managers, custom training programs, and change management support. Our team helps ensure smooth adoption across your organization."
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
            Screen Recorder for HR Teams
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline human resources processes with professional recording solutions. Create effective training programs, conduct remote interviews, and enhance employee communication across your organization.
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
              Discover how HR professionals are leveraging screen recording to improve employee experiences and streamline operations
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
                        alt={`HR team using screen recording for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-gray-700 mb-2">HR Example:</p>
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
              Everything HR teams need to know about implementing recording solutions
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
