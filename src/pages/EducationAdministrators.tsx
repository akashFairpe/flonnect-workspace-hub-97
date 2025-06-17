
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const EducationAdministrators = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Training Sessions for Staff & Faculty",
      description: "Education administrators can record professional development sessions for teachers and faculty. Helps in standardizing training and onboarding new staff efficiently. Can include teaching methodologies, classroom management strategies, and educational technology training. Useful for K-12 schools, universities, and online learning institutions.",
      example: "A school administrator records a training on 'Effective Use of Smartboards in Classrooms', helping teachers integrate technology into their lessons.",
      icon: GraduationCap,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1517048676732-d65bc937f952"
    },
    {
      title: "Documenting Policy Changes & Institutional Guidelines",
      description: "Administrators can record explanations of school policies, grading systems, and compliance procedures. Helps clarify new guidelines and ensure consistent implementation across the institution. Can be used for accreditation requirements, safety procedures, and student conduct policies. Useful for faculty meetings, HR onboarding, and internal documentation.",
      example: "A university administrator records a session on 'New Grading Policy Updates for Faculty', explaining changes in assessment criteria.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      title: "Creating Leadership & Educational Strategy Presentations",
      description: "Administrators can record leadership discussions, strategic planning, and institutional goals. Helps in aligning faculty and staff with the institution's vision and objectives. Can include budget planning, curriculum development, and performance improvement strategies. Useful for board meetings, leadership training, and departmental collaboration.",
      example: "A college dean records a presentation on 'Improving Student Retention Strategies', outlining new initiatives and faculty responsibilities.",
      icon: Users,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1560472354-b33ff0c44a43"
    },
    {
      title: "Recording Virtual Meetings & Webinars for Faculty Development",
      description: "Administrators can record virtual faculty meetings and panel discussions for staff who couldn't attend live. Helps in providing accessibility to educators in remote or hybrid work environments. Can include Q&A sessions, expert talks, and educational research discussions. Useful for district-wide teacher training and national or international collaborations.",
      example: "A district education officer records a virtual seminar on 'Innovative Teaching Methods for 21st-Century Learners', making it available for all teachers to watch later.",
      icon: Video,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1556761175-b413da4baf72"
    },
    {
      title: "Creating Parent & Student Orientation Videos",
      description: "Administrators can record orientation sessions for parents and students to introduce school programs and policies. Helps in streamlining the admissions process and addressing common questions. Can include campus tours, student code of conduct, and academic expectations. Useful for welcoming new students and fostering community engagement.",
      example: "A school principal records a video tour of the campus, explaining student resources, extracurricular activities, and academic support services.",
      icon: Search,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1523050854058-8df90110c9f1"
    }
  ];

  const faqs = [
    {
      question: "How can recorded training improve faculty development and consistency?",
      answer: "Recorded training ensures consistent messaging across all staff, allows for self-paced learning, and creates a permanent knowledge base. Our platform supports interactive elements, progress tracking, and certification features that enhance professional development effectiveness."
    },
    {
      question: "What features help with policy communication and institutional compliance?",
      answer: "We provide tools for creating clear policy explanations, mandatory viewing tracking, and acknowledgment features. You can ensure all staff understand new policies and maintain compliance records for accreditation and regulatory requirements."
    },
    {
      question: "How can we engage remote faculty and support hybrid work environments?",
      answer: "Our platform supports live streaming, interactive webinars, and accessible recordings that keep remote faculty engaged. Features like Q&A sessions, chat integration, and mobile accessibility ensure everyone can participate regardless of location."
    },
    {
      question: "Can we create effective orientation programs for students and parents?",
      answer: "Yes! We offer virtual tour capabilities, interactive presentations, and multi-language support. You can create comprehensive orientation programs that welcome new families and set clear expectations while reducing administrative workload."
    },
    {
      question: "What analytics help measure training effectiveness and engagement?",
      answer: "We provide detailed analytics on viewing completion, engagement patterns, and knowledge retention. This data helps you identify which training topics need reinforcement and continuously improve your professional development programs."
    },
    {
      question: "How can we streamline communication across multiple campuses or districts?",
      answer: "Our platform supports district-wide broadcasting, campus-specific content, and role-based access. You can efficiently communicate with all stakeholders while maintaining relevant, targeted messaging for different audiences and locations."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Education Administrators
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Strengthen institutional leadership and communication. Create effective training programs, document policies, and build engaged educational communities with recording tools designed for education administrators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Educational Leadership
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Admin Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Administrative Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From faculty training to policy communication, discover how education administrators are improving institutional effectiveness and community engagement
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
                        alt={`Educational administration environment for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-300">
                        <p className="text-sm font-semibold text-green-700 mb-2">Administrative Example:</p>
                        <p className="text-green-600 italic">
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
              Everything education administrators need to know about effective communication and building successful educational institutions
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
            Lead Educational Excellence
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join education administrators who are building stronger institutions and engaged communities through effective communication and professional development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Enhance Educational Leadership
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Institution Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAdministrators;
