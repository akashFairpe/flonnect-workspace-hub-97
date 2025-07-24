
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Video, MousePointer, Bug, Sparkles } from 'lucide-react';
import RecordModule from '@/components/enterprise-extension/RecordModule';
import StepsRecorderModule from '@/components/enterprise-extension/StepsRecorderModule';
import BugReporterModule from '@/components/enterprise-extension/BugReporterModule';
import SharedControls from '@/components/enterprise-extension/SharedControls';
import UserSection from '@/components/enterprise-extension/UserSection';
import StatusNotifications from '@/components/enterprise-extension/StatusNotifications';
import FloatingActionIcons from '@/components/enterprise-extension/FloatingActionIcons';
import { useToast } from '@/hooks/use-toast';

export default function EnterpriseExtensionPopupPage() {
  const [activeModule, setActiveModule] = useState('record');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState('');
  const { toast } = useToast();

  const handleCreateSubTask = () => {
    toast({
      title: "Sub-task Created",
      description: "A new sub-task has been created for the current recording session.",
    });
  };

  React.useEffect(() => {
    document.title = 'Flonnect Enterprise Extension - All-in-One Recording Suite';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Unified popup interface for Flonnect Enterprise Extension combining screen recording, step-by-step guides, and bug reporting in one powerful tool.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Unified popup interface for Flonnect Enterprise Extension combining screen recording, step-by-step guides, and bug reporting in one powerful tool.';
      document.head.appendChild(newMetaDesc);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Enterprise Extension Preview
          </Badge>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Flonnect Enterprise Extension
          </h1>
          <p className="text-lg text-gray-600">
            Unified popup interface combining all recording tools in one place
          </p>
        </div>

        {/* Extension Popup Mockup */}
        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            {/* Status Notifications */}
            <StatusNotifications 
              isRecording={isRecording}
              status={recordingStatus}
            />
            
            {/* Main Content */}
            <CardContent className="p-0">
              <Tabs value={activeModule} onValueChange={setActiveModule} className="w-full">
                <TabsList className="grid w-full grid-cols-3 rounded-none border-b">
                  <TabsTrigger value="record" className="flex items-center gap-2 text-xs">
                    <Video className="w-4 h-4" />
                    Record
                  </TabsTrigger>
                  <TabsTrigger value="steps" className="flex items-center gap-2 text-xs">
                    <MousePointer className="w-4 h-4" />
                    Steps
                  </TabsTrigger>
                  <TabsTrigger value="bug" className="flex items-center gap-2 text-xs">
                    <Bug className="w-4 h-4" />
                    Bug Report
                  </TabsTrigger>
                </TabsList>

                <div className="p-4">
                  <TabsContent value="record" className="mt-0">
                    <RecordModule 
                      onRecordingChange={setIsRecording}
                      onStatusChange={setRecordingStatus}
                    />
                  </TabsContent>

                  <TabsContent value="steps" className="mt-0">
                    <StepsRecorderModule 
                      onRecordingChange={setIsRecording}
                      onStatusChange={setRecordingStatus}
                    />
                  </TabsContent>

                  <TabsContent value="bug" className="mt-0">
                    <BugReporterModule 
                      onRecordingChange={setIsRecording}
                      onStatusChange={setRecordingStatus}
                    />
                  </TabsContent>
                </div>

                {/* Shared Controls */}
                <SharedControls activeModule={activeModule} />
              </Tabs>
            </CardContent>

            {/* User Section */}
            <UserSection />
          </Card>
        </div>

        {/* Wireframe Flow Description */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Extension Flow</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">1. Popup Opens</h3>
              <p className="text-sm text-gray-600">
                Extension icon clicked → Attached popup opens with Record tab active by default
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">2. Module Switch</h3>
              <p className="text-sm text-gray-600">
                User switches between Record, Steps, or Bug Report tabs seamlessly
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">3. Active Recording</h3>
              <p className="text-sm text-gray-600">
                Status shows recording progress, controls adapt to current module
              </p>
            </Card>
          </div>
        </div>
      </main>

      {/* Floating Action Icons */}
      <FloatingActionIcons
        isRecording={isRecording}
        activeModule={activeModule}
        onCreateSubTask={handleCreateSubTask}
      />
    </div>
  );
}
