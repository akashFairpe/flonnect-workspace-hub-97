
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Video, MousePointer, Bug, Sparkles } from 'lucide-react';
import RecordModule from '@/components/enterprise-extension/RecordModule';
import StepsRecorderModule from '@/components/enterprise-extension/StepsRecorderModule';
import BugReporterModule from '@/components/enterprise-extension/BugReporterModule';
import SharedControls from '@/components/enterprise-extension/SharedControls';
import UserSection from '@/components/enterprise-extension/UserSection';
import StatusNotifications from '@/components/enterprise-extension/StatusNotifications';
import FloatingActionIcons from '@/components/enterprise-extension/FloatingActionIcons';
import CreateSubTaskDialog from '@/components/enterprise-extension/CreateSubTaskDialog';
import { AnnotationToolbar } from '@/components/AnnotationToolbar';
import { useToast } from '@/hooks/use-toast';
import { Copy, Check } from 'lucide-react';

export default function EnterpriseExtensionPopupPage() {
  const [activeModule, setActiveModule] = useState('record');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState('');
  const [isSubTaskDialogOpen, setIsSubTaskDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCreateSubTask = () => {
    setIsSubTaskDialogOpen(true);
  };

  const handleTaskCreated = (taskData: any) => {
    toast({
      title: "Sub-task Created",
      description: `Task "${taskData.title}" has been created and linked to the recording session.`,
    });
  };

  const annotationToolbarCode = `import React, { useState } from 'react';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  MousePointer, 
  Pen, 
  Type, 
  Square, 
  Circle, 
  ArrowRight, 
  Highlighter, 
  Eraser, 
  Pause,
  X,
  Square as Stop
} from 'lucide-react';

interface AnnotationToolbarProps {
  onToolSelect?: (tool: string) => void;
  isRecording?: boolean;
}

export function AnnotationToolbar({ onToolSelect, isRecording = false }: AnnotationToolbarProps) {
  const [selectedTool, setSelectedTool] = useState('pointer');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState(false);

  const handleToolSelect = (tool: string) => {
    setSelectedTool(tool);
    onToolSelect?.(tool);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onToolSelect?.(\`color-\${color}\`);
    setIsColorPaletteOpen(false);
  };

  const tools = [
    { id: 'pointer', icon: MousePointer, label: 'Pointer' },
    { id: 'pen', icon: Pen, label: 'Draw' },
    { id: 'highlighter', icon: Highlighter, label: 'Highlight' },
    { id: 'text', icon: Type, label: 'Text' },
    { id: 'arrow', icon: ArrowRight, label: 'Arrow' },
    { id: 'rectangle', icon: Square, label: 'Rectangle' },
    { id: 'circle', icon: Circle, label: 'Circle' },
    { id: 'eraser', icon: Eraser, label: 'Eraser' },
  ];

  const colorPalette = [
    '#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', 
    '#ff00ff', '#00ffff', '#ffa500', '#800080', '#ffc0cb', '#a52a2a'
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 px-4 py-2">
        <div className="flex items-center gap-1">
          {/* Recording Controls */}
          <div className="flex items-center gap-1 pr-2">
            <button
              className={\`h-8 w-8 rounded-full p-0 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 \${
                micEnabled 
                  ? 'bg-slate-900 text-white hover:bg-slate-900/90' 
                  : 'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900'
              }\`}
              onClick={() => setMicEnabled(!micEnabled)}
            >
              {micEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </button>
            <button
              className={\`h-8 w-8 rounded-full p-0 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 \${
                videoEnabled 
                  ? 'bg-slate-900 text-white hover:bg-slate-900/90' 
                  : 'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900'
              }\`}
              onClick={() => setVideoEnabled(!videoEnabled)}
            >
              {videoEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
            </button>
          </div>

          <div className="shrink-0 bg-slate-200 h-6 w-[1px]" />

          {/* Annotation Tools */}
          <div className="flex items-center gap-1 px-2">
            {tools.map((tool) => (
              <button
                key={tool.id}
                className={\`h-8 w-8 rounded-full p-0 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 \${
                  selectedTool === tool.id 
                    ? 'bg-slate-900 text-white hover:bg-slate-900/90' 
                    : 'hover:bg-slate-100 hover:text-slate-900'
                }\`}
                onClick={() => handleToolSelect(tool.id)}
                title={tool.label}
              >
                <tool.icon className="w-4 h-4" />
              </button>
            ))}
          </div>

          <div className="shrink-0 bg-slate-200 h-6 w-[1px]" />

          {/* Colors */}
          <div className="flex items-center gap-1 px-2">
            <div className="relative">
              <button
                className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
                style={{ backgroundColor: selectedColor }}
                onClick={() => setIsColorPaletteOpen(!isColorPaletteOpen)}
                title="Select Color"
              />
              {isColorPaletteOpen && (
                <div className="absolute bottom-8 left-0 z-50 w-48 rounded-md border bg-white p-3 shadow-md outline-none">
                  <div className="grid grid-cols-6 gap-2">
                    {colorPalette.map((color) => (
                      <button
                        key={color}
                        className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorSelect(color)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="shrink-0 bg-slate-200 h-6 w-[1px]" />

          {/* Actions */}
          <div className="flex items-center gap-1 pl-2">
            <button
              className="h-8 w-8 rounded-full p-0 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 hover:text-slate-900"
              title="Pause"
            >
              <Pause className="w-4 h-4" />
            </button>
            <button
              className="h-8 w-8 rounded-full p-0 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 hover:text-slate-900"
              title="Cancel"
            >
              <X className="w-4 h-4" />
            </button>
            <button
              className="h-8 w-8 rounded-full p-0 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 hover:text-slate-900"
              title="Stop"
            >
              <Stop className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(annotationToolbarCode);
      setCopied(true);
      toast({
        title: "Code Copied!",
        description: "Annotation toolbar component code has been copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy code to clipboard.",
        variant: "destructive",
      });
    }
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

        {/* Copy Annotation Toolbar Code Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Copy Annotation Toolbar Component</h2>
              <Button 
                onClick={copyToClipboard}
                className="flex items-center gap-2"
                variant={copied ? "secondary" : "default"}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy Code"}
              </Button>
            </div>
            <p className="text-gray-600 mb-4">
              Ready-to-use React component with recording controls, annotation tools, color picker, and playback controls.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                {annotationToolbarCode}
              </pre>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Features included:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Mic and video recording controls</li>
                <li>8 annotation tools (pointer, pen, highlighter, text, shapes, eraser)</li>
                <li>Color picker with 12 color palette</li>
                <li>Pause, cancel, and stop recording controls</li>
                <li>Responsive design with glassmorphism effect</li>
              </ul>
            </div>
          </Card>
        </div>
      </main>

      {/* Floating Action Icons */}
      <FloatingActionIcons
        isRecording={isRecording}
        activeModule={activeModule}
        onCreateSubTask={handleCreateSubTask}
      />

      {/* Sub-Task Creation Dialog */}
      <CreateSubTaskDialog
        open={isSubTaskDialogOpen}
        onOpenChange={setIsSubTaskDialogOpen}
        onCreateTask={handleTaskCreated}
      />

      {/* Annotation Toolbar */}
      <AnnotationToolbar 
        isRecording={isRecording}
        onToolSelect={(tool) => console.log('Selected tool:', tool)}
      />
    </div>
  );
}
