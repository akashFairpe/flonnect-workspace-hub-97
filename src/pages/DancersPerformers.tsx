
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const DancersPerformers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Creating Dance Instructional & Tutorial Videos",
      description: "Dancers can record step-by-step dance tutorials for beginners, intermediate, and advanced learners. Helps students learn choreography at their own pace. Can include slow-motion breakdowns, counts, and movement explanations. Useful for teaching styles like ballet, hip-hop, salsa, contemporary, and more.",
      example: "A hip-hop dancer records a tutorial on 'How to Master the Moonwalk', breaking down foot placement and movement techniques.",
      icon: GraduationCap,
      gradient: "from-pink-500 to-rose-600",
      image: "photo-1508700115892-45ecd05ae2ad"
    },
    {
      title: "Recording Practice Sessions for Self-Improvement",
      description: "Dancers can record practice routines to analyze technique, posture, and rhythm. Helps in correcting mistakes, refining movements, and tracking progress. Can be used for self-evaluation or shared with mentors for feedback. Useful for preparing for competitions, performances, and auditions.",
      example: "A ballet dancer records a pirouette practice session, reviewing balance and spotting techniques for improvement.",
      icon: Search,
      gradient: "from-purple-500 to-indigo-600",
      image: "photo-1547036967-23d11aacaee0"
    },
    {
      title: "Recording & Sharing Performance Videos",
      description: "Performers can record full performances to share with a wider audience. Helps in building an online presence and promoting their art. Can include stage performances, freestyles, dance battles, and collaborations. Useful for portfolio building, festival submissions, and social media engagement.",
      example: "A contemporary dance group records a stage performance, uploading it on YouTube to attract potential show invitations.",
      icon: Video,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1535525153412-5a42439a210d"
    },
    {
      title: "Creating Social Media Dance Content for Engagement",
      description: "Dancers can record short dance clips for TikTok, Instagram, and YouTube Shorts. Helps in engaging with dance trends, challenges, and viral content. Can include behind-the-scenes clips, mashups, and choreography previews. Useful for gaining followers, collaborations, and brand sponsorships.",
      example: "A TikTok dancer records a 15-second dance challenge, using trending music and hashtags to boost reach.",
      icon: Users,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1494790108755-2616c041b531"
    },
    {
      title: "Producing Online Dance Courses & Monetizing Lessons",
      description: "Dancers can record structured online courses to teach dance techniques. Useful for selling classes on platforms like Udemy, Teachable, or personal websites. Can include warm-up exercises, choreography lessons, and performance tips. Helps in turning dance expertise into a profitable online business.",
      example: "A salsa instructor records a full beginner course on 'Mastering Salsa Basics', offering it as a paid program for students worldwide.",
      icon: FileText,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1504609773096-104ff2c73ba4"
    }
  ];

  const faqs = [
    {
      question: "What's the best camera setup for recording dance tutorials?",
      answer: "For dance tutorials, we recommend full-body shots with multiple camera angles. Our platform supports wide-angle recording, mirror mode for students to follow along, and slow-motion playback for detailed technique breakdown."
    },
    {
      question: "How can I create engaging content for social media dance trends?",
      answer: "Our tools include trending format templates, quick editing features, and social media optimization. You can easily create short-form content, add music synchronization, and format videos specifically for TikTok, Instagram Reels, and YouTube Shorts."
    },
    {
      question: "Can I analyze and improve my dance technique using recordings?",
      answer: "Yes! Our platform includes slow-motion analysis, side-by-side comparison tools, and annotation features. You can mark areas for improvement, track progress over time, and share recordings with instructors for detailed feedback."
    },
    {
      question: "How do I monetize my dance instruction content?",
      answer: "We support comprehensive course creation with structured lessons, progress tracking, and payment integration. You can create full dance programs, offer subscription content, or sell individual technique classes and choreography tutorials."
    },
    {
      question: "What features help with performance recording and promotion?",
      answer: "Our platform offers multi-camera recording, professional audio sync, live streaming capabilities, and promotional editing tools. Perfect for recitals, competitions, and creating high-quality performance portfolios."
    },
    {
      question: "Can I collaborate with other dancers and choreographers remotely?",
      answer: "Absolutely! We support remote collaboration features, synchronized recording, and easy sharing tools. Dancers can create collaborative pieces, participate in virtual dance battles, and work together on choreography projects."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Dancers & Performers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elevate your dance career and share your artistry. Create stunning tutorials, record performances, and build a thriving dance education business with professional recording tools for dancers and performers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Dance Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Dance Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Dance Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From tutorials to performances, discover how dancers are building careers and sharing their passion through professional recording
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
                        alt={`Dance and performance environment for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-300">
                        <p className="text-sm font-semibold text-pink-700 mb-2">Dance Example:</p>
                        <p className="text-pink-600 italic">
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
              Everything dancers and performers need to know about creating compelling content and building successful dance careers
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
            Share Your Dance Passion
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join dancers and performers who are building successful careers and inspiring students worldwide through professional recording and instruction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Your Dance Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Performer Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DancersPerformers;
