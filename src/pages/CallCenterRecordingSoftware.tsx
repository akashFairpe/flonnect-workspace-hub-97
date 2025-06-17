import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Headphones, Shield, BarChart, Clock, MessageSquare, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const CallCenterRecordingSoftware = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Customer Service Calls for Quality Assurance",
      description: "Call centers can record customer interactions to monitor service quality and ensure compliance with company standards. Helps identify training opportunities and maintain consistent customer experiences across all agents.",
      example: "A customer service manager reviews recorded calls to evaluate agent performance and provide targeted coaching on handling difficult situations.",
      icon: Headphones,
      gradient: "from-blue-600 to-cyan-600",
      image: "photo-1553877522-43269d4ea984"
    },
    {
      title: "Compliance Recording for Regulated Industries",
      description: "Financial services, healthcare, and other regulated industries can record calls to meet compliance requirements. Ensures all customer interactions follow legal guidelines and industry regulations.",
      example: "A bank call center records all customer service calls to comply with financial regulations and maintain audit trails.",
      icon: Shield,
      gradient: "from-green-600 to-teal-600",
      image: "photo-1450101499163-c8848c66ca85"
    },
    {
      title: "Performance Analytics & Agent Coaching",
      description: "Supervisors can analyze recorded calls to identify patterns, measure KPIs, and provide data-driven coaching. Helps improve first-call resolution rates and customer satisfaction scores.",
      example: "A call center supervisor uses call analytics to identify agents who excel at upselling and shares their techniques with the team.",
      icon: BarChart,
      gradient: "from-purple-600 to-indigo-600",
      image: "photo-1551836022-d5d88e9218df"
    },
    {
      title: "Training New Agents with Real Call Examples",
      description: "Call centers can use recorded calls as training materials for new agents. Provides real-world examples of best practices and common scenarios they'll encounter.",
      example: "A training manager creates a library of exemplary customer service calls for new agent onboarding programs.",
      icon: Clock,
      gradient: "from-orange-600 to-yellow-600",
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      title: "Dispute Resolution & Customer Feedback",
      description: "Recorded calls can be used to resolve customer disputes and gather feedback for service improvements. Provides objective evidence of what was discussed during customer interactions.",
      example: "A customer service manager reviews a recorded call to resolve a billing dispute and understand the customer's concerns.",
      icon: MessageSquare,
      gradient: "from-red-600 to-pink-600",
      image: "photo-1600880292203-757bb62b4baf"
    }
  ];

  const faqs = [
    {
      question: "How do we ensure compliance with call recording laws?",
      answer: "Our software includes built-in compliance features like consent notifications, automatic disclaimers, and region-specific recording policies to help you stay compliant with local laws."
    },
    {
      question: "Can we integrate with our existing call center software?",
      answer: "Yes! We integrate with major call center platforms including Genesys, Avaya, Cisco, and Five9. Our API also supports custom integrations with proprietary systems."
    },
    {
      question: "What analytics can we get from recorded calls?",
      answer: "Our AI analytics provide sentiment analysis, keyword detection, talk time ratios, silence analysis, and custom scoring metrics to help improve agent performance and customer satisfaction."
    },
    {
      question: "How long are call recordings stored?",
      answer: "Storage duration is customizable based on your compliance needs. We offer flexible retention policies from 30 days to permanent storage with automated archiving options."
    },
    {
      question: "Can supervisors listen to calls in real-time?",
      answer: "Yes, our platform supports real-time monitoring, whisper coaching, and live call barging. Supervisors can provide immediate assistance when needed."
    },
    {
      question: "What security measures protect our call recordings?",
      answer: "We use enterprise-grade encryption, secure cloud storage, role-based access controls, and maintain SOC 2 compliance to protect sensitive customer conversations."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Call Center Recording Software
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance customer service quality with professional call recording solutions. Monitor performance, ensure compliance, and improve agent training for exceptional customer experiences.
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

        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Call Center Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how leading call centers use recording technology to improve service quality and operational efficiency
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
