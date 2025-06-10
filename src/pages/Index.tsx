
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Flonnect</h1>
          <p className="text-xl text-muted-foreground">Your video workspace platform</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Create New Workspace
              </CardTitle>
              <CardDescription>
                Start a new video workspace for sharing videos and capturing steps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/workspace')} 
                className="w-full"
                size="lg"
              >
                <Video className="w-4 h-4 mr-2" />
                Create Workspace
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>
                What you can do with Flonnect workspaces
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Video className="w-4 h-4 text-primary" />
                Screen recording and video sharing
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Plus className="w-4 h-4 text-primary" />
                Step-by-step capture and documentation
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
