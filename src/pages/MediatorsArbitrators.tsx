
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Scale, GraduationCap, Users, BookOpen, FileText, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const MediatorsArbitrators = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Case Reviews & Settlement Summaries",
      description: "Mediators and arbitrators can record case analysis videos to document key issues and settlement options. Helps parties understand legal positions, past case references, and possible resolutions. Can include summarized evidence, legal precedents, and expert opinions. Useful for business disputes, contract disagreements, and family mediation.",
      example: "A mediator records a video summarizing a commercial contract dispute, explaining potential settlement terms to both parties.",
      icon: FileText,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1589829545856-d10d557cf95f"
    },
    {
      title: "Capturing Mediation & Arbitration Training Sessions",
      description: "Professionals can record training videos for new mediators and legal practitioners. Helps in teaching negotiation techniques, legal frameworks, and conflict resolution skills. Can include real-life mediation scenarios, role-play exercises, and ethical considerations. Useful for law firms, corporate HR, and international dispute resolution teams.",
      example: "A senior arbitrator records a session on 'Best Practices in Workplace Mediation', covering confidentiality and neutrality.",
      icon: GraduationCap,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1521737711867-e3b97375f902"
    },
    {
      title: "Hosting & Recording Virtual Mediation & Negotiation Sessions",
      description: "Mediators can record virtual settlement discussions (with consent) for reference and documentation. Helps in ensuring transparency, tracking agreed-upon terms, and preventing misunderstandings. Can include employment disputes, business contract negotiations, and family law settlements. Useful for remote mediation, cross-border arbitration, and digital legal documentation.",
      example: "A family law mediator records a virtual custody mediation session, documenting discussions around visitation rights and child support.",
      icon: Users,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1560472354-b33ff0c44a43"
    },
    {
      title: "Creating Educational Webinars on Dispute Resolution & Legal Rights",
      description: "Arbitrators can host and record public education sessions on legal dispute resolution. Helps in raising awareness about mediation benefits and legal alternatives to litigation. Can include explanations of arbitration clauses, settlement options, and negotiation strategies. Useful for business owners, employees, and individuals involved in legal conflicts.",
      example: "A corporate arbitrator records a webinar on 'How Mediation Can Save Time & Legal Costs in Business Disputes', providing case studies on successful settlements.",
      icon: BookOpen,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1554224155-6726b3ff858f"
    },
    {
      title: "Documenting Legal Agreements & Settlement Terms for Compliance",
      description: "Mediators can record settlement agreements to ensure compliance and accountability. Helps in clarifying agreed-upon terms and preventing future disputes. Can include recorded summaries of financial settlements, contract renegotiations, and liability releases. Useful for commercial arbitration, real estate disputes, and labor law settlements.",
      example: "A labor dispute mediator records a video outlining a final settlement agreement, ensuring both employer and employee understand their obligations.",
      icon: Scale,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1450101499163-c8848c66ca85"
    }
  ];

  const faqs = [
    {
      question: "Is it appropriate to record mediation and arbitration sessions?",
      answer: "Recording requires explicit consent from all parties and must comply with confidentiality agreements and local regulations. Our platform includes consent management and secure storage features designed for legal proceedings."
    },
    {
      question: "How can I ensure confidentiality in recorded dispute resolution sessions?",
      answer: "We provide end-to-end encryption, secure access controls, and confidentiality features that meet legal standards. You can set specific access permissions and maintain the privileged nature of mediation communications."
    },
    {
      question: "Can recordings be used as evidence or for enforcement purposes?",
      answer: "When properly obtained with consent and following procedural requirements, recordings can serve as valuable documentation. Always consult local rules and regulations regarding the admissibility of recorded mediation sessions."
    },
    {
      question: "How do I create effective training materials for dispute resolution?",
      answer: "Use real case scenarios (anonymized), role-playing exercises, and step-by-step technique demonstrations. Our platform supports interactive elements and scenario-based learning for comprehensive training programs."
    },
    {
      question: "What about international disputes and cross-border mediation?",
      answer: "Our platform supports multi-language capabilities and complies with international standards for legal documentation. Perfect for international arbitration and cross-border dispute resolution processes."
    },
    {
      question: "Can I create public education content about alternative dispute resolution?",
      answer: "Absolutely! Record educational webinars, informational sessions, and awareness campaigns about mediation benefits. Help the public understand alternatives to litigation while building your professional reputation."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Mediators & Arbitrators
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance dispute resolution and professional practice. Create training materials, document settlements, and build educational content with secure recording solutions designed for mediation and arbitration professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Mediation Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Resolution Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Mediation & Arbitration Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From case documentation to training programs, discover how dispute resolution professionals are improving practice and building expertise
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
                        alt={`Mediation and arbitration environment for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-blue-700 mb-2">Resolution Example:</p>
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
              Everything mediators and arbitrators need to know about professional recording and dispute resolution documentation
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
            Advance Dispute Resolution
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join mediation and arbitration professionals who are improving practice outcomes, building expertise, and serving clients better through professional recording solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Resolution Success
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Resolution Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediatorsArbitrators;
