
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Target,
  BarChart3,
  Headphones,
  GraduationCap
} from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Target,
      title: "SaaS Product Onboarding",
      description: "Guide users through your software with interactive videos.",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Marketing Teams", 
      description: "Create compelling demo and testimonial videos.",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Resolve issues quickly through visual communication.",
      color: "from-emerald-400 to-emerald-500"
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Develop engaging tutorials and training modules.",
      color: "from-orange-400 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Flonnect Works for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by teams across industries to create impactful video content
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group border-0">
              <CardHeader className="text-center">
                <div className={`w-14 h-14 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-lg">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
