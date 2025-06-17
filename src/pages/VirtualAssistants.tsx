
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, TrendingUp, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const VirtualAssistants = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Workflows & Standard Operating Procedures (SOPs) for Clients",
      description: "Virtual assistants (VAs) can record step-by-step guides on how to manage tasks efficiently. Helps clients understand processes like inbox management, CRM updates, scheduling, and automation. Saves time by allowing clients to revisit recorded SOPs instead of repeatedly asking for guidance. Useful for training new team members when scaling a business.",
      example: "A VA records a workflow tutorial on 'How to Schedule and Automate Social Media Posts Using Buffer' and shares it with a client's marketing team.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Creating Training Videos for Clients' Employees & Teams",
      description: "VAs can record internal training videos to help businesses onboard employees. Useful for CRM software tutorials, data entry processes, and internal workflow management. Saves business owners time by allowing them to train employees without repeating instructions. Can be used for customer support documentation as well.",
      example: "A VA records a step-by-step guide on 'How to Use ClickUp for Task Management' for a company's new hires.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Documenting & Explaining Administrative Tasks for Clients",
      description: "VAs can record how they handle daily administrative tasks like inbox management, calendar organization, and data entry. Helps clients understand how work is being managed and allows for easy delegation. Useful for clients who want transparency in their VA's workflow. Great for explaining billing, expense tracking, and reporting tasks.",
      example: "A VA records a monthly video update explaining how they've managed emails, invoices, and scheduling tasks for a business owner.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Recording Website & Social Media Management Tutorials",
      description: "VAs who manage websites or social media can record how they update content, schedule posts, and optimize SEO. Helps clients understand content scheduling, analytics tracking, and engagement tactics. Useful for explaining social media growth strategies, hashtag research, and post engagement. Allows clients to delegate more confidently when they see the process in action.",
      example: "A VA records a social media management workflow, explaining how they plan, create, and schedule Instagram posts using Canva and Later.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Creating Troubleshooting & Tech Support Guides",
      description: "VAs can record videos showing how to fix common tech issues in tools like Gmail, WordPress, Zapier, and Slack. Helps clients avoid technical confusion by having a video reference for future issues. Useful for explaining software integrations, automation workflows, and common errors. Saves time by allowing clients to self-solve small tech problems instead of asking the VA repeatedly.",
      example: "A VA records a troubleshooting guide on 'How to Fix Common Google Drive Sharing Issues' so the client's team can resolve problems independently.",
      icon: TrendingUp,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How can screen recording help me provide better VA services?",
      answer: "Screen recordings allow you to show exactly how you complete tasks, making your value clear to clients. You can create training materials, document processes, and provide visual explanations that are much clearer than written instructions."
    },
    {
      question: "What's the best way to create SOPs for my clients?",
      answer: "Record yourself performing the actual task while explaining each step. Keep videos focused on one process at a time, use clear narration, and include any tips or shortcuts. This creates valuable documentation your clients can reference anytime."
    },
    {
      question: "Can I use recordings to justify my VA rates?",
      answer: "Absolutely! By showing the complexity and value of your work through detailed recordings, clients better understand why your services are worth the investment. It's much more impactful than just listing tasks in a report."
    },
    {
      question: "How do I protect client confidentiality in recordings?",
      answer: "Use our privacy features to blur sensitive information, avoid recording personal data, and always get client consent before recording anything. You can also create generic tutorials using sample data instead of real client information."
    },
    {
      question: "What types of VA tasks work best for video documentation?",
      answer: "Software tutorials, social media management, email organization, CRM management, and any process-based work benefit greatly from video documentation. Basically, any task that involves multiple steps or tools."
    },
    {
      question: "Can I create a library of training videos for multiple clients?",
      answer: "Yes! Create generic process videos that can be shared with multiple clients, and customize specific details for each client. This saves time while providing valuable resources to all your clients."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Virtual Assistants
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance your VA services with professional documentation and training videos. Show your value, streamline client communication, and create valuable resources that set you apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start VA Documentation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See SOP Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential VA Documentation Strategies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From SOPs to training materials, discover how virtual assistants are elevating their services with professional video content
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
                        alt={`Virtual assistant workflow for ${useCase.title.toLowerCase()}`}
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
              Everything virtual assistants need to know about professional service documentation
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
            Elevate Your VA Business
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful virtual assistants who are commanding higher rates and providing exceptional value with professional documentation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Showcase Your VA Expertise
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View VA Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistants;
