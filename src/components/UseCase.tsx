
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface UseCaseProps {
  title: string;
  description: string;
  example: string;
  icon: LucideIcon;
  gradient: string;
  image: string;
  index: number;
}

const UseCase = ({ title, description, example, icon: Icon, gradient, image, index }: UseCaseProps) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
      <CardHeader className="pb-4">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <div className="lg:w-1/3">
            <img 
              src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=400&h=250`}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="lg:w-2/3">
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${gradient} text-white flex-shrink-0`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl md:text-2xl text-gray-900 mb-2">
                  {index + 1}. {title}
                </CardTitle>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {description}
                </CardDescription>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
              <p className="text-sm font-semibold text-gray-700 mb-2">Real-World Example:</p>
              <p className="text-gray-600 italic">
                {example}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UseCase;
