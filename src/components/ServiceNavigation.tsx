
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Users, Palette } from 'lucide-react';

const serviceItems = [
  {
    title: 'Screen and Webcam Recorder',
    description: 'Record screen and webcam simultaneously',
    icon: Video,
    href: '/screen-webcam-recorder'
  },
  {
    title: 'Meeting Recorder',
    description: 'Record meetings and conferences',
    icon: Users,
    href: '/meeting-recorder'
  },
  {
    title: 'Video Creation',
    description: 'Create professional videos easily',
    icon: Palette,
    href: '/video-creation'
  }
];

export function ServiceNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-medium">
            Service
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-screen max-w-md">
            <div className="p-4">
              <div className="space-y-2">
                {serviceItems.map((item) => (
                  <Card 
                    key={item.title}
                    className="cursor-pointer hover:shadow-md transition-all duration-200 hover:bg-gray-50 border-gray-200"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-secondary/10 text-secondary-foreground">
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
