
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Calendar, MapPin, Target, Palette, Heart, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const PersonalJournalers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Daily Video Logs (Vlogs) for Personal Reflection",
      description: "Personal journalers can record daily video entries to document their thoughts, experiences, and emotions. Helps track personal growth, mood changes, and life milestones over time. More engaging and expressive than traditional written journals. Can be stored privately or shared on YouTube, TikTok, or personal blogs.",
      example: "A journaler records a daily vlog titled 'Reflecting on My Week: Wins & Challenges', documenting personal struggles and achievements.",
      icon: Calendar,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Capturing Travel & Life Experiences",
      description: "Journalers can record their travels, special moments, and new experiences. Useful for documenting vacations, adventures, and cultural explorations. Helps create a visual memory bank that can be revisited later. Can be compiled into montages or short highlight videos.",
      example: "A traveler records a vlog about 'Exploring Paris in 3 Days', capturing food, attractions, and personal reflections on the experience.",
      icon: MapPin,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1531297484001-80022131f5a1"
    },
    {
      title: "Creating Self-Improvement & Goal-Tracking Videos",
      description: "Helps journalers track personal goals, progress, and motivation levels. Useful for setting fitness goals, career aspirations, or mental health check-ins. Can include before-and-after comparisons, habit tracking, and motivational talks. Works well for private use or sharing with an online accountability group.",
      example: "A journaler records a video update every month on 'My 30-Day Fitness Challenge Progress', reflecting on workout struggles and improvements.",
      icon: Target,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Expressing Creativity & Storytelling Through Visual Journals",
      description: "Journalers can combine video, voiceovers, and visuals to create artistic personal stories. Useful for documenting hobbies, poetry readings, and creative expression. Can incorporate music, drawings, or animation overlays for a unique touch. Helps with self-expression and mental well-being.",
      example: "A writer records a visual journal titled 'A Day in My Life as a Poet', combining spoken-word poetry with background clips of their creative process.",
      icon: Palette,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1483058712412-4245e9b90334"
    },
    {
      title: "Documenting Family Moments & Personal Milestones",
      description: "Helps in capturing important family events, birthdays, and life transitions. Useful for creating legacy videos to pass down memories. Can be compiled into 'year in review' videos to reflect on life's journey. Allows journalers to preserve emotional moments and growth.",
      example: "A new parent records a video series on 'My Baby's First Year', documenting milestones like first steps, first words, and special moments.",
      icon: Heart,
      gradient: "from-pink-500 to-rose-600",
      image: "photo-1581092795360-fd1ca04f0952"
    }
  ];

  const faqs = [
    {
      question: "How can video journaling improve my mental well-being?",
      answer: "Video journaling provides emotional release, helps process thoughts visually, and creates a record of personal growth. Many users report improved self-awareness and stress relief through regular video reflection."
    },
    {
      question: "Should I keep my video journals private or share them?",
      answer: "Start private to build comfort with the medium. You can always choose to share select videos later. Our platform offers flexible privacy controls to keep content secure while allowing selective sharing."
    },
    {
      question: "What equipment do I need for video journaling?",
      answer: "Just your smartphone or computer! Our software works with any device. Good lighting and clear audio are more important than expensive equipment. We provide tips for improving recording quality with basic setup."
    },
    {
      question: "How often should I record video journal entries?",
      answer: "Start with whatever feels sustainable - daily, weekly, or when inspiration strikes. Consistency matters more than frequency. Many successful journalers begin with weekly entries and adjust based on their schedule."
    },
    {
      question: "Can I organize my video journals by themes or dates?",
      answer: "Yes! Our platform includes tagging, categorization, and search features. Organize by date, mood, themes, or life events to easily find and review specific moments in your journey."
    },
    {
      question: "How do I overcome camera shyness for video journaling?",
      answer: "Start with short entries, practice when relaxed, and remember it's for you. Many users begin by recording audio-only or focusing on objects/activities while talking. Comfort grows with practice."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Personal Journalers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your personal reflection with visual storytelling. Create meaningful video journals, document life experiences, and track your personal growth with intuitive recording tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Video Journaling
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Journaling Features
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Meaningful Personal Journaling Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From daily reflections to milestone documentation, discover how personal journalers are enriching their lives through visual storytelling
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
                        alt={`Personal journaling setup for ${useCase.title.toLowerCase()}`}
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
              Everything personal journalers need to know about video journaling and digital self-reflection
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
            Begin Your Visual Journey
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of journalers who are documenting their lives, tracking growth, and creating meaningful memories with video journaling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Your Journal Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Journaling Templates
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalJournalers;
