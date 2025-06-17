
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const DietitiansNutritionists = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Meal Planning & Healthy Eating Guides",
      description: "Dietitians can record step-by-step meal planning videos to help clients structure balanced diets. Helps clients understand portion sizes, macronutrient breakdowns, and meal timing. Can include meal prep tutorials, grocery shopping tips, and budget-friendly meal ideas. Useful for weight management, athletic performance, and medical nutrition therapy.",
      example: "A nutritionist records a weekly meal planning video for weight loss, showing easy meal prep strategies and portion control tips.",
      icon: Video,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1490645935967-10de6ba17061"
    },
    {
      title: "Creating Personalized Nutrition Coaching & Diet Assessments",
      description: "Dietitians can record personalized nutrition recommendations for individual clients. Helps in explaining dietary adjustments based on health goals, food preferences, and medical conditions. Can include visual breakdowns of meal tracking apps, food substitutions, and calorie adjustments. Useful for remote nutrition coaching and client follow-ups.",
      example: "A sports dietitian records a video for a client, explaining how to adjust macros for muscle gain, with food examples and portion recommendations.",
      icon: Users,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1512621776951-a57141f2eefd"
    },
    {
      title: "Recording Cooking Demonstrations & Healthy Recipe Tutorials",
      description: "Nutritionists can record healthy recipe videos showcasing easy-to-make meals. Helps in educating clients on nutritious cooking techniques and ingredient swaps. Can include specialized diets such as keto, plant-based, gluten-free, or diabetic-friendly meals. Useful for social media, YouTube, and online wellness programs.",
      example: "A dietitian records a tutorial on 'How to Make a High-Protein Breakfast in 5 Minutes', demonstrating step-by-step meal prep.",
      icon: FileText,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1556909114-f6e7ad7d3136"
    },
    {
      title: "Hosting & Recording Webinars on Nutrition Education",
      description: "Dietitians can host live or recorded webinars on various nutrition topics. Helps in educating clients on topics like gut health, mindful eating, and food myths. Can include Q&A sessions, case study discussions, and expert interviews. Useful for corporate wellness programs, online workshops, and client education.",
      example: "A clinical dietitian records a webinar on 'How to Improve Digestion Naturally', explaining fiber intake, probiotics, and hydration strategies.",
      icon: GraduationCap,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1559757175-0eb30cd8c063"
    },
    {
      title: "Creating Online Nutrition Courses & Membership Content",
      description: "Nutritionists can record structured courses to educate clients and monetize expertise. Helps in scaling nutrition coaching beyond one-on-one consultations. Can include habit-building strategies, meal prep challenges, and interactive worksheets. Useful for selling online courses on platforms like Udemy, Teachable, or a private membership site.",
      example: "A holistic nutritionist creates an online course on 'Mastering Plant-Based Nutrition', covering nutrient needs, meal prep, and grocery shopping tips.",
      icon: Search,
      gradient: "from-teal-500 to-green-600",
      image: "photo-1559757148-5c350d0d3c56"
    }
  ];

  const faqs = [
    {
      question: "How can meal planning videos improve client compliance and results?",
      answer: "Visual meal planning guides make nutrition advice more actionable and easier to follow. Our platform supports step-by-step demonstrations, portion guides, and shopping lists that significantly improve client adherence to nutrition plans."
    },
    {
      question: "What's the best way to provide personalized nutrition coaching remotely?",
      answer: "Video coaching allows for detailed explanations, visual food demonstrations, and personalized feedback. Our platform includes screen recording for meal tracking app tutorials, annotation tools for highlighting important information, and secure client communication."
    },
    {
      question: "How can I create engaging cooking and recipe content?",
      answer: "We provide recipe demonstration tools, ingredient highlighting, and step-by-step recording features. You can create professional cooking videos that teach healthy techniques while building your brand and attracting new clients."
    },
    {
      question: "What features support nutrition education and client workshops?",
      answer: "Our platform includes presentation tools, interactive webinar features, and educational content structuring. Perfect for hosting nutrition workshops, myth-busting sessions, and evidence-based education that establishes your expertise."
    },
    {
      question: "Can I monetize my nutrition expertise through online courses?",
      answer: "Absolutely! We provide comprehensive course creation tools with lesson structuring, progress tracking, and payment integration. You can build and sell nutrition programs covering everything from basic healthy eating to specialized dietary approaches."
    },
    {
      question: "How do I track client progress and engagement with nutrition content?",
      answer: "We offer detailed analytics on content engagement, completion rates, and learning outcomes. This helps you identify which nutrition topics resonate most and continuously improve your coaching effectiveness and client results."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Dietitians & Nutritionists
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empower healthy living and grow your nutrition practice. Create meal planning guides, personalized coaching content, and educational programs with professional recording tools designed for nutrition professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Nutrition Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Nutrition Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Nutrition Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From meal planning to education, discover how nutrition professionals are building successful practices and transforming client health
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
                        alt={`Nutrition and dietitian environment for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-green-700 mb-2">Nutrition Example:</p>
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
              Everything dietitians and nutritionists need to know about creating impactful content and building successful nutrition practices
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
            Transform Lives Through Nutrition
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join nutrition professionals who are building successful practices and empowering healthy living through expert guidance and educational content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Build Your Nutrition Practice
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Nutritionist Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietitiansNutritionists;
