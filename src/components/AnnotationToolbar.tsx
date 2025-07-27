import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  Hexagon,
  ChevronLeft,
  ChevronRight,
  Clock
} from 'lucide-react';

const ToolbarContainer = styled.div<{ $position: 'center' | 'left' | 'right' }>`
  position: fixed;
  ${props => props.$position === 'center' ? 'bottom: 16px; left: 50%; transform: translateX(-50%);' :
    props.$position === 'left' ? 'top: 50%; left: 16px; transform: translateY(-50%);' :
    'top: 50%; right: 16px; transform: translateY(-50%);'}
  z-index: 50;
`;

const ToolbarContent = styled.div<{ $position: 'center' | 'left' | 'right' }>`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(12px);
  border-radius: ${props => props.$position === 'center' ? '9999px' : '12px'};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 
              0 0 0 1px rgba(0, 0, 0, 0.05),
              0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(139, 92, 246, 0.3);
  padding: 8px 16px;
  ${props => props.$position !== 'center' ? 'writing-mode: vertical-lr; text-orientation: mixed;' : ''}
`;

const ToolbarSection = styled.div<{ $position?: 'center' | 'left' | 'right' }>`
  display: flex;
  align-items: center;
  gap: 4px;
  ${props => props.$position !== 'center' ? 'flex-direction: column;' : ''}
`;

const RecordingTime = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  color: #dc2626;
  border: 1px solid rgba(239, 68, 68, 0.2);
`;

const PositionControls = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
  display: flex;
  gap: 4px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const ToolButton = styled.button<{ $active?: boolean; $variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'purple' }>`
  height: 32px;
  width: 32px;
  border-radius: 9999px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  font-weight: 500;
  
  ${props => {
    if (props.$variant === 'destructive') {
      return `
        background: #ef4444;
        color: white;
        box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
        &:hover {
          background: #dc2626;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
        }
      `;
    }
    if (props.$variant === 'purple') {
      return `
        background: linear-gradient(135deg, #8b5cf6, #a855f7);
        color: white;
        box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
        &:hover {
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
        }
      `;
    }
    if (props.$active || props.$variant === 'default') {
      return `
        background: linear-gradient(135deg, #1f2937, #374151);
        color: white;
        box-shadow: 0 2px 8px rgba(31, 41, 55, 0.3);
        &:hover {
          background: linear-gradient(135deg, #111827, #1f2937);
          box-shadow: 0 4px 12px rgba(31, 41, 55, 0.4);
        }
      `;
    }
    return `
      background: transparent;
      color: #4b5563;
      &:hover {
        background: rgba(243, 244, 246, 0.8);
        color: #1f2937;
      }
    `;
  }}
`;

const Separator = styled.div`
  height: 24px;
  width: 1px;
  background: #e5e7eb;
  margin: 0 8px;
`;

const ColorButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  border: 2px solid #d1d5db;
  cursor: pointer;
  transition: border-color 0.2s ease;
  &:hover {
    border-color: #9ca3af;
  }
`;

const PopoverContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const PopoverContent = styled.div<{ $open: boolean }>`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  background: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  display: ${props => props.$open ? 'block' : 'none'};
  z-index: 50;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  width: 192px;
`;

const ShapeGrid = styled.div`
  display: flex;
  gap: 8px;
`;

const ArrowGrid = styled.div`
  display: flex;
  gap: 8px;
`;

