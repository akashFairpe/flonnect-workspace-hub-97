
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Bug, TestTube, UserCheck, Activity, GraduationCap, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const QATesters = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Bug Reports & Reproduction Steps",
      description: "QA testers can record video evidence of software bugs, making it easier for developers to understand and fix issues. Helps in demonstrating step-by-step how to reproduce a bug with clear visual proof. Useful for logging UI glitches, functional errors, performance issues, and broken workflows. Reduces miscommunication between QA teams and developers.",
      example: "A QA tester records a video showing a login issue, where the 'Forgot Password' button is unresponsive on mobile devices.",
      icon: Bug,
      gradient: "from-red-500 to-orange-600",
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Performing Automated & Manual Test Walkthroughs",
      description: "QA teams can record execution of automated test scripts to validate test cases. Helps document manual testing processes for reference and training purposes. Can be used for demonstrating API tests, UI automation, and regression testing. Useful for showing discrepancies between expected and actual test results.",
      example: "A QA engineer records a Selenium test execution, showing how automated scripts validate an e-commerce checkout flow.",
      icon: TestTube,
      gradient: "from-blue-500 to-purple-600",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Recording User Acceptance Testing (UAT) & Beta Testing Sessions",
      description: "QA testers can record user feedback and test sessions during UAT or beta releases. Helps product managers and developers understand how real users interact with the software. Useful for capturing unexpected user behaviors, usability issues, and edge cases. Can include voiceover explanations while performing tests on different devices.",
      example: "A QA tester records a UAT session, showing how test users struggle to find a new feature in the app's navigation menu.",
      icon: UserCheck,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Documenting Performance & Load Testing Results",
      description: "QA engineers can record real-time performance testing sessions to analyze app stability. Useful for capturing slow-loading pages, crashes, and high memory usage scenarios. Can visually present how the system behaves under different user loads. Helps developers identify bottlenecks and optimize system performance.",
      example: "A QA tester records a performance test, showing how the app crashes when 10,000 users try to access the same feature simultaneously.",
      icon: Activity,
      gradient: "from-yellow-500 to-orange-600",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Training New QA Testers & Demonstrating Best Practices",
      description: "QA leads can record test case execution training for onboarding new testers. Helps in standardizing testing procedures across teams. Useful for creating internal documentation on bug reporting, test planning, and issue tracking. Reduces training time by allowing new testers to watch recorded sessions instead of live training.",
      example: "A senior QA tester records a tutorial on 'How to Write Effective Bug Reports', explaining how to log issues in Jira with proper screenshots and steps.",
      icon: GraduationCap,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How can recorded bug reports improve developer communication?",
      answer: "Video bug reports provide visual context that text descriptions can't match. Developers can see exactly what happened, reducing back-and-forth questions and speeding up resolution times by up to 60%."
    },
    {
      question: "Can I record automated test executions for documentation?",
      answer: "Yes! Our software captures test automation runs including console outputs, browser interactions, and API calls. This creates valuable documentation for test maintenance and debugging."
    },
    {
      question: "What's the best way to record user acceptance testing?",
      answer: "Record both the screen and user reactions. Capture their thought process with audio commentary, note any confusion points, and document unexpected behaviors that might indicate usability issues."
    },
    {
      question: "How do I record performance testing effectively?",
      answer: "Use our real-time recording to capture performance metrics, loading times, and system behavior under stress. Include dashboards and monitoring tools in your recordings for comprehensive documentation."
    },
    {
      question: "Can recordings help with QA team training?",
      answer: "Absolutely! Create a library of recorded test executions, bug investigations, and best practices. New team members can learn faster by watching experienced testers work through real scenarios."
    },
    {
      question: "Do you integrate with testing tools and bug trackers?",
      answer: "Yes, we integrate with Jira, Azure DevOps, TestRail, and other popular QA tools. Videos can be automatically attached to bug reports and test cases for better traceability."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for QA Testers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance your testing workflow with comprehensive recording tools. Document bugs, create training materials, and improve team communication with professional QA recording solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start QA Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Testing Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential QA Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From bug documentation to performance testing, discover how QA teams are improving their testing processes and team collaboration
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
                        alt={`QA testing workflow demonstrating ${useCase.title.toLowerCase()}`}
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
              Everything QA testers need to know about professional testing documentation and team collaboration tools
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
            Optimize Your Testing Workflow
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join QA teams worldwide who are improving their testing efficiency and bug documentation with professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Enhance QA Testing Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View QA Integration Features
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QATesters;
