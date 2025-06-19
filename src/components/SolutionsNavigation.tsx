
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Camera, FileText, Bug } from 'lucide-react';

const solutionsItems = [
  {
    title: 'Screen Recorder',
    description: 'Record your screen with high quality',
    icon: Monitor,
    href: '/screen-recorder'
  },
  {
    title: 'Interactive Demo capture',
    description: 'Create interactive product demos',
    icon: Camera,
    href: '/interactive-demo'
  },
  {
    title: 'Testimonials',
    description: 'Collect and showcase testimonials',
    icon: FileText,
    href: '/testimonials'
  },
  {
    title: 'Presentation Recorder',
    description: 'Record presentations seamlessly',
    icon: FileText,
    href: '/presentation-recorder'
  },
  {
    title: 'Bug Reporting',
    description: 'Report bugs with visual context',
    icon: Bug,
    href: '/bug-reporting'
  }
];

export function SolutionsNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-medium">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-screen max-w-md">
            <div className="p-4">
              <div className="space-y-2">
                {solutionsItems.map((item) => (
                  <Card 
                    key={item.title}
                    className="cursor-pointer hover:shadow-md transition-all duration-200 hover:bg-gray-50 border-gray-200"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <CardTitle className="text-sm font-medium">
                            {item.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-3">
                      <p className="text-xs text-gray-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
