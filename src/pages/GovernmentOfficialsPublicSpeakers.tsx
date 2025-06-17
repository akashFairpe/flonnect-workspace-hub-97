
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const GovernmentOfficialsPublicSpeakers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Public Addresses & Announcements",
      description: "Government officials can record official statements, policy updates, and public addresses for citizens. Helps in ensuring clear communication on important issues such as public health, safety, and governance. Can be shared on government websites, news outlets, and social media. Useful for emergency briefings, national updates, and community messages.",
      example: "A mayor records a video announcement about new city regulations, providing clarity on changes affecting residents.",
      icon: Video,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1559757175-0eb30cd8c063"
    },
    {
      title: "Documenting Virtual Government Meetings & Press Briefings",
      description: "Officials can record online meetings, press conferences, and policy discussions for transparency. Helps in keeping track of important decisions and making meetings accessible to the public. Can be shared with journalists, government departments, and citizens. Useful for council meetings, legislative discussions, and interdepartmental updates.",
      example: "A state official records a virtual meeting discussing budget allocations, allowing the public to stay informed on government spending.",
      icon: Users,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1517048676732-d65bc937f952"
    },
    {
      title: "Creating Training & Educational Videos for Government Employees",
      description: "Government agencies can record training sessions for new employees and officials. Helps in standardizing processes and improving efficiency in public service. Can include policy implementation guidelines, cybersecurity training, and crisis management procedures. Useful for law enforcement, healthcare officials, and administrative staff.",
      example: "A government HR department records a training video on 'Best Practices for Handling Public Complaints', helping officials manage citizen concerns effectively.",
      icon: GraduationCap,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1560472354-b33ff0c44a43"
    },
    {
      title: "Recording & Broadcasting Public Speeches & Presentations",
      description: "Public speakers can record keynote speeches, motivational talks, and expert insights. Helps in reaching a global audience beyond live events. Can include recordings of leadership summits, TED-style talks, and community engagements. Useful for influencing public opinion and engaging citizens in meaningful discussions.",
      example: "A political leader records a speech on 'The Future of Renewable Energy', sharing it with stakeholders and climate activists.",
      icon: FileText,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1475721027785-f74eccf877e2"
    },
    {
      title: "Capturing & Archiving Historical Government Events",
      description: "Government officials can record important historical moments, inaugurations, and national celebrations. Helps in preserving government archives for future reference. Can be used for educational purposes, media reports, and public access. Useful for legislative milestones, presidential addresses, and diplomatic events.",
      example: "A national government records a signing ceremony for a landmark peace agreement, archiving the moment for historical documentation.",
      icon: Search,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1589578527966-fdac0f44566c"
    }
  ];

  const faqs = [
    {
      question: "How can government recordings improve public transparency and engagement?",
      answer: "Recording government proceedings, speeches, and announcements creates an accessible archive for citizens. Our platform provides tools for easy sharing, subtitles, and searchable transcripts that enhance government transparency and public engagement."
    },
    {
      question: "What security features protect sensitive government communications?",
      answer: "We offer government-grade security with end-to-end encryption, secure cloud storage, and role-based access controls. All recordings are protected with audit trails and can be configured to meet specific government security requirements and compliance standards."
    },
    {
      question: "Can recordings be used for official government documentation and archiving?",
      answer: "Absolutely! Our platform supports official documentation standards with timestamp verification, digital signatures, and tamper-proof storage. Perfect for creating legal government archives and maintaining historical records of important events and decisions."
    },
    {
      question: "How do we ensure public accessibility for recorded government content?",
      answer: "We provide accessibility features including automatic transcription, multiple language support, and ADA-compliant players. This ensures all citizens can access government content regardless of hearing, visual, or language barriers."
    },
    {
      question: "What tools help with crisis communication and emergency announcements?",
      answer: "Our platform includes rapid deployment features, multi-channel distribution, and emergency alert integration. Government officials can quickly record and distribute critical information across multiple platforms during emergencies or urgent situations."
    },
    {
      question: "Can we integrate with existing government communication systems?",
      answer: "Yes! We offer API integrations with government websites, social media management tools, and official communication platforms. This streamlines the process of recording, editing, and distributing government content across all official channels."
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
            Screen Recorder for Government Officials & Public Speakers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance public communication and government transparency. Record official addresses, document meetings, and engage citizens with secure recording tools designed for government officials and public speakers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Official Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Government Solutions
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Government Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From public addresses to official documentation, discover how government officials are improving transparency and citizen engagement
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
                        alt={`Government and public speaking environment for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-300">
                        <p className="text-sm font-semibold text-blue-700 mb-2">Government Example:</p>
                        <p className="text-blue-600 italic">
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
              Everything government officials and public speakers need to know about secure recording and transparent public communication
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
            Enhance Public Service & Communication
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join government officials and public speakers who are improving transparency and citizen engagement through professional recording and communication tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Improve Public Service
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Government Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentOfficialsPublicSpeakers;
