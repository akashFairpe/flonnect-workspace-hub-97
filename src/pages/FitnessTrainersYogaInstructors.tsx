
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FitnessTrainersYogaInstructors = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Workout Tutorials & Exercise Demonstrations",
      description: "Trainers can record guided workout sessions for clients to follow at their own pace. Helps in demonstrating proper form, breathing techniques, and movement modifications. Can include beginner, intermediate, and advanced workout variations. Useful for strength training, HIIT, yoga, Pilates, and bodyweight workouts.",
      example: "A fitness coach records a 20-minute full-body HIIT workout, explaining reps, rest periods, and modifications for all fitness levels.",
      icon: Video,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1571019613454-1cb2f99b2d8b"
    },
    {
      title: "Creating Structured Online Training Programs",
      description: "Trainers can record and package complete training programs for clients. Useful for selling online courses, subscription memberships, or custom coaching plans. Can include progressive workout routines, nutrition advice, and motivational coaching. Helps in scaling fitness coaching beyond in-person training.",
      example: "A yoga instructor records a '30-Day Flexibility Challenge', offering daily guided stretching and mobility exercises.",
      icon: GraduationCap,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1544367567-0f2fcb009e0b"
    },
    {
      title: "Recording Client Form Analysis & Personalized Feedback",
      description: "Trainers can record movement assessments to provide clients with personalized corrections. Helps in preventing injuries and improving exercise efficiency. Can include on-screen annotations and voiceover feedback. Useful for remote coaching and online personal training programs.",
      example: "A trainer records a video breakdown of a client's squat form, highlighting knee alignment and posture corrections.",
      icon: FileText,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1434608519344-49d77a699e1d"
    },
    {
      title: "Hosting & Recording Live Virtual Training Sessions",
      description: "Trainers can record live virtual classes for clients who missed the session. Useful for group fitness, personal training, and yoga workshops. Helps in building an online fitness community through social media or membership platforms. Can be used for on-demand fitness content for clients.",
      example: "A yoga instructor records a live morning meditation session, making it available for students to access later.",
      icon: Users,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1506629905527-4d296c71e04d"
    },
    {
      title: "Creating Fitness & Wellness Educational Content",
      description: "Trainers can record nutrition tips, mindset coaching, and injury prevention videos. Helps in educating clients on holistic health and lifestyle habits. Can include meal prep tutorials, recovery techniques, and fitness myths debunked. Useful for social media engagement, YouTube fitness channels, and online coaching businesses.",
      example: "A nutrition coach records a video on '5 Common Mistakes in Weight Loss', educating clients on sustainable fat loss strategies.",
      icon: Search,
      gradient: "from-teal-500 to-blue-600",
      image: "photo-1512621776951-a57141f2eefd"
    }
  ];

  const faqs = [
    {
      question: "What's the best way to record workout demonstrations and form corrections?",
      answer: "For fitness content, we recommend multiple camera angles, clear movement visibility, and slow-motion capabilities. Our platform supports form analysis tools, annotation features, and side-by-side comparisons perfect for demonstrating proper technique."
    },
    {
      question: "How can I create engaging online fitness programs and courses?",
      answer: "We provide course structuring tools, progress tracking, and interactive features that keep clients motivated. You can create comprehensive programs with workouts, nutrition guidance, and community support that deliver real results."
    },
    {
      question: "Can I provide personalized coaching and feedback remotely?",
      answer: "Absolutely! Our platform includes video analysis tools, personalized feedback features, and client communication systems. You can provide detailed form corrections, motivation, and support that rivals in-person training."
    },
    {
      question: "What features support live virtual fitness classes and group training?",
      answer: "We offer live streaming, group interaction tools, and automatic recording for on-demand access. Perfect for yoga classes, group fitness sessions, and building an engaged fitness community online."
    },
    {
      question: "How can I build a successful online fitness business?",
      answer: "Our platform supports subscription models, course sales, and client management systems. You can create multiple revenue streams through programs, personal coaching, and community memberships while scaling beyond local limitations."
    },
    {
      question: "What tools help with nutrition education and holistic wellness content?",
      answer: "We provide screen recording for meal prep demonstrations, slideshow presentations for nutrition education, and integration with wellness tracking apps. Perfect for offering comprehensive health and fitness coaching."
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
            Screen Recorder for Fitness Trainers & Yoga Instructors
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build your fitness empire and transform lives. Create engaging workouts, develop online programs, and scale your coaching with professional recording tools designed for fitness professionals and wellness experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Fitness Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Fitness Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Fitness Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From workout tutorials to online programs, discover how fitness professionals are building successful businesses and transforming lives
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
                        alt={`Fitness and wellness environment for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-green-700 mb-2">Fitness Example:</p>
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
              Everything fitness trainers and yoga instructors need to know about creating compelling content and building successful wellness businesses
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
            Transform Lives & Build Your Empire
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join fitness professionals who are building successful businesses and transforming lives through engaging content and professional coaching programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Build Your Fitness Business
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Trainer Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessTrainersYogaInstructors;
