
import { Button } from "@/components/ui/button";
import UseCaseCard from "@/components/UseCaseCard";
import { ArrowDown, Youtube } from "lucide-react";

const YoutubeScreenRecorder = () => {
  const useCases = [
    {
      title: "Recording High-Quality YouTube Videos (Tutorials, Reviews, & Demos)",
      description: "YouTubers can record tutorials, product reviews, and software demos with HD recording capabilities. Supports screen + webcam recording, making it perfect for how-to videos, educational content, and unboxing videos. Enables adding annotations, highlights, and AI-powered editing for polished content. Works great for tech tutorials, software walkthroughs, and explainer videos.",
      example: "A tech YouTuber records a detailed tutorial on video editing software, using screen recording to guide viewers through the features."
    },
    {
      title: "Recording YouTube Gaming Videos & Live Gameplay",
      description: "Gamers can capture gameplay footage in high resolution for YouTube content. Supports recording webcam overlay to show reactions while playing. Great for walkthroughs, game reviews, speedruns, and reaction videos. Can be used to record live-stream gameplay and later upload the highlights.",
      example: "A gaming YouTuber records a high-definition playthrough of a trending game, adding real-time commentary using webcam overlay."
    },
    {
      title: "Creating Reaction & Commentary Videos",
      description: "YouTubers can record their screen while watching videos, shows, or trailers. Enables adding facecam reactions to content using webcam recording. Can be used to create reaction videos, breakdowns, and commentary content. Perfect for reviewing viral videos, explaining memes, or analyzing pop culture trends.",
      example: "A movie critic YouTuber records a reaction video to a new movie trailer, pausing and commenting on different scenes while screen-sharing."
    },
    {
      title: "Recording Online Meetings & Interviews for YouTube Content",
      description: "Podcasters and interviewers can record online interviews with guests on Zoom, Google Meet, or Skype. Supports high-quality video and audio capture, ensuring professional-looking interviews. Great for YouTube talk shows, expert discussions, or industry Q&A sessions. AI-powered transcription helps create subtitles for accessibility and SEO.",
      example: "A YouTube podcast host records a virtual interview with an industry expert, later adding subtitles and trimming unnecessary parts before publishing."
    },
    {
      title: "Recording & Editing YouTube Shorts & Social Media Clips",
      description: "YouTubers can record short-form content optimized for YouTube Shorts. Ideal for quick tutorials, trending challenges, motivational clips, and bite-sized explanations. Supports AI-powered editing, making it easier to cut, trim, and enhance videos before posting. Can also be repurposed for Instagram Reels, TikTok, and Facebook videos.",
      example: "A fitness YouTuber records a \"60-second home workout challenge\", adding text overlays and trimming the clip for YouTube Shorts."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Youtube className="w-12 h-12 text-red-600" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              YouTube Screen Recorder
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create professional YouTube content with our advanced screen recording software. Perfect for tutorials, gaming videos, reactions, and more. Built for content creators who demand quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Creating Content
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              See Creator Features
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            5 Powerful Ways to Create YouTube Content
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From gaming to tutorials, discover how YouTubers are creating engaging content with professional screen recording tools.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={index}
                title={useCase.title}
                description={useCase.description}
                example={useCase.example}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your YouTube Channel?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful YouTubers who are creating high-quality content with our professional recording tools.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Start Recording for YouTube
          </Button>
        </div>
      </section>
    </div>
  );
};

export default YoutubeScreenRecorder;
