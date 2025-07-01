
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Brain, Edit, RefreshCw, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AISpeakerNotesProps {
  slideContent: string;
  currentSlide: number;
  onNoteSave: (slideIndex: number, note: string, isAI: boolean) => void;
  savedNote?: string;
  isAINotes?: boolean;
}

export function AISpeakerNotes({ 
  slideContent, 
  currentSlide, 
  onNoteSave,
  savedNote = '',
  isAINotes = false 
}: AISpeakerNotesProps) {
  const [currentNote, setCurrentNote] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const { toast } = useToast();

  // Load saved note when slide changes
  useEffect(() => {
    setCurrentNote(savedNote);
    setHasUnsavedChanges(false);
  }, [currentSlide, savedNote]);

  const generateAINotes = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const sampleNotes = `Key talking points for ${slideContent}: Start with a compelling hook • Explain the concept clearly • Use real-world examples • Address potential concerns • End with clear transition. Remember to maintain eye contact and speak confidently!`;
      
      setCurrentNote(sampleNotes);
      setHasUnsavedChanges(true);
      setIsGenerating(false);
      
      toast({
        title: "AI Notes Generated",
        description: "Your speaker notes have been created and are ready to edit!",
      });
    }, 2000);
  };

  const startWritingOwn = () => {
    setCurrentNote('');
    setHasUnsavedChanges(true);
  };

  const saveNote = () => {
    onNoteSave(currentSlide, currentNote, false);
    setHasUnsavedChanges(false);
    toast({
      title: "Note Saved",
      description: `Note saved for Slide ${currentSlide + 1}`,
    });
  };

  const handleNoteChange = (value: string) => {
    setCurrentNote(value);
    setHasUnsavedChanges(value !== savedNote);
  };

  // Show initial CTA buttons if no note exists
  if (!currentNote && !savedNote) {
    return (
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center gap-2 min-w-fit">
          <Brain className="w-5 h-5" />
          <span className="font-semibold text-sm">AI Speaker Notes</span>
        </div>
        
        <div className="flex-1 flex items-center justify-center gap-4 p-8 border-2 border-dashed border-gray-200 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">What would you like to do?</p>
            <div className="flex gap-3">
              <Button
                onClick={generateAINotes}
                disabled={isGenerating}
                className="flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Brain className="w-4 h-4" />
                    Generate with AI
                  </>
                )}
              </Button>
              <span className="text-gray-400 self-center">or</span>
              <Button
                variant="outline"
                onClick={startWritingOwn}
                className="flex items-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Write Your Own
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 w-full">
      <div className="flex items-center gap-2 min-w-fit">
        <Brain className="w-5 h-5" />
        <span className="font-semibold text-sm">AI Speaker Notes</span>
      </div>
      
      <div className="flex-1">
        <Textarea
          placeholder="Write your speaker notes here..."
          value={currentNote}
          onChange={(e) => handleNoteChange(e.target.value)}
          className="h-20 text-sm resize-none w-full"
        />
      </div>
      
      <div className="flex gap-2 min-w-fit">
        {!currentNote && savedNote && (
          <Button
            onClick={generateAINotes}
            disabled={isGenerating}
            size="sm"
            variant="outline"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Brain className="w-4 h-4 mr-2" />
                Generate AI
              </>
            )}
          </Button>
        )}
        
        {hasUnsavedChanges && (
          <Button
            onClick={saveNote}
            size="sm"
            className="flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save Note
          </Button>
        )}
        
        {!hasUnsavedChanges && currentNote && (
          <Button
            onClick={generateAINotes}
            disabled={isGenerating}
            size="sm"
            variant="outline"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Regenerating...
              </>
            ) : (
              <>
                <Brain className="w-4 h-4 mr-2" />
                Regenerate
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
