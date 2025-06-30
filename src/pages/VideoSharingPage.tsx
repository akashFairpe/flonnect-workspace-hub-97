
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Play, Share2, MessageCircle, FileText, Heart, ThumbsUp, 
  Download, Copy, Send, Clock, Users, Eye, Bookmark,
  ChevronDown, ChevronUp, Settings, Volume2, Maximize
} from 'lucide-react';
import VideoPlayer from '@/components/VideoPlayer';
import { Header } from '@/components/Header';

interface Comment {
  id: string;
  user: string;
  avatar: string;
  content: string;
  timestamp: string;
  videoTime?: number;
  likes: number;
  replies: Comment[];
}

interface TranscriptSegment {
  id: string;
  startTime: number;
  endTime: number;
  text: string;
  speaker?: string;
}

const VideoSharingPage = () => {
  const [activeTab, setActiveTab] = useState('comments');
  const [newComment, setNewComment] = useState('');
  const [showTranscript, setShowTranscript] = useState(false);
  const [likes, setLikes] = useState(247);
  const [views, setViews] = useState(1532);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const comments: Comment[] = [
    {
      id: '1',
      user: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      content: 'Great explanation! This really helped me understand the concept.',
      timestamp: '2 hours ago',
      videoTime: 145,
      likes: 12,
      replies: [
        {
          id: '1-1',
          user: 'Mike Chen',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
          content: 'I agree! The visual examples were perfect.',
          timestamp: '1 hour ago',
          likes: 3,
          replies: []
        }
      ]
    },
    {
      id: '2',
      user: 'Alex Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      content: 'Could you elaborate more on the part at 3:20? I\'m still a bit confused.',
      timestamp: '4 hours ago',
      videoTime: 200,
      likes: 8,
      replies: []
    }
  ];

  const transcript: TranscriptSegment[] = [
    {
      id: '1',
      startTime: 0,
      endTime: 15,
      text: 'Welcome to today\'s tutorial on video sharing and collaboration.',
      speaker: 'Instructor'
    },
    {
      id: '2',
      startTime: 15,
      endTime: 35,
      text: 'In this session, we\'ll explore how modern video platforms enable real-time collaboration.',
      speaker: 'Instructor'
    },
    {
      id: '3',
      startTime: 35,
      endTime: 55,
      text: 'First, let\'s look at the key features that make video sharing effective for teams.',
      speaker: 'Instructor'
    }
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    // Could add toast notification here
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      // Add comment logic here
      setNewComment('');
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Video Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <VideoPlayer 
                  videoUrl="/api/placeholder/800/450"
                  title="Complete Guide to Video Collaboration"
                />
              </div>

              {/* Video Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Complete Guide to Video Collaboration and Sharing
                      </h1>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {views.toLocaleString()} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Uploaded 2 days ago
                        </div>
                        <Badge variant="secondary">Tutorial</Badge>
                        <Badge variant="secondary">Collaboration</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-4">
                        <Button
                          variant={isLiked ? "default" : "outline"}
                          size="sm"
                          onClick={handleLike}
                          className="flex items-center gap-2"
                        >
                          <ThumbsUp className="w-4 h-4" />
                          {likes}
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleShare}>
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setIsBookmarked(!isBookmarked)}>
                          <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                          Save
                        </Button>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-gray-700 leading-relaxed">
                        Learn how to effectively share and collaborate on videos using modern tools. 
                        This comprehensive guide covers best practices for team collaboration, 
                        real-time commenting, and professional video sharing workflows.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transcript Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Transcript
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowTranscript(!showTranscript)}
                    >
                      {showTranscript ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                  </div>
                </CardHeader>
                {showTranscript && (
                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {transcript.map((segment) => (
                        <div key={segment.id} className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <span className="text-sm font-mono text-blue-600 min-w-[60px]">
                            {formatTime(segment.startTime)}
                          </span>
                          <div className="flex-1">
                            {segment.speaker && (
                              <span className="text-sm font-medium text-gray-900 mr-2">
                                {segment.speaker}:
                              </span>
                            )}
                            <span className="text-sm text-gray-700">{segment.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Engagement Stats */}
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{views.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{likes}</div>
                      <div className="text-sm text-gray-600">Likes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments and Engagement */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Comments ({comments.length})
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {/* Add Comment */}
                  <div className="space-y-3 mb-6">
                    <Textarea
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="min-h-[80px]"
                    />
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm">
                        <Clock className="w-4 h-4 mr-2" />
                        Add timestamp
                      </Button>
                      <Button onClick={handleCommentSubmit} size="sm">
                        <Send className="w-4 h-4 mr-2" />
                        Comment
                      </Button>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {comments.map((comment) => (
                      <div key={comment.id} className="space-y-2">
                        <div className="flex gap-3">
                          <img
                            src={comment.avatar}
                            alt={comment.user}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">{comment.user}</span>
                              {comment.videoTime && (
                                <Badge variant="outline" className="text-xs">
                                  {formatTime(comment.videoTime)}
                                </Badge>
                              )}
                              <span className="text-xs text-gray-500">{comment.timestamp}</span>
                            </div>
                            <p className="text-sm text-gray-700">{comment.content}</p>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                                <Heart className="w-3 h-3 mr-1" />
                                {comment.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Replies */}
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="ml-11 flex gap-3">
                            <img
                              src={reply.avatar}
                              alt={reply.user}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-sm">{reply.user}</span>
                                <span className="text-xs text-gray-500">{reply.timestamp}</span>
                              </div>
                              <p className="text-sm text-gray-700">{reply.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSharingPage;
