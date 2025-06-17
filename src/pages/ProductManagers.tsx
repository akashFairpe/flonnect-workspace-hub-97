
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, TrendingUp, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ProductManagers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Feature Walkthroughs for Teams & Users",
      description: "Product managers can record detailed walkthroughs explaining how new features work. Helps both internal teams (developers, designers, sales, and support) and end users understand product updates. Can include UI demos, backend logic, and use case scenarios. Reduces repetitive explanations and provides a reusable resource.",
      example: "A PM records a feature demo video on 'How the New AI-Powered Search Works', sharing it with both internal teams and customers.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Documenting Product Roadmaps & Updates",
      description: "Instead of lengthy emails, PMs can record product roadmap updates for stakeholders. Helps align teams on priorities, feature releases, and development timelines. Can visually present progress, upcoming launches, and key objectives. Useful for keeping remote teams informed without needing constant meetings.",
      example: "A PM records a quarterly product roadmap update, showing a timeline of upcoming feature releases with explanations.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Collecting & Communicating User Feedback to Teams",
      description: "PMs can record feedback review sessions to summarize customer pain points and feature requests. Helps designers and developers better understand user needs. Can include screen recordings of customer feedback from support tickets, user interviews, and analytics tools. Useful for prioritizing features and aligning teams on improvements.",
      example: "A PM records a video highlighting common UX issues reported by users, suggesting specific UI/UX changes to improve customer experience.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Training Sales, Customer Support, & Marketing Teams",
      description: "PMs can record internal training videos explaining new features to sales and support teams. Helps customer support agents handle queries effectively. Provides marketing teams with the right messaging to promote new features. Reduces the need for multiple live training sessions.",
      example: "A PM records a 'New Feature Overview' for the sales team, explaining key benefits and how to position it during sales calls.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Creating Internal Product Documentation & Onboarding Guides",
      description: "PMs can record product tutorials for onboarding new employees. Useful for explaining internal tools, workflows, and product architecture. Helps reduce onboarding time for new hires in product and development teams. Can replace long PDF documents with interactive, easy-to-digest videos.",
      example: "A PM records an onboarding guide for new employees, explaining how to navigate internal product dashboards and workflows.",
      icon: TrendingUp,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How can screen recording improve product team communication?",
      answer: "Visual demonstrations are much clearer than written specs. You can show exactly how features should work, explain complex user flows, and ensure everyone understands the product vision. This reduces misunderstandings and speeds up development cycles."
    },
    {
      question: "What's the best way to record product roadmap presentations?",
      answer: "Use visual aids like timelines, mockups, and data charts. Keep presentations focused and under 15 minutes when possible. Our software includes annotation tools to highlight key milestones and dependencies clearly."
    },
    {
      question: "Can I use recordings to gather better user feedback?",
      answer: "Yes! Record user interview sessions (with consent), capture usability testing, and document user journey pain points. Visual feedback is much more actionable than written summaries and helps teams empathize with users better."
    },
    {
      question: "How do I create effective training materials for different teams?",
      answer: "Tailor content to each audience - sales teams need benefit-focused explanations, support teams need troubleshooting details, and developers need technical specifications. Use our templates to create consistent training materials across teams."
    },
    {
      question: "What's the best way to document product requirements?",
      answer: "Record interactive prototypes and mockups while explaining user stories and acceptance criteria. This creates much clearer requirements than written documents and reduces back-and-forth between product and engineering teams."
    },
    {
      question: "Can I track engagement with my product communications?",
      answer: "Yes! Our analytics show which parts of your videos get the most attention, helping you understand what resonates with your audience. This data helps you improve future product communications and identify knowledge gaps."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Product Managers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline product communication and accelerate team alignment. Create compelling feature demos, roadmap presentations, and training materials that drive product success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Product Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See PM Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Product Management Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From feature demos to team training, discover how product managers are driving alignment and success with video communication
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
                        alt={`Product management workflow for ${useCase.title.toLowerCase()}`}
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
              Everything product managers need to know about effective video communication
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
            Drive Product Success with Video
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful product managers who are accelerating product development and improving team collaboration with professional video communication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Accelerate Product Development
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Product Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagers;
