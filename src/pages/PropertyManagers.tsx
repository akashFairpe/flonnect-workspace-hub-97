
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Wrench, Home, Clipboard, Users, Phone, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const PropertyManagers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Maintenance Walkthroughs & Repair Guides",
      description: "Property managers can record step-by-step videos for common property maintenance tasks. Helps tenants understand basic fixes before submitting maintenance requests. Can include plumbing, HVAC troubleshooting, appliance repairs, and emergency procedures. Useful for reducing maintenance costs, minimizing tenant complaints, and streamlining repair coordination.",
      example: "A property manager records a video on 'How to Reset Your Tripped Circuit Breaker', guiding tenants through the process to avoid unnecessary service calls.",
      icon: Wrench,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1559592413-7cec4d0d1b04"
    },
    {
      title: "Creating Virtual Rental Property Tours & Move-In Guides",
      description: "Property managers can record virtual tours of rental units, allowing prospective tenants to view properties remotely. Helps reduce the need for in-person showings and pre-qualify serious renters. Can include amenities, leasing terms, neighborhood highlights, and move-in checklists. Useful for long-distance renters, corporate housing, and vacation rentals.",
      example: "A property manager records a guided video tour of an available apartment, highlighting key features like smart locks, gym access, and pet-friendly policies.",
      icon: Home,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1522708323590-d24dbb6b0267"
    },
    {
      title: "Documenting Property Inspections & Move-Out Evaluations",
      description: "Managers can record detailed property inspections before and after tenant occupancy. Helps in tracking damage, ensuring lease compliance, and avoiding disputes. Can include move-in condition reports, security deposit deductions, and repair assessments. Useful for documenting lease violations, handling tenant disputes, and legal record-keeping.",
      example: "A property manager records a move-out inspection video, noting wall damage and missing appliances for security deposit adjustments.",
      icon: Clipboard,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1600585154340-be6161a56a0c"
    },
    {
      title: "Hosting & Recording Tenant Orientation & Lease Agreement Videos",
      description: "Property managers can record onboarding videos explaining lease terms and community rules. Helps tenants understand policies on rent payments, pet policies, and maintenance requests. Can include security deposit procedures, online payment systems, and emergency contacts. Useful for multi-unit apartment complexes, student housing, and vacation rental management.",
      example: "A property manager records a 'New Tenant Welcome Guide', explaining rent due dates, trash collection schedules, and parking regulations.",
      icon: Users,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1560520653-9e0e4c89eb11"
    },
    {
      title: "Capturing Vendor & Contractor Coordination for Repairs",
      description: "Managers can record repair requests and walkthroughs to share with maintenance teams or contractors. Helps in clearly communicating repair issues without the need for in-person meetings. Can include roof leaks, HVAC system failures, plumbing issues, and exterior maintenance. Useful for ensuring faster response times and minimizing miscommunication in maintenance requests.",
      example: "A property manager records a leaking pipe under a tenant's sink, sharing it with the plumber for a quicker repair estimate.",
      icon: Phone,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1621905252507-b35492cc74b4"
    }
  ];

  const faqs = [
    {
      question: "How can I create effective maintenance tutorial videos for tenants?",
      answer: "Focus on common issues like circuit breakers, garbage disposals, and HVAC filters. Use clear step-by-step demonstrations with safety warnings and when to call for professional help."
    },
    {
      question: "What's the best way to conduct virtual property tours?",
      answer: "Record during optimal lighting conditions, highlight key features and amenities, and include neighborhood information. Our platform supports high-quality video that showcases properties professionally."
    },
    {
      question: "How do I document property conditions effectively?",
      answer: "Create detailed video walkthroughs with timestamps and commentary. Focus on potential damage areas and include close-ups of fixtures, flooring, and appliances for comprehensive documentation."
    },
    {
      question: "Can I streamline communication with contractors and vendors?",
      answer: "Yes! Record detailed issue descriptions and send them directly to contractors. This reduces miscommunication and helps vendors provide more accurate estimates and faster service."
    },
    {
      question: "How do I create comprehensive tenant onboarding materials?",
      answer: "Record welcome videos covering lease terms, property rules, maintenance procedures, and local amenities. This reduces questions and ensures all tenants receive consistent information."
    },
    {
      question: "Can I use recordings for legal documentation and disputes?",
      answer: "Absolutely! Timestamped video documentation serves as excellent evidence for property conditions, lease violations, and maintenance issues. Always follow local laws regarding recording and notifications."
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
            Screen Recorder for Property Managers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline property management and enhance tenant satisfaction. Create maintenance guides, virtual tours, and documentation that reduces costs and improves efficiency across your properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Property Management Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Management Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Property Management Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From maintenance tutorials to tenant onboarding, discover how property managers are reducing costs and improving tenant satisfaction
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
                        alt={`Property management environment for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-green-700 mb-2">Management Example:</p>
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
              Everything property managers need to know about improving operations and tenant satisfaction through recording solutions
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
            Optimize Property Management
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join property managers who are reducing costs, improving tenant satisfaction, and streamlining operations through professional recording solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Management Success
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Property Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagers;
