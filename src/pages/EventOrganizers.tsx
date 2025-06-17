
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const EventOrganizers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Live Events for Replay & Documentation",
      description: "Event organizers can record entire live events for attendees who missed them or for archival purposes. Useful for conferences, concerts, corporate events, and panel discussions. Can include multi-camera recordings, audience reactions, and speaker presentations. Helps create a library of past events for future reference and promotions.",
      example: "A conference organizer records a keynote speech from an industry leader, making it available for on-demand viewing after the event.",
      icon: Video,
      gradient: "from-blue-500 to-purple-600",
      image: "photo-1540575467063-178a50c2df87"
    },
    {
      title: "Capturing Virtual Conferences & Webinars",
      description: "Organizers can record online events, webinars, and virtual summits for later distribution. Helps in expanding audience reach by offering replays. Can include chat discussions, Q&A sessions, and panel interviews. Useful for corporate training, thought leadership summits, and online workshops.",
      example: "A marketing agency records a virtual webinar on 'Social Media Trends for 2024', offering the recording as an exclusive resource for attendees.",
      icon: Users,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1517048676732-d65bc937f952"
    },
    {
      title: "Creating Event Highlights & Promotional Content",
      description: "Helps event organizers edit and compile highlights from live events to use in marketing campaigns. Can include best moments, speaker soundbites, and audience engagement clips. Useful for social media promotions, sponsorship pitches, and future event advertisements. Helps in creating excitement and attracting more attendees for upcoming events.",
      example: "A music festival organizer compiles a highlight reel of performances, crowd reactions, and backstage moments, sharing it on Instagram and YouTube for promotion.",
      icon: FileText,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1492684223066-81342ee5ff30"
    },
    {
      title: "Recording Speaker Sessions & Panel Discussions",
      description: "Organizers can record individual speaker sessions and expert panels for later viewing. Useful for educational conferences, TED-style talks, and leadership forums. Can be repackaged as exclusive content for event attendees or premium subscribers. Helps generate additional revenue through on-demand access or memberships.",
      example: "A tech event records a panel discussion on 'The Future of AI', offering recorded sessions as a paid content package for industry professionals.",
      icon: GraduationCap,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1475721027785-f74eccf877e2"
    },
    {
      title: "Documenting Behind-the-Scenes & Event Setup Processes",
      description: "Event organizers can record behind-the-scenes footage of planning, setup, and execution. Useful for creating case studies, training materials, and team learning. Can be shared with vendors, sponsors, and future clients to showcase event execution capabilities. Helps in training new event staff and optimizing workflow.",
      example: "A wedding planner records the full setup process of a luxury wedding, showing venue transformation and vendor coordination for future clients.",
      icon: Search,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1464366400600-7168b8af9bc3"
    }
  ];

  const faqs = [
    {
      question: "How can we maximize event value with recordings?",
      answer: "Recording events creates lasting value beyond the live experience. You can offer recorded sessions as premium content, create highlight reels for marketing, and build a content library that generates ongoing revenue and engagement."
    },
    {
      question: "What's the best way to record multi-speaker events and panels?",
      answer: "Our platform supports multi-camera recording, automatic speaker switching, and professional audio mixing. You can capture multiple angles, ensure clear audio from all speakers, and create polished final recordings suitable for distribution."
    },
    {
      question: "Can we monetize event recordings and create additional revenue streams?",
      answer: "Absolutely! Many organizers sell access to recorded sessions, create premium membership tiers, or package recordings as educational courses. This transforms one-time events into ongoing revenue opportunities."
    },
    {
      question: "How do we handle virtual and hybrid event recording?",
      answer: "Our solution seamlessly records both in-person and online participants, captures screen shares and presentations, and maintains high quality across all formats. Perfect for today's hybrid event landscape."
    },
    {
      question: "What tools help with event promotion and marketing?",
      answer: "We provide easy highlight creation, social media optimization, and promotional clip generation. You can quickly create teasers, speaker spotlights, and engaging content that drives attendance and sponsorship value."
    },
    {
      question: "How can recordings help improve future event planning?",
      answer: "Recorded events provide valuable insights into audience engagement, speaker performance, and logistical execution. You can analyze what works best and continuously improve your event planning and delivery."
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
            Screen Recorder for Event Organizers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Maximize event impact and create lasting value. Record conferences, capture virtual events, and build content libraries with professional recording tools designed for event professionals and organizers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Event Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Event Solutions
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Event Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From live conferences to virtual summits, discover how event organizers are creating lasting value and building successful event businesses
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
                        alt={`Event organization setup for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-blue-700 mb-2">Event Example:</p>
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
              Everything event organizers need to know about professional recording, content creation, and building successful event businesses
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
            Maximize Your Event Impact
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join event organizers who are creating lasting value and building successful event businesses with professional recording and content creation tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Enhance Event Value
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Event Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventOrganizers;
