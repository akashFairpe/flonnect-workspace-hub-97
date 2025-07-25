import React, { useState } from 'react';
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
  Hexagon
} from 'lucide-react';

const ToolbarContainer = styled.div`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
`;

const ToolbarContent = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 9999px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(229, 231, 235, 1);
  padding: 8px 16px;
`;

const ToolbarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ToolButton = styled.button<{ $active?: boolean; $variant?: 'default' | 'outline' | 'ghost' | 'destructive' }>`
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
  
  ${props => {
    if (props.$variant === 'destructive') {
      return `
        background: #ef4444;
        color: white;
        &:hover {
          background: #dc2626;
        }
      `;
    }
    if (props.$active || props.$variant === 'default') {
      return `
        background: #000000;
        color: white;
        &:hover {
          background: #374151;
        }
      `;
    }
    return `
      background: transparent;
      color: #374151;
      &:hover {
        background: #f3f4f6;
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
    <ToolbarContainer>
      <ToolbarContent>
        <ToolbarSection>
          {/* Recording Controls */}
          <ToolbarSection style={{ paddingRight: '8px' }}>
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

          <Separator />

          {/* Annotation Tools */}
          <ToolbarSection style={{ padding: '0 8px' }}>
            {tools.map((tool) => (
              <ToolButton
                key={tool.id}
                $active={selectedTool === tool.id}
                onClick={() => handleToolSelect(tool.id)}
                title={tool.label}
              >
                <tool.icon size={16} />
              </ToolButton>
            ))}

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

          <Separator />

          {/* Colors */}
          <ToolbarSection style={{ padding: '0 8px' }}>
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

          <Separator />

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