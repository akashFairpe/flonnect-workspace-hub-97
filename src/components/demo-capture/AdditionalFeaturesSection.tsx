
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Globe, 
  BarChart3, 
  Share2, 
  MousePointer, 
  Monitor, 
  Mic, 
  Brain, 
  Palette 
} from 'lucide-react';

const additionalFeatures = [
  { icon: FileText, title: "Screenshot & Interactive HTML Demo Guide", description: "Support for both static screenshots and interactive HTML demos" },
  { icon: Globe, title: "Easy Embedding", description: "Seamlessly embed demos into your website or platform" },
  { icon: BarChart3, title: "Basic Analytics", description: "Track basic engagement with your step-by-step guides" },
  { icon: Share2, title: "Demo Hub Creation", description: "Create centralized demo hubs and share with ease" },
  { icon: MousePointer, title: "Advanced Editing Tools", description: "Easy edit steps with annotation, blur, and other features" },
  { icon: Monitor, title: "Multi-Platform Support", description: "Available with extension and desktop. HTML demos via extension only" },
  { icon: Mic, title: "Voiceover Options", description: "Add professional voiceovers to enhance your demos" },
  { icon: Brain, title: "AI Title Generation", description: "Automatically generate compelling titles for your demos" },
  { icon: Palette, title: "Brand Customization", description: "Customize colors to closely mimic your target website branding" },
  { icon: Brain, title: "AI Step Descriptions", description: "Generate intelligent descriptions for each demo step automatically" }
];

export function AdditionalFeaturesSection() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Complete Feature Set for Professional Demos
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Advanced tools and capabilities to create world-class interactive demos
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {additionalFeatures.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm group">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
                <CardTitle className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">{feature.title}</CardTitle>
              </div>
              <CardDescription className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