const ClearGrid = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding-left: 8px;
`;

interface AnnotationToolbarProps {
  onToolSelect?: (tool: string) => void;
  isRecording?: boolean;
  recordingTime?: number;
}

export function AnnotationToolbar({ onToolSelect, isRecording = false, recordingTime = 0 }: AnnotationToolbarProps) {
  const [selectedTool, setSelectedTool] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [colorPopoverOpen, setColorPopoverOpen] = useState(false);
  const [shapePopoverOpen, setShapePopoverOpen] = useState(false);
  const [arrowPopoverOpen, setArrowPopoverOpen] = useState(false);
  const [clearPopoverOpen, setClearPopoverOpen] = useState(false);
  const [position, setPosition] = useState<'center' | 'left' | 'right'>('center');
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (isRecording && !isPaused) {
      const interval = setInterval(() => {
        setCurrentTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRecording, isPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToolSelect = (tool: string) => {
    setSelectedTool(tool);
    onToolSelect?.(tool);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onToolSelect?.(`color-${color}`);
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

  return (
    <ToolbarContainer $position={position}>
      <ToolbarContent $position={position}>
        <PositionControls>
          <ToolButton
            onClick={() => setPosition('left')}
            title="Move to Left"
            $active={position === 'left'}
          >
            <ChevronLeft size={14} />
          </ToolButton>
          <ToolButton
            onClick={() => setPosition('center')}
            title="Center"
            $active={position === 'center'}
          >
            ●
          </ToolButton>
          <ToolButton
            onClick={() => setPosition('right')}
            title="Move to Right"
            $active={position === 'right'}
          >
            <ChevronRight size={14} />
          </ToolButton>
        </PositionControls>
        
        <ToolbarSection $position={position}>
          {/* Recording Time */}
          {isRecording && (
            <>
              <RecordingTime>
                <Clock size={12} />
                {formatTime(currentTime)}
              </RecordingTime>
              {position === 'center' && <Separator />}
            </>
          )}
          
          {/* Recording Controls */}
          <ToolbarSection style={{ paddingRight: position === 'center' ? '8px' : '0' }}>
            <ToolButton
              $variant={micEnabled ? "default" : "outline"}
              onClick={() => setMicEnabled(!micEnabled)}
              title={micEnabled ? "Mute" : "Unmute"}
            >
              {micEnabled ? <Mic size={16} /> : <MicOff size={16} />}
            </ToolButton>
            <ToolButton
              $variant={videoEnabled ? "default" : "outline"}
              onClick={() => setVideoEnabled(!videoEnabled)}
              title={videoEnabled ? "Stop Video" : "Start Video"}
            >
              {videoEnabled ? <Video size={16} /> : <VideoOff size={16} />}
            </ToolButton>
          </ToolbarSection>

          {position === 'center' && <Separator />}

          {/* Annotation Tools */}
          <ToolbarSection style={{ padding: position === 'center' ? '0 8px' : '8px 0' }}>
            {/* Pointer Tool */}
            <ToolButton
              $variant={selectedTool === 'pointer' ? "purple" : "ghost"}
              onClick={() => handleToolSelect('pointer')}
              title="Pointer"
            >
              <MousePointer size={16} />
            </ToolButton>
            
            {/* Other Selection Tools */}
            <ToolButton
              $active={selectedTool === 'highlight-hover'}
              onClick={() => handleToolSelect('highlight-hover')}
              title="Highlight on Hover"
            >
              <Scan size={16} />
            </ToolButton>
            <ToolButton
              $active={selectedTool === 'cursor-blink'}
              onClick={() => handleToolSelect('cursor-blink')}
              title="Cursor Blink"
            >
              <MousePointer2 size={16} />
            </ToolButton>
          </ToolbarSection>

          {position === 'center' && <Separator />}

          {/* Drawing Tools */}
          <ToolbarSection style={{ padding: position === 'center' ? '0 8px' : '8px 0' }}>
            <ToolButton
              $active={selectedTool === 'pen'}
              onClick={() => handleToolSelect('pen')}
              title="Draw"
            >
              <Pen size={16} />
            </ToolButton>
            <ToolButton
              $active={selectedTool === 'text'}
              onClick={() => handleToolSelect('text')}
              title="Text"
            >
              <Type size={16} />
            </ToolButton>

            {/* Shapes Popover */}
            <PopoverContainer>
              <ToolButton
                $active={['rectangle', 'circle', 'hexagon'].includes(selectedTool)}
                onClick={() => setShapePopoverOpen(!shapePopoverOpen)}
                title="Shapes"
              >
                <Square size={16} />
              </ToolButton>
              <PopoverContent $open={shapePopoverOpen}>
                <ShapeGrid>
                  {shapes.map((shape) => (
                    <ToolButton
                      key={shape.id}
                      $active={selectedTool === shape.id}
                      onClick={() => handleShapeSelect(shape.id)}
                      title={shape.label}
                    >
                      <shape.icon size={16} />
                    </ToolButton>
                  ))}
                </ShapeGrid>
              </PopoverContent>
            </PopoverContainer>

            {/* Arrows Popover */}
            <PopoverContainer>
              <ToolButton
                $active={['arrow-single', 'arrow-double', 'line'].includes(selectedTool)}
                onClick={() => setArrowPopoverOpen(!arrowPopoverOpen)}
                title="Arrows & Lines"
              >
                <ArrowRight size={16} />
              </ToolButton>
              <PopoverContent $open={arrowPopoverOpen}>
                <ArrowGrid>
                  {arrows.map((arrow) => (
                    <ToolButton
                      key={arrow.id}
                      $active={selectedTool === arrow.id}
                      onClick={() => handleArrowSelect(arrow.id)}
                      title={arrow.label}
                    >
                      <arrow.icon size={16} />
                    </ToolButton>
                  ))}
                </ArrowGrid>
              </PopoverContent>
            </PopoverContainer>

            {/* Clear Popover */}
            <PopoverContainer>
              <ToolButton
                onClick={() => setClearPopoverOpen(!clearPopoverOpen)}
                title="Clear Options"
              >
                <Eraser size={16} />
              </ToolButton>
              <PopoverContent $open={clearPopoverOpen}>
                <ClearGrid>
                  {clearOptions.map((clear) => (
                    <ToolButton
                      key={clear.id}
                      onClick={() => handleClearSelect(clear.id)}
                      title={clear.label}
                    >
                      <clear.icon size={16} />
                    </ToolButton>
                  ))}
                </ClearGrid>
              </PopoverContent>
            </PopoverContainer>
          </ToolbarSection>

          {position === 'center' && <Separator />}

          {/* Colors */}
          <ToolbarSection style={{ padding: position === 'center' ? '0 8px' : '8px 0' }}>
            <PopoverContainer>
              <ColorButton
                style={{ backgroundColor: selectedColor }}
                onClick={() => setColorPopoverOpen(!colorPopoverOpen)}
                title="Select Color"
              />
              <PopoverContent $open={colorPopoverOpen}>
                <ColorGrid>
                  {colorPalette.map((color) => (
                    <ColorButton
                      key={color}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorSelect(color)}
                    />
                  ))}
                </ColorGrid>
              </PopoverContent>
            </PopoverContainer>
          </ToolbarSection>

          {position === 'center' && <Separator />}

          {/* Actions */}
          <ActionSection>
            <ToolButton
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Resume" : "Pause"}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </ToolButton>
            <ToolButton
              title="Cancel"
            >
              <X size={16} />
            </ToolButton>
            <ToolButton
              $variant="destructive"
              title="Stop"
            >
              <Stop size={16} />
            </ToolButton>
          </ActionSection>
        </ToolbarSection>
      </ToolbarContent>
    </ToolbarContainer>
  );
}