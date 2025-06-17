
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Microscope, BookOpen, Globe, Users, FlaskConical, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScientistsResearchers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Experiments & Lab Results for Documentation",
      description: "Scientists can record detailed videos of lab experiments for accurate documentation and future reference. Helps in capturing real-time observations, step-by-step methodologies, and unexpected results. Can include time-lapse recordings, microscopy footage, and chemical reactions. Useful for peer-reviewed studies, patents, and research archives.",
      example: "A biochemist records a video of a protein synthesis experiment, documenting procedural steps and reaction outcomes for lab reports.",
      icon: FlaskConical,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1582719471384-894fbb16e074"
    },
    {
      title: "Creating Research Presentations & Conference Submissions",
      description: "Researchers can record video presentations explaining their findings for academic conferences. Helps in clearly communicating complex concepts to a wider audience. Can include data visualizations, slide narrations, and experimental insights. Useful for grant proposals, symposiums, and peer discussions.",
      example: "A climate scientist records a video on 'The Impact of Rising Sea Levels', explaining key data trends and predictive models.",
      icon: BookOpen,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      title: "Documenting Field Research & On-Site Observations",
      description: "Researchers conducting environmental, geological, or archaeological studies can record fieldwork observations. Helps in capturing real-world conditions and preserving raw data. Can include aerial footage, time-lapse recordings, and environmental changes over time. Useful for wildlife studies, geological surveys, and urban planning research.",
      example: "A marine biologist records coral bleaching patterns in the ocean, tracking long-term environmental changes.",
      icon: Globe,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1446776877081-d282a0f896e2"
    },
    {
      title: "Hosting & Recording Scientific Webinars & Lectures",
      description: "Scientists can record online discussions, expert panels, and research webinars. Helps in educating students, researchers, and the public about emerging discoveries. Can include Q&A sessions, lab technique demonstrations, and interdisciplinary collaborations. Useful for universities, scientific organizations, and research institutions.",
      example: "A neuroscientist records a webinar on 'How Sleep Affects Brain Function', sharing insights from their latest study.",
      icon: Users,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1434030216411-0b793f4b4173"
    },
    {
      title: "Creating Training Videos for Lab Procedures & Safety Protocols",
      description: "Research institutions can record lab training videos to standardize experimental techniques. Helps train new researchers, students, and lab assistants efficiently. Can include biosafety guidelines, equipment handling tutorials, and chemical disposal procedures. Useful for medical research labs, pharmaceutical companies, and university science departments.",
      example: "A physics lab records a tutorial on 'How to Use a Scanning Electron Microscope', ensuring consistency in sample preparation and imaging techniques.",
      icon: Microscope,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1563986768609-322da13575f3"
    }
  ];

  const faqs = [
    {
      question: "How can I record high-quality lab experiments and procedures?",
      answer: "Use our high-definition recording features with multiple camera angles, time-lapse capabilities, and microscopy integration. Perfect for documenting detailed experimental procedures and capturing microscopic changes over time."
    },
    {
      question: "Can I create professional research presentations for conferences?",
      answer: "Absolutely! Our platform includes presentation recording, slide integration, and data visualization tools. You can create compelling conference presentations, grant proposals, and peer review materials with professional quality."
    },
    {
      question: "How do I document field research effectively?",
      answer: "Our mobile recording solutions work perfectly for field studies. Capture environmental changes, archaeological discoveries, and wildlife behavior with GPS tracking, weather data, and location-based annotations."
    },
    {
      question: "What about collaboration with international research teams?",
      answer: "We support remote collaboration features, allowing researchers worldwide to review recordings, add annotations, and participate in virtual lab meetings. Perfect for multi-institutional research projects."
    },
    {
      question: "Can I integrate recordings with research databases?",
      answer: "Yes! Our platform integrates with popular research tools and databases, allowing you to link recordings directly to your research data, publications, and grant documentation for comprehensive project management."
    },
    {
      question: "How do I ensure research data security and compliance?",
      answer: "We provide institutional-grade security with end-to-end encryption, compliance with research standards, and secure storage options. Your research data remains protected and accessible only to authorized team members."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Scientists & Researchers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advance scientific discovery through professional recording. Document experiments, create research presentations, and collaborate with teams using tools designed for the scientific community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Scientific Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Research Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Scientific Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From lab documentation to research presentations, discover how scientists are advancing discovery through professional recording solutions
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
                        alt={`Scientific research environment for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-blue-700 mb-2">Research Example:</p>
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
              Everything scientists and researchers need to know about professional recording for research documentation and collaboration
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
            Accelerate Scientific Discovery
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join scientists and researchers who are advancing knowledge through professional recording, documentation, and collaboration tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Research Recording
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Scientific Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientistsResearchers;
