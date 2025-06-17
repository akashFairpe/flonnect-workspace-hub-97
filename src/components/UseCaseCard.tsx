
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UseCaseCardProps {
  title: string;
  description: string;
  example: string;
}

const UseCaseCard = ({ title, description, example }: UseCaseCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-gray-700 leading-relaxed">
          {description.split('\n').map((line, index) => (
            <p key={index} className="mb-2">{line}</p>
          ))}
        </div>
        {example && (
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
            <p className="font-semibold text-sm text-primary mb-2">Example:</p>
            <p className="text-sm text-gray-600 italic">{example}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UseCaseCard;
