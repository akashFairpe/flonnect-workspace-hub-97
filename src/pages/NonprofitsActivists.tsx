
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const NonprofitsActivists = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Awareness Campaigns & Advocacy Videos",
      description: "Nonprofits and activists can record impactful videos to raise awareness about social, environmental, and humanitarian causes. Helps in educating the public and mobilizing support. Can include personal stories, expert interviews, and field reports. Useful for campaigning on social media, websites, and crowdfunding platforms.",
      example: "A climate advocacy group records a video about deforestation's impact on wildlife, encouraging donations to plant trees.",
      icon: Video,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1569163166831-52721dbcd36f"
    },
    {
      title: "Creating Volunteer Training & Onboarding Videos",
      description: "Organizations can record training sessions for new volunteers and staff. Helps in standardizing training materials and reducing onboarding time. Can include guides on fieldwork, safety procedures, and fundraising techniques. Useful for nonprofits working with international or remote volunteers.",
      example: "A disaster relief nonprofit records a training video on 'How to Safely Distribute Aid in Crisis Zones', helping volunteers prepare for missions.",
      icon: GraduationCap,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1559027615-cd4628902d4a"
    },
    {
      title: "Recording Public Speeches & Activist Talks",
      description: "Activists can record and share keynote speeches, rallies, and panel discussions. Helps in amplifying voices beyond live events. Can include motivational messages, policy discussions, and community engagement. Useful for educating and inspiring action on global issues.",
      example: "A human rights activist records a speech on gender equality, sharing it on YouTube to reach a wider audience.",
      icon: Users,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1573164713714-d95e436ab8d6"
    },
    {
      title: "Documenting Community Impact & Success Stories",
      description: "Nonprofits can record testimonials and success stories from beneficiaries. Helps in building credibility and increasing donor trust. Can showcase before-and-after transformations, personal experiences, and impact metrics. Useful for fundraising events, grant applications, and donor reports.",
      example: "A homeless shelter records interviews with people who have successfully transitioned to stable housing, demonstrating the organization's impact.",
      icon: FileText,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1488521787991-ed7bbaae773c"
    },
    {
      title: "Hosting & Recording Virtual Fundraising Events & Webinars",
      description: "Nonprofits can record virtual fundraising events and educational webinars. Helps in engaging potential donors and educating supporters. Can include Q&A sessions, live discussions, and donation appeals. Useful for building an online donor base and sustaining long-term engagement.",
      example: "A wildlife conservation group hosts a virtual Q&A with marine biologists, raising funds for ocean clean-up projects.",
      icon: Search,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1593113598332-cd288d649433"
    }
  ];

  const faqs = [
    {
      question: "How can video content help increase donations and supporter engagement?",
      answer: "Video content creates emotional connections and demonstrates real impact. Our platform helps you create compelling stories, testimonials, and impact videos that resonate with donors and significantly increase engagement and giving rates."
    },
    {
      question: "What tools help nonprofits create professional advocacy content on a budget?",
      answer: "We offer nonprofit pricing and easy-to-use tools that don't require professional video experience. You can create high-impact content with built-in templates, simple editing, and optimization for social media platforms."
    },
    {
      question: "How do we effectively train volunteers using video content?",
      answer: "Video training scales your impact while ensuring consistency. Create once, train many - our platform supports interactive training modules, progress tracking, and certification features perfect for volunteer onboarding and skill development."
    },
    {
      question: "Can we measure the impact of our video campaigns and outreach?",
      answer: "Yes! We provide analytics on video engagement, viewer demographics, and conversion tracking. This helps you understand which messages resonate most and optimize your advocacy and fundraising strategies."
    },
    {
      question: "How can we reach global audiences with our cause?",
      answer: "Our platform supports multi-language subtitles, global distribution, and social media optimization. You can amplify your message worldwide and connect with international supporters, volunteers, and partner organizations."
    },
    {
      question: "What features help with grant applications and reporting?",
      answer: "We offer professional documentation tools, impact measurement features, and reporting templates. You can create compelling grant applications and donor reports that clearly demonstrate your organization's effectiveness and impact."
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
            Screen Recorder for Nonprofits & Activists
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Amplify your cause and drive meaningful change. Create powerful advocacy content, train volunteers effectively, and build supporter communities with recording tools designed for social impact organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Creating Impact
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Nonprofit Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Advocacy Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From awareness campaigns to volunteer training, discover how nonprofits and activists are driving change and building movements
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
                        alt={`Nonprofit and activism environment for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-green-700 mb-2">Impact Example:</p>
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
              Everything nonprofits and activists need to know about creating impactful content and building successful advocacy campaigns
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
            Amplify Your Cause & Drive Change
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join nonprofits and activists who are creating powerful advocacy content and building movements that drive meaningful social change
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Create Impact Content
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonprofitsActivists;
