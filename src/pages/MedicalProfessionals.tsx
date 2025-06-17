
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const MedicalProfessionals = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Telemedicine Sessions for Medical Reference",
      description: "Doctors can record virtual consultations with patient consent for later review and follow-up care. Helps ensure accuracy in diagnosis and treatment planning. Useful for tracking patient progress over time. Can be integrated into electronic health records (EHR) for documentation.",
      example: "A primary care physician records a virtual consultation with a chronic illness patient, reviewing symptoms over multiple sessions for better treatment adjustments.",
      icon: Video,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1559757148-5c350d0d3c56"
    },
    {
      title: "Creating Medical Training & Educational Videos",
      description: "Doctors and healthcare professionals can record training videos for interns, medical students, and staff. Useful for demonstrating surgical techniques, diagnosis procedures, and medical protocols. Can be shared internally or used for continuing medical education (CME) programs. Helps train new medical professionals efficiently.",
      example: "A surgeon records a step-by-step guide on 'How to Perform Laparoscopic Surgery', helping residents learn the procedure remotely.",
      icon: GraduationCap,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1576091160399-112ba8d25d1f"
    },
    {
      title: "Documenting Patient Symptoms & Case Studies",
      description: "Physicians can record symptom analysis videos for complex cases. Helps in collaborating with specialists and improving diagnostic accuracy. Can include visual demonstrations of physical symptoms for clinical study. Useful for documenting rare conditions for medical research.",
      example: "A neurologist records patient motor function tests over time, tracking the progression of Parkinson's disease for research.",
      icon: FileText,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1582750433449-648ed127bb54"
    },
    {
      title: "Recording Medical Conference Presentations & Webinars",
      description: "Healthcare professionals can record medical seminars, conferences, and workshops. Useful for reviewing expert discussions, new research, and advancements in healthcare. Can be shared with medical students, hospitals, and global healthcare communities. Helps create an archive of valuable medical knowledge.",
      example: "A cardiologist records a webinar on 'Latest Innovations in Heart Surgery', making it available for international medical professionals.",
      icon: Users,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1631815589968-fdb09a223b1e"
    },
    {
      title: "Capturing Medical Procedures for Compliance & Legal Documentation",
      description: "Hospitals can record medical procedures to ensure compliance with regulatory standards. Helps in maintaining legal documentation for patient safety and malpractice prevention. Useful for auditing medical practices and improving hospital protocols. Can be used in medical malpractice cases as evidence.",
      example: "A hospital records an ICU procedure for quality assurance, ensuring all medical staff follow proper protocol.",
      icon: Search,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1551601651-2a8555f1a136"
    }
  ];

  const faqs = [
    {
      question: "Is recording patient consultations legally compliant with HIPAA?",
      answer: "Recording patient interactions requires proper consent and HIPAA compliance. Our platform includes built-in consent management, encrypted storage, and audit trails to ensure full regulatory compliance for healthcare providers."
    },
    {
      question: "How secure is medical video storage for patient confidentiality?",
      answer: "We provide healthcare-grade security with end-to-end encryption, role-based access controls, and secure cloud storage meeting HIPAA and HITECH requirements. All recordings are encrypted both in transit and at rest."
    },
    {
      question: "Can recordings be integrated with Electronic Health Records (EHR)?",
      answer: "Yes! Our platform integrates with major EHR systems including Epic, Cerner, and Allscripts. Recordings can be automatically linked to patient records and included in medical documentation workflows."
    },
    {
      question: "What features support medical education and training?",
      answer: "We offer specialized tools for medical education including multi-angle recording, annotation capabilities, slow-motion playback, and integration with medical learning management systems for CME credit tracking."
    },
    {
      question: "How can we ensure patient consent for recording medical sessions?",
      answer: "Our platform includes digital consent forms, automated consent verification, and clear recording indicators. We provide templates that meet legal requirements for medical recording consent in various jurisdictions."
    },
    {
      question: "Can recordings be used for medical research and case studies?",
      answer: "Absolutely! With proper IRB approval and patient consent, recordings can be de-identified and used for medical research, case studies, and educational purposes while maintaining full patient privacy protection."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Medical Professionals
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance patient care with secure medical recording solutions. Document consultations, create training materials, and advance medical education with HIPAA-compliant recording tools designed for healthcare professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Medical Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View HIPAA Compliance
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Medical Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From telemedicine to medical education, discover how healthcare professionals are improving patient care and medical training
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
                        alt={`Medical professional environment for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-blue-700 mb-2">Medical Example:</p>
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
              Everything medical professionals need to know about secure, HIPAA-compliant recording and patient care documentation
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
            Advance Medical Care & Education
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join healthcare professionals who are improving patient outcomes and medical training with secure, compliant recording solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Enhance Patient Care
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Medical Compliance Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalProfessionals;
