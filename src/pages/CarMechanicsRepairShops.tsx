
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Wrench, Search, Camera, Users, AlertTriangle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const CarMechanicsRepairShops = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Repair Guides & Step-by-Step Fixes",
      description: "Car mechanics can record detailed tutorials on fixing common vehicle issues. Helps customers understand simple repairs they can do themselves or know what to expect when visiting a shop. Can include oil changes, brake pad replacements, battery changes, and engine diagnostics. Useful for DIY car enthusiasts, mechanics-in-training, and customers looking for transparency in repairs.",
      example: "A mechanic records a video on 'How to Replace Brake Pads on a Toyota Camry', showing the entire process from removing old pads to reassembling safely.",
      icon: Wrench,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1607860108855-64acf2078ed9"
    },
    {
      title: "Creating Troubleshooting Videos for Common Car Problems",
      description: "Repair shops can record diagnostic guides to help identify vehicle issues. Helps in educating customers on early warning signs of mechanical problems. Can include engine noises, dashboard warning lights, or transmission issues. Useful for preventing minor issues from turning into costly repairs.",
      example: "A mechanic records a guide on 'What Different Engine Noises Mean', explaining the causes of knocking, ticking, and squealing sounds.",
      icon: Search,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1558618666-fcd25c85cd64"
    },
    {
      title: "Documenting Before & After Repair Comparisons",
      description: "Mechanics can record vehicle condition before and after repairs to show improvements. Helps in building customer trust by visually demonstrating fixes. Can include engine rebuilds, dent removals, paint corrections, and performance upgrades. Useful for marketing and proving quality workmanship to customers.",
      example: "A body shop records a before-and-after video of a dented bumper repair, showing the transformation for a social media promotion.",
      icon: Camera,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1619642751034-765dfdf7c58e"
    },
    {
      title: "Hosting & Recording Virtual Car Maintenance Workshops",
      description: "Auto shops can host and record educational workshops on vehicle maintenance. Helps customers learn how to take better care of their vehicles. Can include seasonal maintenance tips, tire rotation guides, and fuel efficiency hacks. Useful for attracting new customers and establishing authority in the automotive industry.",
      example: "A mechanic hosts a live webinar on 'Winter Car Maintenance Tips', teaching drivers how to prepare their cars for cold weather.",
      icon: Users,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1579952363873-27d3bfad9c0d"
    },
    {
      title: "Capturing Vendor & Team Training for Shop Operations",
      description: "Auto repair shops can record training videos for staff to maintain consistent service quality. Helps in standardizing diagnostic techniques, safety procedures, and repair workflows. Can include software tutorials for auto diagnostics, customer service training, and repair best practices. Useful for onboarding new mechanics and improving shop efficiency.",
      example: "A shop manager records a training video on 'How to Use OBD-II Scanners for Engine Diagnostics', teaching mechanics how to interpret trouble codes accurately.",
      icon: AlertTriangle,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1615906655593-ad0386982a0f"
    }
  ];

  const faqs = [
    {
      question: "How can I create effective automotive repair tutorials?",
      answer: "Use multiple camera angles to show detailed work, include close-ups of parts and tools, and provide clear step-by-step narration. Our platform helps create professional tutorials that customers and mechanics can easily follow."
    },
    {
      question: "What's the best way to document vehicle diagnostics?",
      answer: "Record the diagnostic process from initial symptoms through testing and final repair. Include OBD scanner readings, visual inspections, and explanation of findings to create comprehensive diagnostic documentation."
    },
    {
      question: "Can I use recordings to build customer trust and transparency?",
      answer: "Absolutely! Document the repair process, show before-and-after conditions, and explain what was done. This builds trust and helps customers understand the value of your services."
    },
    {
      question: "How do I create engaging content for automotive enthusiasts?",
      answer: "Focus on popular topics like performance upgrades, maintenance tips, and troubleshooting guides. Use clear explanations and show real-world applications to engage both DIY enthusiasts and professional mechanics."
    },
    {
      question: "Can I train my team effectively using recorded content?",
      answer: "Yes! Create standardized training materials for diagnostic procedures, safety protocols, and customer service. This ensures consistent quality across your team and efficient onboarding of new mechanics."
    },
    {
      question: "How do I showcase my shop's expertise and attract customers?",
      answer: "Create educational content that demonstrates your knowledge, show complex repairs you've completed, and share maintenance tips. This positions your shop as an expert and attracts customers seeking quality service."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Car Mechanics & Repair Shops
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build trust and grow your automotive business. Create detailed repair guides, diagnostic tutorials, and training materials that showcase expertise and improve customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Automotive Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Mechanic Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Automotive Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From repair tutorials to customer education, discover how automotive professionals are building trust and growing their businesses
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
                        alt={`Automotive repair shop environment for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-blue-700 mb-2">Automotive Example:</p>
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
              Everything car mechanics and repair shops need to know about building trust and growing their business through recording solutions
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
            Rev Up Your Business
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join automotive professionals who are building customer trust, showcasing expertise, and growing their businesses through professional recording solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Automotive Success
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Shop Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarMechanicsRepairShops;
