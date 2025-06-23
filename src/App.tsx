
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIPage from "./pages/AIPage";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AIPage />} />
          <Route path="/ai" element={<AIPage />} />
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
          
          {/* Bug Reporting & Development Workflow */}
          <Route path="/features/bug-capture" element={<BugCapturePage />} />
          
          <Route path="/resources/how-to-record-bugs" element={<HowToRecordBugsPage />} />
          <Route path="*" element={<AIPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
