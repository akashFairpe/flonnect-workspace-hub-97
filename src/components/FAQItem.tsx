
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader 
        className="cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-gray-900 text-left">
            {question}
          </CardTitle>
          {isOpen ? (
            <Minus className="w-5 h-5 text-gray-500" />
          ) : (
            <Plus className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </CardHeader>
      {isOpen && (
        <CardContent className="pt-0">
          <p className="text-gray-600 leading-relaxed">
            {answer}
          </p>
        </CardContent>
      )}
    </Card>
  );
};

export default FAQItem;
