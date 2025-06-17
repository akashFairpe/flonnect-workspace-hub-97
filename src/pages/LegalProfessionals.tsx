
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, FileText, GraduationCap, Scale, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const LegalProfessionals = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Online Depositions & Witness Statements",
      description: "Legal professionals can record virtual depositions and witness testimonies for documentation and evidence. Helps in capturing accurate verbal statements for court proceedings. Can be used for later transcription and case reference. Useful for remote cases, arbitration hearings, and legal interviews.",
      example: "A lawyer records a Zoom deposition of a witness in a personal injury case, ensuring all statements are documented accurately for trial.",
      icon: Users,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Documenting & Organizing Case Notes",
      description: "Attorneys can record verbal case notes to ensure no critical details are lost. Helps in quickly documenting updates, strategy discussions, and client interactions. Can be used for team collaboration, where lawyers share case updates asynchronously. Useful for criminal, civil, corporate, and family law cases.",
      example: "A defense attorney records a case summary after a client meeting, detailing key facts and next steps for the legal team.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Creating Internal Training & Legal Education Videos",
      description: "Law firms can record training sessions for new associates and paralegals. Helps in standardizing legal procedures and firm policies. Can include explanations on case law, contract drafting, and client handling. Useful for continuing legal education (CLE) and mentorship programs.",
      example: "A senior lawyer records a session on 'Best Practices for Drafting Contracts', helping junior associates improve drafting skills.",
      icon: GraduationCap,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Recording & Explaining Legal Briefs & Contracts",
      description: "Attorneys can record detailed explanations of legal documents for clients. Helps clients understand contracts, agreements, and complex legal terms. Useful for remote consultations and reducing client confusion. Can be used for estate planning, corporate law, and real estate transactions.",
      example: "A real estate attorney records a video explaining a home purchase agreement, ensuring the client understands all clauses before signing.",
      icon: Scale,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Capturing Evidence & Case-Related Research",
      description: "Legal teams can record case research, online findings, and evidentiary analysis. Helps document digital evidence, contracts, or regulatory changes. Can include screen recordings of relevant case laws, statutes, and precedents. Useful for litigation, compliance, and investigative legal work.",
      example: "A corporate attorney records a walkthrough of a new tax regulation update, highlighting its implications for business clients.",
      icon: Search,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "Is recording legal proceedings and client meetings permissible?",
      answer: "Recording requirements vary by jurisdiction and situation. Always obtain proper consent and follow local bar rules and court regulations. Our software includes consent management features to help ensure compliance."
    },
    {
      question: "How secure is the storage for sensitive legal recordings?",
      answer: "We provide attorney-client privilege protection with end-to-end encryption, secure cloud storage, and detailed audit trails. Our platform meets legal industry security standards and compliance requirements."
    },
    {
      question: "Can recordings be used as evidence in court proceedings?",
      answer: "Recorded depositions and witness statements can often be used as evidence when properly authenticated and obtained with consent. Consult local rules of evidence and court procedures for specific requirements."
    },
    {
      question: "How do we ensure client confidentiality with recordings?",
      answer: "Our platform includes attorney-client privilege protection, role-based access controls, and secure sharing features. All recordings are encrypted and can be configured to never leave your local systems if required."
    },
    {
      question: "Can we integrate recordings with our case management system?",
      answer: "Yes! We offer integrations with popular legal software including Clio, MyCase, and LexisNexis. Recordings can be automatically linked to case files and client records for complete documentation."
    },
    {
      question: "What transcription services are available for legal recordings?",
      answer: "We provide professional-grade transcription with legal terminology recognition. Transcripts can be formatted for court use and include speaker identification, timestamps, and certification options."
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
            Screen Recorder for Legal Professionals
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance your legal practice with secure recording solutions. Document depositions, create training materials, and collaborate with teams using compliant recording tools designed for legal professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Legal Recording
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
              5 Essential Legal Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From depositions to client education, discover how legal professionals are improving documentation and client service
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
                        alt={`Legal professional environment for ${useCase.title.toLowerCase()}`}
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
              Everything legal professionals need to know about secure, compliant recording practices and client documentation
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
            Strengthen Your Legal Practice
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join law firms and legal professionals who are improving client service and case documentation with secure, compliant recording solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Enhance Legal Practice
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Legal Compliance Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalProfessionals;
