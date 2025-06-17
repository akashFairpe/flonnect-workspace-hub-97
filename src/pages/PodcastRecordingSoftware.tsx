import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Mic, Headphones, Radio, Users, Music, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const PodcastRecordingSoftware = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Solo Podcast Episodes & Monologues",
      description: "Podcasters can record high-quality solo episodes, storytelling sessions, and educational content with professional audio quality. Features noise reduction, audio enhancement, and automatic level adjustment.",
      example: "A business podcaster records a weekly solo episode sharing entrepreneurship tips and industry insights.",
      icon: Mic,
      gradient: "from-purple-600 to-indigo-600",
      image: "photo-1478737270239-2f02b77fc618"
    },
    {
      title: "Capturing Interview Podcasts & Guest Conversations",
      description: "Podcast hosts can record remote interviews and conversations with guests using video calls or audio-only sessions. Supports multiple participants and high-quality audio capture from all sources.",
      example: "A tech podcast host interviews a startup founder via Zoom, recording both video and separate audio tracks for post-production.",
      icon: Users,
      gradient: "from-blue-600 to-cyan-600",
      image: "photo-1589903308904-1010c2294adc"
    },
    {
      title: "Recording Live Podcast Shows & Audience Q&A",
      description: "Podcasters can record live streaming sessions, audience interactions, and Q&A segments for later editing and distribution. Captures both the live energy and allows for polished final episodes.",
      example: "A comedy podcast records their live show with audience laughter and interaction for their weekly episode release.",
      icon: Radio,
      gradient: "from-green-600 to-emerald-600",
      image: "photo-1590602846989-e011ea935fdc"
    },
    {
      title: "Creating Podcast Trailers & Promotional Content",
      description: "Content creators can record podcast trailers, episode previews, and promotional segments to market their shows. Includes tools for adding intro music, sound effects, and compelling hooks.",
      example: "A true crime podcaster creates a dramatic trailer for their new season using recorded narration and atmospheric sound effects.",
      icon: Music,
      gradient: "from-orange-600 to-red-600",
      image: "photo-1493225457124-a3eb161ffa5f"
    },
    {
      title: "Recording Educational Podcast Series & Courses",
      description: "Educators and experts can record structured podcast series, audio courses, and educational content for learning platforms. Perfect for language learning, skill development, and knowledge sharing.",
      example: "A language teacher creates a podcast series teaching Spanish phrases with pronunciation guides and cultural context.",
      icon: Headphones,
      gradient: "from-teal-600 to-green-600",
      image: "photo-1590736969955-71cc94901144"
    }
  ];

  const faqs = [
    {
      question: "What audio quality settings are best for podcasts?",
      answer: "We recommend recording at 44.1kHz/16-bit for most podcasts, with options up to 96kHz/24-bit for premium quality. Our platform automatically optimizes settings based on your podcast type and distribution needs."
    },
    {
      question: "Can I record separate tracks for multiple speakers?",
      answer: "Yes! Our multitrack recording captures each speaker on separate audio tracks, making editing much easier. You can adjust levels, apply effects, and edit each speaker independently."
    },
    {
      question: "How do I reduce background noise and echo?",
      answer: "Our AI-powered noise reduction removes background noise, echo, and room reverb in real-time. We also provide acoustic tips and settings optimization for your recording environment."
    },
    {
      question: "Can I add intro music and sound effects?",
      answer: "Absolutely! Our platform includes a library of royalty-free music and sound effects. You can also upload your own audio elements and create custom intro/outro segments."
    },
    {
      question: "What formats are supported for podcast distribution?",
      answer: "We export in all major podcast formats including MP3, WAV, and M4A. Our distribution tools can automatically upload to podcast platforms like Spotify, Apple Podcasts, and Google Podcasts."
    },
    {
      question: "How do I handle remote guest recording quality?",
      answer: "Our platform provides guest recording tools that capture high-quality audio locally on each participant's device, preventing quality loss from internet connection issues."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Podcast Recording Software
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create professional podcast content with studio-quality recording tools. Capture solo episodes, interviews, and live shows with crystal-clear audio that keeps your audience engaged.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Recording Podcasts
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Audio Features
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Podcast Recording Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how successful podcasters create engaging content that builds loyal audiences and grows their shows
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
                        alt={`Professional podcast recording setup for ${useCase.title.toLowerCase()}`}
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

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything podcasters need to know about professional recording software
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

        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Podcast Journey
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of podcasters who trust our platform for professional-quality recordings and seamless content creation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Record Your First Podcast
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Podcasting Features
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastRecordingSoftware;
