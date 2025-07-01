
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
      const sampleNotes = `Here are some suggested talking points for ${slideContent}:

• Start with a compelling hook to grab attention
• Explain the key concept clearly and concisely  
• Use real-world examples to illustrate your point
• Address potential questions or concerns
• End with a clear call-to-action or transition

Remember to maintain eye contact and speak naturally!`;
      
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
          className="min-h-32 text-sm"
        />
        
        <div className="text-xs text-gray-500">
          Edit the generated notes to match your presentation style
        </div>
      </CardContent>
    </Card>
  );
}
