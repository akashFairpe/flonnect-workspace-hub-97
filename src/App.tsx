
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';

// Landing and Main Pages
import LandingPage from '@/pages/LandingPage';
import ForEnterprisePage from '@/pages/ForEnterprisePage';
import InteractiveDemoCapturePage from '@/pages/InteractiveDemoCapturePage';
import BugCapturePage from '@/pages/BugCapturePage';
import VideoWorkspace from '@/components/VideoWorkspace';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';

// Feature Pages
import ScreenRecordingPage from '@/pages/ScreenRecordingPage';
import CameraRecordingPage from '@/pages/CameraRecordingPage';
import MicRecordingPage from '@/pages/MicRecordingPage';
import MovableCameraPage from '@/pages/MovableCameraPage';
import StepRecorderPage from '@/pages/StepRecorderPage';
import ScreenshotBugReportingPage from '@/pages/ScreenshotBugReportingPage';

// Enterprise Extension
import EnterpriseExtensionPopupPage from '@/pages/EnterpriseExtensionPopupPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/for-enterprise" element={<ForEnterprisePage />} />
            <Route path="/interactive-demo-capture" element={<InteractiveDemoCapturePage />} />
            <Route path="/bug-capture" element={<BugCapturePage />} />
            <Route path="/workspace" element={<VideoWorkspace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

            {/* Feature Routes */}
            <Route path="/screenrecorder" element={<ScreenRecordingPage />} />
            <Route path="/camera-recording" element={<CameraRecordingPage />} />
            <Route path="/mic-recording" element={<MicRecordingPage />} />
            <Route path="/movable-camera" element={<MovableCameraPage />} />
            <Route path="/step-recorder" element={<StepRecorderPage />} />
            <Route path="/screenshot-bug-reporting" element={<ScreenshotBugReportingPage />} />

            {/* Enterprise Extension Flow */}
            <Route path="/flow/enterprise-extension" element={<EnterpriseExtensionPopupPage />} />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
