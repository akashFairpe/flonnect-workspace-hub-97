
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
  Eraser, 
  Pause,
  Play,
  X,
  Square as Stop,
  Scan,
  MousePointer2,
  ArrowLeftRight,
  Minus,
  Trash2,
  Hexagon
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
  const [isPaused, setIsPaused] = useState(false);
  const [colorPopoverOpen, setColorPopoverOpen] = useState(false);
  const [shapePopoverOpen, setShapePopoverOpen] = useState(false);
  const [arrowPopoverOpen, setArrowPopoverOpen] = useState(false);
  const [clearPopoverOpen, setClearPopoverOpen] = useState(false);

  const handleToolSelect = (tool: string) => {
    setSelectedTool(tool);
    onToolSelect?.(tool);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onToolSelect?.(\`color-\${color}\`);
    setColorPopoverOpen(false);
  };

  const handleShapeSelect = (shape: string) => {
    setSelectedTool(shape);
    onToolSelect?.(shape);
    setShapePopoverOpen(false);
  };

  const handleArrowSelect = (arrow: string) => {
    setSelectedTool(arrow);
    onToolSelect?.(arrow);
    setArrowPopoverOpen(false);
  };

  const handleClearSelect = (clear: string) => {
    onToolSelect?.(clear);
    setClearPopoverOpen(false);
  };

  const tools = [
    { id: 'pointer', icon: MousePointer, label: 'Pointer' },
    { id: 'highlight-hover', icon: Scan, label: 'Highlight on Hover' },
    { id: 'cursor-blink', icon: MousePointer2, label: 'Cursor Blink' },
    { id: 'pen', icon: Pen, label: 'Draw' },
    { id: 'text', icon: Type, label: 'Text' },
  ];

  const colorPalette = [
    '#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', 
    '#ff00ff', '#00ffff', '#ffa500', '#800080', '#ffc0cb', '#a52a2a'
  ];

  const shapes = [
    { id: 'rectangle', icon: Square, label: 'Rectangle' },
    { id: 'circle', icon: Circle, label: 'Circle' },
    { id: 'hexagon', icon: Hexagon, label: 'Hexagon' },
  ];

  const arrows = [
    { id: 'arrow-single', icon: ArrowRight, label: 'Single Arrow' },
    { id: 'arrow-double', icon: ArrowLeftRight, label: 'Double Arrow' },
    { id: 'line', icon: Minus, label: 'Straight Line' },
  ];

  const clearOptions = [
    { id: 'clear-all', icon: Trash2, label: 'Clear All' },
  ];

  const buttonStyle = (active = false, variant = 'default') => ({
    height: '32px',
    width: '32px',
    borderRadius: '9999px',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: '500',
    background: variant === 'destructive' ? '#ef4444' 
      : variant === 'purple' ? 'linear-gradient(135deg, #8b5cf6, #a855f7)' 
      : (active || variant === 'default') ? 'linear-gradient(135deg, #1f2937, #374151)' 
      : 'transparent',
    color: variant === 'destructive' || variant === 'purple' || active || variant === 'default' ? 'white' : '#4b5563',
    boxShadow: variant === 'destructive' ? '0 2px 8px rgba(239, 68, 68, 0.3)'
      : variant === 'purple' ? '0 2px 8px rgba(139, 92, 246, 0.3)'
      : (active || variant === 'default') ? '0 2px 8px rgba(31, 41, 55, 0.3)'
      : 'none'
  });

  const popoverStyle = (open: boolean) => ({
    position: 'absolute' as const,
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '8px',
    background: 'white',
    borderRadius: '8px',
    padding: '12px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e5e7eb',
    display: open ? 'block' : 'none',
    zIndex: 50
  });

  return (
    <div style={{
      position: 'fixed',
      bottom: '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        borderRadius: '9999px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(229, 231, 235, 1)',
        padding: '8px 16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {/* Recording Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingRight: '8px' }}>
            <button
              style={buttonStyle(micEnabled)}
              onClick={() => setMicEnabled(!micEnabled)}
              title={micEnabled ? "Mute" : "Unmute"}
            >
              {micEnabled ? <Mic size={16} /> : <MicOff size={16} />}
            </button>
            <button
              style={buttonStyle(videoEnabled)}
              onClick={() => setVideoEnabled(!videoEnabled)}
              title={videoEnabled ? "Stop Video" : "Start Video"}
            >
              {videoEnabled ? <Video size={16} /> : <VideoOff size={16} />}
            </button>
          </div>

          <div style={{ height: '24px', width: '1px', background: '#e5e7eb', margin: '0 8px' }} />

          {/* Selection Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '0 8px' }}>
            <button
              style={buttonStyle(false, selectedTool === 'pointer' ? 'purple' : 'default')}
              onClick={() => handleToolSelect('pointer')}
              title="Pointer"
            >
              <MousePointer size={16} />
            </button>
            <button
              style={buttonStyle(selectedTool === 'highlight-hover')}
              onClick={() => handleToolSelect('highlight-hover')}
              title="Highlight on Hover"
            >
              <Scan size={16} />
            </button>
            <button
              style={buttonStyle(selectedTool === 'cursor-blink')}
              onClick={() => handleToolSelect('cursor-blink')}
              title="Cursor Blink"
            >
              <MousePointer2 size={16} />
            </button>
          </div>

          <div style={{ height: '24px', width: '1px', background: '#e5e7eb', margin: '0 8px' }} />

          {/* Drawing Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '0 8px' }}>
            <button
              style={buttonStyle(selectedTool === 'pen')}
              onClick={() => handleToolSelect('pen')}
              title="Draw"
            >
              <Pen size={16} />
            </button>
            <button
              style={buttonStyle(selectedTool === 'text')}
              onClick={() => handleToolSelect('text')}
              title="Text"
            >
              <Type size={16} />
            </button>

            {/* Shapes Popover */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button
                style={buttonStyle(['rectangle', 'circle', 'hexagon'].includes(selectedTool))}
                onClick={() => setShapePopoverOpen(!shapePopoverOpen)}
                title="Shapes"
              >
                <Square size={16} />
              </button>
              <div style={popoverStyle(shapePopoverOpen)}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {shapes.map((shape) => (
                    <button
                      key={shape.id}
                      style={buttonStyle(selectedTool === shape.id)}
                      onClick={() => handleShapeSelect(shape.id)}
                      title={shape.label}
                    >
                      <shape.icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrows Popover */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button
                style={buttonStyle(['arrow-single', 'arrow-double', 'line'].includes(selectedTool))}
                onClick={() => setArrowPopoverOpen(!arrowPopoverOpen)}
                title="Arrows & Lines"
              >
                <ArrowRight size={16} />
              </button>
              <div style={popoverStyle(arrowPopoverOpen)}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {arrows.map((arrow) => (
                    <button
                      key={arrow.id}
                      style={buttonStyle(selectedTool === arrow.id)}
                      onClick={() => handleArrowSelect(arrow.id)}
                      title={arrow.label}
                    >
                      <arrow.icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Clear Popover */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button
                style={buttonStyle()}
                onClick={() => setClearPopoverOpen(!clearPopoverOpen)}
                title="Clear Options"
              >
                <Eraser size={16} />
              </button>
              <div style={popoverStyle(clearPopoverOpen)}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {clearOptions.map((clear) => (
                    <button
                      key={clear.id}
                      style={buttonStyle()}
                      onClick={() => handleClearSelect(clear.id)}
                      title={clear.label}
                    >
                      <clear.icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: '24px', width: '1px', background: '#e5e7eb', margin: '0 8px' }} />

          {/* Colors */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '0 8px', position: 'relative' }}>
            <button
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '9999px',
                border: '2px solid #d1d5db',
                cursor: 'pointer',
                backgroundColor: selectedColor
              }}
              onClick={() => setColorPopoverOpen(!colorPopoverOpen)}
              title="Select Color"
            />
            <div style={popoverStyle(colorPopoverOpen)}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '8px',
                width: '192px'
              }}>
                {colorPalette.map((color) => (
                  <button
                    key={color}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '9999px',
                      border: '2px solid #d1d5db',
                      cursor: 'pointer',
                      backgroundColor: color
                    }}
                    onClick={() => handleColorSelect(color)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div style={{ height: '24px', width: '1px', background: '#e5e7eb', margin: '0 8px' }} />

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', paddingLeft: '8px' }}>
            <button
              style={buttonStyle()}
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Resume" : "Pause"}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button
              style={buttonStyle()}
              title="Cancel"
            >
              <X size={16} />
            </button>
            <button
              style={buttonStyle(false, 'destructive')}
              title="Stop"
            >
              <Stop size={16} />
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
