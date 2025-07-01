
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
      const sampleNotes = `Key talking points for ${slideContent}: Start with a compelling hook • Explain the concept clearly • Use real-world examples • Address potential concerns • End with clear transition. Remember to maintain eye contact!`;
      
      setNotes(sampleNotes);
      setIsGenerating(false);
      
      toast({
        title: "AI Notes Generated",
        description: "Your speaker notes have been created!",
      });
    }, 2000);
  };

  return (
    <div className="flex items-center gap-4 w-full">
      <div className="flex items-center gap-2 min-w-fit">
        <Brain className="w-5 h-5" />
        <span className="font-semibold text-sm">AI Speaker Notes</span>
      </div>
      
      <div className="flex-1">
        <Textarea
          placeholder="AI-generated speaker notes will appear here... Click generate to create notes for this slide."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="h-20 text-sm resize-none w-full"
        />
      </div>
      
      <Button
        onClick={generateNotes}
        disabled={isGenerating}
        size="sm"
        className="min-w-fit"
      >
        {isGenerating ? (
          <>
            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Brain className="w-4 h-4 mr-2" />
            Generate
          </>
        )}
      </Button>
    </div>
  );
}
