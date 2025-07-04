
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Monitor,
  VideoIcon,
  MessageCircle,
  Bug
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Monitor,
      title: "Screen Recorder",
      description: "Record high-quality videos directly from your screen and webcam.",
      link: "/screenrecorder",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: VideoIcon,
      title: "Interactive Demos",
      description: "Create interactive demos to boost engagement and conversion.",
      link: "/interactive-demo-capture",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: MessageCircle,
      title: "Customer Testimonials",
      description: "Capture genuine customer testimonials effortlessly.",
      link: "/testimonials",
      color: "from-emerald-400 to-emerald-500"
    },
    {
      icon: Bug,
      title: "Bug Reporting",
      description: "Efficiently report and track bugs with visual evidence.",
      link: "/bug-reporting",
      color: "from-orange-400 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Complete Video Solution Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From recording to sharing - everything you need for professional video content
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed mb-4">
                  {solution.description}
                </CardDescription>
                <Link to={solution.link}>
                  <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">
                    Explore {solution.title} →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
