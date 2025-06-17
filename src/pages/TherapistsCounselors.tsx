
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const TherapistsCounselors = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Virtual Therapy Sessions for Reference & Follow-Up",
      description: "Therapists and counselors can record virtual sessions with patient consent for progress tracking. Helps in reviewing past discussions, treatment plans, and behavioral patterns. Can be used for therapist self-evaluation and refining future sessions. Useful for one-on-one therapy, couples counseling, and group sessions.",
      example: "A licensed therapist records a virtual CBT (Cognitive Behavioral Therapy) session, reviewing a client's progress in managing anxiety symptoms.",
      icon: Video,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1559757148-5c350d0d3c56"
    },
    {
      title: "Creating Self-Help & Mental Health Awareness Content",
      description: "Counselors can record self-help videos covering topics like stress management, mindfulness, and emotional well-being. Helps in reaching a wider audience through social media, YouTube, or private client portals. Can include guided meditations, breathing exercises, and coping strategies. Useful for clients who need additional support between sessions.",
      example: "A psychologist records a self-help video on 'How to Manage Work-Related Stress', offering simple techniques to reduce anxiety.",
      icon: GraduationCap,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1506905925346-21bda4d32df4"
    },
    {
      title: "Documenting Therapy Techniques & Training for Other Professionals",
      description: "Therapists can record instructional videos on therapy techniques for new counselors and psychology students. Helps in demonstrating therapeutic models like CBT, DBT, and trauma-informed care. Can include role-playing sessions, case study breakdowns, and best practices. Useful for continuing education, licensing courses, and mental health training programs.",
      example: "A licensed trauma therapist records a training video on 'How to Use EMDR Therapy for PTSD', helping new practitioners understand the method.",
      icon: FileText,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1582750433449-648ed127bb54"
    },
    {
      title: "Recording Virtual Support Group Sessions & Webinars",
      description: "Counselors can host and record virtual group therapy or peer support sessions. Helps clients re-watch sessions and reinforce coping mechanisms. Can include grief support, addiction recovery, and mental health Q&A sessions. Useful for online therapy platforms, community outreach, and nonprofit initiatives.",
      example: "A counselor leading an addiction recovery group records a session on 'Managing Triggers and Cravings', providing it as a resource for participants.",
      icon: Users,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1573164713714-d95e436ab8d6"
    },
    {
      title: "Creating Client Educational Resources & Therapy Assignments",
      description: "Therapists can record short educational videos explaining therapy techniques and homework assignments. Helps clients understand therapeutic exercises like journaling, exposure therapy, and thought restructuring. Can include visual demonstrations of relaxation techniques, guided affirmations, and coping mechanisms. Useful for enhancing therapy outcomes and maintaining engagement between sessions.",
      example: "A grief counselor records a video explaining a journaling exercise, helping clients process emotions after losing a loved one.",
      icon: Search,
      gradient: "from-teal-500 to-blue-600",
      image: "photo-1544027993-37dbfe43562a"
    }
  ];

  const faqs = [
    {
      question: "Is recording therapy sessions ethical and legally compliant?",
      answer: "Recording therapy sessions requires explicit client consent and must comply with HIPAA and professional ethics codes. Our platform includes consent management, secure storage, and privacy protections that meet mental health practice standards and legal requirements."
    },
    {
      question: "How secure is storage for sensitive mental health recordings?",
      answer: "We provide HIPAA-compliant security with end-to-end encryption, secure cloud storage, and strict access controls. All recordings are protected with audit trails and can be configured to meet specific mental health practice requirements and client confidentiality standards."
    },
    {
      question: "Can self-help content replace individual therapy sessions?",
      answer: "Self-help videos complement but don't replace individual therapy. Our platform helps you create educational content that supports your clients between sessions and extends your therapeutic reach while maintaining the personal connection that makes therapy effective."
    },
    {
      question: "What features help with group therapy and support sessions?",
      answer: "We offer group recording capabilities, breakout room support, interactive features, and privacy controls. Perfect for group therapy, support groups, and educational workshops while maintaining confidentiality and therapeutic effectiveness."
    },
    {
      question: "How can I create effective training content for other mental health professionals?",
      answer: "Our platform supports demonstration recording, case study presentations, and interactive learning modules. You can create comprehensive training programs covering therapeutic techniques, ethics, and professional development for continuing education and certification."
    },
    {
      question: "Can recordings help with therapy outcome measurement and progress tracking?",
      answer: "Yes! With proper consent, recordings can be valuable for reviewing therapeutic progress, identifying patterns, and refining treatment approaches. Our platform includes progress tracking features and secure documentation tools that support evidence-based practice."
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
            Screen Recorder for Therapists & Counselors
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance therapeutic outcomes and expand your mental health practice. Create self-help content, document sessions, and train professionals with secure recording tools designed for mental health practitioners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Therapeutic Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Mental Health Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Mental Health Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From virtual therapy to professional training, discover how mental health professionals are improving outcomes and expanding their practice
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
                        alt={`Mental health and therapy environment for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-blue-700 mb-2">Therapeutic Example:</p>
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
              Everything therapists and counselors need to know about ethical recording and building successful mental health practices
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
            Transform Mental Health Care
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join mental health professionals who are improving therapeutic outcomes and expanding their practice through secure recording and professional content creation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Enhance Therapeutic Practice
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Mental Health Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistsCounselors;
