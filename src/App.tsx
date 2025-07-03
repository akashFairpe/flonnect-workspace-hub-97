import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoSharingPage from "./pages/VideoSharingPage";
import AIPage from "./pages/AIPage";
import AIImageEditorPage from "./pages/AIImageEditorPage";
import AIVideoEditorPage from "./pages/AIVideoEditorPage";
import AIThumbnailGeneratorPage from "./pages/AIThumbnailGeneratorPage";
import ResourcesPage from "./pages/ResourcesPage";
import HowToRecordPage from "./pages/HowToRecordPage";
import HowToSharePage from "./pages/HowToSharePage";
import ScreenRecordingPage from "./pages/ScreenRecordingPage";
import BugCapturePage from "./pages/BugCapturePage";
import TeamsMeetingRecordingPage from "./pages/TeamsMeetingRecordingPage";
import HowToRecordBugsPage from "./pages/HowToRecordBugsPage";
import GoogleMeetingRecorderPage from "./pages/GoogleMeetingRecorderPage";
import ZoomMeetingRecordingPage from "./pages/ZoomMeetingRecordingPage";
import MinutesOfMeetingPage from "./pages/MinutesOfMeetingPage";
import TranscriptionPage from "./pages/TranscriptionPage";
import ScreenCameraRecordingPage from "./pages/ScreenCameraRecordingPage";
import PresentationRecordingPage from "./pages/PresentationRecordingPage";
import VideoPresentationPage from "./pages/VideoPresentationPage";
import CameraRecordingPage from "./pages/CameraRecordingPage";
import AnnotationRecordingPage from "./pages/AnnotationRecordingPage";
import StepRecorderPage from "./pages/StepRecorderPage";
import HtmlInteractiveDemoRecordingPage from "./pages/HtmlInteractiveDemoRecordingPage";
import SystemAudioRecordingPage from "./pages/SystemAudioRecordingPage";
import MicRecordingPage from "./pages/MicRecordingPage";
import MovableCameraPage from "./pages/MovableCameraPage";
import OneClickSharePage from "./pages/OneClickSharePage";
import VideoCommentsPage from "./pages/VideoCommentsPage";
import YouTubeUploadPage from "./pages/YouTubeUploadPage";
import EmailVideoPage from "./pages/EmailVideoPage";
import ScreenshotBugReportingPage from "./pages/ScreenshotBugReportingPage";
import VideoBugRecordingPage from "./pages/VideoBugRecordingPage";
import PushToJiraPage from "./pages/PushToJiraPage";
import BitbucketGitHubPRPage from "./pages/BitbucketGitHubPRPage";
import LandingPage from "./pages/LandingPage";
import ScreenRecorderLandingPage from "./pages/ScreenRecorderLandingPage";
import PresentationRecorderLandingPage from "./pages/PresentationRecorderLandingPage";
import VideoPresentationMakerPage from "./pages/VideoPresentationMakerPage";
import VideoGeneratorPage from "./pages/VideoGeneratorPage";
import InteractiveDemoCapturePage from "./pages/InteractiveDemoCapturePage";
import BugReportingPage from "./pages/BugReportingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/screenrecorder" element={<ScreenRecorderLandingPage />} />
          <Route path="/presentation-recorder" element={<PresentationRecorderLandingPage />} />
          <Route path="/video-presentation-maker" element={<VideoPresentationMakerPage />} />
          <Route path="/video-generator" element={<VideoGeneratorPage />} />
          <Route path="/interactive-demo-capture" element={<InteractiveDemoCapturePage />} />
          <Route path="/bug-reporting" element={<BugReportingPage />} />
          <Route path="/video/share/:id?" element={<VideoSharingPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/ai/image-editor" element={<AIImageEditorPage />} />
          <Route path="/ai/video-editor" element={<AIVideoEditorPage />} />
          <Route path="/ai/thumbnail" element={<AIThumbnailGeneratorPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/downloads" element={<ResourcesPage />} />
          <Route path="/tutorials/how-to-record" element={<HowToRecordPage />} />
          <Route path="/tutorials/how-to-share" element={<HowToSharePage />} />
          
          {/* Meeting Recording & Collaboration */}
          <Route path="/features/google-meeting-recorder" element={<GoogleMeetingRecorderPage />} />
          <Route path="/features/teams-meeting-recording" element={<TeamsMeetingRecordingPage />} />
          <Route path="/features/zoom-meeting-recording" element={<ZoomMeetingRecordingPage />} />
          
          {/* Content Generation & Documentation */}
          <Route path="/features/minutes-of-meeting" element={<MinutesOfMeetingPage />} />
          <Route path="/features/transcription" element={<TranscriptionPage />} />
          
          {/* Screen & Camera Recording */}
          <Route path="/features/screen-recording" element={<ScreenRecordingPage />} />
          <Route path="/features/screen-camera-recording" element={<ScreenCameraRecordingPage />} />
          <Route path="/features/presentation-recording" element={<PresentationRecordingPage />} />
          <Route path="/features/video-presentation" element={<VideoPresentationPage />} />
          <Route path="/features/camera-recording" element={<CameraRecordingPage />} />
          
          {/* Specialized Recording & Enhancement */}
          <Route path="/features/annotation-recording" element={<AnnotationRecordingPage />} />
          <Route path="/features/step-recorder" element={<StepRecorderPage />} />
          <Route path="/features/html-demo-recording" element={<HtmlInteractiveDemoRecordingPage />} />
          <Route path="/features/system-audio-recording" element={<SystemAudioRecordingPage />} />
          <Route path="/features/mic-recording" element={<MicRecordingPage />} />
          <Route path="/features/movable-camera" element={<MovableCameraPage />} />
          
          {/* Sharing & Integration */}
          <Route path="/features/one-click-share" element={<OneClickSharePage />} />
          <Route path="/features/video-comments" element={<VideoCommentsPage />} />
          <Route path="/features/youtube-upload" element={<YouTubeUploadPage />} />
          <Route path="/features/email-video" element={<EmailVideoPage />} />
          
          {/* Bug Reporting & Development Workflow */}
          <Route path="/features/screenshot-bug-reporting" element={<ScreenshotBugReportingPage />} />
          <Route path="/features/video-bug-recording" element={<VideoBugRecordingPage />} />
          <Route path="/features/push-to-jira" element={<PushToJiraPage />} />
          <Route path="/features/bug-capture" element={<BugCapturePage />} />
          <Route path="/features/bitbucket-github-pr" element={<BitbucketGitHubPRPage />} />
          
          <Route path="/resources/how-to-record-bugs" element={<HowToRecordBugsPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
