
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, TrendingUp, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const SalesCallRecordingSoftware = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Sales Calls for Training & Skill Improvement",
      description: "Sales teams can record client calls and demos for review and skill development. Helps in analyzing successful pitches and identifying areas for improvement. Useful for new hire training, allowing sales reps to learn from experienced team members. Enables managers to provide constructive feedback based on real conversations.",
      example: "A sales manager records a high-performing sales call and shares it with the team to showcase effective objection-handling techniques and closing strategies.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Capturing Client Requirements & Reducing Miscommunication",
      description: "Ensures accurate documentation of client needs and expectations. Helps avoid misunderstandings by allowing reps to review conversations later. Supports customized proposals by revisiting client-specific requirements. Reduces reliance on manual note-taking during calls.",
      example: "A sales executive records a discovery call with a potential client and revisits the conversation later to ensure all pain points are addressed in the proposal.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Compliance & Legal Documentation for Sales Agreements",
      description: "Records verbal agreements and discussions to protect both parties. Helps in adhering to industry regulations and compliance policies. Useful for businesses operating in highly regulated industries like finance and healthcare. Can be used as proof of commitment in case of disputes.",
      example: "A financial services firm records calls with clients to ensure compliance with regulatory guidelines before finalizing an investment deal.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Enhancing CRM & Sales Strategy with Real Conversations",
      description: "Recorded calls can be stored in a CRM system for reference. Helps in analyzing common objections and client concerns. Aids in refining sales scripts based on real-world interactions. Provides AI-driven insights to improve conversion rates.",
      example: "A SaaS company records all customer interactions and integrates them into their CRM, helping the team analyze buying patterns and objections.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Recording Sales Calls on Mobile for On-the-Go Reps",
      description: "Mobile-friendly recording software helps field sales representatives document meetings and client interactions. Useful for traveling sales teams who need to record conversations from anywhere. Supports instant sharing of important call details with the sales team. Helps in quick follow-ups with potential leads based on recorded discussions.",
      example: "A real estate agent records a client call on their mobile phone while traveling and later reviews the conversation to customize the property pitch.",
      icon: TrendingUp,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "Is call recording legal for sales purposes?",
      answer: "Call recording legality varies by location and situation. Our software includes consent notifications and compliance features to help you follow local laws. We recommend consulting with your legal team about recording requirements in your area."
    },
    {
      question: "Can recordings be automatically transcribed?",
      answer: "Yes! Our AI-powered transcription creates accurate text from your sales calls, making it easy to search for key information, create summaries, and analyze conversation patterns."
    },
    {
      question: "How do recordings integrate with our CRM?",
      answer: "We offer integrations with major CRM platforms like Salesforce, HubSpot, and Pipedrive. Recordings can be automatically linked to contact records and deal stages for complete context."
    },
    {
      question: "Can we analyze sales performance from recordings?",
      answer: "Absolutely! Our analytics track talk time, key phrases, objections, and conversion patterns. This data helps identify top performers and areas for team improvement."
    },
    {
      question: "What about recording quality during poor connections?",
      answer: "Our software adapts to network conditions and includes noise reduction features. We also provide local recording options to ensure quality even during unstable connections."
    },
    {
      question: "How quickly can recordings be shared with the team?",
      answer: "Recordings are available immediately after the call ends. You can share instantly via secure links, add to team folders, or automatically distribute based on deal criteria."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sales Call Recording Software
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Boost your sales performance with professional call recording software. Capture client conversations, train your team, and close more deals with compliance-ready recording solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Sales Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See CRM Integration
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Powerful Sales Recording Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From training to compliance, discover how sales teams are leveraging call recording to drive better results
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
              Everything sales teams need to know about call recording for better performance
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
            Accelerate Your Sales Success
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join top-performing sales teams who are using call recording to improve their results and exceed targets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Boost Sales Performance Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Sales Analytics Features
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCallRecordingSoftware;
