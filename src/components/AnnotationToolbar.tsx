
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pen, ArrowRight, CheckCircle, Highlighter } from 'lucide-react';

export function AnnotationToolbar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Annotations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button variant="outline" size="sm" className="w-full justify-start">
          <ArrowRight className="w-4 h-4 mr-2" />
          Arrow
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-start">
          <CheckCircle className="w-4 h-4 mr-2" />
          Checkmark
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-start">
          <Highlighter className="w-4 h-4 mr-2" />
          Highlight
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-start">
          <Pen className="w-4 h-4 mr-2" />
          Draw
        </Button>
      </CardContent>
    </Card>
  );
}
