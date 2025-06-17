
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const PhotographersVideographers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Behind-the-Scenes (BTS) Content from Shoots",
      description: "Photographers & videographers can record BTS footage to show their creative process. Helps clients and followers see the effort, planning, and artistry behind each shoot. Useful for building engagement, storytelling, and branding on social media. Can include gear setup, lighting techniques, and working with models or clients.",
      example: "A wedding photographer records BTS of a bridal shoot, showing how they capture candid moments in natural light.",
      icon: Video,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1502920917128-1aa500764cbd"
    },
    {
      title: "Creating Photography & Videography Tutorials",
      description: "Professionals can record step-by-step guides on photography techniques and camera settings. Useful for teaching composition, lighting, retouching, and videography tips. Can include screen recordings for editing tutorials in Photoshop, Lightroom, or Premiere Pro. Ideal for building a YouTube audience, online courses, or Patreon memberships.",
      example: "A landscape photographer records a tutorial on 'How to Capture Stunning Sunset Photos', explaining camera settings and composition techniques.",
      icon: GraduationCap,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1606983340126-99ab4feaa64a"
    },
    {
      title: "Documenting Client Work & Portfolio Showcases",
      description: "Photographers & videographers can record breakdowns of past projects to showcase skills. Helps attract potential clients by demonstrating expertise and creativity. Can be used for wedding photography, commercial shoots, fashion, or event videography. Works well for LinkedIn, Instagram, and personal portfolio websites.",
      example: "A videographer records a case study on 'Filming a Luxury Real Estate Video', explaining how drone shots and cinematic angles enhance the property's appeal.",
      icon: FileText,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1542038784456-1ea8e935640e"
    },
    {
      title: "Recording Gear Reviews & Recommendations",
      description: "Content creators can record unboxings, hands-on tests, and comparisons of cameras, lenses, and accessories. Helps in educating aspiring photographers and gear enthusiasts. Useful for affiliate marketing, brand collaborations, and tech reviews. Can include real-world shooting tests, low-light performance, and stability tests.",
      example: "A YouTuber records a comparison video of the Canon R6 vs. Sony A7 IV, helping viewers decide the best camera for photography and video.",
      icon: Search,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1526170375885-4d8ecf77b99f"
    },
    {
      title: "Producing Online Courses & Monetizing Educational Content",
      description: "Professionals can record full photography/videography courses for online platforms. Helps teach beginners and advanced users through structured lessons. Can include editing workflows, business tips, and shooting techniques. Works well for selling on Udemy, Skillshare, or personal websites.",
      example: "A portrait photographer creates a course on 'Mastering Natural Light Portraits', offering in-depth lessons on angles, exposure, and editing.",
      icon: Users,
      gradient: "from-teal-500 to-blue-600",
      image: "photo-1471897488648-5eae4ac6686b"
    }
  ];

  const faqs = [
    {
      question: "What's the best way to record behind-the-scenes content during shoots?",
      answer: "We recommend using a secondary camera or smartphone with our mobile app for BTS recording. You can capture the creative process without interrupting your main shoot, then easily edit and share the content for client engagement and social media marketing."
    },
    {
      question: "How can I create professional photography tutorials and courses?",
      answer: "Our platform includes screen recording for editing tutorials, multi-camera support for technique demonstrations, and course structuring tools. You can create comprehensive learning experiences combining shooting, editing, and business advice."
    },
    {
      question: "Can I showcase my portfolio work effectively using video content?",
      answer: "Absolutely! Video portfolios are highly engaging. You can create case studies, before-and-after showcases, and client testimonials that demonstrate your skills and attract new business more effectively than static portfolios alone."
    },
    {
      question: "How do I create engaging gear review content?",
      answer: "Our platform supports comparison layouts, detailed close-ups, and real-world testing scenarios. You can create comprehensive reviews that help other creators while building affiliate partnerships and brand collaborations."
    },
    {
      question: "What features help with monetizing photography education?",
      answer: "We offer complete course creation tools with lesson structuring, progress tracking, and payment integration. You can build and sell comprehensive photography programs covering everything from technical skills to business development."
    },
    {
      question: "Can I collaborate with other photographers and videographers?",
      answer: "Yes! Our platform supports collaborative projects, shared editing workflows, and easy content sharing. You can work with other creators on joint tutorials, gear reviews, or educational series to expand your reach and expertise."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Photographers & Videographers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Showcase your creative vision and build your brand. Create compelling BTS content, educational tutorials, and portfolio showcases with professional recording tools designed for visual storytellers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Creative Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Creative Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Visual Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From behind-the-scenes to education, discover how photographers and videographers are building brands and sharing expertise
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
                        alt={`Photography and videography environment for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-300">
                        <p className="text-sm font-semibold text-cyan-700 mb-2">Creative Example:</p>
                        <p className="text-cyan-600 italic">
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
              Everything photographers and videographers need to know about creating compelling content and building successful creative businesses
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
            Elevate Your Creative Brand
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join photographers and videographers who are building successful brands and inspiring creators worldwide through compelling content and education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Creative Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Creative Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographersVideographers;
