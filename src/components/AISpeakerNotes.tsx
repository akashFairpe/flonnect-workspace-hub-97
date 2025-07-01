
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Brain, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AISpeakerNotesProps {
  slideContent: string;
}

export function AISpeakerNotes({ slideContent }: AISpeakerNotesProps) {
  const [notes, setNotes] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateNotes = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const sampleNotes = `Key talking points for ${slideContent}:

• Start with a compelling hook
• Explain the concept clearly  
• Use real-world examples
• Address potential concerns
• End with clear transition

Remember to maintain eye contact!`;
      
      setNotes(sampleNotes);
      setIsGenerating(false);
      
      toast({
        title: "AI Notes Generated",
        description: "Your speaker notes have been created!",
      });
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm flex items-center gap-2">
          <Brain className="w-4 h-4" />
          AI Speaker Notes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          onClick={generateNotes}
          disabled={isGenerating}
          size="sm"
          className="w-full"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Brain className="w-4 h-4 mr-2" />
              Generate Notes
            </>
          )}
        </Button>
        
        <Textarea
          placeholder="AI-generated speaker notes will appear here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="h-48 text-sm resize-none"
        />
        
        <div className="text-xs text-gray-500">
          Edit notes to match your style
        </div>
      </CardContent>
    </Card>
  );
}
