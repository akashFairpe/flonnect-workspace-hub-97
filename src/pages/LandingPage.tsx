
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Users, Share2, MessageCircle, Heart, Trophy, Youtube, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/Header';

const LandingPage = () => {
  const [playingVideo, setPlayingVideo] = useState(false);

  const features = [
    {
      icon: Play,
      title: "One-Click Recording",
      description: "Start recording your screen instantly with just one click. No complex setup required.",
      color: "bg-blue-500"
    },
    {
      icon: Share2,
      title: "Instant Sharing",
      description: "Share your videos immediately with friends, family, or colleagues via link or social media.",
      color: "bg-green-500"
    },
    {
      icon: MessageCircle,
      title: "Interactive Comments",
      description: "Engage with your audience through timestamped comments and emoji reactions.",
      color: "bg-purple-500"
    },
    {
      icon: Trophy,
      title: "Professional Quality",
      description: "Record in HD quality with crystal clear audio for professional-looking videos.",
      color: "bg-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Flonnect made it so easy to create and share my tutorials. My audience loves the interactive features!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Perfect for creating product demos. The quality is amazing and sharing is super simple.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Teacher",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "My students love the interactive comments feature. It's made online learning so much more engaging!",
      rating: 5
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Users" },
    { number: "1M+", label: "Videos Created" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9/5", label: "User Rating" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                  🎉 New: AI-Powered Features Available
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Create & Share
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Amazing Videos</span>
                  <br />in Seconds
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                  Record your screen, add interactive elements, and share with the world. 
                  Perfect for creators, educators, and businesses who want to make an impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Play className="w-5 h-5 mr-2" />
                    Start Recording for Free
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    <Download className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    No credit card required
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Free forever plan
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    HD quality
                  </div>
                </div>
              </div>
              
              <div className="flex-1 relative">
                <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-gray-100 rounded px-3 py-1 text-sm text-gray-600">
                      flonnect.com/share/demo-video
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="/lovable-uploads/63eb8b8f-6c42-4629-b52c-75fbbc737c6a.png" 
                      alt="Video demo"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <Button 
                        size="lg" 
                        className="rounded-full w-16 h-16 bg-white text-blue-600 hover:bg-gray-100"
                        onClick={() => setPlayingVideo(!playingVideo)}
                      >
                        <Play className="w-8 h-8" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">234 viewers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-sm">128</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Create Amazing Videos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful features that make video creation simple, fun, and professional
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="text-center pb-2">
                    <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Loved by Creators Worldwide
              </h2>
              <p className="text-xl text-gray-600">
                See what our users are saying about Flonnect
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Creating?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of creators who are already making amazing videos with Flonnect. 
              Start your free account today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
