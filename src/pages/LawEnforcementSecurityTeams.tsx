
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const LawEnforcementSecurityTeams = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Security Footage & Incident Documentation",
      description: "Law enforcement and security teams can record live security footage to document incidents. Helps in providing visual evidence for investigations and legal proceedings. Useful for monitoring public spaces, crime scenes, and emergency responses. Can be stored in secure databases for future reference.",
      example: "A police department records security camera footage of a public disturbance, helping investigators analyze suspect movements.",
      icon: Video,
      gradient: "from-red-500 to-orange-600",
      image: "photo-1505664194779-8beaceb93744"
    },
    {
      title: "Creating Training Videos for Officers & Security Personnel",
      description: "Agencies can record instructional videos for law enforcement training. Helps in teaching proper protocols, tactical procedures, and legal compliance. Can include use-of-force guidelines, emergency response strategies, and conflict de-escalation techniques. Useful for onboarding new officers and continuous skill development.",
      example: "A police academy records a training video on 'How to Conduct a Safe Traffic Stop', ensuring officers follow best practices in the field.",
      icon: GraduationCap,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1571019613454-1cb2f99b2d8b"
    },
    {
      title: "Documenting Crime Scene Investigations & Evidence Collection",
      description: "Officers can record crime scene walkthroughs to document crucial evidence. Helps in preserving details for forensic analysis and courtroom presentations. Can include recordings of witness statements, suspect interrogations, and chain of custody documentation. Useful for detectives, forensic teams, and prosecutors handling criminal cases.",
      example: "A forensics unit records a crime scene investigation, capturing critical evidence placement for future court use.",
      icon: FileText,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1562564055-71e051d33c19"
    },
    {
      title: "Recording & Monitoring Surveillance Operations",
      description: "Security teams can record surveillance operations for tracking suspicious activities. Helps in preventing crimes, monitoring high-risk areas, and ensuring public safety. Can include drones, body cams, or CCTV feeds for real-time security tracking. Useful for airport security, border patrol, and corporate security teams.",
      example: "A mall security team records surveillance footage of shoplifting incidents, helping store owners take legal action.",
      icon: Search,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1614064641938-3bbee52942c7"
    },
    {
      title: "Creating Public Awareness & Safety Instruction Videos",
      description: "Law enforcement agencies can record safety tutorials and public awareness videos. Helps in educating citizens on crime prevention, emergency protocols, and self-defense tips. Can be shared via social media, government websites, and community outreach programs. Useful for neighborhood safety initiatives and public service announcements (PSAs).",
      example: "A local police department records a video on 'How to Recognize Online Scams', helping citizens protect themselves from fraud.",
      icon: Users,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1551601651-2a8555f1a136"
    }
  ];

  const faqs = [
    {
      question: "How do we ensure legal compliance when recording law enforcement activities?",
      answer: "Our platform includes built-in compliance features for law enforcement, including chain of custody documentation, tamper-proof storage, and audit trails that meet legal evidence standards and court admissibility requirements."
    },
    {
      question: "What security measures protect sensitive law enforcement recordings?",
      answer: "We provide military-grade encryption, secure cloud storage with government compliance, role-based access controls, and detailed audit logs. All recordings are protected according to law enforcement security standards and data protection regulations."
    },
    {
      question: "Can recordings be used as evidence in court proceedings?",
      answer: "Yes! Our platform creates court-admissible recordings with proper metadata, timestamps, and chain of custody documentation. We ensure recordings meet legal standards for evidence presentation in criminal and civil proceedings."
    },
    {
      question: "How can we create effective training programs for officers and security personnel?",
      answer: "We offer specialized training tools including scenario-based recording, interactive modules, and progress tracking. You can create comprehensive training programs covering tactics, procedures, and legal compliance with measurable learning outcomes."
    },
    {
      question: "What features support crime scene documentation and investigation?",
      answer: "Our platform includes 360-degree recording capabilities, evidence marking tools, automatic metadata capture, and integration with forensic databases. Perfect for creating detailed crime scene documentation that supports investigations and court presentations."
    },
    {
      question: "How can we use recordings for community policing and public outreach?",
      answer: "We provide community engagement tools including public-safe content creation, social media optimization, and accessibility features. You can create educational content that builds trust and improves community relations while maintaining security protocols."
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
            Screen Recorder for Law Enforcement & Security Teams
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance public safety and security operations. Document incidents, create training materials, and build community trust with secure recording tools designed for law enforcement and security professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Security Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Security Solutions
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Security Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From incident documentation to training, discover how law enforcement and security teams are enhancing public safety and operational effectiveness
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
                        alt={`Law enforcement and security environment for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-300">
                        <p className="text-sm font-semibold text-red-700 mb-2">Security Example:</p>
                        <p className="text-red-600 italic">
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
              Everything law enforcement and security teams need to know about secure recording and evidence documentation
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
            Enhance Public Safety & Security
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join law enforcement and security professionals who are improving public safety and operational effectiveness with secure recording and documentation tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Strengthen Security Operations
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Security Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawEnforcementSecurityTeams;
