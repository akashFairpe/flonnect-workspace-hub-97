
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
    <section className="py-16 sm:py-20 bg-white" role="region" aria-label="Use Cases and Industries">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Flonnect Works for Everyone
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Trusted by teams across industries to create impactful video content
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group border-0 h-full">
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${useCase.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <useCase.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg leading-tight">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
