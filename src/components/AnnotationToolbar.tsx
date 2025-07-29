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
  Clock,
  Move,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Minimize2,
  Maximize2
} from 'lucide-react';

const ToolbarContainer = styled.div<{ $position: 'center' | 'left' | 'right' }>`
  position: fixed;
  z-index: 50;
  ${props => {
    if (props.$position === 'left') {
      return `
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
      `;
    }
    if (props.$position === 'right') {
      return `
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
      `;
    }
    return `
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
    `;
  }}
`;

const ToolbarContent = styled.div<{ $position: 'center' | 'left' | 'right' }>`
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(8px);
  border-radius: ${props => props.$position === 'center' ? '9999px' : '16px'};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(139, 92, 246, 0.4);
  padding: 8px 16px;
  ${props => props.$position !== 'center' ? 'max-width: 80px;' : ''}
  
  @media (prefers-color-scheme: light) {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border: 2px solid rgba(139, 92, 246, 0.3);
  }
`;

const ToolbarSection = styled.div<{ $position?: 'center' | 'left' | 'right' }>`
  display: flex;
  align-items: center;
  gap: 4px;
  ${props => props.$position !== 'center' ? 'flex-direction: column;' : ''}
`;

const RecordingTimer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 4px 8px;
  border-radius: 12px;
  border: 1px solid rgba(239, 68, 68, 0.2);
`;

const PositionControls = styled.div<{ $position: 'center' | 'left' | 'right' }>`
  display: flex;
  gap: 2px;
  ${props => props.$position !== 'center' ? 'flex-direction: column;' : ''}
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

const Separator = styled.div<{ $position?: 'center' | 'left' | 'right' }>`
  background: #e5e7eb;
  ${props => props.$position !== 'center' ? `
    height: 1px;
    width: 24px;
    margin: 8px 0;
  ` : `
    height: 24px;
    width: 1px;
    margin: 0 8px;
  `}
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
}

export function AnnotationToolbar({ onToolSelect, isRecording = false }: AnnotationToolbarProps) {
  const [selectedTool, setSelectedTool] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [colorPopoverOpen, setColorPopoverOpen] = useState(false);
  const [shapePopoverOpen, setShapePopoverOpen] = useState(false);
  const [arrowPopoverOpen, setArrowPopoverOpen] = useState(false);
  const [clearPopoverOpen, setClearPopoverOpen] = useState(false);
  const [positionPopoverOpen, setPositionPopoverOpen] = useState(false);
  const [position, setPosition] = useState<'center' | 'left' | 'right'>('center');
  const [recordingTime, setRecordingTime] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
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
        <ToolbarSection $position={position}>
          {/* Recording Timer */}
          {isRecording && (
            <>
              <RecordingTimer>
                <Clock size={12} />
                {formatTime(recordingTime)}
              </RecordingTimer>
              <Separator $position={position} />
            </>
          )}

          {/* Collapse/Expand Toggle */}
          <ToolButton
            $variant="ghost"
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? "Expand Toolbar" : "Collapse Toolbar"}
          >
            {isCollapsed ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </ToolButton>

          <Separator $position={position} />

          {/* Position Controls */}
          <PopoverContainer>
            <ToolButton
              onClick={() => setPositionPopoverOpen(!positionPopoverOpen)}
              title="Change Position"
            >
              <Move size={16} />
            </ToolButton>
            <PopoverContent $open={positionPopoverOpen}>
              <PositionControls $position="center">
                <ToolButton
                  $variant={position === 'left' ? "purple" : "ghost"}
                  onClick={() => {
                    setPosition('left');
                    setPositionPopoverOpen(false);
                  }}
                  title="Move to Left"
                >
                  <AlignLeft size={16} />
                </ToolButton>
                <ToolButton
                  $variant={position === 'center' ? "purple" : "ghost"}
                  onClick={() => {
                    setPosition('center');
                    setPositionPopoverOpen(false);
                  }}
                  title="Move to Center"
                >
                  <AlignCenter size={16} />
                </ToolButton>
                <ToolButton
                  $variant={position === 'right' ? "purple" : "ghost"}
                  onClick={() => {
                    setPosition('right');
                    setPositionPopoverOpen(false);
                  }}
                  title="Move to Right"
                >
                  <AlignRight size={16} />
                </ToolButton>
              </PositionControls>
            </PopoverContent>
          </PopoverContainer>

          <Separator $position={position} />

          {/* Recording Controls */}
          <ToolbarSection $position={position} style={{ paddingRight: position === 'center' ? '8px' : '0' }}>
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

          <Separator $position={position} />

          {/* Action Controls - Always visible */}
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

          {/* Expanded Content - Only show when not collapsed */}
          {!isCollapsed && (
            <>
              <Separator $position={position} />

              {/* Annotation Tools */}
              <ToolbarSection $position={position} style={{ padding: position === 'center' ? '0 8px' : '0' }}>
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

              <Separator $position={position} />

              {/* Drawing Tools */}
              <ToolbarSection $position={position} style={{ padding: position === 'center' ? '0 8px' : '0' }}>
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

              <Separator $position={position} />

              {/* Colors */}
              <ToolbarSection $position={position} style={{ padding: position === 'center' ? '0 8px' : '0' }}>
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
            </>
          )}
        </ToolbarSection>
      </ToolbarContent>
    </ToolbarContainer>
  );
}