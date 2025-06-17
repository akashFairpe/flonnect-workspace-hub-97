
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Calendar, MessageSquare, FileText, BarChart3, Users, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const VirtualAssistants = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Client Onboarding & Process Documentation",
      description: "Virtual assistants can record step-by-step onboarding processes for new clients. Helps standardize service delivery and reduces time spent explaining procedures repeatedly. Can include walkthroughs of tools, communication protocols, and project management systems. Useful for scaling VA services and maintaining consistency across multiple clients.",
      example: "A VA records a comprehensive onboarding video showing how they manage social media accounts, including content scheduling and reporting procedures.",
      icon: Users,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Creating Task Tutorials & Standard Operating Procedures",
      description: "VAs can record detailed tutorials for common tasks and create SOPs for client reference. Helps clients understand processes and enables easy handovers to other team members. Can include administrative tasks, customer service procedures, and specialized workflows. Perfect for building a library of reusable training materials.",
      example: "A virtual assistant creates a tutorial on 'How to Manage Your Email Inbox Efficiently', showing filtering, organizing, and response strategies.",
      icon: FileText,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Recording Client Communication & Meeting Summaries",
      description: "Virtual assistants can record client calls and meetings to create accurate summaries and action items. Helps ensure nothing is missed and provides reference material for future discussions. Can include project updates, strategy sessions, and feedback meetings. Essential for maintaining clear communication and accountability.",
      example: "A VA records a weekly client check-in meeting and creates a detailed summary with action items and deadlines for the client's review.",
      icon: MessageSquare,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1551836022-d5d88e9218df"
    },
    {
      title: "Documenting Research & Data Analysis Processes",
      description: "VAs can record their research methodologies and data analysis processes for client transparency. Helps clients understand the value being provided and enables quality control. Can include market research, competitor analysis, and lead generation processes. Useful for demonstrating expertise and building trust.",
      example: "A research-focused VA records their process for conducting market analysis, showing data sources, analysis methods, and report creation.",
      icon: BarChart3,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      title: "Creating Portfolio Content & Service Demonstrations",
      description: "Virtual assistants can record demonstrations of their services to attract new clients. Helps showcase capabilities and build credibility in the marketplace. Can include before-and-after examples, workflow demonstrations, and results presentations. Perfect for marketing VA services and standing out from competitors.",
      example: "A social media VA creates a portfolio video showing how they transformed a client's social media presence, including strategy and results.",
      icon: Calendar,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1563013544-824ae1b704d3"
    }
  ];

  const faqs = [
    {
      question: "How can recording help me scale my virtual assistant business?",
      answer: "Recording processes creates reusable training materials, reduces onboarding time, and helps maintain consistency across clients. This allows you to serve more clients efficiently while maintaining quality standards."
    },
    {
      question: "What's the best way to record client communications professionally?",
      answer: "Always get consent before recording, use clear audio equipment, and focus on capturing actionable insights. Our platform includes professional recording features and secure storage for client confidentiality."
    },
    {
      question: "Can I create training materials for other virtual assistants?",
      answer: "Absolutely! Recording your expertise allows you to create courses, training programs, and consulting materials. Many successful VAs build additional revenue streams through education and training."
    },
    {
      question: "How do I maintain client confidentiality in recordings?",
      answer: "Our platform includes privacy controls, secure storage, and the ability to blur sensitive information. Always follow client confidentiality agreements and get proper permissions before recording."
    },
    {
      question: "What recording setup works best for virtual assistant work?",
      answer: "A good headset, stable internet connection, and quiet workspace are essential. Our software works with any setup and includes noise reduction features for professional-quality recordings."
    },
    {
      question: "Can recordings help me demonstrate ROI to clients?",
      answer: "Yes! Record before-and-after comparisons, process improvements, and results achievements. Visual demonstrations of your impact help justify your rates and secure long-term client relationships."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Virtual Assistants
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scale your VA business and enhance client relationships. Create professional documentation, training materials, and service demonstrations that showcase your expertise and value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start VA Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View VA Tools
            </Button>
          </div>
        </header>

        <section className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Virtual Assistant Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From client onboarding to service demonstrations, discover how virtual assistants are building successful businesses through professional recording
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
                        alt={`Virtual assistant workspace demonstrating ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-300">
                        <p className="text-sm font-semibold text-indigo-700 mb-2">VA Example:</p>
                        <p className="text-indigo-600 italic">
                          {useCase.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything virtual assistants need to know about professional recording and client service enhancement
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
        </section>

        <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elevate Your VA Services
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful virtual assistants who are building thriving businesses through professional documentation and exceptional client service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Your VA Success
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View VA Success Stories
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VirtualAssistants;
