
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Type, Square, Circle, Pen, Move, Trash2 } from 'lucide-react';

interface EditableElement {
  id: string;
  type: 'text' | 'rectangle' | 'circle' | 'drawing';
  x: number;
  y: number;
  width?: number;
  height?: number;
  content?: string;
  style: {
    color: string;
    fontSize?: number;
    strokeWidth?: number;
    fill?: string;
  };
}

interface EditableSlideCanvasProps {
  slideUrl: string;
  onElementsChange: (elements: EditableElement[]) => void;
}

export function EditableSlideCanvas({ slideUrl, onElementsChange }: EditableSlideCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [elements, setElements] = useState<EditableElement[]>([]);
  const [activeTool, setActiveTool] = useState<'select' | 'text' | 'rectangle' | 'circle' | 'pen'>('select');
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState<{x: number, y: number}[]>([]);

  useEffect(() => {
    onElementsChange(elements);
  }, [elements, onElementsChange]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (activeTool === 'text') {
      const newElement: EditableElement = {
        id: Date.now().toString(),
        type: 'text',
        x,
        y,
        content: 'Click to edit',
        style: { color: '#000000', fontSize: 16 }
      };
      setElements([...elements, newElement]);
      setSelectedElement(newElement.id);
    } else if (activeTool === 'rectangle') {
      const newElement: EditableElement = {
        id: Date.now().toString(),
        type: 'rectangle',
        x,
        y,
        width: 100,
        height: 60,
        style: { color: '#000000', strokeWidth: 2, fill: 'transparent' }
      };
      setElements([...elements, newElement]);
    } else if (activeTool === 'circle') {
      const newElement: EditableElement = {
        id: Date.now().toString(),
        type: 'circle',
        x,
        y,
        width: 80,
        height: 80,
        style: { color: '#000000', strokeWidth: 2, fill: 'transparent' }
      };
      setElements([...elements, newElement]);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (activeTool === 'pen') {
      setIsDrawing(true);
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCurrentPath([{ x, y }]);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing && activeTool === 'pen') {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCurrentPath(prev => [...prev, { x, y }]);
    }
  };

  const handleMouseUp = () => {
    if (isDrawing && activeTool === 'pen' && currentPath.length > 0) {
      const newElement: EditableElement = {
        id: Date.now().toString(),
        type: 'drawing',
        x: Math.min(...currentPath.map(p => p.x)),
        y: Math.min(...currentPath.map(p => p.y)),
        content: JSON.stringify(currentPath),
        style: { color: '#000000', strokeWidth: 2 }
      };
      setElements([...elements, newElement]);
      setCurrentPath([]);
      setIsDrawing(false);
    }
  };

  const deleteSelectedElement = () => {
    if (selectedElement) {
      setElements(elements.filter(el => el.id !== selectedElement));
      setSelectedElement(null);
    }
  };

  const updateElementContent = (id: string, content: string) => {
    setElements(elements.map(el => 
      el.id === id ? { ...el, content } : el
    ));
  };

  // Render elements on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    elements.forEach(element => {
      ctx.strokeStyle = element.style.color;
      ctx.fillStyle = element.style.fill || 'transparent';
      ctx.lineWidth = element.style.strokeWidth || 2;

      if (element.type === 'text') {
        ctx.font = `${element.style.fontSize || 16}px Arial`;
        ctx.fillStyle = element.style.color;
        ctx.fillText(element.content || '', element.x, element.y);
      } else if (element.type === 'rectangle') {
        ctx.strokeRect(element.x, element.y, element.width || 0, element.height || 0);
        if (element.style.fill !== 'transparent') {
          ctx.fillRect(element.x, element.y, element.width || 0, element.height || 0);
        }
      } else if (element.type === 'circle') {
        ctx.beginPath();
        ctx.arc(element.x + (element.width || 0) / 2, element.y + (element.height || 0) / 2, (element.width || 0) / 2, 0, 2 * Math.PI);
        ctx.stroke();
        if (element.style.fill !== 'transparent') {
          ctx.fill();
        }
      } else if (element.type === 'drawing') {
        const path = JSON.parse(element.content || '[]');
        if (path.length > 1) {
          ctx.beginPath();
          ctx.moveTo(path[0].x, path[0].y);
          path.forEach((point: {x: number, y: number}) => {
            ctx.lineTo(point.x, point.y);
          });
          ctx.stroke();
        }
      }

      // Highlight selected element
      if (selectedElement === element.id) {
        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        if (element.type === 'text') {
          ctx.strokeRect(element.x - 5, element.y - 20, 100, 25);
        } else {
          ctx.strokeRect(element.x - 2, element.y - 2, (element.width || 0) + 4, (element.height || 0) + 4);
        }
        ctx.setLineDash([]);
      }
    });

    // Draw current path while drawing
    if (isDrawing && currentPath.length > 1) {
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(currentPath[0].x, currentPath[0].y);
      currentPath.forEach(point => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
    }
  }, [elements, selectedElement, currentPath, isDrawing]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Background slide image */}
      <img
        src={slideUrl}
        alt="Slide background"
        className="absolute inset-0 w-full h-full object-contain"
        draggable={false}
      />
      
      {/* Editable canvas overlay */}
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="absolute inset-0 w-full h-full cursor-crosshair"
        onClick={handleCanvasClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />

      {/* Editing toolbar */}
      <div className="absolute top-4 left-4 flex gap-2 bg-white rounded-lg shadow-lg p-2">
        <Button
          size="sm"
          variant={activeTool === 'select' ? 'default' : 'outline'}
          onClick={() => setActiveTool('select')}
        >
          <Move className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant={activeTool === 'text' ? 'default' : 'outline'}
          onClick={() => setActiveTool('text')}
        >
          <Type className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant={activeTool === 'rectangle' ? 'default' : 'outline'}
          onClick={() => setActiveTool('rectangle')}
        >
          <Square className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant={activeTool === 'circle' ? 'default' : 'outline'}
          onClick={() => setActiveTool('circle')}
        >
          <Circle className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant={activeTool === 'pen' ? 'default' : 'outline'}
          onClick={() => setActiveTool('pen')}
        >
          <Pen className="w-4 h-4" />
        </Button>
        {selectedElement && (
          <Button
            size="sm"
            variant="outline"
            onClick={deleteSelectedElement}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Text editing overlay */}
      {elements.map(element => 
        element.type === 'text' && selectedElement === element.id ? (
          <input
            key={element.id}
            type="text"
            value={element.content || ''}
            onChange={(e) => updateElementContent(element.id, e.target.value)}
            className="absolute bg-transparent border-none outline-none text-black"
            style={{
              left: element.x,
              top: element.y - 16,
              fontSize: element.style.fontSize || 16,
              color: element.style.color
            }}
            onBlur={() => setSelectedElement(null)}
            autoFocus
          />
        ) : null
      )}
    </div>
  );
}
