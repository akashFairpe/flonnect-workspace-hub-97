
import React, { useState, useRef } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2, Upload, Image as ImageIcon, Wand2, Download, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

export default function AIImageEditorPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [editPrompt, setEditPrompt] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target?.result as string);
          setEditedImage(null);
          toast.success('Image uploaded successfully!');
        };
        reader.readAsDataURL(file);
      } else {
        toast.error('Please upload a valid image file');
      }
    }
  };

  const handleEditImage = async () => {
    if (!selectedImage || !editPrompt.trim()) {
      toast.error('Please upload an image and enter an edit prompt');
      return;
    }

    setIsEditing(true);
    setProgress(0);
    
    try {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 10;
        });
      }, 400);

      await new Promise(resolve => setTimeout(resolve, 4000));
      
      // Simulate edited image (in real implementation, this would be the AI-edited result)
      setEditedImage(selectedImage);
      setProgress(100);
      toast.success('Image edited successfully!');
    } catch (error) {
      toast.error('Failed to edit image. Please try again.');
    } finally {
      setIsEditing(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  const resetEditor = () => {
    setSelectedImage(null);
    setEditedImage(null);
    setEditPrompt('');
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <ImageIcon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            AI Image <span className="text-purple-600">Editor</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your images with AI-powered editing. Upload, describe your changes, and watch magic happen.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload & Controls Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-6 h-6" />
                  Upload & Edit Controls
                </CardTitle>
                <CardDescription>
                  Upload your image and describe the edits you want to make
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Image Upload */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Image
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button 
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                    className="w-full h-32 border-dashed border-2 hover:border-purple-500"
                    disabled={isEditing}
                  >
                    <div className="text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        Click to upload image
                      </span>
                    </div>
                  </Button>
                  
                  {selectedImage && (
                    <div className="aspect-video rounded-lg overflow-hidden border">
                      <img 
                        src={selectedImage} 
                        alt="Uploaded" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Edit Prompt */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Edit Instructions
                  </label>
                  <Textarea
                    placeholder="Describe what you want to change... (e.g., 'Remove the background', 'Change the sky to sunset', 'Add more vibrant colors')"
                    value={editPrompt}
                    onChange={(e) => setEditPrompt(e.target.value)}
                    className="min-h-[120px] resize-none"
                    disabled={isEditing}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    onClick={handleEditImage}
                    disabled={isEditing || !selectedImage || !editPrompt.trim()}
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    {isEditing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Editing...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4 mr-2" />
                        Edit Image
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    onClick={resetEditor}
                    variant="outline"
                    disabled={isEditing}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>

                {/* Progress */}
                {(isEditing || progress > 0) && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Processing image...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Preview Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-6 h-6" />
                  Preview
                </CardTitle>
                <CardDescription>
                  {editedImage ? 'Your edited image is ready!' : 'Edited image will appear here'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {editedImage ? (
                  <div className="space-y-4">
                    <div className="aspect-video rounded-lg overflow-hidden border bg-gray-50">
                      <img 
                        src={editedImage} 
                        alt="Edited" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex gap-4">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Share
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <p className="text-lg font-medium">No edited image yet</p>
                      <p className="text-sm">Upload an image and add edit instructions to get started</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
