
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, FileText, Presentation, MapPin, GraduationCap, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const Researchers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Interviews for Data Collection & Analysis",
      description: "Researchers can record video interviews with study participants, experts, or focus groups. Helps in documenting qualitative data for academic research, market studies, and case studies. Can be used for later transcription, content analysis, and citation in reports. Useful for social sciences, psychology, anthropology, and business research.",
      example: "A PhD researcher records a Zoom interview with a subject matter expert, later analyzing the conversation for key insights on industry trends.",
      icon: Users,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Documenting Research Findings & Experiment Results",
      description: "Researchers can record their experiments, observations, and study findings. Useful for demonstrating lab procedures, case study findings, and field research. Can include step-by-step explanations with voiceovers and annotations. Helps create visual records that can be referenced later.",
      example: "A biomedical researcher records an experiment on cell behavior under different conditions, documenting the process for future reference and publication.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Creating Research Presentation & Conference Materials",
      description: "Researchers can record presentations of their work for conferences, journal submissions, and peer review. Useful for explaining complex findings with visuals and slide decks. Can be used to practice and refine presentations before live events. Helps in remote academic collaboration and online knowledge-sharing.",
      example: "A climate scientist records a research presentation on global warming trends, using graphs and maps to support the findings.",
      icon: Presentation,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Recording Field Research & On-Site Observations",
      description: "Researchers conducting field studies, environmental assessments, or social observations can record their findings. Useful for capturing real-world evidence, behaviors, and environmental conditions. Helps ensure accurate documentation when working in dynamic or remote locations. Can be used in ecology, anthropology, archaeology, and urban planning research.",
      example: "An anthropologist records a video journal while observing a rural community's traditional practices, documenting cultural behaviors for a research paper.",
      icon: MapPin,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Creating Educational & Training Content for Research Teams",
      description: "Researchers can record training sessions for assistants, students, or colleagues. Useful for teaching research methods, software usage, and data collection techniques. Helps in standardizing processes across teams. Can be shared internally or as open educational resources (OERs).",
      example: "A market researcher records a tutorial on 'How to Analyze Survey Data Using SPSS', helping new team members learn data interpretation techniques.",
      icon: GraduationCap,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How can video recording improve research data quality?",
      answer: "Video recordings capture non-verbal cues, context, and nuanced interactions that written notes might miss. They provide richer qualitative data and allow for multiple analysis passes to identify patterns not initially apparent."
    },
    {
      question: "What are the ethical considerations for recording research?",
      answer: "Always obtain informed consent from participants, clearly explain how recordings will be used, ensure secure storage, and follow your institution's IRB guidelines. Our platform includes consent management and privacy protection features."
    },
    {
      question: "Can I transcribe and analyze recorded research sessions?",
      answer: "Yes! Our software includes AI-powered transcription and basic analysis tools. You can also export recordings to specialized qualitative analysis software like NVivo or Atlas.ti for deeper analysis."
    },
    {
      question: "How do I ensure research recording compliance?",
      answer: "Our platform meets research standards with encrypted storage, audit trails, and data retention policies. We support FERPA, HIPAA, and international research privacy requirements."
    },
    {
      question: "Can I collaborate with research teams on recordings?",
      answer: "Absolutely! Share recordings securely with team members, add collaborative annotations, and maintain version control. Perfect for multi-site studies and international research collaborations."
    },
    {
      question: "What about recording in sensitive research environments?",
      answer: "We offer specialized features for sensitive research including anonymous recording, automatic blur/redaction, and secure local storage options that never upload to cloud servers."
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
            Screen Recorder for Researchers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advance your research with comprehensive recording solutions. Document interviews, capture experiments, and collaborate with teams using secure, compliant recording tools designed for academic and professional research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Research Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Research Features
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Research Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From interview documentation to field studies, discover how researchers are enhancing data collection and academic collaboration
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
                        alt={`Research environment for ${useCase.title.toLowerCase()}`}
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
              Everything researchers need to know about ethical, secure, and effective research recording practices
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
            Advance Your Research Impact
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join researchers worldwide who are enhancing their data collection, improving collaboration, and advancing knowledge with professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Enhance Research Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Academic Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Researchers;
