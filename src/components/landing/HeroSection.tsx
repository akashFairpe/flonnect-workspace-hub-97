

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, Sparkles, Video, Users, BarChart3, Chrome, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/interactive-demo-capture');
  };

  const handleWatchDemo = () => {
    // You can implement demo video functionality here
    console.log('Watch demo clicked');
  };

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-16 pb-12 sm:pb-20" role="banner">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-80"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-6xl mx-auto">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Now supercharged with Flonnect AI — automate minutes of meetings, generate videos & images with AI, and more.
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Create Amazing Demo Videos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 block mt-2">
              That Actually Convert
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Record, edit, and share professional demo videos with AI-powered features. 
            Transform your product demonstrations into engaging experiences that drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Video className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Start Creating Free
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
            </Button>
            <Button 
              onClick={handleWatchDemo}
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 hover:bg-gray-50 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Two Extensions for All Your Needs Section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Two Extensions for All Your Needs</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Chrome className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Chrome Extension</h4>
                <p className="text-gray-600 text-sm mb-4">Record directly from your browser with one-click access to all features</p>
                <Button 
                  onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                >
                  <Chrome className="w-4 h-4 mr-2" />
                  Get Extension
                </Button>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Desktop App</h4>
                <p className="text-gray-600 text-sm mb-4">Full-featured desktop application for Mac and Windows users</p>
                <Button 
                  onClick={() => window.open('#desktop-download', '_blank')}
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">50K+</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600">Active Users</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Video className="w-6 h-6 text-purple-600" />
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">1M+</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600">Videos Created</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-2">
                <BarChart3 className="w-6 h-6 text-pink-600" />
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">40%</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600">Higher Conversion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

