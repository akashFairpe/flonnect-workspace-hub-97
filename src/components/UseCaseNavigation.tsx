
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  GraduationCap, 
  Building2, 
  Users, 
  Code, 
  Gamepad2, 
  User, 
  Scale, 
  Heart, 
  DollarSign, 
  Microscope, 
  Factory, 
  Home, 
  Car, 
  ChevronRight 
} from 'lucide-react';

const useCaseCategories = [
  {
    id: 'education',
    title: 'Education & Learning',
    icon: GraduationCap,
    description: 'Tools for educators, students, and learning professionals',
    color: 'from-blue-500 to-indigo-600',
    useCases: [
      { title: 'Screen Recorder for Teachers', path: '/screen-recorder-for-teachers' },
      { title: 'Screen Recorder for Students', path: '/screen-recorder-for-students' },
      { title: 'Online Lecture Recorder', path: '/online-lecture-recorder' },
      { title: 'Tutors', path: '/tutors' },
      { title: 'Education Administrators', path: '/education-administrators' }
    ]
  },
  {
    id: 'business',
    title: 'Business & Corporate',
    icon: Building2,
    description: 'Solutions for businesses, teams, and corporate environments',
    color: 'from-purple-500 to-pink-600',
    useCases: [
      { title: 'Screen Recorder for Business', path: '/screen-recorder-for-business' },
      { title: 'Screen Recorder for HR', path: '/screen-recorder-for-hr' },
      { title: 'Sales Call Recording Software', path: '/sales-call-recording-software' },
      { title: 'Call Center Recording Software', path: '/call-center-recording-software' },
      { title: 'Screen Recorder for Project Managers', path: '/screen-recorder-for-project-managers' }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing & Content',
    icon: Users,
    description: 'Tools for marketers, content creators, and social media professionals',
    color: 'from-green-500 to-teal-600',
    useCases: [
      { title: 'YouTube Screen Recorder', path: '/youtube-screen-recorder' },
      { title: 'Podcast Recording Software', path: '/podcast-recording-software' },
      { title: 'Screen Recorder for Social Media', path: '/screen-recorder-for-social-media' },
      { title: 'Screen Recorder for Marketing', path: '/screen-recorder-for-marketing' },
      { title: 'Screen Recorder for Affiliate Marketing', path: '/screen-recorder-for-affiliate-marketing' }
    ]
  },
  {
    id: 'freelance',
    title: 'Freelance & Creative',
    icon: User,
    description: 'Solutions for freelancers, designers, and creative professionals',
    color: 'from-orange-500 to-red-600',
    useCases: [
      { title: 'Screen Recorder for Freelance Designers', path: '/screen-recorder-for-freelance-designers' },
      { title: 'Freelance Writers and Copywriters', path: '/freelance-writers-and-copywriters' },
      { title: 'Consultants and Coaches', path: '/consultants-and-coaches' },
      { title: 'Virtual Assistants', path: '/virtual-assistants' },
      { title: 'Musicians', path: '/musicians' },
      { title: 'Dancers Performers', path: '/dancers-performers' },
      { title: 'Photographers Videographers', path: '/photographers-videographers' }
    ]
  },
  {
    id: 'technology',
    title: 'Technology & Development',
    icon: Code,
    description: 'Tools for developers, tech teams, and IT professionals',
    color: 'from-blue-500 to-cyan-600',
    useCases: [
      { title: 'Software Developers', path: '/software-developers' },
      { title: 'Product Managers', path: '/product-managers' },
      { title: 'UX/UI Designers', path: '/ux-ui-designers' },
      { title: 'QA Testers', path: '/qa-testers' },
      { title: 'IT Support Teams', path: '/it-support-teams' }
    ]
  },
  {
    id: 'gaming',
    title: 'Gaming & Entertainment',
    icon: Gamepad2,
    description: 'Solutions for gamers, streamers, and entertainment professionals',
    color: 'from-indigo-500 to-purple-600',
    useCases: [
      { title: 'Gamers and Streamers', path: '/gamers-and-streamers' },
      { title: 'Esports Coaches', path: '/esports-coaches' },
      { title: 'Gaming Content Creators', path: '/gaming-content-creators' }
    ]
  },
  {
    id: 'legal',
    title: 'Legal & Compliance',
    icon: Scale,
    description: 'Tools for legal professionals, compliance officers, and law enforcement',
    color: 'from-slate-500 to-gray-600',
    useCases: [
      { title: 'Legal Professionals', path: '/legal-professionals' },
      { title: 'Corporate Lawyers Compliance Officers', path: '/corporate-lawyers-compliance-officers' },
      { title: 'Mediators Arbitrators', path: '/mediators-arbitrators' },
      { title: 'Law Enforcement Security Teams', path: '/law-enforcement-security-teams' }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Wellness',
    icon: Heart,
    description: 'Solutions for healthcare professionals and wellness experts',
    color: 'from-pink-500 to-rose-600',
    useCases: [
      { title: 'Medical Professionals', path: '/medical-professionals' },
      { title: 'Therapists Counselors', path: '/therapists-counselors' },
      { title: 'Fitness Trainers Yoga Instructors', path: '/fitness-trainers-yoga-instructors' },
      { title: 'Dietitians Nutritionists', path: '/dietitians-nutritionists' }
    ]
  },
  {
    id: 'finance',
    title: 'Finance & Investment',
    icon: DollarSign,
    description: 'Tools for financial professionals, advisors, and analysts',
    color: 'from-emerald-500 to-green-600',
    useCases: [
      { title: 'Financial Advisors', path: '/financial-advisors' },
      { title: 'Stock Traders Analysts', path: '/stock-traders-analysts' },
      { title: 'Tax Consultants Accountants', path: '/tax-consultants-accountants' }
    ]
  },
  {
    id: 'research',
    title: 'Research & Science',
    icon: Microscope,
    description: 'Solutions for researchers, scientists, and academic professionals',
    color: 'from-teal-500 to-cyan-600',
    useCases: [
      { title: 'Personal Journalers', path: '/personal-journalers' },
      { title: 'Researchers', path: '/researchers' },
      { title: 'Scientists Researchers', path: '/scientists-researchers' }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industry',
    icon: Factory,
    description: 'Tools for manufacturing, engineering, and industrial professionals',
    color: 'from-amber-500 to-orange-600',
    useCases: [
      { title: 'Engineers Architects', path: '/engineers-architects' },
      { title: 'Factory Managers Workers', path: '/factory-managers-workers' },
      { title: 'Supply Chain Logistics Teams', path: '/supply-chain-logistics-teams' }
    ]
  },
  {
    id: 'realestate',
    title: 'Real Estate & Property',
    icon: Home,
    description: 'Solutions for real estate professionals and property managers',
    color: 'from-lime-500 to-green-600',
    useCases: [
      { title: 'Real Estate Agents', path: '/real-estate-agents' },
      { title: 'Property Managers', path: '/property-managers' }
    ]
  },
  {
    id: 'automotive',
    title: 'Automotive & Transportation',
    icon: Car,
    description: 'Tools for automotive professionals and transportation workers',
    color: 'from-red-500 to-pink-600',
    useCases: [
      { title: 'Car Mechanics Repair Shops', path: '/car-mechanics-repair-shops' },
      { title: 'Truck Drivers Delivery Personnel', path: '/truck-drivers-delivery-personnel' }
    ]
  },
  {
    id: 'community',
    title: 'Community & Public Service',
    icon: Users,
    description: 'Solutions for community leaders, public servants, and social organizations',
    color: 'from-violet-500 to-purple-600',
    useCases: [
      { title: 'Religious Spiritual Leaders', path: '/religious-spiritual-leaders' },
      { title: 'Event Organizers', path: '/event-organizers' },
      { title: 'Nonprofits Activists', path: '/nonprofits-activists' },
      { title: 'Government Officials Public Speakers', path: '/government-officials-public-speakers' }
    ]
  }
];

export function UseCaseNavigation() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/use-cases/${categoryId}`);
  };

  if (isMobile) {
    return (
      <div className="relative">
        <Button variant="ghost" className="text-base font-medium">
          Use Cases
        </Button>
        {/* Mobile dropdown would need a separate implementation */}
      </div>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-medium">
            Use Cases
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-screen max-w-6xl">
            <div className="mx-auto max-w-7xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {useCaseCategories.map((category) => (
                  <Card 
                    key={category.id} 
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 group border-gray-200 hover:border-primary/20"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white transition-transform group-hover:scale-110`}>
                          <category.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-sm font-semibold group-hover:text-primary transition-colors truncate">
                            {category.title}
                          </CardTitle>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-xs line-clamp-2">
                        {category.description}
                      </CardDescription>
                      <p className="text-xs text-gray-500 mt-2">
                        {category.useCases.length} use cases
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

export { useCaseCategories };
