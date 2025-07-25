
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ReligiousSpiritualLeaders = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Sermons & Teachings for Online Congregations",
      description: "Religious leaders can record and share sermons for followers who cannot attend in person. Helps spread teachings beyond physical locations through online platforms. Can be uploaded to YouTube, Facebook, church/mosque/temple websites, or podcasts. Useful for weekly messages, special sermons, and holiday celebrations.",
      example: "A pastor records a Sunday sermon on 'The Power of Faith During Difficult Times', sharing it with church members via YouTube.",
      icon: Video,
      gradient: "from-purple-500 to-indigo-600",
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      title: "Creating Religious Education & Spiritual Growth Content",
      description: "Spiritual leaders can record lessons on scripture interpretation, prayers, and theological discussions. Helps in teaching followers about religious texts, traditions, and practices. Can be used for Sunday school, Bible study, Quranic lessons, or spiritual growth courses. Useful for personal development, meditation guidance, and moral teachings.",
      example: "An Islamic scholar records a series on 'Understanding the Teachings of the Quran', breaking down key verses with explanations.",
      icon: GraduationCap,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1481627834876-b7833e8f5570"
    },
    {
      title: "Hosting & Recording Virtual Prayer Sessions & Devotions",
      description: "Religious organizations can record prayer meetings, meditations, and worship sessions for remote followers. Helps in bringing communities together, even when they are apart. Can include live-streamed or pre-recorded guided prayers and devotionals. Useful for morning prayers, evening devotions, and spiritual retreats.",
      example: "A Buddhist monk records a guided meditation session, helping followers practice mindfulness from home.",
      icon: Users,
      gradient: "from-orange-500 to-yellow-600",
      image: "photo-1544216717-3bbf52512659"
    },
    {
      title: "Preserving & Sharing Religious Rituals & Traditions",
      description: "Religious leaders can record sacred ceremonies and traditional practices for documentation and education. Helps future generations understand and maintain cultural heritage. Useful for weddings, baptisms, religious holidays, and community events. Can be shared with followers worldwide for cultural and spiritual connection.",
      example: "A Hindu priest records a traditional Diwali celebration, explaining its significance and rituals for younger generations.",
      icon: FileText,
      gradient: "from-red-500 to-pink-600",
      image: "photo-1553062407-98eeb64c6a62"
    },
    {
      title: "Training & Teaching Religious Leadership Skills",
      description: "Religious institutions can record training sessions for new clergy, volunteers, and ministry leaders. Helps train future spiritual leaders in sermon delivery, counseling, and community service. Can be used for theological education, leadership courses, and mentorship programs. Useful for creating structured learning materials for seminaries and spiritual schools.",
      example: "A church records a leadership training video on 'How to Deliver an Effective Sermon', helping young pastors improve their communication skills.",
      icon: Search,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1434030216411-0b793f4b4173"
    }
  ];

  const faqs = [
    {
      question: "How can we reach congregation members who cannot attend in person?",
      answer: "Our platform enables live streaming and recording of services, sermons, and prayer sessions. Content can be easily shared across multiple platforms including YouTube, Facebook, and your website to reach all congregation members."
    },
    {
      question: "What features support religious education and scripture study?",
      answer: "We offer annotation tools, chapter markers, and interactive elements perfect for scripture study. You can highlight key passages, add commentary overlays, and create searchable libraries of religious teachings."
    },
    {
      question: "Can we preserve and document religious ceremonies and traditions?",
      answer: "Absolutely! Our high-quality recording captures important ceremonies, rituals, and cultural traditions. These recordings can serve as historical archives and educational resources for future generations."
    },
    {
      question: "How do we build an online spiritual community?",
      answer: "Our platform supports interactive features like live chat during services, Q&A sessions, and community sharing tools. This helps maintain spiritual connections even when physically apart."
    },
    {
      question: "What tools help with sermon preparation and delivery training?",
      answer: "We provide recording and playback features perfect for sermon practice, delivery analysis, and leadership training. You can review speaking techniques, timing, and engagement to improve your ministry skills."
    },
    {
      question: "Can we monetize religious education content or courses?",
      answer: "Yes! Many religious leaders create online courses, workshops, and educational series. Our platform supports structured content delivery and can integrate with various monetization platforms while maintaining the sacred nature of your teachings."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Religious & Spiritual Leaders
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expand your ministry and spiritual reach. Record sermons, create religious education content, and build online spiritual communities with tools designed for faith leaders and religious organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Spiritual Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Ministry Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Spiritual Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From sermons to spiritual education, discover how religious leaders are expanding their ministry and building stronger faith communities
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
                        alt={`Religious and spiritual environment for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-300">
                        <p className="text-sm font-semibold text-purple-700 mb-2">Ministry Example:</p>
                        <p className="text-purple-600 italic">
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
              Everything religious and spiritual leaders need to know about expanding their ministry through digital recording and online community building
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
            Expand Your Spiritual Ministry
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join religious leaders who are reaching more souls and building stronger faith communities through digital ministry and spiritual education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Enhance Your Ministry
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Faith Community Tools
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReligiousSpiritualLeaders;
