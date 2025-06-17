
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Package, Truck, BarChart3, GraduationCap, Route, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const SupplyChainLogisticsTeams = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Inventory Management & Stock Handling Procedures",
      description: "Supply chain teams can record step-by-step guides on inventory tracking and warehouse management. Helps in training employees on proper stock handling, barcode scanning, and storage optimization. Can include FIFO (First-In, First-Out) vs. LIFO (Last-In, First-Out) methods, order picking techniques, and stock audits. Useful for warehouse supervisors, inventory clerks, and supply chain managers.",
      example: "A warehouse manager records a tutorial on 'How to Conduct a Cycle Count for Inventory Accuracy', explaining barcode scanning and data entry procedures.",
      icon: Package,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1586528116311-ad8dd3c8310d"
    },
    {
      title: "Documenting Shipping & Order Fulfillment Processes",
      description: "Logistics teams can record the full shipping process, from order processing to package dispatch. Helps employees understand packaging standards, labeling, and carrier coordination. Can include best practices for handling fragile goods, international shipping documentation, and customs compliance. Useful for e-commerce businesses, retail supply chains, and freight companies.",
      example: "A logistics coordinator records a video on 'How to Prepare and Label International Shipments', detailing customs declarations and packaging requirements.",
      icon: Truck,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1553062407-98eeb64c6a62"
    },
    {
      title: "Recording Supply Chain Optimization & Workflow Improvements",
      description: "Managers can document bottlenecks in the supply chain and propose efficiency improvements. Helps teams analyze logistics performance, warehouse layouts, and delivery times. Can include visualizations of supply chain KPIs, vendor management, and cost-saving strategies. Useful for procurement teams, transport managers, and distribution centers.",
      example: "A supply chain analyst records a report on 'How to Reduce Lead Times in Warehouse Operations', highlighting areas for automation and process improvements.",
      icon: BarChart3,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1494412574643-ff11b0a5c1c3"
    },
    {
      title: "Creating Employee Training Videos for Warehouse & Logistics Staff",
      description: "Companies can record standardized training videos for onboarding new warehouse staff. Helps in reducing human errors, improving efficiency, and maintaining safety compliance. Can include forklift operation guides, hazardous materials handling, and workplace safety procedures. Useful for 3PL (Third-Party Logistics) providers, manufacturing supply chains, and large distribution networks.",
      example: "A warehouse supervisor records a safety training video on 'Proper Pallet Stacking Techniques', preventing warehouse accidents and product damage.",
      icon: GraduationCap,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1578575437130-527eed3abbec"
    },
    {
      title: "Capturing & Reviewing Fleet Management & Route Optimization Strategies",
      description: "Transportation teams can record and analyze delivery routes to optimize fuel efficiency and reduce delays. Helps in training drivers on GPS systems, loading techniques, and time management. Can include real-time tracking insights, traffic analysis, and emergency response protocols. Useful for freight companies, last-mile delivery teams, and logistics planners.",
      example: "A fleet manager records a video explaining 'How to Optimize Delivery Routes Using GPS & Telematics', helping drivers cut down travel time and fuel costs.",
      icon: Route,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1449824913935-59a10b8d2000"
    }
  ];

  const faqs = [
    {
      question: "How can I create effective warehouse training videos?",
      answer: "Use clear step-by-step demonstrations with multiple camera angles showing proper techniques. Our platform includes safety annotation tools and can integrate with WMS systems for comprehensive training materials."
    },
    {
      question: "Can I track employee training completion and compliance?",
      answer: "Yes! Our platform includes training tracking features that monitor viewing completion, quiz results, and certification status. Perfect for maintaining OSHA compliance and training records."
    },
    {
      question: "How do I document complex supply chain processes?",
      answer: "Use flowchart overlays, process mapping tools, and multi-step recording features. You can create comprehensive documentation that shows the entire supply chain from procurement to delivery."
    },
    {
      question: "What about recording in busy warehouse environments?",
      answer: "Our noise reduction technology and wireless microphone support ensure clear audio even in noisy environments. You can also use visual cues and text overlays when audio is challenging."
    },
    {
      question: "Can I create route optimization training materials?",
      answer: "Absolutely! Record GPS navigation, traffic analysis, and delivery optimization techniques. Include real-world scenarios and best practices for fuel efficiency and time management."
    },
    {
      question: "How do I ensure consistency across multiple locations?",
      answer: "Create standardized training materials that can be deployed across all facilities. Our platform supports multi-location management with consistent branding and procedures."
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
            Screen Recorder for Supply Chain & Logistics Teams
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline operations and optimize logistics. Create comprehensive training materials, document processes, and improve efficiency across your supply chain with professional recording tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Logistics Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Supply Chain Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Supply Chain Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From inventory management to route optimization, discover how logistics professionals are improving efficiency and reducing costs through recording solutions
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
                        alt={`Supply chain and logistics facility for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-blue-700 mb-2">Logistics Example:</p>
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
              Everything supply chain and logistics professionals need to know about improving operations and training through recording solutions
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
            Optimize Your Supply Chain
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join logistics professionals who are improving efficiency, reducing costs, and enhancing training through professional recording and documentation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Logistics Success
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Supply Chain Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainLogisticsTeams;
