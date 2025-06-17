
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Truck, Route, Shield, Users, Camera, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const TruckDriversDeliveryPersonnel = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Delivery Routes & Navigation Guides",
      description: "Truck drivers can record real-time footage of delivery routes to optimize navigation and improve efficiency. Helps new drivers learn best routes, road conditions, and traffic patterns. Can include GPS route tracking, detour suggestions, and delivery stop planning. Useful for long-haul trucking, last-mile delivery, and fleet management.",
      example: "A truck driver records a video guide on 'Best Truck Routes for Avoiding City Traffic', highlighting shortcuts and truck-friendly roads.",
      icon: Route,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1591768793355-74d04bb6608f"
    },
    {
      title: "Documenting Load Securement & Cargo Handling Best Practices",
      description: "Drivers can record step-by-step guides on properly securing different types of cargo. Helps in preventing load shifting, damage, and safety violations. Can include proper use of straps, tie-downs, weight distribution, and hazardous material handling. Useful for freight carriers, logistics companies, and independent owner-operators.",
      example: "A trucker records a tutorial on 'How to Secure a Heavy Load on a Flatbed Trailer', demonstrating strap tensioning and weight balancing.",
      icon: Truck,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1566576721346-d4a3b4eaeb55"
    },
    {
      title: "Capturing Safety Procedures & Emergency Response Training",
      description: "Delivery personnel can record safety protocols for vehicle inspections and roadside emergencies. Helps in reducing breakdown risks, ensuring DOT compliance, and improving driver safety. Can include pre-trip inspections, emergency braking techniques, and accident reporting steps. Useful for new drivers, fleet operators, and logistics safety programs.",
      example: "A fleet manager records a training video on 'How to Conduct a Pre-Trip Inspection for Semi-Trucks', checking tires, brakes, lights, and fluid levels.",
      icon: Shield,
      gradient: "from-red-500 to-orange-600",
      image: "photo-1449824913935-59a10b8d2000"
    },
    {
      title: "Hosting & Recording Virtual Driver Training & Onboarding Sessions",
      description: "Companies can record driver training videos to standardize best practices across fleets. Helps in reducing training costs, improving driver efficiency, and ensuring compliance. Can include fuel efficiency techniques, defensive driving strategies, and customer service tips. Useful for logistics firms, food delivery companies, and e-commerce fulfillment centers.",
      example: "A delivery company records a video on 'How to Improve Fuel Efficiency While Driving Long Distances', teaching smooth acceleration and braking techniques.",
      icon: Users,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1558544164-d4dce72a5a3b"
    },
    {
      title: "Capturing Proof of Delivery & Incident Reports",
      description: "Drivers can record video evidence of deliveries and incident reports for accountability. Helps in resolving disputes over deliveries, tracking damaged goods, and improving service quality. Can include timestamped proof of delivery, damaged item reports, and route completion logs. Useful for courier services, logistics companies, and food delivery platforms.",
      example: "A delivery driver records a video of a package drop-off, confirming proper delivery and avoiding false claims of missing shipments.",
      icon: Camera,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1553062407-98eeb64c6a62"
    }
  ];

  const faqs = [
    {
      question: "How can I create effective route guidance videos for new drivers?",
      answer: "Record during different times of day and weather conditions, include GPS coordinates and landmarks, and provide commentary on traffic patterns, road hazards, and delivery challenges specific to each route."
    },
    {
      question: "What's the best way to document cargo securement procedures?",
      answer: "Use multiple camera angles to show proper technique, include weight distribution principles, and demonstrate different securement methods for various cargo types. Always emphasize safety regulations and compliance."
    },
    {
      question: "Can I use recordings for DOT compliance and safety training?",
      answer: "Absolutely! Create comprehensive safety training libraries covering pre-trip inspections, emergency procedures, and regulatory compliance. Our platform helps maintain training records and certification tracking."
    },
    {
      question: "How do I record effective proof of delivery documentation?",
      answer: "Include timestamps, clear package/location visibility, and any relevant delivery conditions. This protects both drivers and companies from false delivery claims and provides accountability."
    },
    {
      question: "Can I create fuel efficiency training for my fleet?",
      answer: "Yes! Record best practices for route planning, smooth driving techniques, and vehicle maintenance tips. Include real fuel consumption data and cost savings examples to motivate drivers."
    },
    {
      question: "How do I train drivers on customer service and delivery etiquette?",
      answer: "Record scenarios showing professional customer interactions, proper delivery procedures, and how to handle difficult situations. Include company policies and brand representation guidelines."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Truck Drivers & Delivery Personnel
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance safety and efficiency on the road. Create route guides, safety training, and delivery documentation that improves operations and protects drivers across your fleet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Transportation Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Fleet Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Transportation Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From route optimization to safety training, discover how transportation professionals are improving efficiency and reducing risks
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
                        alt={`Transportation and delivery environment for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-blue-700 mb-2">Transportation Example:</p>
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
              Everything truck drivers and delivery personnel need to know about improving safety and efficiency through recording solutions
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
            Drive Your Success Forward
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join transportation professionals who are improving safety, efficiency, and service quality through professional recording and training solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Fleet Success
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Transportation Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckDriversDeliveryPersonnel;
