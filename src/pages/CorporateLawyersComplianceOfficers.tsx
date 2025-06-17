
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Scale, FileText, Users, BookOpen, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const CorporateLawyersComplianceOfficers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Regulatory Training Videos for Employees",
      description: "Corporate lawyers and compliance officers can record training videos on company policies, industry regulations, and legal requirements. Helps employees understand compliance protocols, workplace ethics, and risk management strategies. Can include case studies, scenario-based training, and interactive Q&A segments. Useful for corporate HR, financial institutions, and multinational companies.",
      example: "A compliance officer records a video on 'Understanding Anti-Money Laundering (AML) Laws', explaining how employees can detect and report suspicious transactions.",
      icon: Users,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      title: "Documenting Legal & Compliance Updates for Internal Teams",
      description: "Lawyers can record explanations of new laws, policy changes, and compliance updates affecting the company. Helps teams stay informed about industry regulations without lengthy in-person meetings. Can include screen recordings of legal documents, annotated guidelines, and implications of non-compliance. Useful for financial institutions, healthcare providers, and corporate legal departments.",
      example: "A corporate attorney records a video on 'New Data Privacy Laws in 2024', highlighting how companies must adjust their policies to stay compliant.",
      icon: FileText,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1589829545856-d10d557cf95f"
    },
    {
      title: "Creating Contract Review & Negotiation Training for Legal Teams",
      description: "Corporate lawyers can record contract breakdowns, explaining key clauses and negotiation strategies. Helps internal legal teams understand risk mitigation, contractual obligations, and liability concerns. Can include detailed walkthroughs of NDAs, vendor agreements, and partnership contracts. Useful for business development, procurement, and sales teams negotiating deals.",
      example: "A corporate lawyer records a tutorial on 'How to Identify Red Flags in Vendor Contracts', teaching legal teams how to avoid unfavorable terms.",
      icon: Scale,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1450101499163-c8848c66ca85"
    },
    {
      title: "Hosting & Recording Compliance Webinars & Legal Q&A Sessions",
      description: "Compliance officers can host and record webinars on workplace ethics, anti-corruption laws, and industry compliance. Helps in addressing employee concerns, clarifying policies, and engaging teams with interactive training. Can include guest speakers, case law discussions, and scenario-based learning. Useful for large corporations, startups expanding globally, and regulated industries like healthcare and finance.",
      example: "A compliance officer records a live webinar on 'Ethical Business Practices in Corporate Governance', answering employees' compliance-related questions.",
      icon: BookOpen,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1521737711867-e3b97375f902"
    },
    {
      title: "Capturing Legal Investigations & Incident Reports for Internal Documentation",
      description: "Corporate legal teams can record internal investigation findings for legal documentation and audits. Helps in preserving evidence, ensuring accurate reporting, and maintaining compliance records. Can include interview recordings (with consent), compliance violations, and internal policy breaches. Useful for handling workplace misconduct, fraud investigations, and HR legal matters.",
      example: "A corporate lawyer records a summary of an internal investigation into workplace discrimination claims, detailing findings and recommended actions.",
      icon: Search,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1434030216411-0b793f4b4173"
    }
  ];

  const faqs = [
    {
      question: "How can I ensure compliance training is effective and engaging?",
      answer: "Use real-world scenarios, interactive elements, and case studies relevant to your industry. Our platform includes quiz integration and tracking features to ensure comprehension and completion of compliance training."
    },
    {
      question: "What about recording sensitive legal content and maintaining confidentiality?",
      answer: "We provide enterprise-grade security with end-to-end encryption, access controls, and audit trails. You can create different permission levels for various types of legal content while maintaining strict confidentiality."
    },
    {
      question: "Can I create a searchable library of legal updates and training materials?",
      answer: "Absolutely! Our platform includes content organization, tagging, and search functionality. Build a comprehensive legal knowledge base that teams can easily navigate and reference."
    },
    {
      question: "How do I document internal investigations while maintaining legal privilege?",
      answer: "Our secure recording features include proper metadata handling and privilege protection. You can create detailed investigation records while preserving attorney-client privilege and work product protection."
    },
    {
      question: "Can I track employee completion of mandatory compliance training?",
      answer: "Yes! Our platform includes completion tracking, certification management, and reporting features. Perfect for maintaining compliance records and ensuring all employees complete required training."
    },
    {
      question: "How do I stay current with changing regulations across multiple jurisdictions?",
      answer: "Create regular update sessions and maintain a living library of compliance content. Our platform helps you organize content by jurisdiction, regulation type, and update frequency for comprehensive compliance management."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Corporate Lawyers & Compliance Officers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Strengthen corporate governance and ensure compliance. Create comprehensive training materials, document legal processes, and maintain regulatory standards with secure recording solutions for legal professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Corporate Legal Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Compliance Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Corporate Legal Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From compliance training to legal documentation, discover how corporate legal professionals are ensuring governance and regulatory compliance
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
                        alt={`Corporate legal environment for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-gray-700 mb-2">Corporate Legal Example:</p>
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
              Everything corporate lawyers and compliance officers need to know about secure recording and regulatory compliance
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
            Strengthen Corporate Governance
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join corporate legal professionals who are ensuring compliance, reducing risk, and protecting their organizations through secure recording and training solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Legal Compliance
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Compliance Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateLawyersComplianceOfficers;
